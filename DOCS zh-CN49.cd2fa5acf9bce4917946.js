(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[139],{

/***/ 586:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/zh-CN/overlays/vc-overlay-heatmap.md?vue&type=template&id=5c26ab14

const vc_overlay_heatmapvue_type_template_id_5c26ab14_hoisted_1 = {
  class: "content element-doc"
};

const vc_overlay_heatmapvue_type_template_id_5c26ab14_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("h2", {
  id: "vcoverlayheatmap"
}, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("a", {
  class: "header-anchor",
  href: "#vcoverlayheatmap"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" VcOverlayHeatmap")], -1);

const vc_overlay_heatmapvue_type_template_id_5c26ab14_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, "加载热力图覆盖物。", -1);

const _hoisted_4 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, "基于 heatmapjs 实现。", -1);

const _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("h3", {
  id: "ji-chu-yong-fa"
}, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("a", {
  class: "header-anchor",
  href: "#ji-chu-yong-fa"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 基础用法")], -1);

const _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, "热力图覆盖物组件的基础用法。", -1);

const _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("使用 "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-overlay-heatmap"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 标签在三维球上添加热力图。")])], -1);

const _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", {
  class: "html"
}, "<el-row ref=\"viewerContainer\" class=\"demo-viewer\">\n  <vc-viewer @ready=\"ready\" sceneModePicker>\n    <vc-overlay-heatmap\n      v-if=\"data.length\"\n      ref=\"heatmap\"\n      :data=\"data\"\n      :rectangle=\"rectangle\"\n      :max=\"max\"\n      :min=\"min\"\n      :show=\"show\"\n      :options=\"options\"\n      @ready=\"onHeatmapReady\"\n      type=\"primitive\"\n      :segments=\"segments\"\n    >\n    </vc-overlay-heatmap>\n    <vc-layer-imagery :sortOrder=\"20\">\n      <vc-provider-imagery-tianditu mapStyle=\"cva_c\" token=\"436ce7e50d27eede2f2929307e6b33c0\"></vc-provider-imagery-tianditu>\n    </vc-layer-imagery>\n    <vc-layer-imagery :sortOrder=\"10\">\n      <vc-provider-imagery-tianditu mapStyle=\"img_c\" token=\"436ce7e50d27eede2f2929307e6b33c0\"></vc-provider-imagery-tianditu>\n    </vc-layer-imagery>\n    <vc-datasource-geojson data=\"https://zouyaoji.top/vue-cesium/SampleData/geojson/wuhou.json\" stroke=\"red\"></vc-datasource-geojson>\n  </vc-viewer>\n  <el-row class=\"demo-toolbar\">\n    <el-button type=\"danger\" round @click=\"unload\">销毁</el-button>\n    <el-button type=\"danger\" round @click=\"load\">加载</el-button>\n    <el-button type=\"danger\" round @click=\"reload\">重载</el-button>\n  </el-row>\n</el-row>\n\n<script>\n  export default {\n    data() {\n      return {\n        show: true,\n        data: [],\n        max: 346.05413818359375,\n        min: 0.5259535908699036,\n        rectangle: [0, 0, 0, 0],\n        segments: [\n          [10, '#4A90C3'],\n          [20, '#81AAAC'],\n          [40, '#B2C899'],\n          [60, '#E5EA84'],\n          [100, '#F8DE6D'],\n          [150, '#EFA451'],\n          [200, '#E46C38'],\n          [346, '#D53127']\n        ],\n        options: {\n          backgroundColor: 'rgba(0,0,0,0)',\n          // gradient: {\n          //   // enter n keys between 0 and 1 here\n          //   // for gradient color customization\n          //   0.0289017: '#4A90C3', // 0-10\n          //   0.0578035: '#81AAAC', // 11-20\n          //   0.1156069: '#B2C899', // 21-40\n          //   0.1734104: '#E5EA84', // 41-60\n          //   0.2890173: '#F8DE6D', // 61-100\n          //   0.433526: '#EFA451', // 101-150\n          //   0.5780347: '#E46C38', // 151-200\n          //   1: '#D53127' // 201-346\n          // },\n          opacity: 0.8,\n          radius: 10,\n          maxOpacity: 0.6,\n          minOpacity: 0.3,\n          blur: 0.75\n        }\n      }\n    },\n    methods: {\n      ready({ Cesium, viewer }) {\n        Cesium.Resource.fetchJson({ url: 'https://zouyaoji.top/vue-cesium/SampleData/heatmap/pop.json' }).then(res => {\n          this.rectangle = res.bounds\n          this.min = res.min\n          this.max = res.max\n          this.data = res.data\n        })\n      },\n      onHeatmapReady({ Cesium, viewer, cesiumObject }) {\n        this.$refs.heatmap.childRef.value.createPromise.then(({ Cesium, viewer, cesiumObject }) => {\n          console.log(cesiumObject)\n          if (cesiumObject instanceof Cesium.GroundPrimitive) {\n            const geometry = cesiumObject.geometryInstances.geometry.constructor.createGeometry(cesiumObject.geometryInstances.geometry)\n            viewer.scene.camera.flyToBoundingSphere(geometry.boundingSphere)\n          } else if (cesiumObject instanceof Cesium.Entity) {\n            viewer.flyTo(cesiumObject)\n          } else {\n            viewer.camera.flyTo({ destination: cesiumObject.imageryProvider.rectangle })\n          }\n        })\n      },\n      unload() {\n        this.$refs.heatmap.unload()\n      },\n      load() {\n        this.$refs.heatmap.load()\n      },\n      reload() {\n        this.$refs.heatmap.reload()\n      }\n    }\n  }\n</script>\n")], -1);

