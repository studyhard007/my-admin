"use strict";
exports.__esModule = true;
exports.show = void 0;
// 操作 DOM 元素，把 content 显示到网页上
function show(content) {
    window.document.getElementById("app").innerText = "Hello," + content;
}
exports.show = show;
// 通过 CommonJS 规范导出 show 函数
// module.exports = show;
