(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[197],{

/***/ 545:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/.pnpm/vue@3.2.26/node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/.pnpm/babel-loader@8.2.3_bcd6ea64369259a9a094ff5ba7188bb6/node_modules/babel-loader/lib!./node_modules/.pnpm/vue-loader@16.5.0_84624e34ee7884f58cc7c084da9eaf0a/node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/.pnpm/vue-loader@16.5.0_84624e34ee7884f58cc7c084da9eaf0a/node_modules/vue-loader/dist??ref--11-0!./website/pages/guide.vue?vue&type=template&id=76195001

const _hoisted_1 = {
  class: "page-container page-guide"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_side_nav = Object(vue_esm_browser["resolveComponent"])("side-nav");

  const _component_el_col = Object(vue_esm_browser["resolveComponent"])("el-col");

  const _component_router_view = Object(vue_esm_browser["resolveComponent"])("router-view");

  const _component_el_row = Object(vue_esm_browser["resolveComponent"])("el-row");

  return Object(vue_esm_browser["openBlock"])(), Object(vue_esm_browser["createElementBlock"])("div", _hoisted_1, [Object(vue_esm_browser["createVNode"])(_component_el_row, null, {
    default: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createVNode"])(_component_el_col, {
      xs: 24,
      sm: 5
    }, {
      default: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createVNode"])(_component_side_nav, {
        data: $options.navsData,
        base: `/${$data.lang}/guide`
      }, null, 8, ["data", "base"])]),
      _: 1
    }), Object(vue_esm_browser["createVNode"])(_component_el_col, {
      xs: 24,
      sm: 19
    }, {
      default: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createVNode"])(_component_router_view, {
        class: "content"
      })]),
      _: 1
    })]),
    _: 1
  })]);
}
// CONCATENATED MODULE: ./website/pages/guide.vue?vue&type=template&id=76195001

// EXTERNAL MODULE: ./website/i18n/page.json
var page = __webpack_require__(744);

// CONCATENATED MODULE: ./node_modules/.pnpm/babel-loader@8.2.3_bcd6ea64369259a9a094ff5ba7188bb6/node_modules/babel-loader/lib!./node_modules/.pnpm/vue-loader@16.5.0_84624e34ee7884f58cc7c084da9eaf0a/node_modules/vue-loader/dist??ref--11-0!./website/pages/guide.vue?vue&type=script&lang=js

/* harmony default export */ var guidevue_type_script_lang_js = ({
  data() {
    return {
      lang: this.$route.meta.lang
    };
  },

  computed: {
    langConfig() {
      return page.filter(config => config.lang === this.lang)[0].pages.guide;
    },

    navsData() {
      return [{
        path: '/design',
        name: this.langConfig[1]
      } // {
      //   path: '/nav',
      //   name: this.langConfig[2],
      // },
      ];
    }

  }
});
// CONCATENATED MODULE: ./website/pages/guide.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./website/pages/guide.vue?vue&type=style&index=0&id=76195001&lang=scss
var guidevue_type_style_index_0_id_76195001_lang_scss = __webpack_require__(762);

// CONCATENATED MODULE: ./website/pages/guide.vue





guidevue_type_script_lang_js.render = render

/* harmony default export */ var guide = __webpack_exports__["default"] = (guidevue_type_script_lang_js);

/***/ }),