const _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<h3 id=\"shu-xing\"><a class=\"header-anchor\" href=\"#shu-xing\">¶</a> 属性</h3><table><thead><tr><th>属性名</th><th>类型</th><th>默认值</th><th>描述</th><th>可选值</th></tr></thead><tbody><tr><td>show</td><td>Boolean</td><td><code>true</code></td><td><code>optional</code> 指定热力图是否显示。</td><td></td></tr><tr><td>rectangle</td><td>Object|Array</td><td></td><td><code>optional</code> 指定热力图四至参数。</td><td></td></tr><tr><td>min</td><td>Number</td><td><code>true</code></td><td><code>optional</code> 指定热力图数据最小值。</td><td></td></tr><tr><td>max</td><td>Number</td><td></td><td><code>optional</code> 指定热力图数据最大值。</td><td></td></tr><tr><td>data</td><td>Array&lt;{x: number, y: number, value: number}&gt;</td><td><code>[]</code></td><td><code>optional</code> 指定热力图数据。如果不是 x, y, value 需要在 options 属性指明字段。</td><td></td></tr><tr><td>options</td><td>Object|HeatmapConfiguration</td><td></td><td><code>optional</code> 指定热力图参数。</td><td></td></tr><tr><td>type</td><td>String</td><td><code>&#39;primitive&#39;</code></td><td><code>optional</code> 指定热力图对象的类型。<strong>图元: primitive, 实体: entity, 影像图层: imagery-layer</strong></td><td>primitive/entity/imagery-layer</td></tr><tr><td>segments</td><td>Array&lt;ColorSegments&gt;</td><td></td><td><code>optional</code> 指定热力图颜色分段。</td><td></td></tr></tbody></table><div class=\"tip\"><p>提示：<code>segments</code> 和 <code>options.gradient</code> 均表达颜色分段，指定其中一个就可以了。<code>segments</code> 分段是实际值，而 <code>options.gradient</code> 需要归一化处理，详见例子。</p></div><div class=\"tipflex\"><pre><code class=\"hljs language-js\"><span class=\"hljs-comment\">// options 结构:</span>\n{\n  <span class=\"hljs-attr\">backgroundColor</span>: string,\n  <span class=\"hljs-attr\">gradient</span>: { [<span class=\"hljs-attr\">key</span>: string]: string }\n  <span class=\"hljs-attr\">radius</span>: number\n  <span class=\"hljs-attr\">opacity</span>: number\n  <span class=\"hljs-attr\">maxOpacity</span>: number\n  <span class=\"hljs-attr\">minOpacity</span>: number\n  <span class=\"hljs-attr\">blur</span>: number\n  <span class=\"hljs-attr\">xField</span>: string <span class=\"hljs-comment\">// x</span>\n  <span class=\"hljs-attr\">yField</span>: string <span class=\"hljs-comment\">// y</span>\n  <span class=\"hljs-attr\">valueField</span>: string <span class=\"hljs-comment\">//value</span>\n}\n</code></pre><pre><code class=\"hljs language-js\"><span class=\"hljs-comment\">// segments 结构:</span>\n<span class=\"hljs-title class_\">Array</span>&lt;[number, [number, number, number]] | [number, string | <span class=\"hljs-title class_\">ColorInByteOption</span> | <span class=\"hljs-title class_\">Cartesian</span>4Option | <span class=\"hljs-title class_\">Cesium</span>.<span class=\"hljs-property\">Color</span>]&gt;\n</code></pre></div><h3 id=\"shi-jian\"><a class=\"header-anchor\" href=\"#shi-jian\">¶</a> 事件</h3><table><thead><tr><th>事件名</th><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>beforeLoad</td><td>Vue Instance</td><td>对象加载前触发。</td></tr><tr><td>ready</td><td>{Cesium, viewer, cesiumObject, vm}</td><td>对象加载成功时触发。</td></tr><tr><td>destroyed</td><td>Vue Instance</td><td>对象销毁时触发。</td></tr></tbody></table><h3 id=\"can-kao\"><a class=\"header-anchor\" href=\"#can-kao\">¶</a> 参考</h3><ul><li>资料： <a href=\"https://www.patrick-wied.at/static/heatmapjs/docs.html\">heatmapjs</a></li></ul>", 8);

