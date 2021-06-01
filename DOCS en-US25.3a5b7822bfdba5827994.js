(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[18],{

/***/ 526:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/en-US/geometries/vc-instance-geometry.md?vue&type=template&id=258807ed

var vc_instance_geometryvue_type_template_id_258807ed_hoisted_1 = {
  class: "content element-doc"
};

var vc_instance_geometryvue_type_template_id_258807ed_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["l" /* createStaticVNode */])("<h2 id=\"vcinstancegeometry\"><a class=\"header-anchor\" href=\"#vcinstancegeometry\">¶</a> VcInstanceGeometry</h2><p>Loading a geometry instance, which allows one Geometry object to be positions in several different locations and colored uniquely. It is equivalent to initializing a <code>Cesium.GeometryInstance</code> instance.</p><p><strong>Note</strong>: It needs to be a sub-component of <code>vc-primitive</code>, <code>vc-primitive-classification</code>, <code>vc-primitive-ground</code>, and <code>vc-primitive-polyline-ground</code> to load normally.</p><h3 id=\"basic-usage\"><a class=\"header-anchor\" href=\"#basic-usage\">¶</a> Basic usage</h3><p>Basic usage of geometry instance components.</p>", 5);

var _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["m" /* createTextVNode */])("Use the "), /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("code", null, "vc-instance-geometry"), /*#__PURE__*/Object(vue_esm_browser["m" /* createTextVNode */])(" tag to add a cube box geometry object on the viewer.")])], -1);

