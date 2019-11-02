(function(e, a) { for(var i in a) e[i] = a[i]; }(window, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! exports provided: Primary */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_core_primary_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/core/primary.js */ \"./src/core/primary.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Primary\", function() { return _src_core_primary_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n\r\n\r\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./src/components/button.js":
/*!**********************************!*\
  !*** ./src/components/button.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _vo_PNode_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../vo/PNode.js */ \"./src/vo/PNode.js\");\n/* harmony import */ var _util_StringUtil_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/StringUtil.js */ \"./src/util/StringUtil.js\");\n\r\n\r\n\r\nconst ALIAS = 'p-button';\r\n\r\nfunction createComponent(originalNode, data){\r\n\tlet main = new _vo_PNode_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"BUTTON\",{class:'p-button'},[]);\r\n\tvar loading_position = 0;\r\n\tvar text_position = 0;\r\n\t\r\n\tlet icon = originalNode.getAttribute(\"icon\");\r\n\tif(icon != null && typeof icon != 'undefined' && icon != ''){\r\n\t\tloading_position += 1;\r\n\t\ttext_position += 1;\r\n\t\tlet iconSpan = iconNode();\r\n\t\ticonSpan.props['class'] = 'p-font p-font-left ' + (icon?' ' + icon:'');\r\n\t\tmain.children.push(iconSpan);\r\n\t}\r\n\t\r\n\tlet type = originalNode.getAttribute(\"type\");\r\n\tif(type != null && typeof type != 'undefined' && type != ''){\r\n\t\tmain.props['class'] = main.props['class'] + \" p-button-\" + type;\r\n\t}\r\n\t\r\n\tlet id = originalNode.getAttribute(\"id\");\r\n\tif(id != null && typeof id != 'undefined' && id != ''){\r\n\t\tmain.props['id'] = id;\r\n\t}\r\n\t\r\n\tlet style = originalNode.getAttribute(\"style\");\r\n\tif(style != null && typeof style != 'undefined' && style != ''){\r\n\t\tmain.props['style'] = style;\r\n\t}\r\n\t\r\n\tlet disabled = originalNode.getAttribute(\"disabled\");\r\n\tif(disabled != null){\r\n\t\tmain.props['disabled'] = '';\r\n\t\tmain.props['style'] = Object(_util_StringUtil_js__WEBPACK_IMPORTED_MODULE_1__[\"joinStyle\"])(main.props['style'],'opacity:0.8');\r\n\t}\r\n\t\r\n\tlet loading_content = originalNode.getAttribute(\"loading-content\");\r\n\tlet unloading_content = originalNode.innerText;\r\n\tif(loading_content == null){\r\n\t\tloading_content = '';\r\n\t}\r\n\tmain.record['loading-content'] = loading_content;\r\n\tmain.record['unloading-content'] = unloading_content;\r\n\t\r\n\tlet loading = originalNode.getAttribute(\"loading\");\r\n\tif(loading != null && typeof loading != 'undefined' && loading != ''){\r\n\t\tmain.record['loading-position'] = loading_position;\r\n\t\ttext_position += 1;\r\n\t\tlet loadingValue = data[loading];\r\n\t\tlet loadingSpan = loadingNode();\r\n\t\tloadingSpan.props['p-show'] = loadingValue;\r\n\t\tif(loadingValue){\r\n\t\t\toriginalNode.innerText = main.record['loading-content'];\r\n\t\t\tloadingSpan.props['style'] = 'display:inline-block';\r\n\t\t\tif(originalNode.getAttribute('disabled') == null){\r\n\t\t\t\tmain.props['disabled'] = '';\r\n\t\t\t\tmain.props['class'] = main.props['class'] + \" p-button-loading\";\r\n\t\t\t}\r\n\t\t}\r\n\t\tmain.children.push(loadingSpan);\r\n\t\t\r\n\t\tlet watcher = {};\r\n\t\twatcher[loading] = {\r\n\t\t\tvalue:loadingValue,\r\n\t\t\tchange:function(node, value){\r\n\t\t\t\tloadingChange(node, value, main);\r\n\t\t\t}\r\n\t\t}\r\n\t\tmain.watch.push(watcher);\r\n\t}\r\n\t\r\n\tlet onclick = originalNode.getAttribute(\"onclick\");\r\n\tif(onclick != null && typeof onclick != 'undefined' && onclick != ''){\r\n\t\tmain.props['onclick'] = onclick;\r\n\t}\r\n\t\r\n\tlet className = originalNode.getAttribute(\"class\");\r\n\tif(className != null && typeof className != 'undefined' && className != ''){\r\n\t\tmain.props['class'] = main.props['class'] + \" \" + className;\r\n\t}\r\n\t\r\n\tlet text = new _vo_PNode_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('span',{}, originalNode.innerText);\r\n\tmain.record['text-position'] = text_position;\r\n\tmain.children.push(text);\r\n\t\r\n\tlet icon_right = originalNode.getAttribute(\"icon-right\");\r\n\tif(icon_right != null && typeof icon_right != 'undefined' && icon_right != ''){\r\n\t\tlet iconRightSpan = iconNode();\r\n\t\ticonRightSpan.props['class'] = 'p-font p-font-right' + (icon_right?' ' + icon_right:'');\r\n\t\tmain.children.push(iconRightSpan);\r\n\t}\r\n\t\r\n\treturn main;\r\n}\r\n\r\nfunction loadingNode(){\r\n\tlet loadingNode = new _vo_PNode_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"SPAN\",{class:'p-font icon-loading p-font-left'},\"\");\r\n\treturn loadingNode;\r\n}\r\n\r\nfunction iconNode(){\r\n\tlet iconNode = new _vo_PNode_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('span',{},'');\r\n\treturn iconNode;\r\n}\r\n\r\nfunction loadingChange(node, value, btn){\r\n\tlet nodeClass = node.getAttribute('class').trim();\r\n\tif(value){\r\n\t\tnode.setAttribute('disabled','');\r\n\t\tnode.setAttribute('class', nodeClass.concat(' p-button-loading'));\r\n\t\tnode.childNodes[btn.record['loading-position']].style.display = 'inline-block';\r\n\t\tnode.childNodes[btn.record['text-position']].innerText = btn.record['loading-content'];\r\n\t}else{\r\n\t\tnode.removeAttribute('disabled');\r\n\t\tnode.setAttribute('class', nodeClass.replace('p-button-loading',''));\r\n\t\tnode.childNodes[btn.record['loading-position']].style.display = 'none';\r\n\t\tnode.childNodes[btn.record['text-position']].innerText = btn.record['unloading-content'];\r\n\t}\r\n}\r\n\r\nvar component = {\r\n\talias:ALIAS,\r\n\tgetComponent:function(node, data){\r\n\t\treturn createComponent(node, data);\r\n\t}\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (component);\n\n//# sourceURL=webpack:///./src/components/button.js?");

/***/ }),

