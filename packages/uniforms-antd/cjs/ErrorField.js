"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = (0, tslib_1.__importDefault)(require("react"));
const uniforms_1 = require("uniforms");
const defaultStyle = {
    backgroundColor: 'rgba(255, 85, 0, 0.2)',
    border: '1px solid rgb(255, 85, 0)',
    borderRadius: '2px',
    margin: '20px 0px',
    padding: '10px',
};
const messageStyle = { margin: '3px' };
function Error(_a) {
    var { children, error, errorMessage, style = defaultStyle } = _a, props = (0, tslib_1.__rest)(_a, ["children", "error", "errorMessage", "style"]);
    return !error ? null : (react_1.default.createElement("div", Object.assign({ style: style }, (0, uniforms_1.filterDOMProps)(props)), children || react_1.default.createElement("div", { style: messageStyle }, errorMessage)));
}
exports.default = (0, uniforms_1.connectField)(Error, {
    initialValue: false,
    kind: 'leaf',
});
