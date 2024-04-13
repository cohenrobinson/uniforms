"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const button_1 = (0, tslib_1.__importDefault)(require("antd/lib/button"));
const react_1 = (0, tslib_1.__importDefault)(require("react"));
const uniforms_1 = require("uniforms");
function SubmitField(_a) {
    var { disabled, inputRef, value = 'Submit' } = _a, props = (0, tslib_1.__rest)(_a, ["disabled", "inputRef", "value"]);
    const { error, state } = (0, uniforms_1.useForm)();
    return (react_1.default.createElement(button_1.default, Object.assign({ disabled: disabled === undefined ? !!(error || state.disabled) : disabled, htmlType: "submit", ref: inputRef, type: "primary" }, props), value));
}
exports.default = SubmitField;