/***/ "./src/components/input.js":
/*!*********************************!*\
  !*** ./src/components/input.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _vo_PNode_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../vo/PNode.js */ \"./src/vo/PNode.js\");\n\r\n\r\nconst ALIAS = 'p-input';\r\n\r\nfunction createComponent(originalNode, data){\r\n\tlet main = new _vo_PNode_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"DIV\",{class:'p-input-position'},[]);\r\n\tlet input = c_input(originalNode, data);\r\n\t\r\n\tlet pre_icon = preIcon(originalNode);\r\n\tif(typeof pre_icon != 'undefined'){\r\n\t\tmain.children.push(pre_icon);\r\n\t\tinput.props['class'] = (typeof input.props['class'] == \"undefined\")?\"p-input-pre-icon\":(input.props['class'] + \" p-input-pre-icon\");\r\n\t}\r\n\t\r\n\tlet post_icon = postIcon(originalNode);\r\n\tif(typeof post_icon != 'undefined'){\r\n\t\tmain.children.push(post_icon);\r\n\t\tinput.props['class'] = (typeof input.props['class'] == \"undefined\")?\"p-input-post-icon\":(input.props['class'] + \" p-input-post-icon\");\r\n\t}\r\n\t\r\n\tmain.children.unshift(input);\r\n\tmain.watch = main.watch.concat(input.watch);\r\n\t\r\n\tbindInput(originalNode, data, input);\r\n\t\r\n\treturn main;\r\n}\r\n\r\nfunction c_input(originalNode, data){\r\n\tlet input = new _vo_PNode_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"INPUT\",{class:'p-input'},\"\");\r\n\t\r\n\tlet placeholder = originalNode.getAttribute('placeholder');\r\n\tif(typeof placeholder === \"string\"){\r\n\t\tinput.props['placeholder'] = placeholder;\r\n\t}\r\n\t\r\n\tlet id = originalNode.getAttribute(\"id\");\r\n\tif(id != null && typeof id != 'undefined' && id != ''){\r\n\t\tinput.props['id'] = id;\r\n\t}\r\n\t\r\n\tlet inputValue = originalNode.getAttribute('value');\r\n\tif(typeof inputValue === \"string\"){\r\n\t\tlet inputValueBind = data[inputValue];\r\n\t\tif(typeof inputValueBind === 'undefined'){\r\n\t\t\tinput.props['value'] = inputValue;\r\n\t\t}else{\r\n\t\t\tinput.props['value'] = inputValueBind;\r\n\t\t\tlet watcher = {};\r\n\t\t\twatcher[inputValue] = {\r\n\t\t\t\tvalue:inputValueBind,\r\n\t\t\t\tchange:function(node, value){\r\n\t\t\t\t\tinputValueChange(node, value)\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t\tinput.watch.push(watcher);\r\n\t\t}\r\n\t}\r\n\t\r\n\tlet type = originalNode.getAttribute('type');\r\n\tif(typeof type === 'string'){\r\n\t\tinput.props['type'] = type;\r\n\t}else{\r\n\t\tinput.props['type'] = 'text';\r\n\t}\r\n\t\r\n\tlet disabled = originalNode.getAttribute(\"disabled\");\r\n\tif(disabled != null){\r\n\t\tinput.props['disabled'] = '';\r\n\t}\r\n\t\r\n\tlet readonly = originalNode.getAttribute(\"readonly\");\r\n\tif(readonly != null){\r\n\t\tinput.props['readonly'] = '';\r\n\t}\r\n\t\r\n\treturn input;\r\n}\r\n\r\nfunction inputValueChange(node, value){\r\n\tnode.childNodes[0].value = value;\r\n}\r\n\r\nfunction preIcon(originalNode){\r\n\tlet preIcon = undefined;\r\n\tif(typeof originalNode.getAttribute('pre-icon') === \"string\"){\r\n\t\tlet className = \"pre-icon p-font \" + originalNode.getAttribute('pre-icon');\r\n\t\tpreIcon = new _vo_PNode_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"SPAN\",{class:className},\"\");\r\n\t\t\r\n\t\tlet pre_click = originalNode.getAttribute('pre-click');\r\n\t\tlet disabled = originalNode.getAttribute(\"disabled\");\r\n\t\tif(disabled != null){\r\n\t\t\tpreIcon.props['disabled'] = '';\r\n\t\t}else{\r\n\t\t\tif(typeof pre_click === \"string\"){\r\n\t\t\t\tpreIcon.props['onclick'] = pre_click;\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n\t\r\n\treturn preIcon;\r\n}\r\n\r\nfunction postIcon(originalNode){\r\n\tlet postIcon = undefined;\r\n\tif(typeof originalNode.getAttribute('post-icon') === \"string\"){\r\n\t\tlet className = \"post-icon p-font \" + originalNode.getAttribute('post-icon');\r\n\t\tpostIcon = new _vo_PNode_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"SPAN\",{class:className},\"\");\r\n\t\t\r\n\t\tlet post_click = originalNode.getAttribute('post-click');\r\n\t\tlet disabled = originalNode.getAttribute(\"disabled\");\r\n\t\tif(disabled != null){\r\n\t\t\tpostIcon.props['disabled'] = '';\r\n\t\t}else{\r\n\t\t\tif(typeof post_click === \"string\"){\r\n\t\t\t\tpostIcon.props['onclick'] = post_click;\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n\treturn postIcon;\r\n}\r\n\r\nfunction bindInput(originalNode, data, input){\r\n\tlet inputValue = originalNode.getAttribute('value');\r\n\tif(typeof inputValue === \"string\"){\r\n\t\tlet inputValueBind = data[inputValue];\r\n\t\tif(typeof inputValueBind !== 'undefined'){\r\n\t\t\tinput.getNodeDocument().oninput = function(){\r\n\t\t\t\tdata[inputValue] = this.value;\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n}\r\n\r\nvar component = {\r\n\talias:ALIAS,\r\n\tgetComponent:function(node, data){\r\n\t\treturn createComponent(node, data);\r\n\t}\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (component);\n\n//# sourceURL=webpack:///./src/components/input.js?");

