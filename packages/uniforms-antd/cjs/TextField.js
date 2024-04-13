"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const input_1 = (0, tslib_1.__importDefault)(require("antd/lib/input"));
const react_1 = (0, tslib_1.__importDefault)(require("react"));
const uniforms_1 = require("uniforms");
const wrapField_1 = (0, tslib_1.__importDefault)(require("./wrapField"));
function Text(props) {
    var _a, _b;
    return (0, wrapField_1.default)(props, react_1.default.createElement(input_1.default, Object.assign({ disabled: props.disabled, name: props.name, onChange: event => props.onChange(event.target.value), placeholder: props.placeholder, readOnly: props.readOnly, ref: props.inputRef, type: (_a = props.type) !== null && _a !== void 0 ? _a : 'text', value: (_b = props.value) !== null && _b !== void 0 ? _b : '' }, (0, uniforms_1.filterDOMProps)(props))));
}
exports.default = (0, uniforms_1.connectField)(Text, { kind: 'leaf' });
