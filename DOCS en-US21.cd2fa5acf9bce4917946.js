(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[14],{

/***/ 650:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/en-US/geometries/vc-geometry-polyline-ground.md?vue&type=template&id=320fc3e9

const vc_geometry_polyline_groundvue_type_template_id_320fc3e9_hoisted_1 = {
  class: "content element-doc"
};

const vc_geometry_polyline_groundvue_type_template_id_320fc3e9_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<h2 id=\"vcgeometrypolylineground\"><a class=\"header-anchor\" href=\"#vcgeometrypolylineground\">¶</a> VcGeometryPolylineGround</h2><p>Loading a polyline geometry on terrain or 3D Tiles. It is equivalent to initializing a <code>Cesium.GroundPolylineGeometry</code> instance.</p><p><strong>Note</strong>: It needs to be a subcomponent of <code>vc-instance-geometry</code>, and put <code>vc-instance-geometry</code> in <code>vc-primitive-polyline-ground</code> to load normally.</p><h3 id=\"basic-usage\"><a class=\"header-anchor\" href=\"#basic-usage\">¶</a> Basic usage</h3><p>The basic usage of the VcGeometryPolylineGround component.</p>", 5);

const _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Use the "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-geometry-polyline-ground"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" tag to add a ground polyline to the viewer.")])], -1);

const _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", {
  class: "html"
}, "<el-row ref=\"viewerContainer\" class=\"demo-viewer\">\n  <vc-viewer @ready=\"onViewerReady\">\n    <vc-primitive-polyline-ground :appearance=\"appearance\" :geometryInstances=\"geometryInstances\" @click=\"onClicked\">\n      <vc-instance-geometry>\n        <vc-geometry-polyline-ground\n          ref=\"geometryRef\"\n          :positions=\"[\n            { lng: 100.1340164450331, lat: 31.05494287836128 },\n            { lng: 108.08821010582645, lat: 31.05494287836128 }\n          ]\"\n          :width=\"2\"\n        ></vc-geometry-polyline-ground>\n      </vc-instance-geometry>\n    </vc-primitive-polyline-ground>\n    <vc-provider-terrain-cesium></vc-provider-terrain-cesium>\n    <vc-layer-imagery>\n      <vc-provider-imagery-arcgis></vc-provider-imagery-arcgis>\n    </vc-layer-imagery>\n  </vc-viewer>\n  <el-row class=\"demo-toolbar\">\n    <el-button type=\"danger\" round @click=\"unload\">Unload</el-button>\n    <el-button type=\"danger\" round @click=\"load\">Load</el-button>\n    <el-button type=\"danger\" round @click=\"reload\">Reload</el-button>\n  </el-row>\n</el-row>\n\n<script>\n  import { ref, reactive, getCurrentInstance, onMounted, watch } from 'vue'\n  export default {\n    setup() {\n      // state\n      const instance = getCurrentInstance()\n      const geometryRef = ref(null)\n      const appearance = ref(null)\n      const geometryInstances = ref(null)\n      // methods\n      const onClicked = e => {\n        console.log(e)\n      }\n      const unload = () => {\n        geometryRef.value.unload()\n      }\n      const reload = () => {\n        geometryRef.value.reload()\n      }\n      const load = () => {\n        geometryRef.value.load()\n      }\n      const onViewerReady = ({ Cesium, viewer }) => {\n        console.log('onViewerReady')\n        appearance.value = new Cesium.PolylineMaterialAppearance()\n        geometryInstances.value = new Cesium.GeometryInstance({\n          geometry: new Cesium.GroundPolylineGeometry({\n            positions: Cesium.Cartesian3.fromDegreesArray([100.1340164450331, 32.05494287836128, 108.08821010582645, 32.097804071380715]),\n            width: 4.0\n          }),\n          id: 'object returned when this instance is picked and to get/set per-instance attributes'\n        })\n      }\n      // lifecycle\n      onMounted(() => {\n        geometryRef.value.createPromise.then(({ Cesium, viewer, cesiumObject }) => {\n          const boundingSphere = Cesium.BoundingSphere.fromPoints(cesiumObject._positions)\n          viewer.scene.camera.flyToBoundingSphere(boundingSphere)\n          console.log('All geometries are loaded.')\n        })\n      })\n      return {\n        unload,\n        reload,\n        load,\n        onClicked,\n        onViewerReady,\n        geometryRef,\n        appearance,\n        geometryInstances\n      }\n    }\n  }\n</script>\n")], -1);

