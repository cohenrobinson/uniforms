"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = (0, tslib_1.__importDefault)(require("react"));
const uniforms_1 = require("uniforms");
function Error(_a) {
    var { children, error, errorMessage } = _a, props = (0, tslib_1.__rest)(_a, ["children", "error", "errorMessage"]);
    return !error ? null : (react_1.default.createElement("div", Object.assign({}, (0, uniforms_1.filterDOMProps)(props)), children || errorMessage));
}
exports.default = (0, uniforms_1.connectField)(Error, {
    initialValue: false,
    kind: 'leaf',
});