/***/ }),

/***/ "./src/core/primary.js":
/*!*****************************!*\
  !*** ./src/core/primary.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Primary; });\n/* harmony import */ var _repaint_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./repaint.js */ \"./src/core/repaint.js\");\n\r\n\r\nclass Primary{\r\n\tconstructor(every) {\r\n\t    this.id = every.id;\r\n\t\tthis.data = every.data;\r\n\t\tlet watcher = [];\r\n\t\tlet gloabData = {};\r\n\t\tvar doc = document.getElementById(this.id);\r\n\t\t\r\n\t\twatcher = Object(_repaint_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(doc, this.data, watcher);\r\n\t\t\r\n\t\tfor(let key in this.data){\r\n\t\t\tif(key != 'p_node'){\r\n\t\t\t\tgloabData[key] = this.data[key];\r\n\t\t\t\tObject.defineProperty(this.data, key, {\r\n\t\t\t\t\tget:function(){\r\n\t\t\t\t\t\treturn gloabData[key];\r\n\t\t\t\t\t},\r\n\t\t\t\t\tset:function(value){\r\n\t\t\t\t\t\tgloabData[key] = value;\r\n\t\t\t\t\t\tdataChange(watcher, key, value);\r\n\t\t\t\t\t},\r\n\t\t\t\t\tenumerable : true,\r\n\t\t\t\t\tconfigurable : true\r\n\t\t\t\t})\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n}\r\n\r\nfunction dataChange(watcher, key, value){\r\n\twatcher.forEach(function(w){\r\n\t\tif(typeof w[key] !== 'undefined' && typeof w[key].value !== 'undefined' && w[key].value != value){\r\n\t\t\tw[key].value = value;\r\n\t\t\tw[key].change(w.p_node, value, w.p);\r\n\t\t}\r\n\t})\r\n}\n\n//# sourceURL=webpack:///./src/core/primary.js?");