const _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<h3 id=\"props\"><a class=\"header-anchor\" href=\"#props\">¶</a> Props</h3><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th><th>Accepted Values</th></tr></thead><tbody><tr><td>positions</td><td>Array</td><td></td><td><code>required</code> An array of Cartesian3 defining the polyline&#39;s points. Heights above the ellipsoid will be ignored.</td><td></td></tr><tr><td>width</td><td>Number</td><td><code>1.0</code></td><td><code>optional</code> The screen space width in pixels.</td><td></td></tr><tr><td>granularity</td><td>Number</td><td></td><td><code>optional</code> The distance interval in meters used for interpolating options.points. Defaults to 9999.0 meters. Zero indicates no interpolation.</td><td></td></tr><tr><td>loop</td><td>Boolean</td><td>false</td><td><code>optional</code> Whether during geometry creation a line segment will be added between the last and first line positions to make this Polyline a loop.</td><td></td></tr><tr><td>arcType</td><td>Number</td><td><code>1</code></td><td><code>optional</code> The type of line the polyline segments must follow. Valid options are ArcType.GEODESIC and ArcType.RHUMB. <strong>NONE: 0, GEODESIC: 1, RHUMB: 2</strong></td><td>0/1/2/</td></tr></tbody></table><h3 id=\"events\"><a class=\"header-anchor\" href=\"#events\">¶</a> Events</h3><table><thead><tr><th>Name</th><th>Parameters</th><th>Description</th></tr></thead><tbody><tr><td>beforeLoad</td><td>Vue Instance</td><td>Triggers before the cesiumObject is loaded.</td></tr><tr><td>ready</td><td>{Cesium, viewer, cesiumObject, vm}</td><td>Triggers when the cesiumObject is successfully loaded.</td></tr><tr><td>destroyed</td><td>Vue Instance</td><td>Triggers when the cesiumObject is destroyed.</td></tr></tbody></table><h3 id=\"reference\"><a class=\"header-anchor\" href=\"#reference\">¶</a> Reference</h3><ul><li>Refer to the official documentation: <strong><a href=\"https://cesium.com/docs/cesiumjs-ref-doc/GroundPolylineGeometry.html\">GroundPolylineGeometry</a></strong></li></ul>", 6);

function vc_geometry_polyline_groundvue_type_template_id_320fc3e9_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_vue_cesium_demo0 = Object(vue_esm_browser["resolveComponent"])("vue-cesium-demo0");

  const _component_demo_block = Object(vue_esm_browser["resolveComponent"])("demo-block");

  const _component_right_nav = Object(vue_esm_browser["resolveComponent"])("right-nav");

  return Object(vue_esm_browser["openBlock"])(), Object(vue_esm_browser["createElementBlock"])("section", vc_geometry_polyline_groundvue_type_template_id_320fc3e9_hoisted_1, [vc_geometry_polyline_groundvue_type_template_id_320fc3e9_hoisted_2, Object(vue_esm_browser["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createVNode"])(_component_vue_cesium_demo0)]),
    highlight: Object(vue_esm_browser["withCtx"])(() => [_hoisted_8]),
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_7]),
    _: 1
  }), _hoisted_9, Object(vue_esm_browser["createVNode"])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/en-US/geometries/vc-geometry-polyline-ground.md?vue&type=template&id=320fc3e9

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/en-US/geometries/vc-geometry-polyline-ground.md?vue&type=script&lang=ts

