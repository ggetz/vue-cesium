(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[155],{

/***/ 600:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/zh-CN/primitives/vc-collection-primitive.md?vue&type=template&id=f3d51f4e

const vc_collection_primitivevue_type_template_id_f3d51f4e_hoisted_1 = {
  class: "content element-doc"
};

const vc_collection_primitivevue_type_template_id_f3d51f4e_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<h2 id=\"vccollectionprimitive\"><a class=\"header-anchor\" href=\"#vccollectionprimitive\">¶</a> VcCollectionPrimitive</h2><p>加载通用图元集合，相当于初始化一个 <code>Cesium.PrimitiveCollection</code> 实例。</p><div class=\"tip\"><p><code>vc-viewer</code> 初始化得到的 <code>Viewer</code> 实例自带的一个成员属性 <code>Scene.primitives(PrimitiveCollection)</code>。它可作为一切图元的父组件，如有需要也可以作为子集嵌套一层或多层。</p></div><h3 id=\"ji-chu-yong-fa\"><a class=\"header-anchor\" href=\"#ji-chu-yong-fa\">¶</a> 基础用法</h3><p>通用图元集合组件的基础用法。</p>", 5);

const _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("使用 "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-collection-primitive"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 标签在三维球上添加布告板图元集合和模型图元。")])], -1);

const _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", {
  class: "html"
}, "<el-row ref=\"viewerContainer\" class=\"demo-viewer\">\n  <vc-viewer @ready=\"onViewerReady\">\n    <vc-selection-indicator ref=\"selectionIndicator\" @pickEvt=\"pickEvt\"></vc-selection-indicator>\n    <vc-collection-primitive @click=\"onClicked\" :show=\"show\" ref=\"collectionRef\">\n      <vc-collection-billboard :billboards=\"billboards1\"></vc-collection-billboard>\n      <vc-collection-primitive>\n        <vc-collection-billboard :billboards=\"billboards2\"></vc-collection-billboard>\n      </vc-collection-primitive>\n    </vc-collection-primitive>\n    <vc-collection-primitive @click=\"onClicked\" :polygons=\"polygons\">\n      <vc-primitive-model\n        @click=\"onClicked\"\n        url=\"https://zouyaoji.top/vue-cesium/SampleData/models/CesiumAir/Cesium_Air.glb\"\n        :modelMatrix=\"modelMatrix\"\n        :scale=\"10000\"\n        :minimumPixelSize=\"128\"\n        :maximumScale=\"200000\"\n      >\n      </vc-primitive-model>\n      <vc-polygon @click=\"onClicked\" :positions=\"positions\" color=\"yellow\"></vc-polygon>\n    </vc-collection-primitive>\n  </vc-viewer>\n  <el-row class=\"demo-toolbar\">\n    <el-button type=\"danger\" round @click=\"unload\">销毁</el-button>\n    <el-button type=\"danger\" round @click=\"load\">加载</el-button>\n    <el-button type=\"danger\" round @click=\"reload\">重载</el-button>\n    <el-switch v-model=\"show\" active-color=\"#13ce66\" inactive-text=\"显示/隐藏\"> </el-switch>\n  </el-row>\n</el-row>\n\n<script>\n  import { ref, reactive, getCurrentInstance, onMounted, watch } from 'vue'\n  export default {\n    setup() {\n      // state\n      const collectionRef = ref(null)\n      const billboards1 = ref([])\n      const billboards2 = ref([])\n      const modelMatrix = ref(null)\n      const show = ref(true)\n      const instance = getCurrentInstance()\n      const positions = ref([\n        [105, 32],\n        [106, 34],\n        [107, 30]\n      ])\n      const polygons = ref([\n        {\n          positions: [\n            [115, 37],\n            [115, 32],\n            [107, 33],\n            [102, 31],\n            [102, 35]\n          ],\n          color: 'green'\n        },\n        {\n          positions: [\n            { lng: 108.0, lat: 42.0 },\n            { lng: 100.0, lat: 42.0 },\n            { lng: 104.0, lat: 40.0 }\n          ],\n          color: 'red',\n          depthFailColor: 'red'\n        },\n        {\n          positions: [90.0, 41.0, 0.0, 85.0, 41.0, 500000.0, 80.0, 41.0, 0.0],\n          color: 'blue'\n        },\n        {\n          polygonHierarchy: {\n            positions: [\n              [99, 30],\n              [85, 30],\n              [85, 40],\n              [99, 40]\n            ],\n            holes: [\n              {\n                positions: [\n                  [97, 31],\n                  [97, 39],\n                  [87, 39],\n                  [87, 31]\n                ],\n                holes: [\n                  {\n                    positions: [\n                      [95, 33],\n                      [89, 33],\n                      [89, 37],\n                      [95, 37]\n                    ],\n                    holes: [\n                      {\n                        positions: [\n                          [93, 34],\n                          [91, 34],\n                          [91, 36],\n                          [93, 36]\n                        ]\n                      }\n                    ]\n                  }\n                ]\n              }\n            ]\n          },\n          color: 'yellow'\n        }\n      ])\n      window.polygons = polygons\n      // methods\n      const onClicked = e => {\n        console.log(e)\n      }\n      const unload = () => {\n        collectionRef.value.unload()\n      }\n      const reload = () => {\n        collectionRef.value.reload()\n      }\n      const load = () => {\n        collectionRef.value.load()\n      }\n      const onViewerReady = ({ Cesium, viewer }) => {\n        for (var i = 0; i < 100; i++) {\n          let billboard1 = {}\n          billboard1.position = { lng: Math.random() * 40 + 85, lat: Math.random() * 30 + 21 }\n          billboard1.image = 'https://zouyaoji.top/vue-cesium/favicon.png'\n          billboard1.scale = 0.1\n          billboards1.value.push(billboard1)\n\n          let billboard2 = {}\n          billboard2.position = { lng: Math.random() * 40 + 85, lat: Math.random() * 30 + 21 }\n          billboard2.image = 'https://zouyaoji.top/vue-cesium/favicon.png'\n          billboard2.scale = 0.15\n          billboards2.value.push(billboard2)\n        }\n\n        modelMatrix.value = Cesium.Transforms.eastNorthUpToFixedFrame(Cesium.Cartesian3.fromDegrees(105, 38, 10000))\n      }\n      const pickEvt = e => {\n        console.log(e)\n      }\n      return {\n        pickEvt,\n        unload,\n        reload,\n        load,\n        onClicked,\n        onViewerReady,\n        collectionRef,\n        billboards1,\n        billboards2,\n        modelMatrix,\n        show,\n        positions,\n        polygons\n      }\n    }\n  }\n</script>\n")], -1);