/***/ }),

/***/ "./src/core/repaint.js":
/*!*****************************!*\
  !*** ./src/core/repaint.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_button_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/button.js */ \"./src/components/button.js\");\n/* harmony import */ var _components_input_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/input.js */ \"./src/components/input.js\");\n\r\n\r\n\r\nconst components = [\r\n\t_components_button_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\r\n\t_components_input_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\r\n]\r\n\r\nfunction Repaint(doc, data, watcher){\r\n\tif(doc){\r\n\t\tlet childrenNodes = doc.childNodes;\r\n\t\tfor(let i = 0; i < childrenNodes.length; i++){\r\n\t\t\tlet node = doc.childNodes[i];\r\n\t\t\tlet component = getComponent(node, data);\r\n\t\t\tif(typeof component !== 'undefined'){\r\n\t\t\t\tlet pnode = component.getNodeDocument();\r\n\t\t\t\tcomponent.watch.forEach(function(p){\r\n\t\t\t\t\tp.p_node = pnode;\r\n\t\t\t\t})\r\n\t\t\t\twatcher = watcher.concat(component.watch);\r\n\t\t\t\tdoc.replaceChild(pnode, doc.childNodes[i]);\r\n\t\t\t}else{\r\n\t\t\t\twatcher = Repaint(node, data, watcher);\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n\treturn watcher;\r\n}\r\n\r\nfunction getComponent(node, data){\r\n\tlet component = undefined;\r\n\tcomponents.forEach(function(c){\r\n\t\tif(node.nodeName.toLowerCase() == c.alias){\r\n\t\t\tcomponent = c.getComponent(node, data);\r\n\t\t}\r\n\t})\r\n\treturn component;\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Repaint);\n\n//# sourceURL=webpack:///./src/core/repaint.js?");

