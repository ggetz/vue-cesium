(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[124],{

/***/ 575:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/zh-CN/graphics/vc-graphics-label.md?vue&type=template&id=770a8d7b

const _hoisted_1 = {
  class: "content element-doc"
};

const _hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<h2 id=\"vcgraphicslabel\"><a class=\"header-anchor\" href=\"#vcgraphicslabel\">¶</a> VcGraphicsLabel</h2><p>加载文本实体，相当于初始化一个 <code>Cesium.LabelGraphics</code> 实例。</p><p><strong>注意：</strong> 需要作为 <code>vc-entity</code> 的子组件才能正常加载。</p><h3 id=\"ji-chu-yong-fa\"><a class=\"header-anchor\" href=\"#ji-chu-yong-fa\">¶</a> 基础用法</h3><p>文本实体组件的基础用法。</p>", 5);

const _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("使用 "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-graphics-label"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 标签在三维球上添加文本实体对象。")])], -1);

const _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", {
  class: "html"
}, "<el-row ref=\"viewerContainer\" class=\"demo-viewer\">\n  <vc-viewer @ready=\"onViewerReady\">\n    <vc-entity :position=\"[114, 40, 300000]\" description=\"Hello Vue Cesium\" @click=\"onEntityEvt\" @mouseover=\"onEntityEvt\" @mouseout=\"onEntityEvt\">\n      <vc-graphics-label text=\"Hello Vue Cesium\" font=\"20px sans-serif\" :pixelOffset=\"[0, 20]\" fillColor=\"red\"></vc-graphics-label>\n    </vc-entity>\n  </vc-viewer>\n</el-row>\n\n<script>\n  import { ref, getCurrentInstance, onMounted } from 'vue'\n  export default {\n    setup() {\n      // methods\n      const onEntityEvt = e => {\n        console.log(e)\n      }\n      const onViewerReady = cesiumInstance => {\n        console.log('viewer ready')\n      }\n\n      return {\n        onEntityEvt,\n        onViewerReady\n      }\n    }\n  }\n</script>\n")], -1);

const _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<h3 id=\"shu-xing\"><a class=\"header-anchor\" href=\"#shu-xing\">¶</a> 属性</h3><table><thead><tr><th>属性名</th><th>类型</th><th>默认值</th><th>描述</th><th>可选值</th></tr></thead><tbody><tr><td>show</td><td>Boolean</td><td><code>true</code></td><td><code>optional</code> 指定 label 是否显示。</td><td></td></tr><tr><td>text</td><td>String</td><td></td><td><code>optional</code> 指定 label 文字，支持&#39;\\n&#39;换行符。</td><td></td></tr><tr><td>font</td><td>String</td><td><code>&#39;30px sans-serif&#39;</code></td><td><code>optional</code> 指定 label CSS 字体。</td><td></td></tr><tr><td>labelStyle</td><td>Number</td><td><code>0</code></td><td><code>optional</code> 指定 label 绘制风格。 <strong>FILL: 0, OUTLINE: 1, FILL_AND_OUTLINE: 2</strong></td><td>0/1/2</td></tr><tr><td>scale</td><td>Number</td><td><code>1.0</code></td><td><code>optional</code> 指定 label 缩放比例。</td><td></td></tr><tr><td>showBackground</td><td>Boolean</td><td><code>false</code></td><td><code>optional</code> 指定 label 是否显示背景。</td><td></td></tr><tr><td>backgroundColor</td><td>Object|String|Array</td><td><code>{ x: 0.165, y: 0.165, z: 0.165, w: 0.8 }</code></td><td><code>optional</code> 指定 label 背景颜色。</td><td></td></tr><tr><td>backgroundPadding</td><td>Object|Array</td><td><code>{x: 7, y: 5}</code></td><td><code>optional</code> 指定 label 背景偏移量。</td><td></td></tr><tr><td>pixelOffset</td><td>Object|Array</td><td><code>{x: 0, y: 0}</code></td><td><code>optional</code> 指定 label 像素偏移量。</td><td></td></tr><tr><td>eyeOffset</td><td>Object|Array</td><td><code>{x: 0, y: 0, z: 0}</code></td><td><code>optional</code> 指定 label 视角偏移量。</td><td></td></tr><tr><td>horizontalOrigin</td><td>Number</td><td><code>0</code></td><td><code>optional</code> 指定 label 水平对齐方式。 <strong>CENTER: 0, LEFT: 1, RIGHT: -1</strong></td><td>0/1/-1</td></tr><tr><td>verticalOrigin</td><td>Number</td><td><code>0</code></td><td><code>optional</code> 指定 label 垂直对齐方式。 <strong>CENTER: 0, BOTTOM: 1, BASELINE: 2, TOP: -1</strong></td><td>0/1/2/-1</td></tr><tr><td>heightReference</td><td>Number</td><td><code>0</code></td><td><code>optional</code> 指定 label 高度模式。 <strong>NONE: 0, CLAMP_TO_GROUND: 1, RELATIVE_TO_GROUND: 2</strong></td><td>0/1/2</td></tr><tr><td>fillColor</td><td>Object|String|Array</td><td><code>white</code></td><td><code>optional</code> 指定 label 填充颜色。</td><td></td></tr><tr><td>outlineColor</td><td>Object|String|Array</td><td><code>black</code></td><td><code>optional</code> 指定 label 轮廓线颜色。</td><td></td></tr><tr><td>outlineWidth</td><td>Number</td><td><code>1.0</code></td><td><code>optional</code> 指定 label 轮廓线宽度。</td><td></td></tr><tr><td>translucencyByDistance</td><td>Object|Array</td><td></td><td><code>optional</code> 指定 label 透明度随相机距离改变的参数。</td><td></td></tr><tr><td>pixelOffsetScaleByDistance</td><td>Object|Array</td><td></td><td><code>optional</code> 指定 label 偏移量随相机距离改变的参数。</td><td></td></tr><tr><td>scaleByDistance</td><td>Object|Array</td><td></td><td><code>optional</code> 指定 label 缩放随相机距离改变的参数。</td><td></td></tr><tr><td>distanceDisplayCondition</td><td>Object|Array</td><td></td><td><code>optional</code> 指定 label 相机距离的显示条件。</td><td></td></tr><tr><td>disableDepthTestDistance</td><td>Number</td><td></td><td><code>optional</code> 指定 label 的深度测试距离。</td><td></td></tr></tbody></table><h3 id=\"shi-jian\"><a class=\"header-anchor\" href=\"#shi-jian\">¶</a> 事件</h3><table><thead><tr><th>事件名</th><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>beforeLoad</td><td>Vue Instance</td><td>对象加载前触发。</td></tr><tr><td>ready</td><td>{Cesium, viewer, cesiumObject, vm}</td><td>对象加载成功时触发。</td></tr><tr><td>destroyed</td><td>Vue Instance</td><td>对象销毁时触发。</td></tr><tr><td>definitionChanged</td><td></td><td>每当更改或修改属性或子属性时触发该事件。</td></tr></tbody></table><h3 id=\"can-kao\"><a class=\"header-anchor\" href=\"#can-kao\">¶</a> 参考</h3><ul><li>官方文档： <strong><a href=\"https://cesium.com/docs/cesiumjs-ref-doc/LabelGraphics.html\">LabelGraphics</a></strong></li></ul>", 6);