const _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<h3 id=\"shu-xing\"><a class=\"header-anchor\" href=\"#shu-xing\">¶</a> 属性</h3><table><thead><tr><th>属性名</th><th>类型</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td>show</td><td>Boolean</td><td><code>true</code></td><td><code>optional</code> 指定图元集合中的图元是否显示。</td></tr><tr><td>destroyPrimitives</td><td>Boolean</td><td><code>true</code></td><td><code>optional</code> 指定移除图元集合时是否销毁集合中的图元。</td></tr><tr><td>enableMouseEvent</td><td>Boolean</td><td><code>true</code></td><td><code>optional</code> 指定鼠标事件是否生效。</td></tr><tr><td>polygons</td><td>Array&lt;PolygonPrimitive&gt;</td><td><code>[]</code></td><td><code>optional</code> 指定面图元集合。 数组对象结构与 <code>vc-polygon</code> 组件属性相同。</td></tr></tbody></table><h3 id=\"shi-jian\"><a class=\"header-anchor\" href=\"#shi-jian\">¶</a> 事件</h3><table><thead><tr><th>事件名</th><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>beforeLoad</td><td>Vue Instance</td><td>对象加载前触发。</td></tr><tr><td>ready</td><td>{Cesium, viewer, cesiumObject, vm}</td><td>对象加载成功时触发。</td></tr><tr><td>destroyed</td><td>Vue Instance</td><td>对象销毁时触发。</td></tr><tr><td>mousedown</td><td>{button,surfacePosition,pickedFeature,type,windowPosition}</td><td>鼠标在该图元上按下时触发。</td></tr><tr><td>mouseup</td><td>{button,surfacePosition,pickedFeature,type,windowPosition}</td><td>鼠标在该图元上弹起时触发。</td></tr><tr><td>click</td><td>{button,surfacePosition,pickedFeature,type,windowPosition}</td><td>鼠标单击该图元时触发。</td></tr><tr><td>clickout</td><td>{button,surfacePosition,pickedFeature,type,windowPosition}</td><td>鼠标单击该图元外部时触发。</td></tr><tr><td>dblclick</td><td>{button,surfacePosition,pickedFeature,type,windowPosition}</td><td>鼠标左键双击该图元时触发。</td></tr><tr><td>mousemove</td><td>{button,surfacePosition,pickedFeature,type,windowPosition}</td><td>鼠标在该图元上移动时触发。</td></tr><tr><td>mouseover</td><td>{button,surfacePosition,pickedFeature,type,windowPosition}</td><td>鼠标移动到该图元时触发。</td></tr><tr><td>mouseout</td><td>{button,surfacePosition,pickedFeature,type,windowPosition}</td><td>鼠标移出该图元时触发。</td></tr></tbody></table><h3 id=\"vcpolygon\"><a class=\"header-anchor\" href=\"#vcpolygon\">¶</a> VcPolygon</h3><p>加载面图元，相当于初始化一个 <code>PolygonPrimitive</code> 实例。</p><p><strong>注意：</strong> 需要作为 <code>vc-collection-primitive</code> 的子组件才能正常加载。</p><h3 id=\"vcpolygon-shu-xing\"><a class=\"header-anchor\" href=\"#vcpolygon-shu-xing\">¶</a> VcPolygon 属性</h3><table><thead><tr><th>属性名</th><th>类型</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td>show</td><td>Boolean</td><td><code>true</code></td><td><code>optional</code> 指定 polygon 是否显示。</td></tr><tr><td>positions</td><td>Array</td><td></td><td><code>optional</code> 指定 polygon 的位置属性。</td></tr><tr><td>polygonHierarchy</td><td>Object</td><td></td><td><code>optional</code> 指定 polygon 的位置属性，岛洞多边形请用这个属性。</td></tr><tr><td>id</td><td>Object</td><td></td><td><code>optional</code> 指定与 polygon 关联的信息，拾取时返回该属性值。</td></tr><tr><td>classificationType</td><td>Number</td><td></td><td><code>optional</code> 指定 polygon 贴地/贴对象模式。</td></tr><tr><td>color</td><td>Object|Array|String</td><td></td><td><code>optional</code> 指定 polygon 颜色。</td></tr><tr><td>depthFailColor</td><td>Object|Array|String</td><td></td><td><code>optional</code> 指定 polygon 在深度检测无效时的颜色。</td></tr><tr><td>enableMouseEvent</td><td>Boolean</td><td><code>true</code></td><td><code>optional</code> 指定鼠标事件是否生效。</td></tr></tbody></table><h3 id=\"vcpolygon-shi-jian\"><a class=\"header-anchor\" href=\"#vcpolygon-shi-jian\">¶</a> VcPolygon 事件</h3><table><thead><tr><th>事件名</th><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>beforeLoad</td><td>Vue Instance</td><td>对象加载前触发。</td></tr><tr><td>ready</td><td>{Cesium, viewer, cesiumObject, vm}</td><td>对象加载成功时触发。</td></tr><tr><td>destroyed</td><td>Vue Instance</td><td>对象销毁时触发。</td></tr><tr><td>mousedown</td><td>{button,surfacePosition,pickedFeature,type,windowPosition}</td><td>鼠标在该图元上按下时触发。</td></tr><tr><td>mouseup</td><td>{button,surfacePosition,pickedFeature,type,windowPosition}</td><td>鼠标在该图元上弹起时触发。</td></tr><tr><td>click</td><td>{button,surfacePosition,pickedFeature,type,windowPosition}</td><td>鼠标单击该图元时触发。</td></tr><tr><td>clickout</td><td>{button,surfacePosition,pickedFeature,type,windowPosition}</td><td>鼠标单击该图元外部时触发。</td></tr><tr><td>dblclick</td><td>{button,surfacePosition,pickedFeature,type,windowPosition}</td><td>鼠标左键双击该图元时触发。</td></tr><tr><td>mousemove</td><td>{button,surfacePosition,pickedFeature,type,windowPosition}</td><td>鼠标在该图元上移动时触发。</td></tr><tr><td>mouseover</td><td>{button,surfacePosition,pickedFeature,type,windowPosition}</td><td>鼠标移动到该图元时触发。</td></tr><tr><td>mouseout</td><td>{button,surfacePosition,pickedFeature,type,windowPosition}</td><td>鼠标移出该图元时触发。</td></tr></tbody></table><h3 id=\"can-kao\"><a class=\"header-anchor\" href=\"#can-kao\">¶</a> 参考</h3><ul><li>官方文档： <strong><a href=\"https://cesium.com/docs/cesiumjs-ref-doc/PrimitiveCollection.html\">PrimitiveCollection</a></strong></li></ul>", 13);