/***/ }),

/***/ "./src/util/StringUtil.js":
/*!********************************!*\
  !*** ./src/util/StringUtil.js ***!
  \********************************/
/*! exports provided: joinStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"joinStyle\", function() { return joinStyle; });\nfunction joinStyle(originStyle, addStyle){\r\n\tlet result = \"\";\r\n\tif(typeof(originStyle) == 'string'){\r\n\t\tif(originStyle.substr(originStyle.length-1,1) == ';'){\r\n\t\t\tresult = originStyle;\r\n\t\t}else{\r\n\t\t\tresult = originStyle + \";\";\t\r\n\t\t}\r\n\t}\r\n\t\r\n\tif(typeof(addStyle) == 'string'){\r\n\t\tif(addStyle.substr(addStyle.length-1,1) == ';'){\r\n\t\t\tresult = addStyle;\r\n\t\t}else{\r\n\t\t\tresult = addStyle + \";\";\r\n\t\t}\r\n\t}\r\n\t\r\n\treturn result;\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./src/util/StringUtil.js?");

/***/ }),

/***/ "./src/vo/PNode.js":
/*!*************************!*\
  !*** ./src/vo/PNode.js ***!
  \*************************/
/*! exports provided: default, createEmptyNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return PNode; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createEmptyNode\", function() { return createEmptyNode; });\nclass PNode{\r\n\tconstructor(tag,props,children) {\r\n\t    this.tag = tag;\r\n\t\tthis.props = props;\r\n\t\tthis.children = children;\r\n\t\tthis.watch = [];\r\n\t\tthis.record = {};\r\n\t}\r\n\t\r\n\tgetNodeDocument(){\r\n\t\tif(typeof(this.node) == 'undefined'){\r\n\t\t\tthis.node = document.createElement(this.tag);\r\n\r\n\t\t\tfor(let pro in this.props){\r\n\t\t\t\tif(pro == 'p-show'){\r\n\t\t\t\t\tthis.node.setAttribute('style', this.props[pro]?'':'display:none');\r\n\t\t\t\t}else{\r\n\t\t\t\t\tthis.node.setAttribute(pro, this.props[pro]);\r\n\t\t\t\t}\r\n\t\t\t}\r\n\r\n\t\t\tif(typeof this.children === 'string' || typeof this.children === 'number'){\r\n\t\t\t\tthis.node.innerHTML = this.children;\r\n\t\t\t}else if(this.children instanceof Array){\r\n\t\t\t\tif(this.children.length > 0){\r\n\t\t\t\t\tfor(let i = 0; i < this.children.length; i++){\r\n\t\t\t\t\t\tif(this.children[i] instanceof PNode){\r\n\t\t\t\t\t\t\tthis.node.appendChild(this.children[i].getNodeDocument());\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t}\r\n\t\t\r\n\t\treturn this.node;\r\n\t}\r\n}\r\n\r\nfunction createEmptyNode(){\r\n\treturn new PNode(undefined, {}, []);\r\n}\n\n//# sourceURL=webpack:///./src/vo/PNode.js?");

/***/ })

/******/ })));