function vc_overlay_heatmapvue_type_template_id_5c26ab14_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_vue_cesium_demo0 = Object(vue_esm_browser["resolveComponent"])("vue-cesium-demo0");

  const _component_demo_block = Object(vue_esm_browser["resolveComponent"])("demo-block");

  const _component_right_nav = Object(vue_esm_browser["resolveComponent"])("right-nav");

  return Object(vue_esm_browser["openBlock"])(), Object(vue_esm_browser["createElementBlock"])("section", vc_overlay_heatmapvue_type_template_id_5c26ab14_hoisted_1, [vc_overlay_heatmapvue_type_template_id_5c26ab14_hoisted_2, vc_overlay_heatmapvue_type_template_id_5c26ab14_hoisted_3, _hoisted_4, _hoisted_5, _hoisted_6, Object(vue_esm_browser["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createVNode"])(_component_vue_cesium_demo0)]),
    highlight: Object(vue_esm_browser["withCtx"])(() => [_hoisted_8]),
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_7]),
    _: 1
  }), _hoisted_9, Object(vue_esm_browser["createVNode"])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/zh-CN/overlays/vc-overlay-heatmap.md?vue&type=template&id=5c26ab14

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/zh-CN/overlays/vc-overlay-heatmap.md?vue&type=script&lang=ts

