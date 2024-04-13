import { __rest } from "tslib";
import xor from 'lodash/xor';
import React from 'react';
import { connectField, filterDOMProps } from 'uniforms';
const base64 = typeof btoa === 'undefined'
    ? /* istanbul ignore next */ /* istanbul ignore next */ x => Buffer.from(x).toString('base64')
    : btoa;
const escape = (x) => base64(encodeURIComponent(x)).replace(/=+$/, '');
function Select(_a) {
    var { checkboxes, disabled, fieldType, id, inputRef, label, name, onChange, placeholder, readOnly, required, value, options } = _a, props = __rest(_a, ["checkboxes", "disabled", "fieldType", "id", "inputRef", "label", "name", "onChange", "placeholder", "readOnly", "required", "value", "options"]);
    const multiple = fieldType === Array;
    return (React.createElement("div", Object.assign({}, filterDOMProps(props)),
        label && React.createElement("label", { htmlFor: id }, label),
        checkboxes ? (options === null || options === void 0 ? void 0 : options.map(option => {
            var _a, _b, _c, _d, _e;
            return (React.createElement("div", { key: (_a = option.key) !== null && _a !== void 0 ? _a : option.value },
                React.createElement("input", { checked: fieldType === Array
                        ? value === null || value === void 0 ? void 0 : value.includes(option.value)
                        : value === option.value, disabled: (_b = option.disabled) !== null && _b !== void 0 ? _b : disabled, id: `${id}-${(_c = option.key) !== null && _c !== void 0 ? _c : escape(option.value)}`, name: name, onChange: () => {
                        if (!readOnly) {
                            onChange(fieldType === Array
                                ? xor([option.value], value)
                                : option.value);
                        }
                    }, type: "checkbox" }),
                React.createElement("label", { htmlFor: `${id}-${(_d = option.key) !== null && _d !== void 0 ? _d : escape(option.value)}` }, (_e = option.label) !== null && _e !== void 0 ? _e : option.value)));
        })) : (React.createElement("select", { disabled: disabled, id: id, multiple: multiple, name: name, onChange: event => {
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
            })))));
}
export default connectField(Select, { kind: 'leaf' });
