define(['exports', './ComponentDatatype-93750d1a'], function (t, r) {
  'use strict'
  var e = {
    computePositions: function (t, e, a, n, o) {
      var i,
        s = 0.5 * t,
        u = -s,
        c = n + n,
        y = new Float64Array(3 * (o ? 2 * c : c)),
        f = 0,
        m = 0,
        p = o ? 3 * c : 0,
        d = o ? 3 * (c + n) : 3 * n
      for (i = 0; i < n; i++) {
        var h = (i / n) * r.CesiumMath.TWO_PI,
          v = Math.cos(h),
          C = Math.sin(h),
          M = v * a,
          l = C * a,
          P = v * e,
          b = C * e
        ;(y[m + p] = M),
          (y[m + p + 1] = l),
          (y[m + p + 2] = u),
          (y[m + d] = P),
          (y[m + d + 1] = b),
          (y[m + d + 2] = s),
          (m += 3),
          o && ((y[f++] = M), (y[f++] = l), (y[f++] = u), (y[f++] = P), (y[f++] = b), (y[f++] = s))
      }
      return y
    }
  }
  t.CylinderGeometryLibrary = e
})