var _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("code", {
  class: "html"
}, "<el-row ref=\"viewerContainer\" class=\"demo-viewer\">\n  <vc-viewer @ready=\"onViewerReady\">\n    <vc-primitive :appearance=\"appearance\" @click=\"onClicked\">\n      <vc-instance-geometry ref=\"instanceBoxTop\" id=\"top\" :geometry=\"geometry\" :attributes=\"attributes\" :modelMatrix=\"modelMatrixTop\">\n      </vc-instance-geometry>\n      <vc-instance-geometry ref=\"instanceBoxBottom\" id=\"bottom\" :geometry=\"geometry\" :attributes=\"attributes\" :modelMatrix=\"modelMatrixBottom\">\n      </vc-instance-geometry>\n    </vc-primitive>\n    <vc-primitive :appearance=\"appearance2\" @click=\"onClicked\">\n      <vc-instance-geometry>\n        <vc-geometry-rectangle ref=\"instanceRectangle\" :rectangle=\"[110.5, 29.5, 115.5, 34.5]\"></vc-geometry-rectangle>\n      </vc-instance-geometry>\n      <vc-instance-geometry>\n        <vc-geometry-polygon\n          ref=\"instancePolygon\"\n          :polygonHierarchy=\"[\n          { lng: 102.1, lat: 29.5 },\n          { lng: 106.2, lat: 29.5 },\n          { lng: 106.2, lat: 33.5 },\n          { lng: 108.2, lat: 35.5 },\n          { lng: 102.1, lat: 33.5 }\n        ]\"\n          :height=\"20000\"\n        ></vc-geometry-polygon>\n      </vc-instance-geometry>\n    </vc-primitive>\n  </vc-viewer>\n  <el-row class=\"demo-toolbar\">\n    <el-button type=\"danger\" round @click=\"unload\">Unload</el-button>\n    <el-button type=\"danger\" round @click=\"load\">Load</el-button>\n    <el-button type=\"danger\" round @click=\"reload\">Reload</el-button>\n  </el-row>\n</el-row>\n\n<script>\n  import { ref, reactive, getCurrentInstance, onMounted, watch } from 'vue'\n  export default {\n    setup() {\n      // state\n      const instance = getCurrentInstance()\n      const geometry = ref(null)\n      const appearance = ref(null)\n      const appearance2 = ref(null)\n      const attributes = ref(null)\n      const modelMatrixTop = ref(null)\n      const modelMatrixBottom = ref(null)\n      const instanceBoxTop = ref(null)\n      const instanceBoxBottom = ref(null)\n      const instanceRectangle = ref(null)\n      const instancePolygon = ref(null)\n\n      // methods\n      const onClicked = e => {\n        console.log(e)\n      }\n      const unload = () => {\n        instanceBoxBottom.value.unload()\n        instanceBoxTop.value.unload()\n        instanceRectangle.value.unload()\n        // instancePolygon.value.unload()\n      }\n      const reload = () => {\n        instanceBoxBottom.value.reload()\n        instanceBoxTop.value.reload()\n        instanceRectangle.value.reload()\n        // instancePolygon.value.reload()\n      }\n      const load = () => {\n        instanceBoxBottom.value.load()\n        instanceBoxTop.value.load()\n        instanceRectangle.value.load()\n        // instancePolygon.value.load()\n      }\n      const onViewerReady = ({ Cesium, viewer }) => {\n        geometry.value = Cesium.BoxGeometry.fromDimensions({\n          vertexFormat: Cesium.VertexFormat.POSITION_AND_NORMAL,\n          dimensions: new Cesium.Cartesian3(1000000.0, 1000000.0, 250000.0)\n        })\n        appearance.value = new Cesium.PerInstanceColorAppearance()\n        attributes.value = {\n          color: Cesium.ColorGeometryInstanceAttribute.fromColor(Cesium.Color.AQUA)\n        }\n        modelMatrixBottom.value = Cesium.Matrix4.multiplyByTranslation(\n          Cesium.Transforms.eastNorthUpToFixedFrame(Cesium.Cartesian3.fromDegrees(108, 40.03883)),\n          new Cesium.Cartesian3(0.0, 0.0, 100000.0),\n          new Cesium.Matrix4()\n        )\n        modelMatrixTop.value = Cesium.Matrix4.multiplyByTranslation(\n          Cesium.Transforms.eastNorthUpToFixedFrame(Cesium.Cartesian3.fromDegrees(108, 40.03883)),\n          new Cesium.Cartesian3(0.0, 0.0, 1500000.0),\n          new Cesium.Matrix4()\n        )\n        appearance2.value = new Cesium.MaterialAppearance({\n          material: Cesium.Material.fromType('Checkerboard', {\n            repeat: new Cesium.Cartesian2(20.0, 6.0)\n          }),\n          materialSupport: Cesium.MaterialAppearance.MaterialSupport.TEXTURED\n        })\n      }\n      // lifecycle\n      onMounted(() => {\n        Promise.all([\n          instanceBoxTop.value.createPromise,\n          instanceBoxBottom.value.createPromise,\n          instanceRectangle.value.createPromise,\n          instancePolygon.value.createPromise\n        ]).then(instances => {\n          const { BoundingSphere } = Cesium\n          const boundingSphereUnion = instances.reduce((prev, cur) => {\n            const geometry = cur.cesiumObject.geometry || cur.cesiumObject\n            const computGeometry = geometry.constructor.createGeometry(geometry)\n            const boundingSphere =\n              cur.cesiumObject.modelMatrix || cur.vm.$parent.modelMatrix\n                ? BoundingSphere.transform(computGeometry.boundingSphere, cur.cesiumObject.modelMatrix || cur.vm.$parent.modelMatrix)\n                : computGeometry.boundingSphere\n            return prev === null ? boundingSphere : BoundingSphere.union(prev, boundingSphere)\n          }, null)\n          instances[0].viewer.scene.camera.flyToBoundingSphere(boundingSphereUnion)\n          console.log('All instances are loaded.')\n        })\n      })\n      return {\n        unload,\n        reload,\n        load,\n        geometry,\n        appearance,\n        appearance2,\n        attributes,\n        modelMatrixBottom,\n        modelMatrixTop,\n        onClicked,\n        onViewerReady,\n        instanceBoxTop,\n        instanceBoxBottom,\n        instanceRectangle,\n        instancePolygon\n      }\n    }\n  }\n</script>\n")], -1);