/***/ 744:
/***/ (function(module) {

module.exports = JSON.parse("[{\"lang\":\"zh-CN\",\"pages\":{\"index\":{\"1\":\"三维网站快速成型工具\",\"2\":\"VueCesium，一套为 GISer 准备的基于 Vue 2.x & Vue 3.x 的 CesiumJS 组件库\",\"3\":\"指南\",\"4\":\"了解设计指南，帮助开发人员搭建逻辑清晰、结构合理且高效易用的应用。\",\"5\":\"查看详情\",\"6\":\"组件\",\"7\":\"使用 Demo 快速体验三维场景；使用前端框架封装的代码帮助工程师快速开发。\",\"8\":\"资源\",\"9\":\"下载相关资源，用其快速搭建页面原型或高保真视觉稿，提升产品设计效率。\",\"lang\":\"zh-CN\",\"titleSize\":\"34\",\"paraSize\":\"18\"},\"component\":{},\"theme-preview\":{\"1\":\"返回\"},\"changelog\":{\"1\":\"更新日志\",\"2\":\"zh-CN\"},\"donations\":{\"1\":\"捐赠\",\"2\":\"zh-CN\"},\"design\":{\"1\":\"设计原则\",\"2\":\"一致\",\"3\":\"Consistency\",\"6\":\"效率\",\"7\":\"Efficiency\",\"8\":\"可控\",\"9\":\"Controllability\",\"10\":\"一致性 Consistency\",\"11\":\"API 一致：\",\"12\":\"与加载的 Cesium 库的 API 一致；\",\"13\":\"规范一致：\",\"14\":\"遵循 Vue 风格指南。\",\"20\":\"效率 Efficiency\",\"21\":\"清晰明确：\",\"22\":\"采用 Vue 组合式 API 开发，代码可读性高；\",\"23\":\"简化流程：\",\"24\":\"MVVM 数据驱动 + 组件复用，极大简化代码量。\",\"27\":\"可控 Controllability\",\"28\":\"开源可控：\",\"29\":\"VueCesium 采用 MIT 开源协议；\",\"30\":\"产品可控：\",\"31\":\"用户可根据需求加载原生 Cesium 库、自己修改的 Cesium 库以及第三方扩展的 Cesium 库均可。\"},\"guide\":{\"1\":\"设计原则\",\"2\":\"导航\"},\"resource\":{\"1\":\"资源\",\"2\":\"整理中\",\"paraHeight\":\"1.8\",\"placeholder1\":\"整理中\",\"placeholder2\":\"资源正在整理和完善中\"}}},{\"lang\":\"en-US\",\"pages\":{\"index\":{\"1\":\"A component library of CesiumJS\",\"2\":\"VueCesium, a Vue 2.x & Vue 3.x based component library of CesiumJS for GISer\",\"3\":\"Guide\",\"4\":\"Understand the design guidelines, helping designers build product that's logically sound, reasonably structured and easy to use.\",\"5\":\"View Detail\",\"6\":\"Component\",\"7\":\"Experience the 3D scene by strolling through component demos. Use encapsulated code to improve developing efficiency.\",\"8\":\"Resource\",\"9\":\"Download relevant design resources for shaping page prototype or visual draft, increasing design efficiency.\",\"10\":\"Theme\",\"11\":\"Online theme roller, visualize custom and manage site themes and component styles\",\"12\":\"Theme customization is available!\",\"13\":\"Click here\",\"14\":\"Make your own theme\",\"lang\":\"en-US\",\"titleSize\":\"34\",\"paraSize\":\"18\"},\"component\":{},\"theme\":{\"1\":\"Official Theme\",\"2\":\"My Theme\",\"3\":\"Theme name\"},\"theme-preview\":{\"1\":\"Back\"},\"theme-nav\":{},\"changelog\":{\"1\":\"Changelog\",\"2\":\"en-US\"},\"donations\":{\"1\":\"Donations\",\"2\":\"en-US\"},\"design\":{\"1\":\"Design Disciplines\",\"2\":\"Consistency\",\"3\":\"\",\"4\":\"Feedback\",\"5\":\"\",\"6\":\"Efficiency\",\"7\":\"\",\"8\":\"Controllability\",\"9\":\"\",\"10\":\"Consistency\",\"11\":\"Consistent with API: \",\"12\":\"Consistent with the API of the loaded Cesium library.\",\"13\":\"Consistent norms: \",\"14\":\"Follow the Vue style guide.\",\"21\":\"Definite and clear: \",\"22\":\"Developed with Vue Composition API, high readability.\",\"23\":\"Simplify the process: \",\"24\":\"MVVM data drive + component reuse, greatly simplifying the amount of code.\",\"25\":\"Easy to identify: \",\"26\":\"the interface should be straightforward, which helps the users to identify and frees them from memorizing and recalling.\",\"27\":\"Controllability\",\"28\":\"Open source: \",\"29\":\"MIT open source agreement, the related technology cited will also indicate the source.\",\"30\":\"Controlled product: \",\"31\":\"users can load native Cesium, self-modified Cesium, and third-party extended Cesium according to their needs.\"},\"guide\":{\"1\":\"Design Disciplines\",\"2\":\"Navigation\"},\"resource\":{\"1\":\"Resource\",\"2\":\"Under construction.\",\"paraHeight\":\"1.6\",\"placeholder1\":\"Under construction\",\"placeholder2\":\"More resources are being developed\"}}}]");

/***/ }),

/***/ 750:
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(36);
            var content = __webpack_require__(763);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ 762:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_pnpm_style_loader_1_3_0_webpack_4_44_1_node_modules_style_loader_dist_cjs_js_node_modules_pnpm_mini_css_extract_plugin_0_11_2_webpack_4_44_1_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_pnpm_css_loader_4_3_0_webpack_4_44_1_node_modules_css_loader_dist_cjs_js_node_modules_pnpm_vue_loader_16_5_0_84624e34ee7884f58cc7c084da9eaf0a_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_pnpm_sass_loader_10_2_0_sass_1_44_0_webpack_4_44_1_node_modules_sass_loader_dist_cjs_js_ref_4_3_node_modules_pnpm_vue_loader_16_5_0_84624e34ee7884f58cc7c084da9eaf0a_node_modules_vue_loader_dist_index_js_ref_11_0_guide_vue_vue_type_style_index_0_id_76195001_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(750);
/* harmony import */ var _node_modules_pnpm_style_loader_1_3_0_webpack_4_44_1_node_modules_style_loader_dist_cjs_js_node_modules_pnpm_mini_css_extract_plugin_0_11_2_webpack_4_44_1_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_pnpm_css_loader_4_3_0_webpack_4_44_1_node_modules_css_loader_dist_cjs_js_node_modules_pnpm_vue_loader_16_5_0_84624e34ee7884f58cc7c084da9eaf0a_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_pnpm_sass_loader_10_2_0_sass_1_44_0_webpack_4_44_1_node_modules_sass_loader_dist_cjs_js_ref_4_3_node_modules_pnpm_vue_loader_16_5_0_84624e34ee7884f58cc7c084da9eaf0a_node_modules_vue_loader_dist_index_js_ref_11_0_guide_vue_vue_type_style_index_0_id_76195001_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_style_loader_1_3_0_webpack_4_44_1_node_modules_style_loader_dist_cjs_js_node_modules_pnpm_mini_css_extract_plugin_0_11_2_webpack_4_44_1_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_pnpm_css_loader_4_3_0_webpack_4_44_1_node_modules_css_loader_dist_cjs_js_node_modules_pnpm_vue_loader_16_5_0_84624e34ee7884f58cc7c084da9eaf0a_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_pnpm_sass_loader_10_2_0_sass_1_44_0_webpack_4_44_1_node_modules_sass_loader_dist_cjs_js_ref_4_3_node_modules_pnpm_vue_loader_16_5_0_84624e34ee7884f58cc7c084da9eaf0a_node_modules_vue_loader_dist_index_js_ref_11_0_guide_vue_vue_type_style_index_0_id_76195001_lang_scss__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ 763:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);