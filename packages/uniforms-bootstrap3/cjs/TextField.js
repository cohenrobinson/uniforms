"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const classnames_1 = (0, tslib_1.__importDefault)(require("classnames"));
const omit_1 = (0, tslib_1.__importDefault)(require("lodash/omit"));
const react_1 = (0, tslib_1.__importDefault)(require("react"));
const uniforms_1 = require("uniforms");
const wrapField_1 = (0, tslib_1.__importDefault)(require("./wrapField"));
function Text(props) {
    var _a, _b;
    return (0, wrapField_1.default)(Object.assign({ feedbackable: true }, (0, omit_1.default)(props, ['autoComplete'])), react_1.default.createElement("input", { autoComplete: props.autoComplete, className: (0, classnames_1.default)(props.inputClassName, 'form-control', {
            'form-control-danger': props.error,
        }), disabled: props.disabled, id: props.id, name: props.name, onChange: event => props.onChange(event.target.value), placeholder: props.placeholder, readOnly: props.readOnly, ref: props.inputRef, type: (_a = props.type) !== null && _a !== void 0 ? _a : 'text', value: (_b = props.value) !== null && _b !== void 0 ? _b : '' }));
}
exports.default = (0, uniforms_1.connectField)(Text, { kind: 'leaf' });