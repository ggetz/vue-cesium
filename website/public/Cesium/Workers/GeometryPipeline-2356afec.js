define([
  'exports',
  './AttributeCompression-af389d04',
  './Matrix2-9aa31791',
  './RuntimeError-346a3079',
  './when-4bbc8319',
  './ComponentDatatype-93750d1a',
  './Transforms-d13cc04e',
  './EncodedCartesian3-f286cedc',
  './GeometryAttribute-43536dc0',
  './IndexDatatype-b7d979a6',
  './IntersectionTests-96a04219',
  './Plane-318d6937'
], function (e, t, r, a, i, n, s, o, u, p, d, l) {
  'use strict'
  var v = new r.Cartesian3(),
    y = new r.Cartesian3(),
    f = new r.Cartesian3()
  var c = {
    calculateACMR: function (e) {
      var t = (e = i.defaultValue(e, i.defaultValue.EMPTY_OBJECT)).indices,
        r = e.maximumIndex,
        a = i.defaultValue(e.cacheSize, 24),
        n = t.length
      if (!i.defined(r)) {
        r = 0
        for (var s = 0, o = t[s]; s < n; ) o > r && (r = o), (o = t[++s])
      }
      for (var u = [], p = 0; p < r + 1; p++) u[p] = 0
      for (var d = a + 1, l = 0; l < n; ++l) d - u[t[l]] > a && ((u[t[l]] = d), ++d)
      return (d - a + 1) / (n / 3)
    }
  }
  c.tipsify = function (e) {
    var t,
      r = (e = i.defaultValue(e, i.defaultValue.EMPTY_OBJECT)).indices,
      a = e.maximumIndex,
      n = i.defaultValue(e.cacheSize, 24)
    function s(e, r, a, i, n, s, o) {
      for (var u, p = -1, d = -1, l = 0; l < a.length; ) {
        var v = a[l]
        i[v].numLiveTriangles &&
          ((u = 0), n - i[v].timeStamp + 2 * i[v].numLiveTriangles <= r && (u = n - i[v].timeStamp), (u > d || -1 === d) && ((d = u), (p = v))),
          ++l
      }
      return -1 === p
        ? (function (e, r, a, i) {
            for (; r.length >= 1; ) {
              var n = r[r.length - 1]
              if ((r.splice(r.length - 1, 1), e[n].numLiveTriangles > 0)) return n
            }
            for (; t < i; ) {
              if (e[t].numLiveTriangles > 0) return ++t - 1
              ++t
            }
            return -1
          })(i, s, 0, o)
        : p
    }
    var o = r.length,
      u = 0,
      p = 0,
      d = r[p],
      l = o
    if (i.defined(a)) u = a + 1
    else {
      for (; p < l; ) d > u && (u = d), (d = r[++p])
      if (-1 === u) return 0
      ++u
    }
    var v,
      y = []
    for (v = 0; v < u; v++) y[v] = { numLiveTriangles: 0, timeStamp: 0, vertexTriangles: [] }
    p = 0
    for (var f = 0; p < l; )
      y[r[p]].vertexTriangles.push(f),
        ++y[r[p]].numLiveTriangles,
        y[r[p + 1]].vertexTriangles.push(f),
        ++y[r[p + 1]].numLiveTriangles,
        y[r[p + 2]].vertexTriangles.push(f),
        ++y[r[p + 2]].numLiveTriangles,
        ++f,
        (p += 3)
    var c = 0,
      m = n + 1
    t = 1
    var C,
      h,
      b,
      g,
      A = [],
      T = [],
      x = 0,
      P = [],
      w = o / 3,
      S = []
    for (v = 0; v < w; v++) S[v] = !1
    for (; -1 !== c; ) {
      ;(A = []), (g = (h = y[c]).vertexTriangles.length)
      for (var I = 0; I < g; ++I)
        if (!S[(f = h.vertexTriangles[I])]) {
          ;(S[f] = !0), (p = f + f + f)
          for (var O = 0; O < 3; ++O)
            (b = r[p]), A.push(b), T.push(b), (P[x] = b), ++x, --(C = y[b]).numLiveTriangles, m - C.timeStamp > n && ((C.timeStamp = m), ++m), ++p
        }
      c = s(0, n, A, y, m, T, u)
    }
    return P
  }
  var m = {}
  function C(e, t, r, a, i) {
    ;(e[t++] = r), (e[t++] = a), (e[t++] = a), (e[t++] = i), (e[t++] = i), (e[t] = r)
  }
  function h(e) {
    var t = {}
    for (var r in e)
      if (e.hasOwnProperty(r) && i.defined(e[r]) && i.defined(e[r].values)) {
        var a = e[r]
        t[r] = new u.GeometryAttribute({
          componentDatatype: a.componentDatatype,
          componentsPerAttribute: a.componentsPerAttribute,
          normalize: a.normalize,
          values: []
        })
      }
    return t
  }
  function b(e, t, r) {
    for (var a in t)
      if (t.hasOwnProperty(a) && i.defined(t[a]) && i.defined(t[a].values))
        for (var n = t[a], s = 0; s < n.componentsPerAttribute; ++s) e[a].values.push(n.values[r * n.componentsPerAttribute + s])
  }
  ;(m.toWireframe = function (e) {
    var t = e.indices
    if (i.defined(t)) {
      switch (e.primitiveType) {
        case u.PrimitiveType.TRIANGLES:
          e.indices = (function (e) {
            for (var t = e.length, r = (t / 3) * 6, a = p.IndexDatatype.createTypedArray(t, r), i = 0, n = 0; n < t; n += 3, i += 6)
              C(a, i, e[n], e[n + 1], e[n + 2])
            return a
          })(t)
          break
        case u.PrimitiveType.TRIANGLE_STRIP:
          e.indices = (function (e) {
            var t = e.length
            if (t >= 3) {
              var r = 6 * (t - 2),
                a = p.IndexDatatype.createTypedArray(t, r)
              C(a, 0, e[0], e[1], e[2])
              for (var i = 6, n = 3; n < t; ++n, i += 6) C(a, i, e[n - 1], e[n], e[n - 2])
              return a
            }
            return new Uint16Array()
          })(t)
          break
        case u.PrimitiveType.TRIANGLE_FAN:
          e.indices = (function (e) {
            if (e.length > 0) {
              for (var t = e.length - 1, r = 6 * (t - 1), a = p.IndexDatatype.createTypedArray(t, r), i = e[0], n = 0, s = 1; s < t; ++s, n += 6)
                C(a, n, i, e[s], e[s + 1])
              return a
            }
            return new Uint16Array()
          })(t)
      }
      e.primitiveType = u.PrimitiveType.LINES
    }
    return e
  }),
    (m.createLineSegmentsForVectors = function (e, t, r) {
      ;(t = i.defaultValue(t, 'normal')), (r = i.defaultValue(r, 1e4))
      for (
        var a, o = e.attributes.position.values, p = e.attributes[t].values, d = o.length, l = new Float64Array(2 * d), v = 0, y = 0;
        y < d;
        y += 3
      )
        (l[v++] = o[y]),
          (l[v++] = o[y + 1]),
          (l[v++] = o[y + 2]),
          (l[v++] = o[y] + p[y] * r),
          (l[v++] = o[y + 1] + p[y + 1] * r),
          (l[v++] = o[y + 2] + p[y + 2] * r)
      var f = e.boundingSphere
      return (
        i.defined(f) && (a = new s.BoundingSphere(f.center, f.radius + r)),
        new u.Geometry({
          attributes: { position: new u.GeometryAttribute({ componentDatatype: n.ComponentDatatype.DOUBLE, componentsPerAttribute: 3, values: l }) },
          primitiveType: u.PrimitiveType.LINES,
          boundingSphere: a
        })
      )
    }),
    (m.createAttributeLocations = function (e) {
      var t,
        r = [
          'position',
          'positionHigh',
          'positionLow',
          'position3DHigh',
          'position3DLow',
          'position2DHigh',
          'position2DLow',
          'pickColor',
          'normal',
          'st',
          'tangent',
          'bitangent',
          'extrudeDirection',
          'compressedAttributes'
        ],
        a = e.attributes,
        n = {},
        s = 0,
        o = r.length
      for (t = 0; t < o; ++t) {
        var u = r[t]
        i.defined(a[u]) && (n[u] = s++)
      }
      for (var p in a) a.hasOwnProperty(p) && !i.defined(n[p]) && (n[p] = s++)
      return n
    }),
    (m.reorderForPreVertexCache = function (e) {
      var t = u.Geometry.computeNumberOfVertices(e),
        r = e.indices
      if (i.defined(r)) {
        for (var a = new Int32Array(t), s = 0; s < t; s++) a[s] = -1
        for (var o, d = r, l = d.length, v = p.IndexDatatype.createTypedArray(t, l), y = 0, f = 0, c = 0; y < l; )
          -1 !== (o = a[d[y]]) ? (v[f] = o) : ((a[(o = d[y])] = c), (v[f] = c), ++c), ++y, ++f
        e.indices = v
        var m = e.attributes
        for (var C in m)
          if (m.hasOwnProperty(C) && i.defined(m[C]) && i.defined(m[C].values)) {
            for (
              var h = m[C], b = h.values, g = 0, A = h.componentsPerAttribute, T = n.ComponentDatatype.createTypedArray(h.componentDatatype, c * A);
              g < t;

            ) {
              var x = a[g]
              if (-1 !== x) for (var P = 0; P < A; P++) T[A * x + P] = b[A * g + P]
              ++g
            }
            h.values = T
          }
      }
      return e
    }),
    (m.reorderForPostVertexCache = function (e, t) {
      var r = e.indices
      if (e.primitiveType === u.PrimitiveType.TRIANGLES && i.defined(r)) {
        for (var a = r.length, n = 0, s = 0; s < a; s++) r[s] > n && (n = r[s])
        e.indices = c.tipsify({ indices: r, maximumIndex: n, cacheSize: t })
      }
      return e
    }),
    (m.fitToUnsignedShortIndices = function (e) {
      var t = [],
        r = u.Geometry.computeNumberOfVertices(e)
      if (i.defined(e.indices) && r >= n.CesiumMath.SIXTY_FOUR_KILOBYTES) {
        var a,
          s = [],
          o = [],
          p = 0,
          d = h(e.attributes),
          l = e.indices,
          v = l.length
        e.primitiveType === u.PrimitiveType.TRIANGLES
          ? (a = 3)
          : e.primitiveType === u.PrimitiveType.LINES
          ? (a = 2)
          : e.primitiveType === u.PrimitiveType.POINTS && (a = 1)
        for (var y = 0; y < v; y += a) {
          for (var f = 0; f < a; ++f) {
            var c = l[y + f],
              m = s[c]
            i.defined(m) || ((m = p++), (s[c] = m), b(d, e.attributes, c)), o.push(m)
          }
          p + a >= n.CesiumMath.SIXTY_FOUR_KILOBYTES &&
            (t.push(
              new u.Geometry({
                attributes: d,
                indices: o,
                primitiveType: e.primitiveType,
                boundingSphere: e.boundingSphere,
                boundingSphereCV: e.boundingSphereCV
              })
            ),
            (s = []),
            (o = []),
            (p = 0),
            (d = h(e.attributes)))
        }
        0 !== o.length &&
          t.push(
            new u.Geometry({
              attributes: d,
              indices: o,
              primitiveType: e.primitiveType,
              boundingSphere: e.boundingSphere,
              boundingSphereCV: e.boundingSphereCV
            })
          )
      } else t.push(e)
      return t
    })
  var g = new r.Cartesian3(),
    A = new r.Cartographic()
  m.projectTo2D = function (e, t, a, o, p) {
    for (
      var d = e.attributes[t],
        l = (p = i.defined(p) ? p : new s.GeographicProjection()).ellipsoid,
        v = d.values,
        y = new Float64Array(v.length),
        f = 0,
        c = 0;
      c < v.length;
      c += 3
    ) {
      var m = r.Cartesian3.fromArray(v, c, g),
        C = l.cartesianToCartographic(m, A),
        h = p.project(C, g)
      ;(y[f++] = h.x), (y[f++] = h.y), (y[f++] = h.z)
    }
    return (
      (e.attributes[a] = d),
      (e.attributes[o] = new u.GeometryAttribute({ componentDatatype: n.ComponentDatatype.DOUBLE, componentsPerAttribute: 3, values: y })),
      delete e.attributes[t],
      e
    )
  }
  var T = { high: 0, low: 0 }
  m.encodeAttribute = function (e, t, r, a) {
    for (var i = e.attributes[t], s = i.values, p = s.length, d = new Float32Array(p), l = new Float32Array(p), v = 0; v < p; ++v)
      o.EncodedCartesian3.encode(s[v], T), (d[v] = T.high), (l[v] = T.low)
    var y = i.componentsPerAttribute
    return (
      (e.attributes[r] = new u.GeometryAttribute({ componentDatatype: n.ComponentDatatype.FLOAT, componentsPerAttribute: y, values: d })),
      (e.attributes[a] = new u.GeometryAttribute({ componentDatatype: n.ComponentDatatype.FLOAT, componentsPerAttribute: y, values: l })),
      delete e.attributes[t],
      e
    )
  }
  var x = new r.Cartesian3()
  function P(e, t) {
    if (i.defined(t))
      for (var a = t.values, n = a.length, s = 0; s < n; s += 3)
        r.Cartesian3.unpack(a, s, x), r.Matrix4.multiplyByPoint(e, x, x), r.Cartesian3.pack(x, a, s)
  }
  function w(e, t) {
    if (i.defined(t))
      for (var a = t.values, n = a.length, s = 0; s < n; s += 3)
        r.Cartesian3.unpack(a, s, x), r.Matrix3.multiplyByVector(e, x, x), (x = r.Cartesian3.normalize(x, x)), r.Cartesian3.pack(x, a, s)
  }
  var S = new r.Matrix4(),
    I = new r.Matrix3()
  m.transformToWorldCoordinates = function (e) {
    var t = e.modelMatrix
    if (r.Matrix4.equals(t, r.Matrix4.IDENTITY)) return e
    var a = e.geometry.attributes
    P(t, a.position),
      P(t, a.prevPosition),
      P(t, a.nextPosition),
      (i.defined(a.normal) || i.defined(a.tangent) || i.defined(a.bitangent)) &&
        (r.Matrix4.inverse(t, S), r.Matrix4.transpose(S, S), r.Matrix4.getMatrix3(S, I), w(I, a.normal), w(I, a.tangent), w(I, a.bitangent))
    var n = e.geometry.boundingSphere
    return i.defined(n) && (e.geometry.boundingSphere = s.BoundingSphere.transform(n, t, n)), (e.modelMatrix = r.Matrix4.clone(r.Matrix4.IDENTITY)), e
  }
  var O = new r.Cartesian3()
  function E(e, t) {
    var a,
      o,
      d,
      l,
      v = e.length
    e[0].modelMatrix
    var y,
      f,
      c,
      m,
      C = i.defined(e[0][t].indices),
      h = e[0][t].primitiveType,
      b = (function (e, t) {
        var r,
          a = e.length,
          s = {},
          o = e[0][t].attributes
        for (r in o)
          if (o.hasOwnProperty(r) && i.defined(o[r]) && i.defined(o[r].values)) {
            for (var p = o[r], d = p.values.length, l = !0, v = 1; v < a; ++v) {
              var y = e[v][t].attributes[r]
              if (
                !i.defined(y) ||
                p.componentDatatype !== y.componentDatatype ||
                p.componentsPerAttribute !== y.componentsPerAttribute ||
                p.normalize !== y.normalize
              ) {
                l = !1
                break
              }
              d += y.values.length
            }
            l &&
              (s[r] = new u.GeometryAttribute({
                componentDatatype: p.componentDatatype,
                componentsPerAttribute: p.componentsPerAttribute,
                normalize: p.normalize,
                values: n.ComponentDatatype.createTypedArray(p.componentDatatype, d)
              }))
          }
        return s
      })(e, t)
    for (a in b)
      if (b.hasOwnProperty(a))
        for (y = b[a].values, l = 0, o = 0; o < v; ++o) for (c = (f = e[o][t].attributes[a].values).length, d = 0; d < c; ++d) y[l++] = f[d]
    if (C) {
      var g = 0
      for (o = 0; o < v; ++o) g += e[o][t].indices.length
      var A = u.Geometry.computeNumberOfVertices(new u.Geometry({ attributes: b, primitiveType: u.PrimitiveType.POINTS })),
        T = p.IndexDatatype.createTypedArray(A, g),
        x = 0,
        P = 0
      for (o = 0; o < v; ++o) {
        var w = e[o][t].indices,
          S = w.length
        for (l = 0; l < S; ++l) T[x++] = P + w[l]
        P += u.Geometry.computeNumberOfVertices(e[o][t])
      }
      m = T
    }
    var I,
      E = new r.Cartesian3(),
      N = 0
    for (o = 0; o < v; ++o) {
      if (((I = e[o][t].boundingSphere), !i.defined(I))) {
        E = void 0
        break
      }
      r.Cartesian3.add(I.center, E, E)
    }
    if (i.defined(E))
      for (r.Cartesian3.divideByScalar(E, v, E), o = 0; o < v; ++o) {
        I = e[o][t].boundingSphere
        var L = r.Cartesian3.magnitude(r.Cartesian3.subtract(I.center, E, O)) + I.radius
        L > N && (N = L)
      }
    return new u.Geometry({ attributes: b, indices: m, primitiveType: h, boundingSphere: i.defined(E) ? new s.BoundingSphere(E, N) : void 0 })
  }
  m.combineInstances = function (e) {
    for (var t = [], r = [], a = e.length, n = 0; n < a; ++n) {
      var s = e[n]
      i.defined(s.geometry) ? t.push(s) : i.defined(s.westHemisphereGeometry) && i.defined(s.eastHemisphereGeometry) && r.push(s)
    }
    var o = []
    return (
      t.length > 0 && o.push(E(t, 'geometry')), r.length > 0 && (o.push(E(r, 'westHemisphereGeometry')), o.push(E(r, 'eastHemisphereGeometry'))), o
    )
  }
  var N = new r.Cartesian3(),
    L = new r.Cartesian3(),
    z = new r.Cartesian3(),
    D = new r.Cartesian3()
  m.computeNormal = function (e) {
    var t,
      a = e.indices,
      i = e.attributes,
      s = i.position.values,
      o = i.position.values.length / 3,
      p = a.length,
      d = new Array(o),
      l = new Array(p / 3),
      v = new Array(p)
    for (t = 0; t < o; t++) d[t] = { indexOffset: 0, count: 0, currentCount: 0 }
    var y = 0
    for (t = 0; t < p; t += 3) {
      var f = a[t],
        c = a[t + 1],
        m = a[t + 2],
        C = 3 * f,
        h = 3 * c,
        b = 3 * m
      ;(L.x = s[C]),
        (L.y = s[C + 1]),
        (L.z = s[C + 2]),
        (z.x = s[h]),
        (z.y = s[h + 1]),
        (z.z = s[h + 2]),
        (D.x = s[b]),
        (D.y = s[b + 1]),
        (D.z = s[b + 2]),
        d[f].count++,
        d[c].count++,
        d[m].count++,
        r.Cartesian3.subtract(z, L, z),
        r.Cartesian3.subtract(D, L, D),
        (l[y] = r.Cartesian3.cross(z, D, new r.Cartesian3())),
        y++
    }
    var g,
      A = 0
    for (t = 0; t < o; t++) (d[t].indexOffset += A), (A += d[t].count)
    for (y = 0, t = 0; t < p; t += 3) {
      var T = (g = d[a[t]]).indexOffset + g.currentCount
      ;(v[T] = y),
        g.currentCount++,
        (v[(T = (g = d[a[t + 1]]).indexOffset + g.currentCount)] = y),
        g.currentCount++,
        (v[(T = (g = d[a[t + 2]]).indexOffset + g.currentCount)] = y),
        g.currentCount++,
        y++
    }
    var x = new Float32Array(3 * o)
    for (t = 0; t < o; t++) {
      var P = 3 * t
      if (((g = d[t]), r.Cartesian3.clone(r.Cartesian3.ZERO, N), g.count > 0)) {
        for (y = 0; y < g.count; y++) r.Cartesian3.add(N, l[v[g.indexOffset + y]], N)
        r.Cartesian3.equalsEpsilon(r.Cartesian3.ZERO, N, n.CesiumMath.EPSILON10) && r.Cartesian3.clone(l[v[g.indexOffset]], N)
      }
      r.Cartesian3.equalsEpsilon(r.Cartesian3.ZERO, N, n.CesiumMath.EPSILON10) && (N.z = 1),
        r.Cartesian3.normalize(N, N),
        (x[P] = N.x),
        (x[P + 1] = N.y),
        (x[P + 2] = N.z)
    }
    return (e.attributes.normal = new u.GeometryAttribute({ componentDatatype: n.ComponentDatatype.FLOAT, componentsPerAttribute: 3, values: x })), e
  }
  var M = new r.Cartesian3(),
    G = new r.Cartesian3(),
    R = new r.Cartesian3()
  m.computeTangentAndBitangent = function (e) {
    e.attributes
    var t,
      a,
      i,
      s,
      o = e.indices,
      p = e.attributes.position.values,
      d = e.attributes.normal.values,
      l = e.attributes.st.values,
      v = e.attributes.position.values.length / 3,
      y = o.length,
      f = new Array(3 * v)
    for (t = 0; t < f.length; t++) f[t] = 0
    for (t = 0; t < y; t += 3) {
      var c = o[t],
        m = o[t + 1],
        C = o[t + 2]
      ;(i = 3 * m), (s = 3 * C)
      var h = 2 * c,
        b = 2 * m,
        g = 2 * C,
        A = p[(a = 3 * c)],
        T = p[a + 1],
        x = p[a + 2],
        P = l[h],
        w = l[h + 1],
        S = l[b + 1] - w,
        I = l[g + 1] - w,
        O = 1 / ((l[b] - P) * I - (l[g] - P) * S),
        E = (I * (p[i] - A) - S * (p[s] - A)) * O,
        N = (I * (p[i + 1] - T) - S * (p[s + 1] - T)) * O,
        L = (I * (p[i + 2] - x) - S * (p[s + 2] - x)) * O
      ;(f[a] += E), (f[a + 1] += N), (f[a + 2] += L), (f[i] += E), (f[i + 1] += N), (f[i + 2] += L), (f[s] += E), (f[s + 1] += N), (f[s + 2] += L)
    }
    var z = new Float32Array(3 * v),
      D = new Float32Array(3 * v)
    for (t = 0; t < v; t++) {
      ;(i = (a = 3 * t) + 1), (s = a + 2)
      var V = r.Cartesian3.fromArray(d, a, M),
        F = r.Cartesian3.fromArray(f, a, R),
        B = r.Cartesian3.dot(V, F)
      r.Cartesian3.multiplyByScalar(V, B, G),
        r.Cartesian3.normalize(r.Cartesian3.subtract(F, G, F), F),
        (z[a] = F.x),
        (z[i] = F.y),
        (z[s] = F.z),
        r.Cartesian3.normalize(r.Cartesian3.cross(V, F, F), F),
        (D[a] = F.x),
        (D[i] = F.y),
        (D[s] = F.z)
    }
    return (
      (e.attributes.tangent = new u.GeometryAttribute({ componentDatatype: n.ComponentDatatype.FLOAT, componentsPerAttribute: 3, values: z })),
      (e.attributes.bitangent = new u.GeometryAttribute({ componentDatatype: n.ComponentDatatype.FLOAT, componentsPerAttribute: 3, values: D })),
      e
    )
  }
  var V = new r.Cartesian2(),
    F = new r.Cartesian3(),
    B = new r.Cartesian3(),
    _ = new r.Cartesian3(),
    k = new r.Cartesian2()
  function q(e) {
    switch (e.primitiveType) {
      case u.PrimitiveType.TRIANGLE_FAN:
        return (function (e) {
          var t = u.Geometry.computeNumberOfVertices(e),
            r = p.IndexDatatype.createTypedArray(t, 3 * (t - 2))
          ;(r[0] = 1), (r[1] = 0), (r[2] = 2)
          for (var a = 3, i = 3; i < t; ++i) (r[a++] = i - 1), (r[a++] = 0), (r[a++] = i)
          return (e.indices = r), (e.primitiveType = u.PrimitiveType.TRIANGLES), e
        })(e)
      case u.PrimitiveType.TRIANGLE_STRIP:
        return (function (e) {
          var t = u.Geometry.computeNumberOfVertices(e),
            r = p.IndexDatatype.createTypedArray(t, 3 * (t - 2))
          ;(r[0] = 0), (r[1] = 1), (r[2] = 2), t > 3 && ((r[3] = 0), (r[4] = 2), (r[5] = 3))
          for (var a = 6, i = 3; i < t - 1; i += 2)
            (r[a++] = i), (r[a++] = i - 1), (r[a++] = i + 1), i + 2 < t && ((r[a++] = i), (r[a++] = i + 1), (r[a++] = i + 2))
          return (e.indices = r), (e.primitiveType = u.PrimitiveType.TRIANGLES), e
        })(e)
      case u.PrimitiveType.TRIANGLES:
        return (function (e) {
          if (i.defined(e.indices)) return e
          for (var t = u.Geometry.computeNumberOfVertices(e), r = p.IndexDatatype.createTypedArray(t, t), a = 0; a < t; ++a) r[a] = a
          return (e.indices = r), e
        })(e)
      case u.PrimitiveType.LINE_STRIP:
        return (function (e) {
          var t = u.Geometry.computeNumberOfVertices(e),
            r = p.IndexDatatype.createTypedArray(t, 2 * (t - 1))
          ;(r[0] = 0), (r[1] = 1)
          for (var a = 2, i = 2; i < t; ++i) (r[a++] = i - 1), (r[a++] = i)
          return (e.indices = r), (e.primitiveType = u.PrimitiveType.LINES), e
        })(e)
      case u.PrimitiveType.LINE_LOOP:
        return (function (e) {
          var t = u.Geometry.computeNumberOfVertices(e),
            r = p.IndexDatatype.createTypedArray(t, 2 * t)
          ;(r[0] = 0), (r[1] = 1)
          for (var a = 2, i = 2; i < t; ++i) (r[a++] = i - 1), (r[a++] = i)
          return (r[a++] = t - 1), (r[a] = 0), (e.indices = r), (e.primitiveType = u.PrimitiveType.LINES), e
        })(e)
      case u.PrimitiveType.LINES:
        return (function (e) {
          if (i.defined(e.indices)) return e
          for (var t = u.Geometry.computeNumberOfVertices(e), r = p.IndexDatatype.createTypedArray(t, t), a = 0; a < t; ++a) r[a] = a
          return (e.indices = r), e
        })(e)
    }
    return e
  }
  function U(e, t) {
    Math.abs(e.y) < n.CesiumMath.EPSILON6 && (e.y = t ? -n.CesiumMath.EPSILON6 : n.CesiumMath.EPSILON6)
  }
  m.compressVertices = function (e) {
    var a,
      s,
      o = e.attributes.extrudeDirection
    if (i.defined(o)) {
      var p = o.values
      s = p.length / 3
      var d = new Float32Array(2 * s),
        l = 0
      for (a = 0; a < s; ++a)
        r.Cartesian3.fromArray(p, 3 * a, F),
          r.Cartesian3.equals(F, r.Cartesian3.ZERO)
            ? (l += 2)
            : ((k = t.AttributeCompression.octEncodeInRange(F, 65535, k)), (d[l++] = k.x), (d[l++] = k.y))
      return (
        (e.attributes.compressedAttributes = new u.GeometryAttribute({
          componentDatatype: n.ComponentDatatype.FLOAT,
          componentsPerAttribute: 2,
          values: d
        })),
        delete e.attributes.extrudeDirection,
        e
      )
    }
    var v = e.attributes.normal,
      y = e.attributes.st,
      f = i.defined(v),
      c = i.defined(y)
    if (!f && !c) return e
    var m,
      C,
      h,
      b,
      g = e.attributes.tangent,
      A = e.attributes.bitangent,
      T = i.defined(g),
      x = i.defined(A)
    f && (m = v.values), c && (C = y.values), T && (h = g.values), x && (b = A.values)
    var P = (s = (f ? m.length : C.length) / (f ? 3 : 2)),
      w = c && f ? 2 : 1
    w += T || x ? 1 : 0
    var S = new Float32Array((P *= w)),
      I = 0
    for (a = 0; a < s; ++a) {
      c && (r.Cartesian2.fromArray(C, 2 * a, V), (S[I++] = t.AttributeCompression.compressTextureCoordinates(V)))
      var O = 3 * a
      f && i.defined(h) && i.defined(b)
        ? (r.Cartesian3.fromArray(m, O, F),
          r.Cartesian3.fromArray(h, O, B),
          r.Cartesian3.fromArray(b, O, _),
          t.AttributeCompression.octPack(F, B, _, V),
          (S[I++] = V.x),
          (S[I++] = V.y))
        : (f && (r.Cartesian3.fromArray(m, O, F), (S[I++] = t.AttributeCompression.octEncodeFloat(F))),
          T && (r.Cartesian3.fromArray(h, O, F), (S[I++] = t.AttributeCompression.octEncodeFloat(F))),
          x && (r.Cartesian3.fromArray(b, O, F), (S[I++] = t.AttributeCompression.octEncodeFloat(F))))
    }
    return (
      (e.attributes.compressedAttributes = new u.GeometryAttribute({
        componentDatatype: n.ComponentDatatype.FLOAT,
        componentsPerAttribute: w,
        values: S
      })),
      f && delete e.attributes.normal,
      c && delete e.attributes.st,
      x && delete e.attributes.bitangent,
      T && delete e.attributes.tangent,
      e
    )
  }
  var Y = new r.Cartesian3()
  function Z(e, t, a, i) {
    r.Cartesian3.add(e, r.Cartesian3.multiplyByScalar(r.Cartesian3.subtract(t, e, Y), e.y / (e.y - t.y), Y), a),
      r.Cartesian3.clone(a, i),
      U(a, !0),
      U(i, !1)
  }
  var H = new r.Cartesian3(),
    W = new r.Cartesian3(),
    X = new r.Cartesian3(),
    j = new r.Cartesian3(),
    J = { positions: new Array(7), indices: new Array(9) }
  function K(e, t, r) {
    if (!(e.x >= 0 || t.x >= 0 || r.x >= 0)) {
      !(function (e, t, r) {
        if (0 !== e.y && 0 !== t.y && 0 !== r.y) return U(e, e.y < 0), U(t, t.y < 0), void U(r, r.y < 0)
        var a = Math.abs(e.y),
          i = Math.abs(t.y),
          s = Math.abs(r.y),
          o = (a > i ? (a > s ? n.CesiumMath.sign(e.y) : n.CesiumMath.sign(r.y)) : i > s ? n.CesiumMath.sign(t.y) : n.CesiumMath.sign(r.y)) < 0
        U(e, o), U(t, o), U(r, o)
      })(e, t, r)
      var a = e.y < 0,
        i = t.y < 0,
        s = r.y < 0,
        o = 0
      ;(o += a ? 1 : 0), (o += i ? 1 : 0)
      var u = J.indices
      1 === (o += s ? 1 : 0)
        ? ((u[1] = 3),
          (u[2] = 4),
          (u[5] = 6),
          (u[7] = 6),
          (u[8] = 5),
          a
            ? (Z(e, t, H, X), Z(e, r, W, j), (u[0] = 0), (u[3] = 1), (u[4] = 2), (u[6] = 1))
            : i
            ? (Z(t, r, H, X), Z(t, e, W, j), (u[0] = 1), (u[3] = 2), (u[4] = 0), (u[6] = 2))
            : s && (Z(r, e, H, X), Z(r, t, W, j), (u[0] = 2), (u[3] = 0), (u[4] = 1), (u[6] = 0)))
        : 2 === o &&
          ((u[2] = 4),
          (u[4] = 4),
          (u[5] = 3),
          (u[7] = 5),
          (u[8] = 6),
          a
            ? i
              ? s || (Z(r, e, H, X), Z(r, t, W, j), (u[0] = 0), (u[1] = 1), (u[3] = 0), (u[6] = 2))
              : (Z(t, r, H, X), Z(t, e, W, j), (u[0] = 2), (u[1] = 0), (u[3] = 2), (u[6] = 1))
            : (Z(e, t, H, X), Z(e, r, W, j), (u[0] = 1), (u[1] = 2), (u[3] = 1), (u[6] = 0)))
      var p = J.positions
      return (
        (p[0] = e),
        (p[1] = t),
        (p[2] = r),
        (p.length = 3),
        (1 !== o && 2 !== o) || ((p[3] = H), (p[4] = W), (p[5] = X), (p[6] = j), (p.length = 7)),
        J
      )
    }
  }
  function Q(e, t) {
    var r = e.attributes
    if (0 !== r.position.values.length) {
      for (var a in r)
        if (r.hasOwnProperty(a) && i.defined(r[a]) && i.defined(r[a].values)) {
          var o = r[a]
          o.values = n.ComponentDatatype.createTypedArray(o.componentDatatype, o.values)
        }
      var d = u.Geometry.computeNumberOfVertices(e)
      return (
        (e.indices = p.IndexDatatype.createTypedArray(d, e.indices)), t && (e.boundingSphere = s.BoundingSphere.fromVertices(r.position.values)), e
      )
    }
  }
  function $(e) {
    var t = e.attributes,
      r = {}
    for (var a in t)
      if (t.hasOwnProperty(a) && i.defined(t[a]) && i.defined(t[a].values)) {
        var n = t[a]
        r[a] = new u.GeometryAttribute({
          componentDatatype: n.componentDatatype,
          componentsPerAttribute: n.componentsPerAttribute,
          normalize: n.normalize,
          values: []
        })
      }
    return new u.Geometry({ attributes: r, indices: [], primitiveType: e.primitiveType })
  }
  function ee(e, t, r) {
    var a = i.defined(e.geometry.boundingSphere)
    ;(t = Q(t, a)),
      (r = Q(r, a)),
      i.defined(r) && !i.defined(t)
        ? (e.geometry = r)
        : !i.defined(r) && i.defined(t)
        ? (e.geometry = t)
        : ((e.westHemisphereGeometry = t), (e.eastHemisphereGeometry = r), (e.geometry = void 0))
  }
  function te(e, t) {
    var r = new e(),
      a = new e(),
      i = new e()
    return function (n, s, o, u, p, d, l, v) {
      var y = e.fromArray(p, n * t, r),
        f = e.fromArray(p, s * t, a),
        c = e.fromArray(p, o * t, i)
      e.multiplyByScalar(y, u.x, y), e.multiplyByScalar(f, u.y, f), e.multiplyByScalar(c, u.z, c)
      var m = e.add(y, f, y)
      e.add(m, c, m), v && e.normalize(m, m), e.pack(m, d, l * t)
    }
  }
  var re = te(r.Cartesian4, 4),
    ae = te(r.Cartesian3, 3),
    ie = te(r.Cartesian2, 2),
    ne = new r.Cartesian3(),
    se = new r.Cartesian3(),
    oe = new r.Cartesian3(),
    ue = new r.Cartesian3()
  function pe(e, t, a, s, o, u, p, d, l, c, m, C, h, b, g, A) {
    if (i.defined(u) || i.defined(p) || i.defined(d) || i.defined(l) || i.defined(c) || 0 !== b) {
      var T = (function (e, t, a, s, o) {
        var u, p, d, l, c, m, C, h
        if ((i.defined(o) || (o = new r.Cartesian3()), i.defined(t.z))) {
          if (r.Cartesian3.equalsEpsilon(e, t, n.CesiumMath.EPSILON14)) return r.Cartesian3.clone(r.Cartesian3.UNIT_X, o)
          if (r.Cartesian3.equalsEpsilon(e, a, n.CesiumMath.EPSILON14)) return r.Cartesian3.clone(r.Cartesian3.UNIT_Y, o)
          if (r.Cartesian3.equalsEpsilon(e, s, n.CesiumMath.EPSILON14)) return r.Cartesian3.clone(r.Cartesian3.UNIT_Z, o)
          ;(u = r.Cartesian3.subtract(a, t, v)),
            (p = r.Cartesian3.subtract(s, t, y)),
            (d = r.Cartesian3.subtract(e, t, f)),
            (l = r.Cartesian3.dot(u, u)),
            (c = r.Cartesian3.dot(u, p)),
            (m = r.Cartesian3.dot(u, d)),
            (C = r.Cartesian3.dot(p, p)),
            (h = r.Cartesian3.dot(p, d))
        } else {
          if (r.Cartesian2.equalsEpsilon(e, t, n.CesiumMath.EPSILON14)) return r.Cartesian3.clone(r.Cartesian3.UNIT_X, o)
          if (r.Cartesian2.equalsEpsilon(e, a, n.CesiumMath.EPSILON14)) return r.Cartesian3.clone(r.Cartesian3.UNIT_Y, o)
          if (r.Cartesian2.equalsEpsilon(e, s, n.CesiumMath.EPSILON14)) return r.Cartesian3.clone(r.Cartesian3.UNIT_Z, o)
          ;(u = r.Cartesian2.subtract(a, t, v)),
            (p = r.Cartesian2.subtract(s, t, y)),
            (d = r.Cartesian2.subtract(e, t, f)),
            (l = r.Cartesian2.dot(u, u)),
            (c = r.Cartesian2.dot(u, p)),
            (m = r.Cartesian2.dot(u, d)),
            (C = r.Cartesian2.dot(p, p)),
            (h = r.Cartesian2.dot(p, d))
        }
        ;(o.y = C * m - c * h), (o.z = l * h - c * m)
        var b = l * C - c * c
        if (0 !== b) return (o.y /= b), (o.z /= b), (o.x = 1 - o.y - o.z), o
      })(s, r.Cartesian3.fromArray(o, 3 * e, ne), r.Cartesian3.fromArray(o, 3 * t, se), r.Cartesian3.fromArray(o, 3 * a, oe), ue)
      if (i.defined(T)) {
        if ((i.defined(u) && ae(e, t, a, T, u, C.normal.values, A, !0), i.defined(c))) {
          var x,
            P = r.Cartesian3.fromArray(c, 3 * e, ne),
            w = r.Cartesian3.fromArray(c, 3 * t, se),
            S = r.Cartesian3.fromArray(c, 3 * a, oe)
          r.Cartesian3.multiplyByScalar(P, T.x, P),
            r.Cartesian3.multiplyByScalar(w, T.y, w),
            r.Cartesian3.multiplyByScalar(S, T.z, S),
            r.Cartesian3.equals(P, r.Cartesian3.ZERO) && r.Cartesian3.equals(w, r.Cartesian3.ZERO) && r.Cartesian3.equals(S, r.Cartesian3.ZERO)
              ? (((x = ne).x = 0), (x.y = 0), (x.z = 0))
              : ((x = r.Cartesian3.add(P, w, P)), r.Cartesian3.add(x, S, x), r.Cartesian3.normalize(x, x)),
            r.Cartesian3.pack(x, C.extrudeDirection.values, 3 * A)
        }
        if (
          (i.defined(m) &&
            (function (e, t, r, a, i, s, o) {
              var u = i[e] * a.x,
                p = i[t] * a.y,
                d = i[r] * a.z
              s[o] = u + p + d > n.CesiumMath.EPSILON6 ? 1 : 0
            })(e, t, a, T, m, C.applyOffset.values, A),
          i.defined(p) && ae(e, t, a, T, p, C.tangent.values, A, !0),
          i.defined(d) && ae(e, t, a, T, d, C.bitangent.values, A, !0),
          i.defined(l) && ie(e, t, a, T, l, C.st.values, A),
          b > 0)
        )
          for (var I = 0; I < b; I++) {
            var O = h[I]
            de(e, t, a, T, A, g[O], C[O])
          }
      }
    }
  }
  function de(e, t, r, a, i, n, s) {
    var o = n.componentsPerAttribute,
      u = n.values,
      p = s.values
    switch (o) {
      case 4:
        re(e, t, r, a, u, p, i, !1)
        break
      case 3:
        ae(e, t, r, a, u, p, i, !1)
        break
      case 2:
        ie(e, t, r, a, u, p, i, !1)
        break
      default:
        p[i] = u[e] * a.x + u[t] * a.y + u[r] * a.z
    }
  }
  function le(e, t, r, a, i, n) {
    var s = e.position.values.length / 3
    if (-1 !== i) {
      var o = a[i],
        u = r[o]
      return -1 === u ? ((r[o] = s), e.position.values.push(n.x, n.y, n.z), t.push(s), s) : (t.push(u), u)
    }
    return e.position.values.push(n.x, n.y, n.z), t.push(s), s
  }
  var ve = { position: !0, normal: !0, bitangent: !0, tangent: !0, st: !0, extrudeDirection: !0, applyOffset: !0 }
  function ye(e) {
    var t = e.geometry,
      a = t.attributes,
      n = a.position.values,
      s = i.defined(a.normal) ? a.normal.values : void 0,
      o = i.defined(a.bitangent) ? a.bitangent.values : void 0,
      u = i.defined(a.tangent) ? a.tangent.values : void 0,
      p = i.defined(a.st) ? a.st.values : void 0,
      d = i.defined(a.extrudeDirection) ? a.extrudeDirection.values : void 0,
      l = i.defined(a.applyOffset) ? a.applyOffset.values : void 0,
      v = t.indices,
      y = []
    for (var f in a) a.hasOwnProperty(f) && !ve[f] && i.defined(a[f]) && y.push(f)
    var c,
      m,
      C,
      h,
      b = y.length,
      g = $(t),
      A = $(t),
      T = []
    T.length = n.length / 3
    var x = []
    for (x.length = n.length / 3, h = 0; h < T.length; ++h) (T[h] = -1), (x[h] = -1)
    var P = v.length
    for (h = 0; h < P; h += 3) {
      var w = v[h],
        S = v[h + 1],
        I = v[h + 2],
        O = r.Cartesian3.fromArray(n, 3 * w),
        E = r.Cartesian3.fromArray(n, 3 * S),
        N = r.Cartesian3.fromArray(n, 3 * I),
        L = K(O, E, N)
      if (i.defined(L) && L.positions.length > 3)
        for (var z = L.positions, D = L.indices, M = D.length, G = 0; G < M; ++G) {
          var R = D[G],
            V = z[R]
          V.y < 0 ? ((c = A.attributes), (m = A.indices), (C = T)) : ((c = g.attributes), (m = g.indices), (C = x)),
            pe(w, S, I, V, n, s, u, o, p, d, l, c, y, b, a, le(c, m, C, v, R < 3 ? h + R : -1, V))
        }
      else
        i.defined(L) && ((O = L.positions[0]), (E = L.positions[1]), (N = L.positions[2])),
          O.y < 0 ? ((c = A.attributes), (m = A.indices), (C = T)) : ((c = g.attributes), (m = g.indices), (C = x)),
          pe(w, S, I, O, n, s, u, o, p, d, l, c, y, b, a, le(c, m, C, v, h, O)),
          pe(w, S, I, E, n, s, u, o, p, d, l, c, y, b, a, le(c, m, C, v, h + 1, E)),
          pe(w, S, I, N, n, s, u, o, p, d, l, c, y, b, a, le(c, m, C, v, h + 2, N))
    }
    ee(e, A, g)
  }
  var fe = l.Plane.fromPointNormal(r.Cartesian3.ZERO, r.Cartesian3.UNIT_Y),
    ce = new r.Cartesian3(),
    me = new r.Cartesian3()
  function Ce(e, t, a, s, o, u, p) {
    if (i.defined(p)) {
      var d = r.Cartesian3.fromArray(s, 3 * e, ne)
      r.Cartesian3.equalsEpsilon(d, a, n.CesiumMath.EPSILON10) ? (u.applyOffset.values[o] = p[e]) : (u.applyOffset.values[o] = p[t])
    }
  }
  function he(e) {
    var t,
      a = e.geometry,
      s = a.attributes,
      o = s.position.values,
      u = i.defined(s.applyOffset) ? s.applyOffset.values : void 0,
      p = a.indices,
      l = $(a),
      v = $(a),
      y = p.length,
      f = []
    f.length = o.length / 3
    var c = []
    for (c.length = o.length / 3, t = 0; t < f.length; ++t) (f[t] = -1), (c[t] = -1)
    for (t = 0; t < y; t += 2) {
      var m = p[t],
        C = p[t + 1],
        h = r.Cartesian3.fromArray(o, 3 * m, ne),
        b = r.Cartesian3.fromArray(o, 3 * C, se)
      Math.abs(h.y) < n.CesiumMath.EPSILON6 && (h.y < 0 ? (h.y = -n.CesiumMath.EPSILON6) : (h.y = n.CesiumMath.EPSILON6)),
        Math.abs(b.y) < n.CesiumMath.EPSILON6 && (b.y < 0 ? (b.y = -n.CesiumMath.EPSILON6) : (b.y = n.CesiumMath.EPSILON6))
      var g = l.attributes,
        A = l.indices,
        T = c,
        x = v.attributes,
        P = v.indices,
        w = f,
        S = d.IntersectionTests.lineSegmentPlane(h, b, fe, oe)
      if (i.defined(S)) {
        var I = r.Cartesian3.multiplyByScalar(r.Cartesian3.UNIT_Y, 5 * n.CesiumMath.EPSILON9, ce)
        h.y < 0 && (r.Cartesian3.negate(I, I), (g = v.attributes), (A = v.indices), (T = f), (x = l.attributes), (P = l.indices), (w = c))
        var O = r.Cartesian3.add(S, I, me)
        Ce(m, C, h, o, le(g, A, T, p, t, h), g, u),
          Ce(m, C, O, o, le(g, A, T, p, -1, O), g, u),
          r.Cartesian3.negate(I, I),
          r.Cartesian3.add(S, I, O),
          Ce(m, C, O, o, le(x, P, w, p, -1, O), x, u),
          Ce(m, C, b, o, le(x, P, w, p, t + 1, b), x, u)
      } else {
        var E, N, L
        h.y < 0 ? ((E = v.attributes), (N = v.indices), (L = f)) : ((E = l.attributes), (N = l.indices), (L = c)),
          Ce(m, C, h, o, le(E, N, L, p, t, h), E, u),
          Ce(m, C, b, o, le(E, N, L, p, t + 1, b), E, u)
      }
    }
    ee(e, v, l)
  }
  var be = new r.Cartesian2(),
    ge = new r.Cartesian2(),
    Ae = new r.Cartesian3(),
    Te = new r.Cartesian3(),
    xe = new r.Cartesian3(),
    Pe = new r.Cartesian3(),
    we = new r.Cartesian3(),
    Se = new r.Cartesian3(),
    Ie = new r.Cartesian4()
  function Oe(e) {
    for (var t = e.attributes, a = t.position.values, i = t.prevPosition.values, n = t.nextPosition.values, s = a.length, o = 0; o < s; o += 3) {
      var u = r.Cartesian3.unpack(a, o, Ae)
      if (!(u.x > 0)) {
        var p = r.Cartesian3.unpack(i, o, Te)
        ;((u.y < 0 && p.y > 0) || (u.y > 0 && p.y < 0)) &&
          (o - 3 > 0 ? ((i[o] = a[o - 3]), (i[o + 1] = a[o - 2]), (i[o + 2] = a[o - 1])) : r.Cartesian3.pack(u, i, o))
        var d = r.Cartesian3.unpack(n, o, xe)
        ;((u.y < 0 && d.y > 0) || (u.y > 0 && d.y < 0)) &&
          (o + 3 < s ? ((n[o] = a[o + 3]), (n[o + 1] = a[o + 4]), (n[o + 2] = a[o + 5])) : r.Cartesian3.pack(u, n, o))
      }
    }
  }
  var Ee = 5 * n.CesiumMath.EPSILON9,
    Ne = n.CesiumMath.EPSILON6
  ;(m.splitLongitude = function (e) {
    var t = e.geometry,
      a = t.boundingSphere
    if (i.defined(a) && (a.center.x - a.radius > 0 || s.BoundingSphere.intersectPlane(a, l.Plane.ORIGIN_ZX_PLANE) !== s.Intersect.INTERSECTING))
      return e
    if (t.geometryType !== u.GeometryType.NONE)
      switch (t.geometryType) {
        case u.GeometryType.POLYLINES:
          !(function (e) {
            var t,
              a,
              s,
              o = e.geometry,
              u = o.attributes,
              p = u.position.values,
              l = u.prevPosition.values,
              v = u.nextPosition.values,
              y = u.expandAndWidth.values,
              f = i.defined(u.st) ? u.st.values : void 0,
              c = i.defined(u.color) ? u.color.values : void 0,
              m = $(o),
              C = $(o),
              h = !1,
              b = p.length / 3
            for (t = 0; t < b; t += 4) {
              var g = t,
                A = t + 2,
                T = r.Cartesian3.fromArray(p, 3 * g, Ae),
                x = r.Cartesian3.fromArray(p, 3 * A, Te)
              if (Math.abs(T.y) < Ne)
                for (T.y = Ne * (x.y < 0 ? -1 : 1), p[3 * t + 1] = T.y, p[3 * (t + 1) + 1] = T.y, a = 3 * g; a < 3 * g + 12; a += 3)
                  (l[a] = p[3 * t]), (l[a + 1] = p[3 * t + 1]), (l[a + 2] = p[3 * t + 2])
              if (Math.abs(x.y) < Ne)
                for (x.y = Ne * (T.y < 0 ? -1 : 1), p[3 * (t + 2) + 1] = x.y, p[3 * (t + 3) + 1] = x.y, a = 3 * g; a < 3 * g + 12; a += 3)
                  (v[a] = p[3 * (t + 2)]), (v[a + 1] = p[3 * (t + 2) + 1]), (v[a + 2] = p[3 * (t + 2) + 2])
              var P = m.attributes,
                w = m.indices,
                S = C.attributes,
                I = C.indices,
                O = d.IntersectionTests.lineSegmentPlane(T, x, fe, Pe)
              if (i.defined(O)) {
                h = !0
                var E = r.Cartesian3.multiplyByScalar(r.Cartesian3.UNIT_Y, Ee, we)
                T.y < 0 && (r.Cartesian3.negate(E, E), (P = C.attributes), (w = C.indices), (S = m.attributes), (I = m.indices))
                var N = r.Cartesian3.add(O, E, Se)
                P.position.values.push(T.x, T.y, T.z, T.x, T.y, T.z),
                  P.position.values.push(N.x, N.y, N.z),
                  P.position.values.push(N.x, N.y, N.z),
                  P.prevPosition.values.push(l[3 * g], l[3 * g + 1], l[3 * g + 2]),
                  P.prevPosition.values.push(l[3 * g + 3], l[3 * g + 4], l[3 * g + 5]),
                  P.prevPosition.values.push(T.x, T.y, T.z, T.x, T.y, T.z),
                  P.nextPosition.values.push(N.x, N.y, N.z),
                  P.nextPosition.values.push(N.x, N.y, N.z),
                  P.nextPosition.values.push(N.x, N.y, N.z),
                  P.nextPosition.values.push(N.x, N.y, N.z),
                  r.Cartesian3.negate(E, E),
                  r.Cartesian3.add(O, E, N),
                  S.position.values.push(N.x, N.y, N.z),
                  S.position.values.push(N.x, N.y, N.z),
                  S.position.values.push(x.x, x.y, x.z, x.x, x.y, x.z),
                  S.prevPosition.values.push(N.x, N.y, N.z),
                  S.prevPosition.values.push(N.x, N.y, N.z),
                  S.prevPosition.values.push(N.x, N.y, N.z),
                  S.prevPosition.values.push(N.x, N.y, N.z),
                  S.nextPosition.values.push(x.x, x.y, x.z, x.x, x.y, x.z),
                  S.nextPosition.values.push(v[3 * A], v[3 * A + 1], v[3 * A + 2]),
                  S.nextPosition.values.push(v[3 * A + 3], v[3 * A + 4], v[3 * A + 5])
                var L = r.Cartesian2.fromArray(y, 2 * g, be),
                  z = Math.abs(L.y)
                P.expandAndWidth.values.push(-1, z, 1, z),
                  P.expandAndWidth.values.push(-1, -z, 1, -z),
                  S.expandAndWidth.values.push(-1, z, 1, z),
                  S.expandAndWidth.values.push(-1, -z, 1, -z)
                var D = r.Cartesian3.magnitudeSquared(r.Cartesian3.subtract(O, T, xe))
                if (((D /= r.Cartesian3.magnitudeSquared(r.Cartesian3.subtract(x, T, xe))), i.defined(c))) {
                  var M = r.Cartesian4.fromArray(c, 4 * g, Ie),
                    G = r.Cartesian4.fromArray(c, 4 * A, Ie),
                    R = n.CesiumMath.lerp(M.x, G.x, D),
                    V = n.CesiumMath.lerp(M.y, G.y, D),
                    F = n.CesiumMath.lerp(M.z, G.z, D),
                    B = n.CesiumMath.lerp(M.w, G.w, D)
                  for (a = 4 * g; a < 4 * g + 8; ++a) P.color.values.push(c[a])
                  for (
                    P.color.values.push(R, V, F, B),
                      P.color.values.push(R, V, F, B),
                      S.color.values.push(R, V, F, B),
                      S.color.values.push(R, V, F, B),
                      a = 4 * A;
                    a < 4 * A + 8;
                    ++a
                  )
                    S.color.values.push(c[a])
                }
                if (i.defined(f)) {
                  var _ = r.Cartesian2.fromArray(f, 2 * g, be),
                    k = r.Cartesian2.fromArray(f, 2 * (t + 3), ge),
                    q = n.CesiumMath.lerp(_.x, k.x, D)
                  for (a = 2 * g; a < 2 * g + 4; ++a) P.st.values.push(f[a])
                  for (
                    P.st.values.push(q, _.y), P.st.values.push(q, k.y), S.st.values.push(q, _.y), S.st.values.push(q, k.y), a = 2 * A;
                    a < 2 * A + 4;
                    ++a
                  )
                    S.st.values.push(f[a])
                }
                ;(s = P.position.values.length / 3 - 4),
                  w.push(s, s + 2, s + 1),
                  w.push(s + 1, s + 2, s + 3),
                  (s = S.position.values.length / 3 - 4),
                  I.push(s, s + 2, s + 1),
                  I.push(s + 1, s + 2, s + 3)
              } else {
                var U, Y
                for (
                  T.y < 0 ? ((U = C.attributes), (Y = C.indices)) : ((U = m.attributes), (Y = m.indices)),
                    U.position.values.push(T.x, T.y, T.z),
                    U.position.values.push(T.x, T.y, T.z),
                    U.position.values.push(x.x, x.y, x.z),
                    U.position.values.push(x.x, x.y, x.z),
                    a = 3 * t;
                  a < 3 * t + 12;
                  ++a
                )
                  U.prevPosition.values.push(l[a]), U.nextPosition.values.push(v[a])
                for (a = 2 * t; a < 2 * t + 8; ++a) U.expandAndWidth.values.push(y[a]), i.defined(f) && U.st.values.push(f[a])
                if (i.defined(c)) for (a = 4 * t; a < 4 * t + 16; ++a) U.color.values.push(c[a])
                ;(s = U.position.values.length / 3 - 4), Y.push(s, s + 2, s + 1), Y.push(s + 1, s + 2, s + 3)
              }
            }
            h && (Oe(C), Oe(m)), ee(e, C, m)
          })(e)
          break
        case u.GeometryType.TRIANGLES:
          ye(e)
          break
        case u.GeometryType.LINES:
          he(e)
      }
    else q(t), t.primitiveType === u.PrimitiveType.TRIANGLES ? ye(e) : t.primitiveType === u.PrimitiveType.LINES && he(e)
    return e
  }),
    (e.GeometryPipeline = m)
})
