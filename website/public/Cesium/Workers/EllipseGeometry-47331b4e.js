define([
  'exports',
  './GeometryOffsetAttribute-1772960d',
  './Transforms-d13cc04e',
  './Matrix2-9aa31791',
  './RuntimeError-346a3079',
  './ComponentDatatype-93750d1a',
  './when-4bbc8319',
  './EllipseGeometryLibrary-962723df',
  './GeometryAttribute-43536dc0',
  './GeometryAttributes-7827a6c2',
  './GeometryInstance-47b34185',
  './GeometryPipeline-2356afec',
  './IndexDatatype-b7d979a6',
  './VertexFormat-71718faa'
], function (t, e, r, a, i, n, o, s, l, u, m, p, y, c) {
  'use strict'
  var d = new a.Cartesian3(),
    f = new a.Cartesian3(),
    A = new a.Cartesian3(),
    x = new a.Cartesian3(),
    h = new a.Cartesian2(),
    g = new a.Matrix3(),
    _ = new a.Matrix3(),
    b = new r.Quaternion(),
    v = new a.Cartesian3(),
    C = new a.Cartesian3(),
    w = new a.Cartesian3(),
    E = new a.Cartographic(),
    M = new a.Cartesian3(),
    I = new a.Cartesian2(),
    T = new a.Cartesian2()
  function G(t, i, m) {
    var p = i.vertexFormat,
      y = i.center,
      c = i.semiMajorAxis,
      x = i.semiMinorAxis,
      G = i.ellipsoid,
      N = i.stRotation,
      P = m ? (t.length / 3) * 2 : t.length / 3,
      F = i.shadowVolume,
      V = p.st ? new Float32Array(2 * P) : void 0,
      D = p.normal ? new Float32Array(3 * P) : void 0,
      O = p.tangent ? new Float32Array(3 * P) : void 0,
      S = p.bitangent ? new Float32Array(3 * P) : void 0,
      L = F ? new Float32Array(3 * P) : void 0,
      R = 0,
      j = v,
      z = C,
      k = w,
      B = new r.GeographicProjection(G),
      Y = B.project(G.cartesianToCartographic(y, E), M),
      H = G.scaleToGeodeticSurface(y, d)
    G.geodeticSurfaceNormal(H, H)
    var U = g,
      Q = _
    if (0 !== N) {
      var W = r.Quaternion.fromAxisAngle(H, N, b)
      ;(U = a.Matrix3.fromQuaternion(W, U)), (W = r.Quaternion.fromAxisAngle(H, -N, b)), (Q = a.Matrix3.fromQuaternion(W, Q))
    } else (U = a.Matrix3.clone(a.Matrix3.IDENTITY, U)), (Q = a.Matrix3.clone(a.Matrix3.IDENTITY, Q))
    for (
      var J = a.Cartesian2.fromElements(Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY, I),
        q = a.Cartesian2.fromElements(Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY, T),
        Z = t.length,
        K = m ? Z : 0,
        X = (K / 3) * 2,
        $ = 0;
      $ < Z;
      $ += 3
    ) {
      var tt = $ + 1,
        et = $ + 2,
        rt = a.Cartesian3.fromArray(t, $, d)
      if (p.st) {
        var at = a.Matrix3.multiplyByVector(U, rt, f),
          it = B.project(G.cartesianToCartographic(at, E), A)
        a.Cartesian3.subtract(it, Y, it),
          (h.x = (it.x + c) / (2 * c)),
          (h.y = (it.y + x) / (2 * x)),
          (J.x = Math.min(h.x, J.x)),
          (J.y = Math.min(h.y, J.y)),
          (q.x = Math.max(h.x, q.x)),
          (q.y = Math.max(h.y, q.y)),
          m && ((V[R + X] = h.x), (V[R + 1 + X] = h.y)),
          (V[R++] = h.x),
          (V[R++] = h.y)
      }
      ;(p.normal || p.tangent || p.bitangent || F) &&
        ((j = G.geodeticSurfaceNormal(rt, j)),
        F && ((L[$ + K] = -j.x), (L[tt + K] = -j.y), (L[et + K] = -j.z)),
        (p.normal || p.tangent || p.bitangent) &&
          ((p.tangent || p.bitangent) &&
            ((z = a.Cartesian3.normalize(a.Cartesian3.cross(a.Cartesian3.UNIT_Z, j, z), z)), a.Matrix3.multiplyByVector(Q, z, z)),
          p.normal && ((D[$] = j.x), (D[tt] = j.y), (D[et] = j.z), m && ((D[$ + K] = -j.x), (D[tt + K] = -j.y), (D[et + K] = -j.z))),
          p.tangent && ((O[$] = z.x), (O[tt] = z.y), (O[et] = z.z), m && ((O[$ + K] = -z.x), (O[tt + K] = -z.y), (O[et + K] = -z.z))),
          p.bitangent &&
            ((k = a.Cartesian3.normalize(a.Cartesian3.cross(j, z, k), k)),
            (S[$] = k.x),
            (S[tt] = k.y),
            (S[et] = k.z),
            m && ((S[$ + K] = k.x), (S[tt + K] = k.y), (S[et + K] = k.z)))))
    }
    if (p.st) {
      Z = V.length
      for (var nt = 0; nt < Z; nt += 2) (V[nt] = (V[nt] - J.x) / (q.x - J.x)), (V[nt + 1] = (V[nt + 1] - J.y) / (q.y - J.y))
    }
    var ot = new u.GeometryAttributes()
    if (p.position) {
      var st = s.EllipseGeometryLibrary.raisePositionsToHeight(t, i, m)
      ot.position = new l.GeometryAttribute({ componentDatatype: n.ComponentDatatype.DOUBLE, componentsPerAttribute: 3, values: st })
    }
    if (
      (p.st && (ot.st = new l.GeometryAttribute({ componentDatatype: n.ComponentDatatype.FLOAT, componentsPerAttribute: 2, values: V })),
      p.normal && (ot.normal = new l.GeometryAttribute({ componentDatatype: n.ComponentDatatype.FLOAT, componentsPerAttribute: 3, values: D })),
      p.tangent && (ot.tangent = new l.GeometryAttribute({ componentDatatype: n.ComponentDatatype.FLOAT, componentsPerAttribute: 3, values: O })),
      p.bitangent && (ot.bitangent = new l.GeometryAttribute({ componentDatatype: n.ComponentDatatype.FLOAT, componentsPerAttribute: 3, values: S })),
      F && (ot.extrudeDirection = new l.GeometryAttribute({ componentDatatype: n.ComponentDatatype.FLOAT, componentsPerAttribute: 3, values: L })),
      m && o.defined(i.offsetAttribute))
    ) {
      var lt = new Uint8Array(P)
      if (i.offsetAttribute === e.GeometryOffsetAttribute.TOP) lt = e.arrayFill(lt, 1, 0, P / 2)
      else {
        var ut = i.offsetAttribute === e.GeometryOffsetAttribute.NONE ? 0 : 1
        lt = e.arrayFill(lt, ut)
      }
      ot.applyOffset = new l.GeometryAttribute({ componentDatatype: n.ComponentDatatype.UNSIGNED_BYTE, componentsPerAttribute: 1, values: lt })
    }
    return ot
  }
  function N(t) {
    var e,
      r,
      a,
      i,
      n,
      o = new Array(t * (t + 1) * 12 - 6),
      s = 0
    for (e = 0, a = 1, i = 0; i < 3; i++) (o[s++] = a++), (o[s++] = e), (o[s++] = a)
    for (i = 2; i < t + 1; ++i) {
      for (a = i * (i + 1) - 1, e = (i - 1) * i - 1, o[s++] = a++, o[s++] = e, o[s++] = a, r = 2 * i, n = 0; n < r - 1; ++n)
        (o[s++] = a), (o[s++] = e++), (o[s++] = e), (o[s++] = a++), (o[s++] = e), (o[s++] = a)
      ;(o[s++] = a++), (o[s++] = e), (o[s++] = a)
    }
    for (r = 2 * t, ++a, ++e, i = 0; i < r - 1; ++i) (o[s++] = a), (o[s++] = e++), (o[s++] = e), (o[s++] = a++), (o[s++] = e), (o[s++] = a)
    for (o[s++] = a, o[s++] = e++, o[s++] = e, o[s++] = a++, o[s++] = e++, o[s++] = e, ++e, i = t - 1; i > 1; --i) {
      for (o[s++] = e++, o[s++] = e, o[s++] = a, r = 2 * i, n = 0; n < r - 1; ++n)
        (o[s++] = a), (o[s++] = e++), (o[s++] = e), (o[s++] = a++), (o[s++] = e), (o[s++] = a)
      ;(o[s++] = e++), (o[s++] = e++), (o[s++] = a++)
    }
    for (i = 0; i < 3; i++) (o[s++] = e++), (o[s++] = e), (o[s++] = a)
    return o
  }
  var P = new a.Cartesian3()
  var F = new r.BoundingSphere(),
    V = new r.BoundingSphere()
  function D(t) {
    var i = t.center,
      c = t.ellipsoid,
      _ = t.semiMajorAxis,
      P = a.Cartesian3.multiplyByScalar(c.geodeticSurfaceNormal(i, d), t.height, d)
    ;(F.center = a.Cartesian3.add(i, P, F.center)),
      (F.radius = _),
      (P = a.Cartesian3.multiplyByScalar(c.geodeticSurfaceNormal(i, P), t.extrudedHeight, P)),
      (V.center = a.Cartesian3.add(i, P, V.center)),
      (V.radius = _)
    var D = s.EllipseGeometryLibrary.computeEllipsePositions(t, !0, !0),
      O = D.positions,
      S = D.numPts,
      L = D.outerPositions,
      R = r.BoundingSphere.union(F, V),
      j = G(O, t, !0),
      z = N(S),
      k = z.length
    z.length = 2 * k
    for (var B = O.length / 3, Y = 0; Y < k; Y += 3) (z[Y + k] = z[Y + 2] + B), (z[Y + 1 + k] = z[Y + 1] + B), (z[Y + 2 + k] = z[Y] + B)
    var H = y.IndexDatatype.createTypedArray((2 * B) / 3, z),
      U = new l.Geometry({ attributes: j, indices: H, primitiveType: l.PrimitiveType.TRIANGLES }),
      Q = (function (t, i) {
        var s = i.vertexFormat,
          m = i.center,
          p = i.semiMajorAxis,
          y = i.semiMinorAxis,
          c = i.ellipsoid,
          _ = i.height,
          G = i.extrudedHeight,
          N = i.stRotation,
          P = (t.length / 3) * 2,
          F = new Float64Array(3 * P),
          V = s.st ? new Float32Array(2 * P) : void 0,
          D = s.normal ? new Float32Array(3 * P) : void 0,
          O = s.tangent ? new Float32Array(3 * P) : void 0,
          S = s.bitangent ? new Float32Array(3 * P) : void 0,
          L = i.shadowVolume,
          R = L ? new Float32Array(3 * P) : void 0,
          j = 0,
          z = v,
          k = C,
          B = w,
          Y = new r.GeographicProjection(c),
          H = Y.project(c.cartesianToCartographic(m, E), M),
          U = c.scaleToGeodeticSurface(m, d)
        c.geodeticSurfaceNormal(U, U)
        for (
          var Q = r.Quaternion.fromAxisAngle(U, N, b),
            W = a.Matrix3.fromQuaternion(Q, g),
            J = a.Cartesian2.fromElements(Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY, I),
            q = a.Cartesian2.fromElements(Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY, T),
            Z = t.length,
            K = (Z / 3) * 2,
            X = 0;
          X < Z;
          X += 3
        ) {
          var $,
            tt = X + 1,
            et = X + 2,
            rt = a.Cartesian3.fromArray(t, X, d)
          if (s.st) {
            var at = a.Matrix3.multiplyByVector(W, rt, f),
              it = Y.project(c.cartesianToCartographic(at, E), A)
            a.Cartesian3.subtract(it, H, it),
              (h.x = (it.x + p) / (2 * p)),
              (h.y = (it.y + y) / (2 * y)),
              (J.x = Math.min(h.x, J.x)),
              (J.y = Math.min(h.y, J.y)),
              (q.x = Math.max(h.x, q.x)),
              (q.y = Math.max(h.y, q.y)),
              (V[j + K] = h.x),
              (V[j + 1 + K] = h.y),
              (V[j++] = h.x),
              (V[j++] = h.y)
          }
          ;(rt = c.scaleToGeodeticSurface(rt, rt)),
            ($ = a.Cartesian3.clone(rt, f)),
            (z = c.geodeticSurfaceNormal(rt, z)),
            L && ((R[X + Z] = -z.x), (R[tt + Z] = -z.y), (R[et + Z] = -z.z))
          var nt = a.Cartesian3.multiplyByScalar(z, _, x)
          if (
            ((rt = a.Cartesian3.add(rt, nt, rt)),
            (nt = a.Cartesian3.multiplyByScalar(z, G, nt)),
            ($ = a.Cartesian3.add($, nt, $)),
            s.position && ((F[X + Z] = $.x), (F[tt + Z] = $.y), (F[et + Z] = $.z), (F[X] = rt.x), (F[tt] = rt.y), (F[et] = rt.z)),
            s.normal || s.tangent || s.bitangent)
          ) {
            B = a.Cartesian3.clone(z, B)
            var ot = a.Cartesian3.fromArray(t, (X + 3) % Z, x)
            a.Cartesian3.subtract(ot, rt, ot)
            var st = a.Cartesian3.subtract($, rt, A)
            ;(z = a.Cartesian3.normalize(a.Cartesian3.cross(st, ot, z), z)),
              s.normal && ((D[X] = z.x), (D[tt] = z.y), (D[et] = z.z), (D[X + Z] = z.x), (D[tt + Z] = z.y), (D[et + Z] = z.z)),
              s.tangent &&
                ((k = a.Cartesian3.normalize(a.Cartesian3.cross(B, z, k), k)),
                (O[X] = k.x),
                (O[tt] = k.y),
                (O[et] = k.z),
                (O[X + Z] = k.x),
                (O[X + 1 + Z] = k.y),
                (O[X + 2 + Z] = k.z)),
              s.bitangent && ((S[X] = B.x), (S[tt] = B.y), (S[et] = B.z), (S[X + Z] = B.x), (S[tt + Z] = B.y), (S[et + Z] = B.z))
          }
        }
        if (s.st) {
          Z = V.length
          for (var lt = 0; lt < Z; lt += 2) (V[lt] = (V[lt] - J.x) / (q.x - J.x)), (V[lt + 1] = (V[lt + 1] - J.y) / (q.y - J.y))
        }
        var ut = new u.GeometryAttributes()
        if (
          (s.position &&
            (ut.position = new l.GeometryAttribute({ componentDatatype: n.ComponentDatatype.DOUBLE, componentsPerAttribute: 3, values: F })),
          s.st && (ut.st = new l.GeometryAttribute({ componentDatatype: n.ComponentDatatype.FLOAT, componentsPerAttribute: 2, values: V })),
          s.normal && (ut.normal = new l.GeometryAttribute({ componentDatatype: n.ComponentDatatype.FLOAT, componentsPerAttribute: 3, values: D })),
          s.tangent && (ut.tangent = new l.GeometryAttribute({ componentDatatype: n.ComponentDatatype.FLOAT, componentsPerAttribute: 3, values: O })),
          s.bitangent &&
            (ut.bitangent = new l.GeometryAttribute({ componentDatatype: n.ComponentDatatype.FLOAT, componentsPerAttribute: 3, values: S })),
          L &&
            (ut.extrudeDirection = new l.GeometryAttribute({ componentDatatype: n.ComponentDatatype.FLOAT, componentsPerAttribute: 3, values: R })),
          o.defined(i.offsetAttribute))
        ) {
          var mt = new Uint8Array(P)
          if (i.offsetAttribute === e.GeometryOffsetAttribute.TOP) mt = e.arrayFill(mt, 1, 0, P / 2)
          else {
            var pt = i.offsetAttribute === e.GeometryOffsetAttribute.NONE ? 0 : 1
            mt = e.arrayFill(mt, pt)
          }
          ut.applyOffset = new l.GeometryAttribute({ componentDatatype: n.ComponentDatatype.UNSIGNED_BYTE, componentsPerAttribute: 1, values: mt })
        }
        return ut
      })(L, t)
    z = (function (t) {
      for (var e = t.length / 3, r = y.IndexDatatype.createTypedArray(e, 6 * e), a = 0, i = 0; i < e; i++) {
        var n = i,
          o = i + e,
          s = (n + 1) % e,
          l = s + e
        ;(r[a++] = n), (r[a++] = o), (r[a++] = s), (r[a++] = s), (r[a++] = o), (r[a++] = l)
      }
      return r
    })(L)
    var W = y.IndexDatatype.createTypedArray((2 * L.length) / 3, z),
      J = new l.Geometry({ attributes: Q, indices: W, primitiveType: l.PrimitiveType.TRIANGLES }),
      q = p.GeometryPipeline.combineInstances([new m.GeometryInstance({ geometry: U }), new m.GeometryInstance({ geometry: J })])
    return { boundingSphere: R, attributes: q[0].attributes, indices: q[0].indices }
  }
  function O(t, e, r, i, o, l, u) {
    for (
      var m = s.EllipseGeometryLibrary.computeEllipsePositions(
          { center: t, semiMajorAxis: e, semiMinorAxis: r, rotation: i, granularity: o },
          !1,
          !0
        ).outerPositions,
        p = m.length / 3,
        y = new Array(p),
        c = 0;
      c < p;
      ++c
    )
      y[c] = a.Cartesian3.fromArray(m, 3 * c)
    var d = a.Rectangle.fromCartesianArray(y, l, u)
    return (
      d.width > n.CesiumMath.PI &&
        ((d.north = d.north > 0 ? n.CesiumMath.PI_OVER_TWO - n.CesiumMath.EPSILON7 : d.north),
        (d.south = d.south < 0 ? n.CesiumMath.EPSILON7 - n.CesiumMath.PI_OVER_TWO : d.south),
        (d.east = n.CesiumMath.PI),
        (d.west = -n.CesiumMath.PI)),
      d
    )
  }
  function S(t) {
    var e = (t = o.defaultValue(t, o.defaultValue.EMPTY_OBJECT)).center,
      r = o.defaultValue(t.ellipsoid, a.Ellipsoid.WGS84),
      i = t.semiMajorAxis,
      s = t.semiMinorAxis,
      l = o.defaultValue(t.granularity, n.CesiumMath.RADIANS_PER_DEGREE),
      u = o.defaultValue(t.vertexFormat, c.VertexFormat.DEFAULT),
      m = o.defaultValue(t.height, 0),
      p = o.defaultValue(t.extrudedHeight, m)
    ;(this._center = a.Cartesian3.clone(e)),
      (this._semiMajorAxis = i),
      (this._semiMinorAxis = s),
      (this._ellipsoid = a.Ellipsoid.clone(r)),
      (this._rotation = o.defaultValue(t.rotation, 0)),
      (this._stRotation = o.defaultValue(t.stRotation, 0)),
      (this._height = Math.max(p, m)),
      (this._granularity = l),
      (this._vertexFormat = c.VertexFormat.clone(u)),
      (this._extrudedHeight = Math.min(p, m)),
      (this._shadowVolume = o.defaultValue(t.shadowVolume, !1)),
      (this._workerName = 'createEllipseGeometry'),
      (this._offsetAttribute = t.offsetAttribute),
      (this._rectangle = void 0),
      (this._textureCoordinateRotationPoints = void 0)
  }
  ;(S.packedLength = a.Cartesian3.packedLength + a.Ellipsoid.packedLength + c.VertexFormat.packedLength + 9),
    (S.pack = function (t, e, r) {
      return (
        (r = o.defaultValue(r, 0)),
        a.Cartesian3.pack(t._center, e, r),
        (r += a.Cartesian3.packedLength),
        a.Ellipsoid.pack(t._ellipsoid, e, r),
        (r += a.Ellipsoid.packedLength),
        c.VertexFormat.pack(t._vertexFormat, e, r),
        (r += c.VertexFormat.packedLength),
        (e[r++] = t._semiMajorAxis),
        (e[r++] = t._semiMinorAxis),
        (e[r++] = t._rotation),
        (e[r++] = t._stRotation),
        (e[r++] = t._height),
        (e[r++] = t._granularity),
        (e[r++] = t._extrudedHeight),
        (e[r++] = t._shadowVolume ? 1 : 0),
        (e[r] = o.defaultValue(t._offsetAttribute, -1)),
        e
      )
    })
  var L = new a.Cartesian3(),
    R = new a.Ellipsoid(),
    j = new c.VertexFormat(),
    z = {
      center: L,
      ellipsoid: R,
      vertexFormat: j,
      semiMajorAxis: void 0,
      semiMinorAxis: void 0,
      rotation: void 0,
      stRotation: void 0,
      height: void 0,
      granularity: void 0,
      extrudedHeight: void 0,
      shadowVolume: void 0,
      offsetAttribute: void 0
    }
  ;(S.unpack = function (t, e, r) {
    e = o.defaultValue(e, 0)
    var i = a.Cartesian3.unpack(t, e, L)
    e += a.Cartesian3.packedLength
    var n = a.Ellipsoid.unpack(t, e, R)
    e += a.Ellipsoid.packedLength
    var s = c.VertexFormat.unpack(t, e, j)
    e += c.VertexFormat.packedLength
    var l = t[e++],
      u = t[e++],
      m = t[e++],
      p = t[e++],
      y = t[e++],
      d = t[e++],
      f = t[e++],
      A = 1 === t[e++],
      x = t[e]
    return o.defined(r)
      ? ((r._center = a.Cartesian3.clone(i, r._center)),
        (r._ellipsoid = a.Ellipsoid.clone(n, r._ellipsoid)),
        (r._vertexFormat = c.VertexFormat.clone(s, r._vertexFormat)),
        (r._semiMajorAxis = l),
        (r._semiMinorAxis = u),
        (r._rotation = m),
        (r._stRotation = p),
        (r._height = y),
        (r._granularity = d),
        (r._extrudedHeight = f),
        (r._shadowVolume = A),
        (r._offsetAttribute = -1 === x ? void 0 : x),
        r)
      : ((z.height = y),
        (z.extrudedHeight = f),
        (z.granularity = d),
        (z.stRotation = p),
        (z.rotation = m),
        (z.semiMajorAxis = l),
        (z.semiMinorAxis = u),
        (z.shadowVolume = A),
        (z.offsetAttribute = -1 === x ? void 0 : x),
        new S(z))
  }),
    (S.computeRectangle = function (t, e) {
      var r = (t = o.defaultValue(t, o.defaultValue.EMPTY_OBJECT)).center,
        i = o.defaultValue(t.ellipsoid, a.Ellipsoid.WGS84),
        s = t.semiMajorAxis,
        l = t.semiMinorAxis,
        u = o.defaultValue(t.granularity, n.CesiumMath.RADIANS_PER_DEGREE)
      return O(r, s, l, o.defaultValue(t.rotation, 0), u, i, e)
    }),
    (S.createGeometry = function (t) {
      if (!(t._semiMajorAxis <= 0 || t._semiMinorAxis <= 0)) {
        var i = t._height,
          u = t._extrudedHeight,
          m = !n.CesiumMath.equalsEpsilon(i, u, 0, n.CesiumMath.EPSILON2)
        t._center = t._ellipsoid.scaleToGeodeticSurface(t._center, t._center)
        var p,
          c = {
            center: t._center,
            semiMajorAxis: t._semiMajorAxis,
            semiMinorAxis: t._semiMinorAxis,
            ellipsoid: t._ellipsoid,
            rotation: t._rotation,
            height: i,
            granularity: t._granularity,
            vertexFormat: t._vertexFormat,
            stRotation: t._stRotation
          }
        if (m) (c.extrudedHeight = u), (c.shadowVolume = t._shadowVolume), (c.offsetAttribute = t._offsetAttribute), (p = D(c))
        else if (
          ((p = (function (t) {
            var e = t.center
            ;(P = a.Cartesian3.multiplyByScalar(t.ellipsoid.geodeticSurfaceNormal(e, P), t.height, P)), (P = a.Cartesian3.add(e, P, P))
            var i = new r.BoundingSphere(P, t.semiMajorAxis),
              n = s.EllipseGeometryLibrary.computeEllipsePositions(t, !0, !1),
              o = n.positions,
              l = n.numPts,
              u = G(o, t, !1),
              m = N(l)
            return { boundingSphere: i, attributes: u, indices: (m = y.IndexDatatype.createTypedArray(o.length / 3, m)) }
          })(c)),
          o.defined(t._offsetAttribute))
        ) {
          var d = p.attributes.position.values.length,
            f = new Uint8Array(d / 3),
            A = t._offsetAttribute === e.GeometryOffsetAttribute.NONE ? 0 : 1
          e.arrayFill(f, A),
            (p.attributes.applyOffset = new l.GeometryAttribute({
              componentDatatype: n.ComponentDatatype.UNSIGNED_BYTE,
              componentsPerAttribute: 1,
              values: f
            }))
        }
        return new l.Geometry({
          attributes: p.attributes,
          indices: p.indices,
          primitiveType: l.PrimitiveType.TRIANGLES,
          boundingSphere: p.boundingSphere,
          offsetAttribute: t._offsetAttribute
        })
      }
    }),
    (S.createShadowVolume = function (t, e, r) {
      var a = t._granularity,
        i = t._ellipsoid,
        n = e(a, i),
        o = r(a, i)
      return new S({
        center: t._center,
        semiMajorAxis: t._semiMajorAxis,
        semiMinorAxis: t._semiMinorAxis,
        ellipsoid: i,
        rotation: t._rotation,
        stRotation: t._stRotation,
        granularity: a,
        extrudedHeight: n,
        height: o,
        vertexFormat: c.VertexFormat.POSITION_ONLY,
        shadowVolume: !0
      })
    }),
    Object.defineProperties(S.prototype, {
      rectangle: {
        get: function () {
          return (
            o.defined(this._rectangle) ||
              (this._rectangle = O(this._center, this._semiMajorAxis, this._semiMinorAxis, this._rotation, this._granularity, this._ellipsoid)),
            this._rectangle
          )
        }
      },
      textureCoordinateRotationPoints: {
        get: function () {
          return (
            o.defined(this._textureCoordinateRotationPoints) ||
              (this._textureCoordinateRotationPoints = (function (t) {
                var e = -t._stRotation
                if (0 === e) return [0, 0, 0, 1, 1, 0]
                for (
                  var r = s.EllipseGeometryLibrary.computeEllipsePositions(
                      {
                        center: t._center,
                        semiMajorAxis: t._semiMajorAxis,
                        semiMinorAxis: t._semiMinorAxis,
                        rotation: t._rotation,
                        granularity: t._granularity
                      },
                      !1,
                      !0
                    ).outerPositions,
                    i = r.length / 3,
                    n = new Array(i),
                    o = 0;
                  o < i;
                  ++o
                )
                  n[o] = a.Cartesian3.fromArray(r, 3 * o)
                var u = t._ellipsoid,
                  m = t.rectangle
                return l.Geometry._textureCoordinateRotationPoints(n, e, u, m)
              })(this)),
            this._textureCoordinateRotationPoints
          )
        }
      }
    }),
    (t.EllipseGeometry = S)
})
