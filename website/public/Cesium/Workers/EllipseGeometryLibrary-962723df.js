define(['exports', './Matrix2-9aa31791', './ComponentDatatype-93750d1a', './Transforms-d13cc04e'], function (a, r, e, t) {
  'use strict'
  var i = {},
    n = new r.Cartesian3(),
    s = new r.Cartesian3(),
    o = new t.Quaternion(),
    l = new r.Matrix3()
  function C(a, e, i, C, y, u, m, c, h, x) {
    var M = a + e
    r.Cartesian3.multiplyByScalar(C, Math.cos(M), n), r.Cartesian3.multiplyByScalar(i, Math.sin(M), s), r.Cartesian3.add(n, s, n)
    var z = Math.cos(a)
    z *= z
    var f = Math.sin(a)
    f *= f
    var d = u / Math.sqrt(m * z + y * f) / c
    return (
      t.Quaternion.fromAxisAngle(n, d, o),
      r.Matrix3.fromQuaternion(o, l),
      r.Matrix3.multiplyByVector(l, h, x),
      r.Cartesian3.normalize(x, x),
      r.Cartesian3.multiplyByScalar(x, c, x),
      x
    )
  }
  var y = new r.Cartesian3(),
    u = new r.Cartesian3(),
    m = new r.Cartesian3(),
    c = new r.Cartesian3()
  i.raisePositionsToHeight = function (a, e, t) {
    for (
      var i = e.ellipsoid,
        n = e.height,
        s = e.extrudedHeight,
        o = t ? (a.length / 3) * 2 : a.length / 3,
        l = new Float64Array(3 * o),
        C = a.length,
        h = t ? C : 0,
        x = 0;
      x < C;
      x += 3
    ) {
      var M = x + 1,
        z = x + 2,
        f = r.Cartesian3.fromArray(a, x, y)
      i.scaleToGeodeticSurface(f, f)
      var d = r.Cartesian3.clone(f, u),
        _ = i.geodeticSurfaceNormal(f, c),
        p = r.Cartesian3.multiplyByScalar(_, n, m)
      r.Cartesian3.add(f, p, f),
        t && (r.Cartesian3.multiplyByScalar(_, s, p), r.Cartesian3.add(d, p, d), (l[x + h] = d.x), (l[M + h] = d.y), (l[z + h] = d.z)),
        (l[x] = f.x),
        (l[M] = f.y),
        (l[z] = f.z)
    }
    return l
  }
  var h = new r.Cartesian3(),
    x = new r.Cartesian3(),
    M = new r.Cartesian3()
  ;(i.computeEllipsePositions = function (a, t, i) {
    var n = a.semiMinorAxis,
      s = a.semiMajorAxis,
      o = a.rotation,
      l = a.center,
      c = 8 * a.granularity,
      z = n * n,
      f = s * s,
      d = s * n,
      _ = r.Cartesian3.magnitude(l),
      p = r.Cartesian3.normalize(l, h),
      v = r.Cartesian3.cross(r.Cartesian3.UNIT_Z, l, x)
    v = r.Cartesian3.normalize(v, v)
    var O = r.Cartesian3.cross(p, v, M),
      w = 1 + Math.ceil(e.CesiumMath.PI_OVER_TWO / c),
      P = e.CesiumMath.PI_OVER_TWO / (w - 1),
      T = e.CesiumMath.PI_OVER_TWO - w * P
    T < 0 && (w -= Math.ceil(Math.abs(T) / P))
    var I,
      g,
      E,
      V,
      A,
      R = t ? new Array(3 * (w * (w + 2) * 2)) : void 0,
      W = 0,
      S = y,
      B = u,
      Q = 4 * w * 3,
      b = Q - 1,
      G = 0,
      H = i ? new Array(Q) : void 0
    for (
      S = C((T = e.CesiumMath.PI_OVER_TWO), o, O, v, z, d, f, _, p, S),
        t && ((R[W++] = S.x), (R[W++] = S.y), (R[W++] = S.z)),
        i && ((H[b--] = S.z), (H[b--] = S.y), (H[b--] = S.x)),
        T = e.CesiumMath.PI_OVER_TWO - P,
        I = 1;
      I < w + 1;
      ++I
    ) {
      if (((S = C(T, o, O, v, z, d, f, _, p, S)), (B = C(Math.PI - T, o, O, v, z, d, f, _, p, B)), t)) {
        for (R[W++] = S.x, R[W++] = S.y, R[W++] = S.z, E = 2 * I + 2, g = 1; g < E - 1; ++g)
          (V = g / (E - 1)), (A = r.Cartesian3.lerp(S, B, V, m)), (R[W++] = A.x), (R[W++] = A.y), (R[W++] = A.z)
        ;(R[W++] = B.x), (R[W++] = B.y), (R[W++] = B.z)
      }
      i && ((H[b--] = S.z), (H[b--] = S.y), (H[b--] = S.x), (H[G++] = B.x), (H[G++] = B.y), (H[G++] = B.z)),
        (T = e.CesiumMath.PI_OVER_TWO - (I + 1) * P)
    }
    for (I = w; I > 1; --I) {
      if (((S = C(-(T = e.CesiumMath.PI_OVER_TWO - (I - 1) * P), o, O, v, z, d, f, _, p, S)), (B = C(T + Math.PI, o, O, v, z, d, f, _, p, B)), t)) {
        for (R[W++] = S.x, R[W++] = S.y, R[W++] = S.z, E = 2 * (I - 1) + 2, g = 1; g < E - 1; ++g)
          (V = g / (E - 1)), (A = r.Cartesian3.lerp(S, B, V, m)), (R[W++] = A.x), (R[W++] = A.y), (R[W++] = A.z)
        ;(R[W++] = B.x), (R[W++] = B.y), (R[W++] = B.z)
      }
      i && ((H[b--] = S.z), (H[b--] = S.y), (H[b--] = S.x), (H[G++] = B.x), (H[G++] = B.y), (H[G++] = B.z))
    }
    S = C(-(T = e.CesiumMath.PI_OVER_TWO), o, O, v, z, d, f, _, p, S)
    var N = {}
    return (
      t && ((R[W++] = S.x), (R[W++] = S.y), (R[W++] = S.z), (N.positions = R), (N.numPts = w)),
      i && ((H[b--] = S.z), (H[b--] = S.y), (H[b--] = S.x), (N.outerPositions = H)),
      N
    )
  }),
    (a.EllipseGeometryLibrary = i)
})
