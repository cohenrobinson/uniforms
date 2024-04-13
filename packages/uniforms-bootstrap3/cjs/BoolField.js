"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const classnames_1 = (0, tslib_1.__importDefault)(require("classnames"));
const react_1 = (0, tslib_1.__importDefault)(require("react"));
const uniforms_1 = require("uniforms");
const wrapField_1 = (0, tslib_1.__importDefault)(require("./wrapField"));
function Bool(props) {
    const { disabled, inline, inputClassName, label, labelBefore, name, onChange, readOnly, value, } = props;
    return (0, wrapField_1.default)(Object.assign(Object.assign({}, props), { label: labelBefore }), react_1.default.createElement("div", { className: (0, classnames_1.default)(inputClassName, `checkbox${inline ? '-inline' : ''}`) },
        react_1.default.createElement("label", { htmlFor: props.id },
            react_1.default.createElement("input", { checked: value || false, disabled: disabled, id: props.id, name: name, onChange: () => {
                    if (!readOnly) {
                        onChange(!value);
                    }
                }, ref: props.inputRef, type: "checkbox" }),
            "\u00A0",
            label)));
}
exports.default = (0, uniforms_1.connectField)(Bool, { kind: 'leaf' });