/* harmony default export */ var vc_geometry_polyline_groundvue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "vue-cesium-demo0": function () {
      const {
        resolveComponent: _resolveComponent,
        createVNode: _createVNode,
        withCtx: _withCtx,
        createTextVNode: _createTextVNode,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser;

      const _hoisted_1 = /*#__PURE__*/_createTextVNode("Unload");

      const _hoisted_2 = /*#__PURE__*/_createTextVNode("Load");

      const _hoisted_3 = /*#__PURE__*/_createTextVNode("Reload");

      function render(_ctx, _cache) {
        const _component_vc_geometry_polyline_ground = _resolveComponent("vc-geometry-polyline-ground");

        const _component_vc_instance_geometry = _resolveComponent("vc-instance-geometry");

        const _component_vc_primitive_polyline_ground = _resolveComponent("vc-primitive-polyline-ground");

        const _component_vc_provider_terrain_cesium = _resolveComponent("vc-provider-terrain-cesium");

        const _component_vc_provider_imagery_arcgis = _resolveComponent("vc-provider-imagery-arcgis");

        const _component_vc_layer_imagery = _resolveComponent("vc-layer-imagery");

        const _component_vc_viewer = _resolveComponent("vc-viewer");

        const _component_el_button = _resolveComponent("el-button");

        const _component_el_row = _resolveComponent("el-row");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_row, {
          ref: "viewerContainer",
          class: "demo-viewer"
        }, {
          default: _withCtx(() => [_createVNode(_component_vc_viewer, {
            onReady: _ctx.onViewerReady
          }, {
            default: _withCtx(() => [_createVNode(_component_vc_primitive_polyline_ground, {
              appearance: _ctx.appearance,
              geometryInstances: _ctx.geometryInstances,
              onClick: _ctx.onClicked
            }, {
              default: _withCtx(() => [_createVNode(_component_vc_instance_geometry, null, {
                default: _withCtx(() => [_createVNode(_component_vc_geometry_polyline_ground, {
                  ref: "geometryRef",
                  positions: [{
                    lng: 100.1340164450331,
                    lat: 31.05494287836128
                  }, {
                    lng: 108.08821010582645,
                    lat: 31.05494287836128
                  }],
                  width: 2
                }, null, 8, ["positions"])]),
                _: 1
              })]),
              _: 1
            }, 8, ["appearance", "geometryInstances", "onClick"]), _createVNode(_component_vc_provider_terrain_cesium), _createVNode(_component_vc_layer_imagery, null, {
              default: _withCtx(() => [_createVNode(_component_vc_provider_imagery_arcgis)]),
              _: 1
            })]),
            _: 1
          }, 8, ["onReady"]), _createVNode(_component_el_row, {
            class: "demo-toolbar"
          }, {
            default: _withCtx(() => [_createVNode(_component_el_button, {
              type: "danger",
              round: "",
              onClick: _ctx.unload
            }, {
              default: _withCtx(() => [_hoisted_1]),
              _: 1
            }, 8, ["onClick"]), _createVNode(_component_el_button, {
              type: "danger",
              round: "",
              onClick: _ctx.load
            }, {
              default: _withCtx(() => [_hoisted_2]),
              _: 1
            }, 8, ["onClick"]), _createVNode(_component_el_button, {
              type: "danger",
              round: "",
              onClick: _ctx.reload
            }, {
              default: _withCtx(() => [_hoisted_3]),
              _: 1
            }, 8, ["onClick"])]),
            _: 1
          })]),
          _: 1
        }, 512)]);
      }

      const {
        ref,
        reactive,
        getCurrentInstance,
        onMounted,
        watch
      } = vue_esm_browser;
      const democomponentExport = {
        setup() {
          // state
          const instance = getCurrentInstance();
          const geometryRef = ref(null);
          const appearance = ref(null);
          const geometryInstances = ref(null); // methods

          const onClicked = e => {
            console.log(e);
          };

          const unload = () => {
            geometryRef.value.unload();
          };

          const reload = () => {
            geometryRef.value.reload();
          };

          const load = () => {
            geometryRef.value.load();
          };

          const onViewerReady = ({
            Cesium,
            viewer
          }) => {
            console.log('onViewerReady');
            appearance.value = new Cesium.PolylineMaterialAppearance();
            geometryInstances.value = new Cesium.GeometryInstance({
              geometry: new Cesium.GroundPolylineGeometry({
                positions: Cesium.Cartesian3.fromDegreesArray([100.1340164450331, 32.05494287836128, 108.08821010582645, 32.097804071380715]),
                width: 4.0
              }),
              id: 'object returned when this instance is picked and to get/set per-instance attributes'
            });
          }; // lifecycle


          onMounted(() => {
            geometryRef.value.createPromise.then(({
              Cesium,
              viewer,
              cesiumObject
            }) => {
              const boundingSphere = Cesium.BoundingSphere.fromPoints(cesiumObject._positions);
              viewer.scene.camera.flyToBoundingSphere(boundingSphere);
              console.log('All geometries are loaded.');
            });
          });
          return {
            unload,
            reload,
            load,
            onClicked,
            onViewerReady,
            geometryRef,
            appearance,
            geometryInstances
          };
        }

      };
      return {
        render,
        ...democomponentExport
      };
    }()
  }
});
// CONCATENATED MODULE: ./website/docs/en-US/geometries/vc-geometry-polyline-ground.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/en-US/geometries/vc-geometry-polyline-ground.md



vc_geometry_polyline_groundvue_type_script_lang_ts.render = vc_geometry_polyline_groundvue_type_template_id_320fc3e9_render

/* harmony default export */ var vc_geometry_polyline_ground = __webpack_exports__["default"] = (vc_geometry_polyline_groundvue_type_script_lang_ts);

/***/ })

}]);