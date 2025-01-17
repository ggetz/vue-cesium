define([
  'exports',
  './Matrix2-9aa31791',
  './when-4bbc8319',
  './RuntimeError-346a3079',
  './EllipsoidGeodesic-dd8f2afb',
  './EllipsoidRhumbLine-30c47ff4',
  './IntersectionTests-96a04219',
  './ComponentDatatype-93750d1a',
  './Plane-318d6937'
], function (a, e, r, t, i, n, o, s, c) {
  'use strict'
  var l = {
      numberOfPoints: function (a, r, t) {
        var i = e.Cartesian3.distance(a, r)
        return Math.ceil(i / t)
      },
      numberOfPointsRhumbLine: function (a, e, r) {
        var t = Math.pow(a.longitude - e.longitude, 2) + Math.pow(a.latitude - e.latitude, 2)
        return Math.max(1, Math.ceil(Math.sqrt(t / (r * r))))
      }
    },
    u = new e.Cartographic()
  l.extractHeights = function (a, e) {
    for (var r = a.length, t = new Array(r), i = 0; i < r; i++) {
      var n = a[i]
      t[i] = e.cartesianToCartographic(n, u).height
    }
    return t
  }
  var h = new e.Matrix4(),
    f = new e.Cartesian3(),
    g = new e.Cartesian3(),
    C = new c.Plane(e.Cartesian3.UNIT_X, 0),
    p = new e.Cartesian3(),
    d = new c.Plane(e.Cartesian3.UNIT_X, 0),
    v = new e.Cartesian3(),
    m = new e.Cartesian3(),
    w = []
  function P(a, e, r) {
    var t,
      i = w
    if (((i.length = a), e === r)) {
      for (t = 0; t < a; t++) i[t] = e
      return i
    }
    var n = (r - e) / a
    for (t = 0; t < a; t++) {
      var o = e + t * n
      i[t] = o
    }
    return i
  }
  var T = new e.Cartographic(),
    y = new e.Cartographic(),
    A = new e.Cartesian3(),
    E = new e.Cartesian3(),
    b = new e.Cartesian3(),
    R = new i.EllipsoidGeodesic(),
    M = new n.EllipsoidRhumbLine()
  function S(a, r, t, i, n, o, s, c) {
    var u = i.scaleToGeodeticSurface(a, E),
      h = i.scaleToGeodeticSurface(r, b),
      f = l.numberOfPoints(a, r, t),
      g = i.cartesianToCartographic(u, T),
      C = i.cartesianToCartographic(h, y),
      p = P(f, n, o)
    R.setEndPoints(g, C)
    var d = R.surfaceDistance / f,
      v = c
    g.height = n
    var m = i.cartographicToCartesian(g, A)
    e.Cartesian3.pack(m, s, v), (v += 3)
    for (var w = 1; w < f; w++) {
      var M = R.interpolateUsingSurfaceDistance(w * d, y)
      ;(M.height = p[w]), (m = i.cartographicToCartesian(M, A)), e.Cartesian3.pack(m, s, v), (v += 3)
    }
    return v
  }
  function D(a, r, t, i, o, s, c, u) {
    var h = i.cartesianToCartographic(a, T),
      f = i.cartesianToCartographic(r, y),
      g = l.numberOfPointsRhumbLine(h, f, t)
    ;(h.height = 0), (f.height = 0)
    var C = P(g, o, s)
    M.ellipsoid.equals(i) || (M = new n.EllipsoidRhumbLine(void 0, void 0, i)), M.setEndPoints(h, f)
    var p = M.surfaceDistance / g,
      d = u
    h.height = o
    var v = i.cartographicToCartesian(h, A)
    e.Cartesian3.pack(v, c, d), (d += 3)
    for (var m = 1; m < g; m++) {
      var w = M.interpolateUsingSurfaceDistance(m * p, y)
      ;(w.height = C[m]), (v = i.cartographicToCartesian(w, A)), e.Cartesian3.pack(v, c, d), (d += 3)
    }
    return d
  }
  ;(l.wrapLongitude = function (a, t) {
    var i = [],
      n = []
    if (r.defined(a) && a.length > 0) {
      t = r.defaultValue(t, e.Matrix4.IDENTITY)
      var s = e.Matrix4.inverseTransformation(t, h),
        l = e.Matrix4.multiplyByPoint(s, e.Cartesian3.ZERO, f),
        u = e.Cartesian3.normalize(e.Matrix4.multiplyByPointAsVector(s, e.Cartesian3.UNIT_Y, g), g),
        w = c.Plane.fromPointNormal(l, u, C),
        P = e.Cartesian3.normalize(e.Matrix4.multiplyByPointAsVector(s, e.Cartesian3.UNIT_X, p), p),
        T = c.Plane.fromPointNormal(l, P, d),
        y = 1
      i.push(e.Cartesian3.clone(a[0]))
      for (var A = i[0], E = a.length, b = 1; b < E; ++b) {
        var R = a[b]
        if (c.Plane.getPointDistance(T, A) < 0 || c.Plane.getPointDistance(T, R) < 0) {
          var M = o.IntersectionTests.lineSegmentPlane(A, R, w, v)
          if (r.defined(M)) {
            var S = e.Cartesian3.multiplyByScalar(u, 5e-9, m)
            c.Plane.getPointDistance(w, A) < 0 && e.Cartesian3.negate(S, S),
              i.push(e.Cartesian3.add(M, S, new e.Cartesian3())),
              n.push(y + 1),
              e.Cartesian3.negate(S, S),
              i.push(e.Cartesian3.add(M, S, new e.Cartesian3())),
              (y = 1)
          }
        }
        i.push(e.Cartesian3.clone(a[b])), y++, (A = R)
      }
      n.push(y)
    }
    return { positions: i, lengths: n }
  }),
    (l.generateArc = function (a) {
      r.defined(a) || (a = {})
      var t = a.positions,
        i = t.length,
        n = r.defaultValue(a.ellipsoid, e.Ellipsoid.WGS84),
        o = r.defaultValue(a.height, 0),
        c = Array.isArray(o)
      if (i < 1) return []
      if (1 === i) {
        var u = n.scaleToGeodeticSurface(t[0], E)
        if (0 !== (o = c ? o[0] : o)) {
          var h = n.geodeticSurfaceNormal(u, A)
          e.Cartesian3.multiplyByScalar(h, o, h), e.Cartesian3.add(u, h, u)
        }
        return [u.x, u.y, u.z]
      }
      var f = a.minDistance
      if (!r.defined(f)) {
        var g = r.defaultValue(a.granularity, s.CesiumMath.RADIANS_PER_DEGREE)
        f = s.CesiumMath.chordLength(g, n.maximumRadius)
      }
      var C,
        p = 0
      for (C = 0; C < i - 1; C++) p += l.numberOfPoints(t[C], t[C + 1], f)
      var d = 3 * (p + 1),
        v = new Array(d),
        m = 0
      for (C = 0; C < i - 1; C++) {
        m = S(t[C], t[C + 1], f, n, c ? o[C] : o, c ? o[C + 1] : o, v, m)
      }
      w.length = 0
      var P = t[i - 1],
        y = n.cartesianToCartographic(P, T)
      y.height = c ? o[i - 1] : o
      var b = n.cartographicToCartesian(y, A)
      return e.Cartesian3.pack(b, v, d - 3), v
    })
  var x = new e.Cartographic(),
    N = new e.Cartographic()
  ;(l.generateRhumbArc = function (a) {
    r.defined(a) || (a = {})
    var t = a.positions,
      i = t.length,
      n = r.defaultValue(a.ellipsoid, e.Ellipsoid.WGS84),
      o = r.defaultValue(a.height, 0),
      c = Array.isArray(o)
    if (i < 1) return []
    if (1 === i) {
      var u = n.scaleToGeodeticSurface(t[0], E)
      if (0 !== (o = c ? o[0] : o)) {
        var h = n.geodeticSurfaceNormal(u, A)
        e.Cartesian3.multiplyByScalar(h, o, h), e.Cartesian3.add(u, h, u)
      }
      return [u.x, u.y, u.z]
    }
    var f,
      g,
      C = r.defaultValue(a.granularity, s.CesiumMath.RADIANS_PER_DEGREE),
      p = 0,
      d = n.cartesianToCartographic(t[0], x)
    for (f = 0; f < i - 1; f++)
      (g = n.cartesianToCartographic(t[f + 1], N)), (p += l.numberOfPointsRhumbLine(d, g, C)), (d = e.Cartographic.clone(g, x))
    var v = 3 * (p + 1),
      m = new Array(v),
      P = 0
    for (f = 0; f < i - 1; f++) {
      P = D(t[f], t[f + 1], C, n, c ? o[f] : o, c ? o[f + 1] : o, m, P)
    }
    w.length = 0
    var y = t[i - 1],
      b = n.cartesianToCartographic(y, T)
    b.height = c ? o[i - 1] : o
    var R = n.cartographicToCartesian(b, A)
    return e.Cartesian3.pack(R, m, v - 3), m
  }),
    (l.generateCartesianArc = function (a) {
      for (var r = l.generateArc(a), t = r.length / 3, i = new Array(t), n = 0; n < t; n++) i[n] = e.Cartesian3.unpack(r, 3 * n)
      return i
    }),
    (l.generateCartesianRhumbArc = function (a) {
      for (var r = l.generateRhumbArc(a), t = r.length / 3, i = new Array(t), n = 0; n < t; n++) i[n] = e.Cartesian3.unpack(r, 3 * n)
      return i
    }),
    (a.PolylinePipeline = l)
})
