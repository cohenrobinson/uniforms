"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const classnames_1 = (0, tslib_1.__importDefault)(require("classnames"));
const react_1 = (0, tslib_1.__importDefault)(require("react"));
const uniforms_1 = require("uniforms");
function Error(_a) {
    var { children, className, error, errorMessage } = _a, props = (0, tslib_1.__rest)(_a, ["children", "className", "error", "errorMessage"]);
    return !error ? null : (react_1.default.createElement("div", Object.assign({ className: (0, classnames_1.default)('card', 'mb-3', className) }, (0, uniforms_1.filterDOMProps)(props)),
        react_1.default.createElement("div", { className: "card-body" }, children || react_1.default.createElement("h4", { className: "card-title" }, errorMessage))));
}
exports.default = (0, uniforms_1.connectField)(Error, {
    initialValue: false,
    kind: 'leaf',
});
