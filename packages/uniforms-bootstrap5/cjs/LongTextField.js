"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const classnames_1 = (0, tslib_1.__importDefault)(require("classnames"));
const omit_1 = (0, tslib_1.__importDefault)(require("lodash/omit"));
const react_1 = (0, tslib_1.__importDefault)(require("react"));
const uniforms_1 = require("uniforms");
const wrapField_1 = (0, tslib_1.__importDefault)(require("./wrapField"));
function LongText(props) {
    var _a;
    return (0, wrapField_1.default)((0, omit_1.default)(props, ['autoComplete', 'minLength', 'maxLength']), react_1.default.createElement("textarea", { className: (0, classnames_1.default)(props.inputClassName, 'form-control', {
            'is-invalid': props.error,
            'is-valid': !props.error && props.changed,
        }), disabled: props.disabled, id: props.id, name: props.name, onChange: event => props.onChange(event.target.value), placeholder: props.placeholder, minLength: props.minLength, maxLength: props.maxLength, readOnly: props.readOnly, ref: props.inputRef, rows: props.rows, value: (_a = props.value) !== null && _a !== void 0 ? _a : '' }));
}
exports.default = (0, uniforms_1.connectField)(LongText, { kind: 'leaf' });
