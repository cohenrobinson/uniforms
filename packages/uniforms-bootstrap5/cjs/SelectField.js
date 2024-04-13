"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const classnames_1 = (0, tslib_1.__importDefault)(require("classnames"));
const xor_1 = (0, tslib_1.__importDefault)(require("lodash/xor"));
const react_1 = (0, tslib_1.__importDefault)(require("react"));
const uniforms_1 = require("uniforms");
const wrapField_1 = (0, tslib_1.__importDefault)(require("./wrapField"));
const base64 = typeof btoa === 'undefined'
    ? /* istanbul ignore next */ /* istanbul ignore next */ x => Buffer.from(x).toString('base64')
    : btoa;
const escape = (x) => base64(encodeURIComponent(x)).replace(/=+$/, '');
function Select(_a) {
    var { options, checkboxes, disabled, error, fieldType, id, inline, inputClassName, inputRef, label, name, onChange, placeholder, readOnly, required, value } = _a, props = (0, tslib_1.__rest)(_a, ["options", "checkboxes", "disabled", "error", "fieldType", "id", "inline", "inputClassName", "inputRef", "label", "name", "onChange", "placeholder", "readOnly", "required", "value"]);
    const multiple = fieldType === Array;
    return (0, wrapField_1.default)(Object.assign(Object.assign({}, props), { disabled,
        error,
        id,
        label,
        required }), checkboxes ? (options === null || options === void 0 ? void 0 : options.map(item => {
        var _a, _b, _c, _d;
        return (react_1.default.createElement("div", { key: (_a = item.key) !== null && _a !== void 0 ? _a : item.value, className: (0, classnames_1.default)(inputClassName, `form-check${inline ? ' form-check-inline' : ''}`) },
            react_1.default.createElement("label", { htmlFor: `${id}-${(_b = item.key) !== null && _b !== void 0 ? _b : escape(item.value)}` },
                react_1.default.createElement("input", { checked: multiple ? value === null || value === void 0 ? void 0 : value.includes(item.value) : value === item.value, disabled: item.disabled || disabled, id: `${id}-${(_c = item.key) !== null && _c !== void 0 ? _c : escape(item.value)}`, name: name, onChange: () => {
                        if (!readOnly) {
                            onChange(multiple ? (0, xor_1.default)([item.value], value) : item.value);
                        }
                    }, type: "checkbox" }), (_d = item.label) !== null && _d !== void 0 ? _d : item.value)));
    })) : (react_1.default.createElement("select", { className: (0, classnames_1.default)(inputClassName, 'form-control', {
            'is-invalid': error,
            'is-valid': !error && props.changed,
        }), disabled: disabled, id: id, multiple: multiple, name: name, onChange: event => {
            if (!readOnly) {
                const item = event.target.value;
                if (multiple) {
                    const clear = event.target.selectedIndex === -1;
                    onChange(clear ? [] : (0, xor_1.default)([item], value));
                }
                else {
                    onChange(item !== '' ? item : undefined);
                }
            }
        }, ref: inputRef, value: value !== null && value !== void 0 ? value : '' },
        (!!placeholder || !required || value === undefined) && !multiple && (react_1.default.createElement("option", { value: "", disabled: required, hidden: required }, placeholder || label)), options === null || options === void 0 ? void 0 :
        options.map(option => {
            var _a, _b;
            return (react_1.default.createElement("option", { disabled: option.disabled, key: (_a = option.key) !== null && _a !== void 0 ? _a : option.value, value: option.value }, (_b = option.label) !== null && _b !== void 0 ? _b : option.value));
        }))));
}
exports.default = (0, uniforms_1.connectField)(Select, { kind: 'leaf' });