/* harmony default export */ var vc_overlay_heatmapvue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "vue-cesium-demo0": function () {
      const {
        resolveComponent: _resolveComponent,
        openBlock: _openBlock,
        createBlock: _createBlock,
        createCommentVNode: _createCommentVNode,
        createVNode: _createVNode,
        withCtx: _withCtx,
        createTextVNode: _createTextVNode,
        createElementBlock: _createElementBlock
      } = vue_esm_browser;

      const _hoisted_1 = /*#__PURE__*/_createTextVNode("销毁");

      const _hoisted_2 = /*#__PURE__*/_createTextVNode("加载");

      const _hoisted_3 = /*#__PURE__*/_createTextVNode("重载");

      function render(_ctx, _cache) {
        const _component_vc_overlay_heatmap = _resolveComponent("vc-overlay-heatmap");

        const _component_vc_provider_imagery_tianditu = _resolveComponent("vc-provider-imagery-tianditu");

        const _component_vc_layer_imagery = _resolveComponent("vc-layer-imagery");

        const _component_vc_datasource_geojson = _resolveComponent("vc-datasource-geojson");

        const _component_vc_viewer = _resolveComponent("vc-viewer");

        const _component_el_button = _resolveComponent("el-button");

        const _component_el_row = _resolveComponent("el-row");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_row, {
          ref: "viewerContainer",
          class: "demo-viewer"
        }, {
          default: _withCtx(() => [_createVNode(_component_vc_viewer, {
            onReady: _ctx.ready,
            sceneModePicker: ""
          }, {
            default: _withCtx(() => [_ctx.data.length ? (_openBlock(), _createBlock(_component_vc_overlay_heatmap, {
              key: 0,
              ref: "heatmap",
              data: _ctx.data,
              rectangle: _ctx.rectangle,
              max: _ctx.max,
              min: _ctx.min,
              show: _ctx.show,
              options: _ctx.options,
              onReady: _ctx.onHeatmapReady,
              type: "primitive",
              segments: _ctx.segments
            }, null, 8, ["data", "rectangle", "max", "min", "show", "options", "onReady", "segments"])) : _createCommentVNode("", true), _createVNode(_component_vc_layer_imagery, {
              sortOrder: 20
            }, {
              default: _withCtx(() => [_createVNode(_component_vc_provider_imagery_tianditu, {
                mapStyle: "cva_c",
                token: "436ce7e50d27eede2f2929307e6b33c0"
              })]),
              _: 1
            }), _createVNode(_component_vc_layer_imagery, {
              sortOrder: 10
            }, {
              default: _withCtx(() => [_createVNode(_component_vc_provider_imagery_tianditu, {
                mapStyle: "img_c",
                token: "436ce7e50d27eede2f2929307e6b33c0"
              })]),
              _: 1
            }), _createVNode(_component_vc_datasource_geojson, {
              data: "https://zouyaoji.top/vue-cesium/SampleData/geojson/wuhou.json",
              stroke: "red"
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

      const democomponentExport = {
        data() {
          return {
            show: true,
            data: [],
            max: 346.05413818359375,
            min: 0.5259535908699036,
            rectangle: [0, 0, 0, 0],
            segments: [[10, '#4A90C3'], [20, '#81AAAC'], [40, '#B2C899'], [60, '#E5EA84'], [100, '#F8DE6D'], [150, '#EFA451'], [200, '#E46C38'], [346, '#D53127']],
            options: {
              backgroundColor: 'rgba(0,0,0,0)',
              // gradient: {
              //   // enter n keys between 0 and 1 here
              //   // for gradient color customization
              //   0.0289017: '#4A90C3', // 0-10
              //   0.0578035: '#81AAAC', // 11-20
              //   0.1156069: '#B2C899', // 21-40
              //   0.1734104: '#E5EA84', // 41-60
              //   0.2890173: '#F8DE6D', // 61-100
              //   0.433526: '#EFA451', // 101-150
              //   0.5780347: '#E46C38', // 151-200
              //   1: '#D53127' // 201-346
              // },
              opacity: 0.8,
              radius: 10,
              maxOpacity: 0.6,
              minOpacity: 0.3,
              blur: 0.75
            }
          };
        },

        methods: {
          ready({
            Cesium,
            viewer
          }) {
            Cesium.Resource.fetchJson({
              url: 'https://zouyaoji.top/vue-cesium/SampleData/heatmap/pop.json'
            }).then(res => {
              this.rectangle = res.bounds;
              this.min = res.min;
              this.max = res.max;
              this.data = res.data;
            });
          },

          onHeatmapReady({
            Cesium,
            viewer,
            cesiumObject
          }) {
            this.$refs.heatmap.childRef.value.createPromise.then(({
              Cesium,
              viewer,
              cesiumObject
            }) => {
              console.log(cesiumObject);

              if (cesiumObject instanceof Cesium.GroundPrimitive) {
                const geometry = cesiumObject.geometryInstances.geometry.constructor.createGeometry(cesiumObject.geometryInstances.geometry);
                viewer.scene.camera.flyToBoundingSphere(geometry.boundingSphere);
              } else if (cesiumObject instanceof Cesium.Entity) {
                viewer.flyTo(cesiumObject);
              } else {
                viewer.camera.flyTo({
                  destination: cesiumObject.imageryProvider.rectangle
                });
              }
            });
          },

          unload() {
            this.$refs.heatmap.unload();
          },

          load() {
            this.$refs.heatmap.load();
          },

          reload() {
            this.$refs.heatmap.reload();
          }

        }
      };
      return {
        render,
        ...democomponentExport
      };
    }()
  }
});
// CONCATENATED MODULE: ./website/docs/zh-CN/overlays/vc-overlay-heatmap.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/zh-CN/overlays/vc-overlay-heatmap.md



vc_overlay_heatmapvue_type_script_lang_ts.render = vc_overlay_heatmapvue_type_template_id_5c26ab14_render

/* harmony default export */ var vc_overlay_heatmap = __webpack_exports__["default"] = (vc_overlay_heatmapvue_type_script_lang_ts);

/***/ })

}]);