var _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["l" /* createStaticVNode */])("<h3 id=\"props\"><a class=\"header-anchor\" href=\"#props\">¶</a> Props</h3><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td>geometry</td><td>Object</td><td></td><td><code>optional</code> The geometry to instance.</td></tr><tr><td>modelMatrix</td><td>Object</td><td></td><td><code>optional</code> The model matrix that transforms to transform the geometry from model to world coordinates.</td></tr><tr><td>id</td><td>Object</td><td></td><td><code>optional</code> A user-defined object to return when the instance is picked with <code>Scene#pick</code>.</td></tr><tr><td>attributes</td><td>Object</td><td></td><td><code>optional</code> Per-instance attributes like a show or color attribute shown in the example below.</td></tr></tbody></table><h3 id=\"events\"><a class=\"header-anchor\" href=\"#events\">¶</a> Events</h3><table><thead><tr><th>Name</th><th>Parameters</th><th>Description</th></tr></thead><tbody><tr><td>beforeLoad</td><td>Vue Instance</td><td>Triggers before the cesiumObject is loaded.</td></tr><tr><td>ready</td><td>{Cesium, viewer, cesiumObject, vm}</td><td>Triggers when the cesiumObject is successfully loaded.</td></tr><tr><td>destroyed</td><td>Vue Instance</td><td>Triggers when the cesiumObject is destroyed.</td></tr></tbody></table><h3 id=\"reference\"><a class=\"header-anchor\" href=\"#reference\">¶</a> Reference</h3><ul><li>Refer to the official documentation: <strong><a href=\"https://cesium.com/docs/cesiumjs-ref-doc/GeometryInstance.html\">GeometryInstance</a></strong></li></ul>", 6);

function vc_instance_geometryvue_type_template_id_258807ed_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_vue_cesium_demo0 = Object(vue_esm_browser["O" /* resolveComponent */])("vue-cesium-demo0");

  var _component_demo_block = Object(vue_esm_browser["O" /* resolveComponent */])("demo-block");

  var _component_right_nav = Object(vue_esm_browser["O" /* resolveComponent */])("right-nav");

  return Object(vue_esm_browser["F" /* openBlock */])(), Object(vue_esm_browser["i" /* createBlock */])("section", vc_instance_geometryvue_type_template_id_258807ed_hoisted_1, [vc_instance_geometryvue_type_template_id_258807ed_hoisted_2, Object(vue_esm_browser["n" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["n" /* createVNode */])(_component_vue_cesium_demo0)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_8];
    }),
    default: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_7];
    }),
    _: 1
  }), _hoisted_9, Object(vue_esm_browser["n" /* createVNode */])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/en-US/geometries/vc-instance-geometry.md?vue&type=template&id=258807ed

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(2);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/en-US/geometries/vc-instance-geometry.md?vue&type=script&lang=ts


