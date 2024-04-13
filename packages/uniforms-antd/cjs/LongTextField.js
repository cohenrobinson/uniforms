"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const TextArea_1 = (0, tslib_1.__importDefault)(require("antd/lib/input/TextArea"));
const react_1 = (0, tslib_1.__importDefault)(require("react"));
const uniforms_1 = require("uniforms");
const wrapField_1 = (0, tslib_1.__importDefault)(require("./wrapField"));
function LongText(_a) {
    var _b;
    var { rows = 5 } = _a, props = (0, tslib_1.__rest)(_a, ["rows"]);
    return (0, wrapField_1.default)(props, react_1.default.createElement(TextArea_1.default, Object.assign({ disabled: props.disabled, name: props.name, onChange: event => props.onChange(event.target.value), placeholder: props.placeholder, readOnly: props.readOnly, ref: props.inputRef, rows: rows, value: (_b = props.value) !== null && _b !== void 0 ? _b : '' }, (0, uniforms_1.filterDOMProps)(props))));
}
exports.default = (0, uniforms_1.connectField)(LongText, { kind: 'leaf' });
