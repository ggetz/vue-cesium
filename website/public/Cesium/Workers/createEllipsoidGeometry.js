define([
  './when-4bbc8319',
  './EllipsoidGeometry-9a4ae869',
  './GeometryOffsetAttribute-1772960d',
  './RuntimeError-346a3079',
  './Transforms-d13cc04e',
  './Matrix2-9aa31791',
  './ComponentDatatype-93750d1a',
  './WebGLConstants-1c8239cc',
  './combine-83860057',
  './GeometryAttribute-43536dc0',
  './GeometryAttributes-7827a6c2',
  './IndexDatatype-b7d979a6',
  './VertexFormat-71718faa'
], function (e, t, r, a, o, n, i, c, d, m, s, u, y) {
  'use strict'
  return function (r, a) {
    return e.defined(a) && (r = t.EllipsoidGeometry.unpack(r, a)), t.EllipsoidGeometry.createGeometry(r)
  }
})