/* harmony default export */ var vc_instance_geometryvue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "vue-cesium-demo0": function () {
      var _resolveComponent = vue_esm_browser["O" /* resolveComponent */],
          _createVNode = vue_esm_browser["n" /* createVNode */],
          _withCtx = vue_esm_browser["db" /* withCtx */],
          _createTextVNode = vue_esm_browser["m" /* createTextVNode */],
          _openBlock = vue_esm_browser["F" /* openBlock */],
          _createBlock = vue_esm_browser["i" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("Unload");

      var _hoisted_2 = /*#__PURE__*/_createTextVNode("Load");

      var _hoisted_3 = /*#__PURE__*/_createTextVNode("Reload");

      function render(_ctx, _cache) {
        var _component_vc_instance_geometry = _resolveComponent("vc-instance-geometry");

        var _component_vc_primitive = _resolveComponent("vc-primitive");

        var _component_vc_geometry_rectangle = _resolveComponent("vc-geometry-rectangle");

        var _component_vc_geometry_polygon = _resolveComponent("vc-geometry-polygon");

        var _component_vc_viewer = _resolveComponent("vc-viewer");

        var _component_el_button = _resolveComponent("el-button");

        var _component_el_row = _resolveComponent("el-row");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_row, {
          ref: "viewerContainer",
          class: "demo-viewer"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_vc_viewer, {
              onReady: _ctx.onViewerReady
            }, {
              default: _withCtx(function () {
                return [_createVNode(_component_vc_primitive, {
                  appearance: _ctx.appearance,
                  onClick: _ctx.onClicked
                }, {
                  default: _withCtx(function () {
                    return [_createVNode(_component_vc_instance_geometry, {
                      ref: "instanceBoxTop",
                      id: "top",
                      geometry: _ctx.geometry,
                      attributes: _ctx.attributes,
                      modelMatrix: _ctx.modelMatrixTop
                    }, null, 8, ["geometry", "attributes", "modelMatrix"]), _createVNode(_component_vc_instance_geometry, {
                      ref: "instanceBoxBottom",
                      id: "bottom",
                      geometry: _ctx.geometry,
                      attributes: _ctx.attributes,
                      modelMatrix: _ctx.modelMatrixBottom
                    }, null, 8, ["geometry", "attributes", "modelMatrix"])];
                  }),
                  _: 1
                }, 8, ["appearance", "onClick"]), _createVNode(_component_vc_primitive, {
                  appearance: _ctx.appearance2,
                  onClick: _ctx.onClicked
                }, {
                  default: _withCtx(function () {
                    return [_createVNode(_component_vc_instance_geometry, null, {
                      default: _withCtx(function () {
                        return [_createVNode(_component_vc_geometry_rectangle, {
                          ref: "instanceRectangle",
                          rectangle: [110.5, 29.5, 115.5, 34.5]
                        }, null, 8, ["rectangle"])];
                      }),
                      _: 1
                    }), _createVNode(_component_vc_instance_geometry, null, {
                      default: _withCtx(function () {
                        return [_createVNode(_component_vc_geometry_polygon, {
                          ref: "instancePolygon",
                          polygonHierarchy: [{
                            lng: 102.1,
                            lat: 29.5
                          }, {
                            lng: 106.2,
                            lat: 29.5
                          }, {
                            lng: 106.2,
                            lat: 33.5
                          }, {
                            lng: 108.2,
                            lat: 35.5
                          }, {
                            lng: 102.1,
                            lat: 33.5
                          }],
                          height: 20000
                        }, null, 8, ["polygonHierarchy"])];
                      }),
                      _: 1
                    })];
                  }),
                  _: 1
                }, 8, ["appearance", "onClick"])];
              }),
              _: 1
            }, 8, ["onReady"]), _createVNode(_component_el_row, {
              class: "demo-toolbar"
            }, {
              default: _withCtx(function () {
                return [_createVNode(_component_el_button, {
                  type: "danger",
                  round: "",
                  onClick: _ctx.unload
                }, {
                  default: _withCtx(function () {
                    return [_hoisted_1];
                  }),
                  _: 1
                }, 8, ["onClick"]), _createVNode(_component_el_button, {
                  type: "danger",
                  round: "",
                  onClick: _ctx.load
                }, {
                  default: _withCtx(function () {
                    return [_hoisted_2];
                  }),
                  _: 1
                }, 8, ["onClick"]), _createVNode(_component_el_button, {
                  type: "danger",
                  round: "",
                  onClick: _ctx.reload
                }, {
                  default: _withCtx(function () {
                    return [_hoisted_3];
                  }),
                  _: 1
                }, 8, ["onClick"])];
              }),
              _: 1
            })];
          }),
          _: 1
        }, 512)]);
      }

      var ref = vue_esm_browser["K" /* ref */],
          reactive = vue_esm_browser["J" /* reactive */],
          getCurrentInstance = vue_esm_browser["q" /* getCurrentInstance */],
          onMounted = vue_esm_browser["C" /* onMounted */],
          watch = vue_esm_browser["bb" /* watch */];
      var democomponentExport = {
        setup: function setup() {
          // state
          var instance = getCurrentInstance();
          var geometry = ref(null);
          var appearance = ref(null);
          var appearance2 = ref(null);
          var attributes = ref(null);
          var modelMatrixTop = ref(null);
          var modelMatrixBottom = ref(null);
          var instanceBoxTop = ref(null);
          var instanceBoxBottom = ref(null);
          var instanceRectangle = ref(null);
          var instancePolygon = ref(null); // methods

          var onClicked = function onClicked(e) {
            console.log(e);
          };

          var unload = function unload() {
            instanceBoxBottom.value.unload();
            instanceBoxTop.value.unload();
            instanceRectangle.value.unload(); // instancePolygon.value.unload()
          };

          var reload = function reload() {
            instanceBoxBottom.value.reload();
            instanceBoxTop.value.reload();
            instanceRectangle.value.reload(); // instancePolygon.value.reload()
          };

          var load = function load() {
            instanceBoxBottom.value.load();
            instanceBoxTop.value.load();
            instanceRectangle.value.load(); // instancePolygon.value.load()
          };

          var onViewerReady = function onViewerReady(_ref) {
            var Cesium = _ref.Cesium,
                viewer = _ref.viewer;
            geometry.value = Cesium.BoxGeometry.fromDimensions({
              vertexFormat: Cesium.VertexFormat.POSITION_AND_NORMAL,
              dimensions: new Cesium.Cartesian3(1000000.0, 1000000.0, 250000.0)
            });
            appearance.value = new Cesium.PerInstanceColorAppearance();
            attributes.value = {
              color: Cesium.ColorGeometryInstanceAttribute.fromColor(Cesium.Color.AQUA)
            };
            modelMatrixBottom.value = Cesium.Matrix4.multiplyByTranslation(Cesium.Transforms.eastNorthUpToFixedFrame(Cesium.Cartesian3.fromDegrees(108, 40.03883)), new Cesium.Cartesian3(0.0, 0.0, 100000.0), new Cesium.Matrix4());
            modelMatrixTop.value = Cesium.Matrix4.multiplyByTranslation(Cesium.Transforms.eastNorthUpToFixedFrame(Cesium.Cartesian3.fromDegrees(108, 40.03883)), new Cesium.Cartesian3(0.0, 0.0, 1500000.0), new Cesium.Matrix4());
            appearance2.value = new Cesium.MaterialAppearance({
              material: Cesium.Material.fromType('Checkerboard', {
                repeat: new Cesium.Cartesian2(20.0, 6.0)
              }),
              materialSupport: Cesium.MaterialAppearance.MaterialSupport.TEXTURED
            });
          }; // lifecycle


          onMounted(function () {
            Promise.all([instanceBoxTop.value.createPromise, instanceBoxBottom.value.createPromise, instanceRectangle.value.createPromise, instancePolygon.value.createPromise]).then(function (instances) {
              var _Cesium = Cesium,
                  BoundingSphere = _Cesium.BoundingSphere;
              var boundingSphereUnion = instances.reduce(function (prev, cur) {
                var geometry = cur.cesiumObject.geometry || cur.cesiumObject;
                var computGeometry = geometry.constructor.createGeometry(geometry);
                var boundingSphere = cur.cesiumObject.modelMatrix || cur.vm.$parent.modelMatrix ? BoundingSphere.transform(computGeometry.boundingSphere, cur.cesiumObject.modelMatrix || cur.vm.$parent.modelMatrix) : computGeometry.boundingSphere;
                return prev === null ? boundingSphere : BoundingSphere.union(prev, boundingSphere);
              }, null);
              instances[0].viewer.scene.camera.flyToBoundingSphere(boundingSphereUnion);
              console.log('All instances are loaded.');
            });
          });
          return {
            unload: unload,
            reload: reload,
            load: load,
            geometry: geometry,
            appearance: appearance,
            appearance2: appearance2,
            attributes: attributes,
            modelMatrixBottom: modelMatrixBottom,
            modelMatrixTop: modelMatrixTop,
            onClicked: onClicked,
            onViewerReady: onViewerReady,
            instanceBoxTop: instanceBoxTop,
            instanceBoxBottom: instanceBoxBottom,
            instanceRectangle: instanceRectangle,
            instancePolygon: instancePolygon
          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }()
  }
});
// CONCATENATED MODULE: ./website/docs/en-US/geometries/vc-instance-geometry.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/en-US/geometries/vc-instance-geometry.md



vc_instance_geometryvue_type_script_lang_ts.render = vc_instance_geometryvue_type_template_id_258807ed_render

/* harmony default export */ var vc_instance_geometry = __webpack_exports__["default"] = (vc_instance_geometryvue_type_script_lang_ts);

/***/ })

}]);