function vc_graphics_labelvue_type_template_id_770a8d7b_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_vue_cesium_demo0 = Object(vue_esm_browser["resolveComponent"])("vue-cesium-demo0");

  const _component_demo_block = Object(vue_esm_browser["resolveComponent"])("demo-block");

  const _component_right_nav = Object(vue_esm_browser["resolveComponent"])("right-nav");

  return Object(vue_esm_browser["openBlock"])(), Object(vue_esm_browser["createElementBlock"])("section", _hoisted_1, [_hoisted_2, Object(vue_esm_browser["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createVNode"])(_component_vue_cesium_demo0)]),
    highlight: Object(vue_esm_browser["withCtx"])(() => [_hoisted_8]),
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_7]),
    _: 1
  }), _hoisted_9, Object(vue_esm_browser["createVNode"])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/zh-CN/graphics/vc-graphics-label.md?vue&type=template&id=770a8d7b

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/zh-CN/graphics/vc-graphics-label.md?vue&type=script&lang=ts

/* harmony default export */ var vc_graphics_labelvue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "vue-cesium-demo0": function () {
      const {
        resolveComponent: _resolveComponent,
        createVNode: _createVNode,
        withCtx: _withCtx,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser;

      function render(_ctx, _cache) {
        const _component_vc_graphics_label = _resolveComponent("vc-graphics-label");

        const _component_vc_entity = _resolveComponent("vc-entity");

        const _component_vc_viewer = _resolveComponent("vc-viewer");

        const _component_el_row = _resolveComponent("el-row");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_row, {
          ref: "viewerContainer",
          class: "demo-viewer"
        }, {
          default: _withCtx(() => [_createVNode(_component_vc_viewer, {
            onReady: _ctx.onViewerReady
          }, {
            default: _withCtx(() => [_createVNode(_component_vc_entity, {
              position: [114, 40, 300000],
              description: "Hello Vue Cesium",
              onClick: _ctx.onEntityEvt,
              onMouseover: _ctx.onEntityEvt,
              onMouseout: _ctx.onEntityEvt
            }, {
              default: _withCtx(() => [_createVNode(_component_vc_graphics_label, {
                text: "Hello Vue Cesium",
                font: "20px sans-serif",
                pixelOffset: [0, 20],
                fillColor: "red"
              })]),
              _: 1
            }, 8, ["onClick", "onMouseover", "onMouseout"])]),
            _: 1
          }, 8, ["onReady"])]),
          _: 1
        }, 512)]);
      }

      const {
        ref,
        getCurrentInstance,
        onMounted
      } = vue_esm_browser;
      const democomponentExport = {
        setup() {
          // methods
          const onEntityEvt = e => {
            console.log(e);
          };

          const onViewerReady = cesiumInstance => {
            console.log('viewer ready');
          };

          return {
            onEntityEvt,
            onViewerReady
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
// CONCATENATED MODULE: ./website/docs/zh-CN/graphics/vc-graphics-label.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/zh-CN/graphics/vc-graphics-label.md



vc_graphics_labelvue_type_script_lang_ts.render = vc_graphics_labelvue_type_template_id_770a8d7b_render

/* harmony default export */ var vc_graphics_label = __webpack_exports__["default"] = (vc_graphics_labelvue_type_script_lang_ts);

/***/ })

}]);