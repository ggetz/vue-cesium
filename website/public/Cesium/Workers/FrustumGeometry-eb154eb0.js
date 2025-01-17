define([
  'exports',
  './Transforms-d13cc04e',
  './Matrix2-9aa31791',
  './RuntimeError-346a3079',
  './ComponentDatatype-93750d1a',
  './when-4bbc8319',
  './GeometryAttribute-43536dc0',
  './GeometryAttributes-7827a6c2',
  './Plane-318d6937',
  './VertexFormat-71718faa'
], function (t, e, a, i, r, n, o, s, f, u) {
  'use strict'
  function l(t) {
    this.planes = n.defaultValue(t, [])
  }
  var h = [new a.Cartesian3(), new a.Cartesian3(), new a.Cartesian3()]
  a.Cartesian3.clone(a.Cartesian3.UNIT_X, h[0]), a.Cartesian3.clone(a.Cartesian3.UNIT_Y, h[1]), a.Cartesian3.clone(a.Cartesian3.UNIT_Z, h[2])
  var p = new a.Cartesian3(),
    d = new a.Cartesian3(),
    c = new f.Plane(new a.Cartesian3(1, 0, 0), 0)
  function m(t) {
    ;(t = n.defaultValue(t, n.defaultValue.EMPTY_OBJECT)),
      (this.left = t.left),
      (this._left = void 0),
      (this.right = t.right),
      (this._right = void 0),
      (this.top = t.top),
      (this._top = void 0),
      (this.bottom = t.bottom),
      (this._bottom = void 0),
      (this.near = n.defaultValue(t.near, 1)),
      (this._near = this.near),
      (this.far = n.defaultValue(t.far, 5e8)),
      (this._far = this.far),
      (this._cullingVolume = new l()),
      (this._orthographicMatrix = new a.Matrix4())
  }
  function C(t) {
    ;(t.top === t._top && t.bottom === t._bottom && t.left === t._left && t.right === t._right && t.near === t._near && t.far === t._far) ||
      ((t._left = t.left),
      (t._right = t.right),
      (t._top = t.top),
      (t._bottom = t.bottom),
      (t._near = t.near),
      (t._far = t.far),
      (t._orthographicMatrix = a.Matrix4.computeOrthographicOffCenter(t.left, t.right, t.bottom, t.top, t.near, t.far, t._orthographicMatrix)))
  }
  ;(l.fromBoundingSphere = function (t, e) {
    n.defined(e) || (e = new l())
    var i = h.length,
      r = e.planes
    r.length = 2 * i
    for (var o = t.center, s = t.radius, f = 0, u = 0; u < i; ++u) {
      var c = h[u],
        m = r[f],
        C = r[f + 1]
      n.defined(m) || (m = r[f] = new a.Cartesian4()),
        n.defined(C) || (C = r[f + 1] = new a.Cartesian4()),
        a.Cartesian3.multiplyByScalar(c, -s, p),
        a.Cartesian3.add(o, p, p),
        (m.x = c.x),
        (m.y = c.y),
        (m.z = c.z),
        (m.w = -a.Cartesian3.dot(c, p)),
        a.Cartesian3.multiplyByScalar(c, s, p),
        a.Cartesian3.add(o, p, p),
        (C.x = -c.x),
        (C.y = -c.y),
        (C.z = -c.z),
        (C.w = -a.Cartesian3.dot(a.Cartesian3.negate(c, d), p)),
        (f += 2)
    }
    return e
  }),
    (l.prototype.computeVisibility = function (t) {
      for (var a = this.planes, i = !1, r = 0, n = a.length; r < n; ++r) {
        var o = t.intersectPlane(f.Plane.fromCartesian4(a[r], c))
        if (o === e.Intersect.OUTSIDE) return e.Intersect.OUTSIDE
        o === e.Intersect.INTERSECTING && (i = !0)
      }
      return i ? e.Intersect.INTERSECTING : e.Intersect.INSIDE
    }),
    (l.prototype.computeVisibilityWithPlaneMask = function (t, a) {
      if (a === l.MASK_OUTSIDE || a === l.MASK_INSIDE) return a
      for (var i = l.MASK_INSIDE, r = this.planes, n = 0, o = r.length; n < o; ++n) {
        var s = n < 31 ? 1 << n : 0
        if (!(n < 31 && 0 == (a & s))) {
          var u = t.intersectPlane(f.Plane.fromCartesian4(r[n], c))
          if (u === e.Intersect.OUTSIDE) return l.MASK_OUTSIDE
          u === e.Intersect.INTERSECTING && (i |= s)
        }
      }
      return i
    }),
    (l.MASK_OUTSIDE = 4294967295),
    (l.MASK_INSIDE = 0),
    (l.MASK_INDETERMINATE = 2147483647),
    Object.defineProperties(m.prototype, {
      projectionMatrix: {
        get: function () {
          return C(this), this._orthographicMatrix
        }
      }
    })
  var _ = new a.Cartesian3(),
    y = new a.Cartesian3(),
    v = new a.Cartesian3(),
    g = new a.Cartesian3()
  function w(t) {
    ;(t = n.defaultValue(t, n.defaultValue.EMPTY_OBJECT)),
      (this._offCenterFrustum = new m()),
      (this.width = t.width),
      (this._width = void 0),
      (this.aspectRatio = t.aspectRatio),
      (this._aspectRatio = void 0),
      (this.near = n.defaultValue(t.near, 1)),
      (this._near = this.near),
      (this.far = n.defaultValue(t.far, 5e8)),
      (this._far = this.far)
  }
  function x(t) {
    var e = t._offCenterFrustum
    if (t.width !== t._width || t.aspectRatio !== t._aspectRatio || t.near !== t._near || t.far !== t._far) {
      ;(t._aspectRatio = t.aspectRatio), (t._width = t.width), (t._near = t.near), (t._far = t.far)
      var a = 1 / t.aspectRatio
      ;(e.right = 0.5 * t.width), (e.left = -e.right), (e.top = a * e.right), (e.bottom = -e.top), (e.near = t.near), (e.far = t.far)
    }
  }
  function M(t) {
    ;(t = n.defaultValue(t, n.defaultValue.EMPTY_OBJECT)),
      (this.left = t.left),
      (this._left = void 0),
      (this.right = t.right),
      (this._right = void 0),
      (this.top = t.top),
      (this._top = void 0),
      (this.bottom = t.bottom),
      (this._bottom = void 0),
      (this.near = n.defaultValue(t.near, 1)),
      (this._near = this.near),
      (this.far = n.defaultValue(t.far, 5e8)),
      (this._far = this.far),
      (this._cullingVolume = new l()),
      (this._perspectiveMatrix = new a.Matrix4()),
      (this._infinitePerspective = new a.Matrix4())
  }
  function b(t) {
    var e = t.top,
      i = t.bottom,
      r = t.right,
      n = t.left,
      o = t.near,
      s = t.far
    ;(e === t._top && i === t._bottom && n === t._left && r === t._right && o === t._near && s === t._far) ||
      ((t._left = n),
      (t._right = r),
      (t._top = e),
      (t._bottom = i),
      (t._near = o),
      (t._far = s),
      (t._perspectiveMatrix = a.Matrix4.computePerspectiveOffCenter(n, r, i, e, o, s, t._perspectiveMatrix)),
      (t._infinitePerspective = a.Matrix4.computeInfinitePerspectiveOffCenter(n, r, i, e, o, t._infinitePerspective)))
  }
  ;(m.prototype.computeCullingVolume = function (t, e, i) {
    var r = this._cullingVolume.planes,
      o = this.top,
      s = this.bottom,
      f = this.right,
      u = this.left,
      l = this.near,
      h = this.far,
      p = a.Cartesian3.cross(e, i, _)
    a.Cartesian3.normalize(p, p)
    var d = y
    a.Cartesian3.multiplyByScalar(e, l, d), a.Cartesian3.add(t, d, d)
    var c = v
    a.Cartesian3.multiplyByScalar(p, u, c), a.Cartesian3.add(d, c, c)
    var m = r[0]
    return (
      n.defined(m) || (m = r[0] = new a.Cartesian4()),
      (m.x = p.x),
      (m.y = p.y),
      (m.z = p.z),
      (m.w = -a.Cartesian3.dot(p, c)),
      a.Cartesian3.multiplyByScalar(p, f, c),
      a.Cartesian3.add(d, c, c),
      (m = r[1]),
      n.defined(m) || (m = r[1] = new a.Cartesian4()),
      (m.x = -p.x),
      (m.y = -p.y),
      (m.z = -p.z),
      (m.w = -a.Cartesian3.dot(a.Cartesian3.negate(p, g), c)),
      a.Cartesian3.multiplyByScalar(i, s, c),
      a.Cartesian3.add(d, c, c),
      (m = r[2]),
      n.defined(m) || (m = r[2] = new a.Cartesian4()),
      (m.x = i.x),
      (m.y = i.y),
      (m.z = i.z),
      (m.w = -a.Cartesian3.dot(i, c)),
      a.Cartesian3.multiplyByScalar(i, o, c),
      a.Cartesian3.add(d, c, c),
      (m = r[3]),
      n.defined(m) || (m = r[3] = new a.Cartesian4()),
      (m.x = -i.x),
      (m.y = -i.y),
      (m.z = -i.z),
      (m.w = -a.Cartesian3.dot(a.Cartesian3.negate(i, g), c)),
      (m = r[4]),
      n.defined(m) || (m = r[4] = new a.Cartesian4()),
      (m.x = e.x),
      (m.y = e.y),
      (m.z = e.z),
      (m.w = -a.Cartesian3.dot(e, d)),
      a.Cartesian3.multiplyByScalar(e, h, c),
      a.Cartesian3.add(t, c, c),
      (m = r[5]),
      n.defined(m) || (m = r[5] = new a.Cartesian4()),
      (m.x = -e.x),
      (m.y = -e.y),
      (m.z = -e.z),
      (m.w = -a.Cartesian3.dot(a.Cartesian3.negate(e, g), c)),
      this._cullingVolume
    )
  }),
    (m.prototype.getPixelDimensions = function (t, e, a, i, r) {
      C(this)
      var n = (i * (this.right - this.left)) / t,
        o = (i * (this.top - this.bottom)) / e
      return (r.x = n), (r.y = o), r
    }),
    (m.prototype.clone = function (t) {
      return (
        n.defined(t) || (t = new m()),
        (t.left = this.left),
        (t.right = this.right),
        (t.top = this.top),
        (t.bottom = this.bottom),
        (t.near = this.near),
        (t.far = this.far),
        (t._left = void 0),
        (t._right = void 0),
        (t._top = void 0),
        (t._bottom = void 0),
        (t._near = void 0),
        (t._far = void 0),
        t
      )
    }),
    (m.prototype.equals = function (t) {
      return (
        n.defined(t) &&
        t instanceof m &&
        this.right === t.right &&
        this.left === t.left &&
        this.top === t.top &&
        this.bottom === t.bottom &&
        this.near === t.near &&
        this.far === t.far
      )
    }),
    (m.prototype.equalsEpsilon = function (t, e, a) {
      return (
        t === this ||
        (n.defined(t) &&
          t instanceof m &&
          r.CesiumMath.equalsEpsilon(this.right, t.right, e, a) &&
          r.CesiumMath.equalsEpsilon(this.left, t.left, e, a) &&
          r.CesiumMath.equalsEpsilon(this.top, t.top, e, a) &&
          r.CesiumMath.equalsEpsilon(this.bottom, t.bottom, e, a) &&
          r.CesiumMath.equalsEpsilon(this.near, t.near, e, a) &&
          r.CesiumMath.equalsEpsilon(this.far, t.far, e, a))
      )
    }),
    (w.packedLength = 4),
    (w.pack = function (t, e, a) {
      return (a = n.defaultValue(a, 0)), (e[a++] = t.width), (e[a++] = t.aspectRatio), (e[a++] = t.near), (e[a] = t.far), e
    }),
    (w.unpack = function (t, e, a) {
      return (
        (e = n.defaultValue(e, 0)), n.defined(a) || (a = new w()), (a.width = t[e++]), (a.aspectRatio = t[e++]), (a.near = t[e++]), (a.far = t[e]), a
      )
    }),
    Object.defineProperties(w.prototype, {
      projectionMatrix: {
        get: function () {
          return x(this), this._offCenterFrustum.projectionMatrix
        }
      }
    }),
    (w.prototype.computeCullingVolume = function (t, e, a) {
      return x(this), this._offCenterFrustum.computeCullingVolume(t, e, a)
    }),
    (w.prototype.getPixelDimensions = function (t, e, a, i, r) {
      return x(this), this._offCenterFrustum.getPixelDimensions(t, e, a, i, r)
    }),
    (w.prototype.clone = function (t) {
      return (
        n.defined(t) || (t = new w()),
        (t.aspectRatio = this.aspectRatio),
        (t.width = this.width),
        (t.near = this.near),
        (t.far = this.far),
        (t._aspectRatio = void 0),
        (t._width = void 0),
        (t._near = void 0),
        (t._far = void 0),
        this._offCenterFrustum.clone(t._offCenterFrustum),
        t
      )
    }),
    (w.prototype.equals = function (t) {
      return (
        !!(n.defined(t) && t instanceof w) &&
        (x(this), x(t), this.width === t.width && this.aspectRatio === t.aspectRatio && this._offCenterFrustum.equals(t._offCenterFrustum))
      )
    }),
    (w.prototype.equalsEpsilon = function (t, e, a) {
      return (
        !!(n.defined(t) && t instanceof w) &&
        (x(this),
        x(t),
        r.CesiumMath.equalsEpsilon(this.width, t.width, e, a) &&
          r.CesiumMath.equalsEpsilon(this.aspectRatio, t.aspectRatio, e, a) &&
          this._offCenterFrustum.equalsEpsilon(t._offCenterFrustum, e, a))
      )
    }),
    Object.defineProperties(M.prototype, {
      projectionMatrix: {
        get: function () {
          return b(this), this._perspectiveMatrix
        }
      },
      infiniteProjectionMatrix: {
        get: function () {
          return b(this), this._infinitePerspective
        }
      }
    })
  var F = new a.Cartesian3(),
    V = new a.Cartesian3(),
    E = new a.Cartesian3(),
    O = new a.Cartesian3()
  function P(t) {
    ;(t = n.defaultValue(t, n.defaultValue.EMPTY_OBJECT)),
      (this._offCenterFrustum = new M()),
      (this.fov = t.fov),
      (this._fov = void 0),
      (this._fovy = void 0),
      (this._sseDenominator = void 0),
      (this.aspectRatio = t.aspectRatio),
      (this._aspectRatio = void 0),
      (this.near = n.defaultValue(t.near, 1)),
      (this._near = this.near),
      (this.far = n.defaultValue(t.far, 5e8)),
      (this._far = this.far),
      (this.xOffset = n.defaultValue(t.xOffset, 0)),
      (this._xOffset = this.xOffset),
      (this.yOffset = n.defaultValue(t.yOffset, 0)),
      (this._yOffset = this.yOffset)
  }
  function z(t) {
    var e = t._offCenterFrustum
    ;(t.fov === t._fov &&
      t.aspectRatio === t._aspectRatio &&
      t.near === t._near &&
      t.far === t._far &&
      t.xOffset === t._xOffset &&
      t.yOffset === t._yOffset) ||
      ((t._aspectRatio = t.aspectRatio),
      (t._fov = t.fov),
      (t._fovy = t.aspectRatio <= 1 ? t.fov : 2 * Math.atan(Math.tan(0.5 * t.fov) / t.aspectRatio)),
      (t._near = t.near),
      (t._far = t.far),
      (t._sseDenominator = 2 * Math.tan(0.5 * t._fovy)),
      (t._xOffset = t.xOffset),
      (t._yOffset = t.yOffset),
      (e.top = t.near * Math.tan(0.5 * t._fovy)),
      (e.bottom = -e.top),
      (e.right = t.aspectRatio * e.top),
      (e.left = -e.right),
      (e.near = t.near),
      (e.far = t.far),
      (e.right += t.xOffset),
      (e.left += t.xOffset),
      (e.top += t.yOffset),
      (e.bottom += t.yOffset))
  }
  ;(M.prototype.computeCullingVolume = function (t, e, i) {
    var r = this._cullingVolume.planes,
      o = this.top,
      s = this.bottom,
      f = this.right,
      u = this.left,
      l = this.near,
      h = this.far,
      p = a.Cartesian3.cross(e, i, F),
      d = V
    a.Cartesian3.multiplyByScalar(e, l, d), a.Cartesian3.add(t, d, d)
    var c = E
    a.Cartesian3.multiplyByScalar(e, h, c), a.Cartesian3.add(t, c, c)
    var m = O
    a.Cartesian3.multiplyByScalar(p, u, m),
      a.Cartesian3.add(d, m, m),
      a.Cartesian3.subtract(m, t, m),
      a.Cartesian3.normalize(m, m),
      a.Cartesian3.cross(m, i, m),
      a.Cartesian3.normalize(m, m)
    var C = r[0]
    return (
      n.defined(C) || (C = r[0] = new a.Cartesian4()),
      (C.x = m.x),
      (C.y = m.y),
      (C.z = m.z),
      (C.w = -a.Cartesian3.dot(m, t)),
      a.Cartesian3.multiplyByScalar(p, f, m),
      a.Cartesian3.add(d, m, m),
      a.Cartesian3.subtract(m, t, m),
      a.Cartesian3.cross(i, m, m),
      a.Cartesian3.normalize(m, m),
      (C = r[1]),
      n.defined(C) || (C = r[1] = new a.Cartesian4()),
      (C.x = m.x),
      (C.y = m.y),
      (C.z = m.z),
      (C.w = -a.Cartesian3.dot(m, t)),
      a.Cartesian3.multiplyByScalar(i, s, m),
      a.Cartesian3.add(d, m, m),
      a.Cartesian3.subtract(m, t, m),
      a.Cartesian3.cross(p, m, m),
      a.Cartesian3.normalize(m, m),
      (C = r[2]),
      n.defined(C) || (C = r[2] = new a.Cartesian4()),
      (C.x = m.x),
      (C.y = m.y),
      (C.z = m.z),
      (C.w = -a.Cartesian3.dot(m, t)),
      a.Cartesian3.multiplyByScalar(i, o, m),
      a.Cartesian3.add(d, m, m),
      a.Cartesian3.subtract(m, t, m),
      a.Cartesian3.cross(m, p, m),
      a.Cartesian3.normalize(m, m),
      (C = r[3]),
      n.defined(C) || (C = r[3] = new a.Cartesian4()),
      (C.x = m.x),
      (C.y = m.y),
      (C.z = m.z),
      (C.w = -a.Cartesian3.dot(m, t)),
      (C = r[4]),
      n.defined(C) || (C = r[4] = new a.Cartesian4()),
      (C.x = e.x),
      (C.y = e.y),
      (C.z = e.z),
      (C.w = -a.Cartesian3.dot(e, d)),
      a.Cartesian3.negate(e, m),
      (C = r[5]),
      n.defined(C) || (C = r[5] = new a.Cartesian4()),
      (C.x = m.x),
      (C.y = m.y),
      (C.z = m.z),
      (C.w = -a.Cartesian3.dot(m, c)),
      this._cullingVolume
    )
  }),
    (M.prototype.getPixelDimensions = function (t, e, a, i, r) {
      b(this)
      var n = 1 / this.near,
        o = this.top * n,
        s = (2 * i * a * o) / e,
        f = (2 * i * a * (o = this.right * n)) / t
      return (r.x = f), (r.y = s), r
    }),
    (M.prototype.clone = function (t) {
      return (
        n.defined(t) || (t = new M()),
        (t.right = this.right),
        (t.left = this.left),
        (t.top = this.top),
        (t.bottom = this.bottom),
        (t.near = this.near),
        (t.far = this.far),
        (t._left = void 0),
        (t._right = void 0),
        (t._top = void 0),
        (t._bottom = void 0),
        (t._near = void 0),
        (t._far = void 0),
        t
      )
    }),
    (M.prototype.equals = function (t) {
      return (
        n.defined(t) &&
        t instanceof M &&
        this.right === t.right &&
        this.left === t.left &&
        this.top === t.top &&
        this.bottom === t.bottom &&
        this.near === t.near &&
        this.far === t.far
      )
    }),
    (M.prototype.equalsEpsilon = function (t, e, a) {
      return (
        t === this ||
        (n.defined(t) &&
          t instanceof M &&
          r.CesiumMath.equalsEpsilon(this.right, t.right, e, a) &&
          r.CesiumMath.equalsEpsilon(this.left, t.left, e, a) &&
          r.CesiumMath.equalsEpsilon(this.top, t.top, e, a) &&
          r.CesiumMath.equalsEpsilon(this.bottom, t.bottom, e, a) &&
          r.CesiumMath.equalsEpsilon(this.near, t.near, e, a) &&
          r.CesiumMath.equalsEpsilon(this.far, t.far, e, a))
      )
    }),
    (P.packedLength = 6),
    (P.pack = function (t, e, a) {
      return (
        (a = n.defaultValue(a, 0)),
        (e[a++] = t.fov),
        (e[a++] = t.aspectRatio),
        (e[a++] = t.near),
        (e[a++] = t.far),
        (e[a++] = t.xOffset),
        (e[a] = t.yOffset),
        e
      )
    }),
    (P.unpack = function (t, e, a) {
      return (
        (e = n.defaultValue(e, 0)),
        n.defined(a) || (a = new P()),
        (a.fov = t[e++]),
        (a.aspectRatio = t[e++]),
        (a.near = t[e++]),
        (a.far = t[e++]),
        (a.xOffset = t[e++]),
        (a.yOffset = t[e]),
        a
      )
    }),
    Object.defineProperties(P.prototype, {
      projectionMatrix: {
        get: function () {
          return z(this), this._offCenterFrustum.projectionMatrix
        }
      },
      infiniteProjectionMatrix: {
        get: function () {
          return z(this), this._offCenterFrustum.infiniteProjectionMatrix
        }
      },
      fovy: {
        get: function () {
          return z(this), this._fovy
        }
      },
      sseDenominator: {
        get: function () {
          return z(this), this._sseDenominator
        }
      }
    }),
    (P.prototype.computeCullingVolume = function (t, e, a) {
      return z(this), this._offCenterFrustum.computeCullingVolume(t, e, a)
    }),
    (P.prototype.getPixelDimensions = function (t, e, a, i, r) {
      return z(this), this._offCenterFrustum.getPixelDimensions(t, e, a, i, r)
    }),
    (P.prototype.clone = function (t) {
      return (
        n.defined(t) || (t = new P()),
        (t.aspectRatio = this.aspectRatio),
        (t.fov = this.fov),
        (t.near = this.near),
        (t.far = this.far),
        (t._aspectRatio = void 0),
        (t._fov = void 0),
        (t._near = void 0),
        (t._far = void 0),
        this._offCenterFrustum.clone(t._offCenterFrustum),
        t
      )
    }),
    (P.prototype.equals = function (t) {
      return (
        !!(n.defined(t) && t instanceof P) &&
        (z(this), z(t), this.fov === t.fov && this.aspectRatio === t.aspectRatio && this._offCenterFrustum.equals(t._offCenterFrustum))
      )
    }),
    (P.prototype.equalsEpsilon = function (t, e, a) {
      return (
        !!(n.defined(t) && t instanceof P) &&
        (z(this),
        z(t),
        r.CesiumMath.equalsEpsilon(this.fov, t.fov, e, a) &&
          r.CesiumMath.equalsEpsilon(this.aspectRatio, t.aspectRatio, e, a) &&
          this._offCenterFrustum.equalsEpsilon(t._offCenterFrustum, e, a))
      )
    })
  function R(t) {
    var i,
      r,
      o = t.frustum,
      s = t.orientation,
      f = t.origin,
      l = n.defaultValue(t.vertexFormat, u.VertexFormat.DEFAULT),
      h = n.defaultValue(t._drawNearPlane, !0)
    o instanceof P ? ((i = 0), (r = P.packedLength)) : o instanceof w && ((i = 1), (r = w.packedLength)),
      (this._frustumType = i),
      (this._frustum = o.clone()),
      (this._origin = a.Cartesian3.clone(f)),
      (this._orientation = e.Quaternion.clone(s)),
      (this._drawNearPlane = h),
      (this._vertexFormat = l),
      (this._workerName = 'createFrustumGeometry'),
      (this.packedLength = 2 + r + a.Cartesian3.packedLength + e.Quaternion.packedLength + u.VertexFormat.packedLength)
  }
  R.pack = function (t, i, r) {
    r = n.defaultValue(r, 0)
    var o = t._frustumType,
      s = t._frustum
    return (
      (i[r++] = o),
      0 === o ? (P.pack(s, i, r), (r += P.packedLength)) : (w.pack(s, i, r), (r += w.packedLength)),
      a.Cartesian3.pack(t._origin, i, r),
      (r += a.Cartesian3.packedLength),
      e.Quaternion.pack(t._orientation, i, r),
      (r += e.Quaternion.packedLength),
      u.VertexFormat.pack(t._vertexFormat, i, r),
      (i[(r += u.VertexFormat.packedLength)] = t._drawNearPlane ? 1 : 0),
      i
    )
  }
  var S = new P(),
    T = new w(),
    k = new e.Quaternion(),
    A = new a.Cartesian3(),
    D = new u.VertexFormat()
  function I(t, e, a, i, r, o, s, f) {
    for (var u = (t / 3) * 2, l = 0; l < 4; ++l)
      n.defined(e) && ((e[t] = o.x), (e[t + 1] = o.y), (e[t + 2] = o.z)),
        n.defined(a) && ((a[t] = s.x), (a[t + 1] = s.y), (a[t + 2] = s.z)),
        n.defined(i) && ((i[t] = f.x), (i[t + 1] = f.y), (i[t + 2] = f.z)),
        (t += 3)
    ;(r[u] = 0), (r[u + 1] = 0), (r[u + 2] = 1), (r[u + 3] = 0), (r[u + 4] = 1), (r[u + 5] = 1), (r[u + 6] = 0), (r[u + 7] = 1)
  }
  R.unpack = function (t, i, r) {
    i = n.defaultValue(i, 0)
    var o,
      s = t[i++]
    0 === s ? ((o = P.unpack(t, i, S)), (i += P.packedLength)) : ((o = w.unpack(t, i, T)), (i += w.packedLength))
    var f = a.Cartesian3.unpack(t, i, A)
    i += a.Cartesian3.packedLength
    var l = e.Quaternion.unpack(t, i, k)
    i += e.Quaternion.packedLength
    var h = u.VertexFormat.unpack(t, i, D),
      p = 1 === t[(i += u.VertexFormat.packedLength)]
    if (!n.defined(r)) return new R({ frustum: o, origin: f, orientation: l, vertexFormat: h, _drawNearPlane: p })
    var d = s === r._frustumType ? r._frustum : void 0
    return (
      (r._frustum = o.clone(d)),
      (r._frustumType = s),
      (r._origin = a.Cartesian3.clone(f, r._origin)),
      (r._orientation = e.Quaternion.clone(l, r._orientation)),
      (r._vertexFormat = u.VertexFormat.clone(h, r._vertexFormat)),
      (r._drawNearPlane = p),
      r
    )
  }
  var q = new a.Matrix3(),
    B = new a.Matrix4(),
    L = new a.Matrix4(),
    N = new a.Cartesian3(),
    G = new a.Cartesian3(),
    j = new a.Cartesian3(),
    U = new a.Cartesian3(),
    Q = new a.Cartesian3(),
    K = new a.Cartesian3(),
    Y = new Array(3),
    J = new Array(4)
  ;(J[0] = new a.Cartesian4(-1, -1, 1, 1)),
    (J[1] = new a.Cartesian4(1, -1, 1, 1)),
    (J[2] = new a.Cartesian4(1, 1, 1, 1)),
    (J[3] = new a.Cartesian4(-1, 1, 1, 1))
  for (var W = new Array(4), X = 0; X < 4; ++X) W[X] = new a.Cartesian4()
  ;(R._computeNearFarPlanes = function (t, e, i, r, o, s, f, u) {
    var l = a.Matrix3.fromQuaternion(e, q),
      h = n.defaultValue(s, N),
      p = n.defaultValue(f, G),
      d = n.defaultValue(u, j)
    ;(h = a.Matrix3.getColumn(l, 0, h)),
      (p = a.Matrix3.getColumn(l, 1, p)),
      (d = a.Matrix3.getColumn(l, 2, d)),
      a.Cartesian3.normalize(h, h),
      a.Cartesian3.normalize(p, p),
      a.Cartesian3.normalize(d, d),
      a.Cartesian3.negate(h, h)
    var c,
      m,
      C = a.Matrix4.computeView(t, d, p, h, B)
    if (0 === i) {
      var _ = r.projectionMatrix,
        y = a.Matrix4.multiply(_, C, L)
      m = a.Matrix4.inverse(y, L)
    } else c = a.Matrix4.inverseTransformation(C, L)
    n.defined(m) ? ((Y[0] = r.near), (Y[1] = r.far)) : ((Y[0] = 0), (Y[1] = r.near), (Y[2] = r.far))
    for (var v = 0; v < 2; ++v)
      for (var g = 0; g < 4; ++g) {
        var w = a.Cartesian4.clone(J[g], W[g])
        if (n.defined(m)) {
          var x = 1 / (w = a.Matrix4.multiplyByVector(m, w, w)).w
          a.Cartesian3.multiplyByScalar(w, x, w), a.Cartesian3.subtract(w, t, w), a.Cartesian3.normalize(w, w)
          var M = a.Cartesian3.dot(d, w)
          a.Cartesian3.multiplyByScalar(w, Y[v] / M, w), a.Cartesian3.add(w, t, w)
        } else {
          n.defined(r._offCenterFrustum) && (r = r._offCenterFrustum)
          var b = Y[v],
            F = Y[v + 1]
          ;(w.x = 0.5 * (w.x * (r.right - r.left) + r.left + r.right)),
            (w.y = 0.5 * (w.y * (r.top - r.bottom) + r.bottom + r.top)),
            (w.z = 0.5 * (w.z * (b - F) - b - F)),
            (w.w = 1),
            a.Matrix4.multiplyByVector(c, w, w)
        }
        ;(o[12 * v + 3 * g] = w.x), (o[12 * v + 3 * g + 1] = w.y), (o[12 * v + 3 * g + 2] = w.z)
      }
  }),
    (R.createGeometry = function (t) {
      var i = t._frustumType,
        f = t._frustum,
        u = t._origin,
        l = t._orientation,
        h = t._drawNearPlane,
        p = t._vertexFormat,
        d = h ? 6 : 5,
        c = new Float64Array(72)
      R._computeNearFarPlanes(u, l, i, f, c)
      var m = 24
      ;(c[m] = c[12]),
        (c[m + 1] = c[13]),
        (c[m + 2] = c[14]),
        (c[m + 3] = c[0]),
        (c[m + 4] = c[1]),
        (c[m + 5] = c[2]),
        (c[m + 6] = c[9]),
        (c[m + 7] = c[10]),
        (c[m + 8] = c[11]),
        (c[m + 9] = c[21]),
        (c[m + 10] = c[22]),
        (c[m + 11] = c[23]),
        (c[(m += 12)] = c[15]),
        (c[m + 1] = c[16]),
        (c[m + 2] = c[17]),
        (c[m + 3] = c[3]),
        (c[m + 4] = c[4]),
        (c[m + 5] = c[5]),
        (c[m + 6] = c[0]),
        (c[m + 7] = c[1]),
        (c[m + 8] = c[2]),
        (c[m + 9] = c[12]),
        (c[m + 10] = c[13]),
        (c[m + 11] = c[14]),
        (c[(m += 12)] = c[3]),
        (c[m + 1] = c[4]),
        (c[m + 2] = c[5]),
        (c[m + 3] = c[15]),
        (c[m + 4] = c[16]),
        (c[m + 5] = c[17]),
        (c[m + 6] = c[18]),
        (c[m + 7] = c[19]),
        (c[m + 8] = c[20]),
        (c[m + 9] = c[6]),
        (c[m + 10] = c[7]),
        (c[m + 11] = c[8]),
        (c[(m += 12)] = c[6]),
        (c[m + 1] = c[7]),
        (c[m + 2] = c[8]),
        (c[m + 3] = c[18]),
        (c[m + 4] = c[19]),
        (c[m + 5] = c[20]),
        (c[m + 6] = c[21]),
        (c[m + 7] = c[22]),
        (c[m + 8] = c[23]),
        (c[m + 9] = c[9]),
        (c[m + 10] = c[10]),
        (c[m + 11] = c[11]),
        h || (c = c.subarray(12))
      var C = new s.GeometryAttributes({
        position: new o.GeometryAttribute({ componentDatatype: r.ComponentDatatype.DOUBLE, componentsPerAttribute: 3, values: c })
      })
      if (n.defined(p.normal) || n.defined(p.tangent) || n.defined(p.bitangent) || n.defined(p.st)) {
        var _ = n.defined(p.normal) ? new Float32Array(12 * d) : void 0,
          y = n.defined(p.tangent) ? new Float32Array(12 * d) : void 0,
          v = n.defined(p.bitangent) ? new Float32Array(12 * d) : void 0,
          g = n.defined(p.st) ? new Float32Array(8 * d) : void 0,
          w = N,
          x = G,
          M = j,
          b = a.Cartesian3.negate(w, U),
          F = a.Cartesian3.negate(x, Q),
          V = a.Cartesian3.negate(M, K)
        ;(m = 0),
          h && (I(m, _, y, v, g, V, w, x), (m += 12)),
          I(m, _, y, v, g, M, b, x),
          I((m += 12), _, y, v, g, b, V, x),
          I((m += 12), _, y, v, g, F, V, b),
          I((m += 12), _, y, v, g, w, M, x),
          I((m += 12), _, y, v, g, x, M, b),
          n.defined(_) &&
            (C.normal = new o.GeometryAttribute({ componentDatatype: r.ComponentDatatype.FLOAT, componentsPerAttribute: 3, values: _ })),
          n.defined(y) &&
            (C.tangent = new o.GeometryAttribute({ componentDatatype: r.ComponentDatatype.FLOAT, componentsPerAttribute: 3, values: y })),
          n.defined(v) &&
            (C.bitangent = new o.GeometryAttribute({ componentDatatype: r.ComponentDatatype.FLOAT, componentsPerAttribute: 3, values: v })),
          n.defined(g) && (C.st = new o.GeometryAttribute({ componentDatatype: r.ComponentDatatype.FLOAT, componentsPerAttribute: 2, values: g }))
      }
      for (var E = new Uint16Array(6 * d), O = 0; O < d; ++O) {
        var P = 6 * O,
          z = 4 * O
        ;(E[P] = z), (E[P + 1] = z + 1), (E[P + 2] = z + 2), (E[P + 3] = z), (E[P + 4] = z + 2), (E[P + 5] = z + 3)
      }
      return new o.Geometry({ attributes: C, indices: E, primitiveType: o.PrimitiveType.TRIANGLES, boundingSphere: e.BoundingSphere.fromVertices(c) })
    }),
    (t.FrustumGeometry = R),
    (t.OrthographicFrustum = w),
    (t.PerspectiveFrustum = P)
})
