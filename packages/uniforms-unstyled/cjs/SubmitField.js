"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = (0, tslib_1.__importDefault)(require("react"));
const uniforms_1 = require("uniforms");
function SubmitField(_a) {
    var { disabled, inputRef, readOnly, value } = _a, props = (0, tslib_1.__rest)(_a, ["disabled", "inputRef", "readOnly", "value"]);
    const { error, state } = (0, uniforms_1.useForm)();
    return (react_1.default.createElement("input", Object.assign({ disabled: disabled === undefined ? !!(error || state.disabled) : disabled, readOnly: readOnly, ref: inputRef, type: "submit" }, (value ? { value } : {}), (0, uniforms_1.filterDOMProps)(props))));
}
exports.default = SubmitField;
