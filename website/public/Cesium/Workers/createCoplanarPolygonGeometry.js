define([
  './arrayRemoveDuplicates-18786327',
  './BoundingRectangle-218a9c7b',
  './Transforms-d13cc04e',
  './Matrix2-9aa31791',
  './RuntimeError-346a3079',
  './ComponentDatatype-93750d1a',
  './CoplanarPolygonGeometryLibrary-551fa870',
  './when-4bbc8319',
  './GeometryAttribute-43536dc0',
  './GeometryAttributes-7827a6c2',
  './GeometryInstance-47b34185',
  './GeometryPipeline-2356afec',
  './IndexDatatype-b7d979a6',
  './PolygonGeometryLibrary-dec9574a',
  './PolygonPipeline-da7fc5ca',
  './VertexFormat-71718faa',
  './combine-83860057',
  './WebGLConstants-1c8239cc',
  './OrientedBoundingBox-4b932f63',
  './EllipsoidTangentPlane-eecce7e8',
  './AxisAlignedBoundingBox-07c6b7f2',
  './IntersectionTests-96a04219',
  './Plane-318d6937',
  './AttributeCompression-af389d04',
  './EncodedCartesian3-f286cedc',
  './ArcType-98ec98bf',
  './EllipsoidRhumbLine-30c47ff4'
], function (e, t, a, n, r, o, i, l, s, p, c, y, m, u, d, g, v, b, h, f, x, C, P, A, w, F, G) {
  'use strict'
  var L = new n.Cartesian3(),
    E = new t.BoundingRectangle(),
    T = new n.Cartesian2(),
    D = new n.Cartesian2(),
    _ = new n.Cartesian3(),
    V = new n.Cartesian3(),
    k = new n.Cartesian3(),
    R = new n.Cartesian3(),
    I = new n.Cartesian3(),
    M = new n.Cartesian3(),
    B = new a.Quaternion(),
    H = new n.Matrix3(),
    O = new n.Matrix3(),
    z = new n.Cartesian3()
  function S(e, t, r, i, l, c, y, u) {
    var g = e.positions,
      v = d.PolygonPipeline.triangulate(e.positions2D, e.holes)
    v.length < 3 && (v = [0, 1, 2])
    var b = m.IndexDatatype.createTypedArray(g.length, v.length)
    b.set(v)
    var h = H
    if (0 !== i) {
      var f = a.Quaternion.fromAxisAngle(c, i, B)
      if (((h = n.Matrix3.fromQuaternion(f, h)), t.tangent || t.bitangent)) {
        f = a.Quaternion.fromAxisAngle(c, -i, B)
        var x = n.Matrix3.fromQuaternion(f, O)
        ;(y = n.Cartesian3.normalize(n.Matrix3.multiplyByVector(x, y, y), y)),
          t.bitangent && (u = n.Cartesian3.normalize(n.Cartesian3.cross(c, y, u), u))
      }
    } else h = n.Matrix3.clone(n.Matrix3.IDENTITY, h)
    var C = D
    t.st && ((C.x = r.x), (C.y = r.y))
    for (
      var P = g.length,
        A = 3 * P,
        w = new Float64Array(A),
        F = t.normal ? new Float32Array(A) : void 0,
        G = t.tangent ? new Float32Array(A) : void 0,
        E = t.bitangent ? new Float32Array(A) : void 0,
        _ = t.st ? new Float32Array(2 * P) : void 0,
        V = 0,
        k = 0,
        R = 0,
        I = 0,
        M = 0,
        z = 0;
      z < P;
      z++
    ) {
      var S = g[z]
      if (((w[V++] = S.x), (w[V++] = S.y), (w[V++] = S.z), t.st)) {
        var N = l(n.Matrix3.multiplyByVector(h, S, L), T)
        n.Cartesian2.subtract(N, C, N)
        var Q = o.CesiumMath.clamp(N.x / r.width, 0, 1),
          j = o.CesiumMath.clamp(N.y / r.height, 0, 1)
        ;(_[M++] = Q), (_[M++] = j)
      }
      t.normal && ((F[k++] = c.x), (F[k++] = c.y), (F[k++] = c.z)),
        t.tangent && ((G[I++] = y.x), (G[I++] = y.y), (G[I++] = y.z)),
        t.bitangent && ((E[R++] = u.x), (E[R++] = u.y), (E[R++] = u.z))
    }
    var U = new p.GeometryAttributes()
    return (
      t.position && (U.position = new s.GeometryAttribute({ componentDatatype: o.ComponentDatatype.DOUBLE, componentsPerAttribute: 3, values: w })),
      t.normal && (U.normal = new s.GeometryAttribute({ componentDatatype: o.ComponentDatatype.FLOAT, componentsPerAttribute: 3, values: F })),
      t.tangent && (U.tangent = new s.GeometryAttribute({ componentDatatype: o.ComponentDatatype.FLOAT, componentsPerAttribute: 3, values: G })),
      t.bitangent && (U.bitangent = new s.GeometryAttribute({ componentDatatype: o.ComponentDatatype.FLOAT, componentsPerAttribute: 3, values: E })),
      t.st && (U.st = new s.GeometryAttribute({ componentDatatype: o.ComponentDatatype.FLOAT, componentsPerAttribute: 2, values: _ })),
      new s.Geometry({ attributes: U, indices: b, primitiveType: s.PrimitiveType.TRIANGLES })
    )
  }
  function N(e) {
    var t = (e = l.defaultValue(e, l.defaultValue.EMPTY_OBJECT)).polygonHierarchy,
      a = l.defaultValue(e.vertexFormat, g.VertexFormat.DEFAULT)
    ;(this._vertexFormat = g.VertexFormat.clone(a)),
      (this._polygonHierarchy = t),
      (this._stRotation = l.defaultValue(e.stRotation, 0)),
      (this._ellipsoid = n.Ellipsoid.clone(l.defaultValue(e.ellipsoid, n.Ellipsoid.WGS84))),
      (this._workerName = 'createCoplanarPolygonGeometry'),
      (this.packedLength = u.PolygonGeometryLibrary.computeHierarchyPackedLength(t) + g.VertexFormat.packedLength + n.Ellipsoid.packedLength + 2)
  }
  ;(N.fromPositions = function (e) {
    return new N({
      polygonHierarchy: { positions: (e = l.defaultValue(e, l.defaultValue.EMPTY_OBJECT)).positions },
      vertexFormat: e.vertexFormat,
      stRotation: e.stRotation,
      ellipsoid: e.ellipsoid
    })
  }),
    (N.pack = function (e, t, a) {
      return (
        (a = l.defaultValue(a, 0)),
        (a = u.PolygonGeometryLibrary.packPolygonHierarchy(e._polygonHierarchy, t, a)),
        n.Ellipsoid.pack(e._ellipsoid, t, a),
        (a += n.Ellipsoid.packedLength),
        g.VertexFormat.pack(e._vertexFormat, t, a),
        (a += g.VertexFormat.packedLength),
        (t[a++] = e._stRotation),
        (t[a] = e.packedLength),
        t
      )
    })
  var Q = n.Ellipsoid.clone(n.Ellipsoid.UNIT_SPHERE),
    j = new g.VertexFormat(),
    U = { polygonHierarchy: {} }
  return (
    (N.unpack = function (e, t, a) {
      t = l.defaultValue(t, 0)
      var r = u.PolygonGeometryLibrary.unpackPolygonHierarchy(e, t)
      ;(t = r.startingIndex), delete r.startingIndex
      var o = n.Ellipsoid.unpack(e, t, Q)
      t += n.Ellipsoid.packedLength
      var i = g.VertexFormat.unpack(e, t, j)
      t += g.VertexFormat.packedLength
      var s = e[t++],
        p = e[t]
      return (
        l.defined(a) || (a = new N(U)),
        (a._polygonHierarchy = r),
        (a._ellipsoid = n.Ellipsoid.clone(o, a._ellipsoid)),
        (a._vertexFormat = g.VertexFormat.clone(i, a._vertexFormat)),
        (a._stRotation = s),
        (a.packedLength = p),
        a
      )
    }),
    (N.createGeometry = function (t) {
      var r = t._vertexFormat,
        l = t._polygonHierarchy,
        p = t._stRotation,
        d = l.positions
      if (!((d = e.arrayRemoveDuplicates(d, n.Cartesian3.equalsEpsilon, !0)).length < 3)) {
        var g = _,
          v = V,
          b = k,
          h = I,
          f = M
        if (i.CoplanarPolygonGeometryLibrary.computeProjectTo2DArguments(d, R, h, f)) {
          if (
            ((g = n.Cartesian3.cross(h, f, g)),
            (g = n.Cartesian3.normalize(g, g)),
            !n.Cartesian3.equalsEpsilon(R, n.Cartesian3.ZERO, o.CesiumMath.EPSILON6))
          ) {
            var x = t._ellipsoid.geodeticSurfaceNormal(R, z)
            n.Cartesian3.dot(g, x) < 0 && ((g = n.Cartesian3.negate(g, g)), (h = n.Cartesian3.negate(h, h)))
          }
          var C = i.CoplanarPolygonGeometryLibrary.createProjectPointsTo2DFunction(R, h, f),
            P = i.CoplanarPolygonGeometryLibrary.createProjectPointTo2DFunction(R, h, f)
          r.tangent && (v = n.Cartesian3.clone(h, v)), r.bitangent && (b = n.Cartesian3.clone(f, b))
          var A = u.PolygonGeometryLibrary.polygonsFromHierarchy(l, C, !1),
            w = A.hierarchy,
            F = A.polygons
          if (0 !== w.length) {
            d = w[0].outerRing
            for (
              var G = a.BoundingSphere.fromPoints(d), L = u.PolygonGeometryLibrary.computeBoundingRectangle(g, P, d, p, E), T = [], D = 0;
              D < F.length;
              D++
            ) {
              var B = new c.GeometryInstance({ geometry: S(F[D], r, L, p, P, g, v, b) })
              T.push(B)
            }
            var H = y.GeometryPipeline.combineInstances(T)[0]
            ;(H.attributes.position.values = new Float64Array(H.attributes.position.values)),
              (H.indices = m.IndexDatatype.createTypedArray(H.attributes.position.values.length / 3, H.indices))
            var O = H.attributes
            return (
              r.position || delete O.position,
              new s.Geometry({ attributes: O, indices: H.indices, primitiveType: H.primitiveType, boundingSphere: G })
            )
          }
        }
      }
    }),
    function (e, t) {
      return l.defined(t) && (e = N.unpack(e, t)), N.createGeometry(e)
    }
  )
})