function vc_collection_primitivevue_type_template_id_f3d51f4e_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_vue_cesium_demo0 = Object(vue_esm_browser["resolveComponent"])("vue-cesium-demo0");

  const _component_demo_block = Object(vue_esm_browser["resolveComponent"])("demo-block");

  const _component_right_nav = Object(vue_esm_browser["resolveComponent"])("right-nav");

  return Object(vue_esm_browser["openBlock"])(), Object(vue_esm_browser["createElementBlock"])("section", vc_collection_primitivevue_type_template_id_f3d51f4e_hoisted_1, [vc_collection_primitivevue_type_template_id_f3d51f4e_hoisted_2, Object(vue_esm_browser["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createVNode"])(_component_vue_cesium_demo0)]),
    highlight: Object(vue_esm_browser["withCtx"])(() => [_hoisted_8]),
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_7]),
    _: 1
  }), _hoisted_9, Object(vue_esm_browser["createVNode"])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/zh-CN/primitives/vc-collection-primitive.md?vue&type=template&id=f3d51f4e

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/zh-CN/primitives/vc-collection-primitive.md?vue&type=script&lang=ts

/* harmony default export */ var vc_collection_primitivevue_type_script_lang_ts = ({
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

      const _hoisted_1 = /*#__PURE__*/_createTextVNode("销毁");

      const _hoisted_2 = /*#__PURE__*/_createTextVNode("加载");

      const _hoisted_3 = /*#__PURE__*/_createTextVNode("重载");

      function render(_ctx, _cache) {
        const _component_vc_selection_indicator = _resolveComponent("vc-selection-indicator");

        const _component_vc_collection_billboard = _resolveComponent("vc-collection-billboard");

        const _component_vc_collection_primitive = _resolveComponent("vc-collection-primitive");

        const _component_vc_primitive_model = _resolveComponent("vc-primitive-model");

        const _component_vc_polygon = _resolveComponent("vc-polygon");

        const _component_vc_viewer = _resolveComponent("vc-viewer");

        const _component_el_button = _resolveComponent("el-button");

        const _component_el_switch = _resolveComponent("el-switch");

        const _component_el_row = _resolveComponent("el-row");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_row, {
          ref: "viewerContainer",
          class: "demo-viewer"
        }, {
          default: _withCtx(() => [_createVNode(_component_vc_viewer, {
            onReady: _ctx.onViewerReady
          }, {
            default: _withCtx(() => [_createVNode(_component_vc_selection_indicator, {
              ref: "selectionIndicator",
              onPickEvt: _ctx.pickEvt
            }, null, 8, ["onPickEvt"]), _createVNode(_component_vc_collection_primitive, {
              onClick: _ctx.onClicked,
              show: _ctx.show,
              ref: "collectionRef"
            }, {
              default: _withCtx(() => [_createVNode(_component_vc_collection_billboard, {
                billboards: _ctx.billboards1
              }, null, 8, ["billboards"]), _createVNode(_component_vc_collection_primitive, null, {
                default: _withCtx(() => [_createVNode(_component_vc_collection_billboard, {
                  billboards: _ctx.billboards2
                }, null, 8, ["billboards"])]),
                _: 1
              })]),
              _: 1
            }, 8, ["onClick", "show"]), _createVNode(_component_vc_collection_primitive, {
              onClick: _ctx.onClicked,
              polygons: _ctx.polygons
            }, {
              default: _withCtx(() => [_createVNode(_component_vc_primitive_model, {
                onClick: _ctx.onClicked,
                url: "https://zouyaoji.top/vue-cesium/SampleData/models/CesiumAir/Cesium_Air.glb",
                modelMatrix: _ctx.modelMatrix,
                scale: 10000,
                minimumPixelSize: 128,
                maximumScale: 200000
              }, null, 8, ["onClick", "modelMatrix"]), _createVNode(_component_vc_polygon, {
                onClick: _ctx.onClicked,
                positions: _ctx.positions,
                color: "yellow"
              }, null, 8, ["onClick", "positions"])]),
              _: 1
            }, 8, ["onClick", "polygons"])]),
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
            }, 8, ["onClick"]), _createVNode(_component_el_switch, {
              modelValue: _ctx.show,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.show = $event),
              "active-color": "#13ce66",
              "inactive-text": "显示/隐藏"
            }, null, 8, ["modelValue"])]),
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
          const collectionRef = ref(null);
          const billboards1 = ref([]);
          const billboards2 = ref([]);
          const modelMatrix = ref(null);
          const show = ref(true);
          const instance = getCurrentInstance();
          const positions = ref([[105, 32], [106, 34], [107, 30]]);
          const polygons = ref([{
            positions: [[115, 37], [115, 32], [107, 33], [102, 31], [102, 35]],
            color: 'green'
          }, {
            positions: [{
              lng: 108.0,
              lat: 42.0
            }, {
              lng: 100.0,
              lat: 42.0
            }, {
              lng: 104.0,
              lat: 40.0
            }],
            color: 'red',
            depthFailColor: 'red'
          }, {
            positions: [90.0, 41.0, 0.0, 85.0, 41.0, 500000.0, 80.0, 41.0, 0.0],
            color: 'blue'
          }, {
            polygonHierarchy: {
              positions: [[99, 30], [85, 30], [85, 40], [99, 40]],
              holes: [{
                positions: [[97, 31], [97, 39], [87, 39], [87, 31]],
                holes: [{
                  positions: [[95, 33], [89, 33], [89, 37], [95, 37]],
                  holes: [{
                    positions: [[93, 34], [91, 34], [91, 36], [93, 36]]
                  }]
                }]
              }]
            },
            color: 'yellow'
          }]);
          window.polygons = polygons; // methods

          const onClicked = e => {
            console.log(e);
          };

          const unload = () => {
            collectionRef.value.unload();
          };

          const reload = () => {
            collectionRef.value.reload();
          };

          const load = () => {
            collectionRef.value.load();
          };

          const onViewerReady = ({
            Cesium,
            viewer
          }) => {
            for (var i = 0; i < 100; i++) {
              let billboard1 = {};
              billboard1.position = {
                lng: Math.random() * 40 + 85,
                lat: Math.random() * 30 + 21
              };
              billboard1.image = 'https://zouyaoji.top/vue-cesium/favicon.png';
              billboard1.scale = 0.1;
              billboards1.value.push(billboard1);
              let billboard2 = {};
              billboard2.position = {
                lng: Math.random() * 40 + 85,
                lat: Math.random() * 30 + 21
              };
              billboard2.image = 'https://zouyaoji.top/vue-cesium/favicon.png';
              billboard2.scale = 0.15;
              billboards2.value.push(billboard2);
            }

            modelMatrix.value = Cesium.Transforms.eastNorthUpToFixedFrame(Cesium.Cartesian3.fromDegrees(105, 38, 10000));
          };

          const pickEvt = e => {
            console.log(e);
          };

          return {
            pickEvt,
            unload,
            reload,
            load,
            onClicked,
            onViewerReady,
            collectionRef,
            billboards1,
            billboards2,
            modelMatrix,
            show,
            positions,
            polygons
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
// CONCATENATED MODULE: ./website/docs/zh-CN/primitives/vc-collection-primitive.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/zh-CN/primitives/vc-collection-primitive.md



vc_collection_primitivevue_type_script_lang_ts.render = vc_collection_primitivevue_type_template_id_f3d51f4e_render

/* harmony default export */ var vc_collection_primitive = __webpack_exports__["default"] = (vc_collection_primitivevue_type_script_lang_ts);

/***/ })

}]);