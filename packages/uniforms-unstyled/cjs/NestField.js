"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = (0, tslib_1.__importDefault)(require("react"));
const uniforms_1 = require("uniforms");
const AutoField_1 = (0, tslib_1.__importDefault)(require("./AutoField"));
function Nest(_a) {
    var { children, fields, itemProps, label } = _a, props = (0, tslib_1.__rest)(_a, ["children", "fields", "itemProps", "label"]);
    return (react_1.default.createElement("div", Object.assign({}, (0, uniforms_1.filterDOMProps)(props)),
        label && react_1.default.createElement("label", null, label),
        children ||
            fields.map(field => (react_1.default.createElement(AutoField_1.default, Object.assign({ key: field, name: field }, itemProps))))));
}
exports.default = (0, uniforms_1.connectField)(Nest);
