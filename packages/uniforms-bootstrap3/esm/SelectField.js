import { __rest } from "tslib";
import classnames from 'classnames';
import xor from 'lodash/xor';
import React from 'react';
import { connectField } from 'uniforms';
import wrapField from './wrapField';
const base64 = typeof btoa === 'undefined'
    ? /* istanbul ignore next */ /* istanbul ignore next */ x => Buffer.from(x).toString('base64')
    : btoa;
const escape = (x) => base64(encodeURIComponent(x)).replace(/=+$/, '');
function Select(_a) {
    var { options, checkboxes, disabled, error, fieldType, id, inline, inputClassName, inputRef, label, name, onChange, placeholder, readOnly, required, value } = _a, props = __rest(_a, ["options", "checkboxes", "disabled", "error", "fieldType", "id", "inline", "inputClassName", "inputRef", "label", "name", "onChange", "placeholder", "readOnly", "required", "value"]);
    const multiple = fieldType === Array;
    return wrapField(Object.assign(Object.assign({}, props), { id, label }), checkboxes ? (options === null || options === void 0 ? void 0 : options.map(item => {
        var _a, _b, _c, _d;
        return (React.createElement("div", { key: (_a = item.key) !== null && _a !== void 0 ? _a : item.value, className: classnames(inputClassName, `checkbox${inline ? '-inline' : ''}`) },
            React.createElement("label", { htmlFor: `${id}-${(_b = item.key) !== null && _b !== void 0 ? _b : escape(item.value)}` },
                React.createElement("input", { checked: fieldType === Array
                        ? value === null || value === void 0 ? void 0 : value.includes(item.value)
                        : value === item.value, disabled: item.disabled || disabled, id: `${id}-${(_c = item.key) !== null && _c !== void 0 ? _c : escape(item.value)}`, name: name, onChange: () => {
                        if (!readOnly) {
                            onChange(fieldType === Array ? xor([item.value], value) : item.value);
                        }
                    }, type: "checkbox" }), (_d = item.label) !== null && _d !== void 0 ? _d : item.value)));
    })) : (React.createElement("select", { className: classnames(inputClassName, 'form-control', {
            'form-control-danger': error,
        }), disabled: disabled, id: id, multiple: multiple, name: name, onChange: event => {
            if (!readOnly) {
                const item = event.target.value;
                if (multiple) {
                    const clear = event.target.selectedIndex === -1;
                    onChange(clear ? [] : xor([item], value));
                }
                else {
                    onChange(item !== '' ? item : undefined);
                }
            }
        }, ref: inputRef, value: value !== null && value !== void 0 ? value : '' },
        (!!placeholder || !required || value === undefined) && !multiple && (React.createElement("option", { value: "", disabled: required, hidden: required }, placeholder || label)), options === null || options === void 0 ? void 0 :
        options.map(option => {
            var _a, _b;
            return (React.createElement("option", { disabled: option.disabled, key: (_a = option.key) !== null && _a !== void 0 ? _a : option.value, value: option.value }, (_b = option.label) !== null && _b !== void 0 ? _b : option.value));
        }))));
}
export default connectField(Select, { kind: 'leaf' });
