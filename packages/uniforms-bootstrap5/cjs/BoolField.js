"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const classnames_1 = (0, tslib_1.__importDefault)(require("classnames"));
const react_1 = (0, tslib_1.__importDefault)(require("react"));
const uniforms_1 = require("uniforms");
const wrapField_1 = (0, tslib_1.__importDefault)(require("./wrapField"));
function Bool(_a) {
    var { onChange } = _a, props = (0, tslib_1.__rest)(_a, ["onChange"]);
    const { disabled, error, inline, inputClassName, inputRef, label, labelBefore, name, readOnly, value, } = props;
    return (0, wrapField_1.default)(Object.assign(Object.assign({}, props), { label: labelBefore, value: props.value }), react_1.default.createElement("div", { className: (0, classnames_1.default)(inputClassName, 'form-check', {
            'text-danger': error,
            'text-success': !error && props.changed,
            'form-check-inline': inline,
        }) },
        react_1.default.createElement("input", { checked: value || false, className: "form-check-input", disabled: disabled, id: props.id, name: name, onChange: () => {
                if (!readOnly) {
                    onChange(!value);
                }
            }, ref: inputRef, type: "checkbox" }),
        react_1.default.createElement("label", { htmlFor: props.id, className: "form-check-label" }, label)));
}
exports.default = (0, uniforms_1.connectField)(Bool, { kind: 'leaf' });
