import { __rest } from "tslib";
import classnames from 'classnames';
import xor from 'lodash/xor';
import React from 'react';
import { connectField, filterDOMProps } from 'uniforms';
const base64 = typeof btoa === 'undefined'
    ? /* istanbul ignore next */ /* istanbul ignore next */ x => Buffer.from(x).toString('base64')
    : btoa;
const escape = (x) => base64(encodeURIComponent(x)).replace(/=+$/, '');
const selectStyle = { paddingBottom: 0, paddingTop: 0 };
function Select(_a) {
    var { options, checkboxes, className, disabled, error, errorMessage, fieldType, id, inputRef, label, name, onChange, placeholder, readOnly, required, showInlineError, value } = _a, props = __rest(_a, ["options", "checkboxes", "className", "disabled", "error", "errorMessage", "fieldType", "id", "inputRef", "label", "name", "onChange", "placeholder", "readOnly", "required", "showInlineError", "value"]);
    const multiple = fieldType === Array;
    return (React.createElement("div", Object.assign({ className: classnames({ disabled, error, required }, className, 'field') }, filterDOMProps(props)),
        label && React.createElement("label", { htmlFor: id }, label),
        checkboxes ? (options === null || options === void 0 ? void 0 : options.map(option => {
            var _a, _b, _c, _d;
            return (React.createElement("div", { className: "field", key: (_a = option.key) !== null && _a !== void 0 ? _a : option.value },
                React.createElement("div", { className: "ui checkbox" },
                    React.createElement("input", { checked: multiple
                            ? value === null || value === void 0 ? void 0 : value.includes(option.value)
                            : value === option.value, disabled: option.disabled || disabled, id: `${id}-${(_b = option.key) !== null && _b !== void 0 ? _b : escape(option.value)}`, name: name, onChange: () => {
                            if (!readOnly) {
                                onChange(multiple ? xor([option.value], value) : option.value);
                            }
                        }, type: "checkbox" }),
                    React.createElement("label", { htmlFor: `${id}-${(_c = option.key) !== null && _c !== void 0 ? _c : escape(option.value)}` }, (_d = option.label) !== null && _d !== void 0 ? _d : option.value))));
        })) : (React.createElement("select", { className: "ui selection dropdown", disabled: disabled, id: id, multiple: multiple, name: name, onChange: event => {
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
            }, ref: inputRef, style: selectStyle, value: value !== null && value !== void 0 ? value : '' },
            (!!placeholder || !required || value === undefined) && !multiple && (React.createElement("option", { value: "", disabled: required, hidden: required }, placeholder || label)), options === null || options === void 0 ? void 0 :
            options.map(option => {
                var _a, _b;
                return (React.createElement("option", { disabled: option.disabled, key: (_a = option.key) !== null && _a !== void 0 ? _a : option.value, value: option.value }, (_b = option.label) !== null && _b !== void 0 ? _b : option.value));
            }))),
        !!(error && showInlineError) && (React.createElement("div", { className: "ui red basic pointing label" }, errorMessage))));
}
export default connectField(Select, { kind: 'leaf' });
