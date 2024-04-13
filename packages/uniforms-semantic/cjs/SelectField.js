"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const classnames_1 = (0, tslib_1.__importDefault)(require("classnames"));
const xor_1 = (0, tslib_1.__importDefault)(require("lodash/xor"));
const react_1 = (0, tslib_1.__importDefault)(require("react"));
const uniforms_1 = require("uniforms");
const base64 = typeof btoa === 'undefined'
    ? /* istanbul ignore next */ /* istanbul ignore next */ x => Buffer.from(x).toString('base64')
    : btoa;
const escape = (x) => base64(encodeURIComponent(x)).replace(/=+$/, '');
const selectStyle = { paddingBottom: 0, paddingTop: 0 };
function Select(_a) {
    var { options, checkboxes, className, disabled, error, errorMessage, fieldType, id, inputRef, label, name, onChange, placeholder, readOnly, required, showInlineError, value } = _a, props = (0, tslib_1.__rest)(_a, ["options", "checkboxes", "className", "disabled", "error", "errorMessage", "fieldType", "id", "inputRef", "label", "name", "onChange", "placeholder", "readOnly", "required", "showInlineError", "value"]);
    const multiple = fieldType === Array;
    return (react_1.default.createElement("div", Object.assign({ className: (0, classnames_1.default)({ disabled, error, required }, className, 'field') }, (0, uniforms_1.filterDOMProps)(props)),
        label && react_1.default.createElement("label", { htmlFor: id }, label),
        checkboxes ? (options === null || options === void 0 ? void 0 : options.map(option => {
            var _a, _b, _c, _d;
            return (react_1.default.createElement("div", { className: "field", key: (_a = option.key) !== null && _a !== void 0 ? _a : option.value },
                react_1.default.createElement("div", { className: "ui checkbox" },
                    react_1.default.createElement("input", { checked: multiple
                            ? value === null || value === void 0 ? void 0 : value.includes(option.value)
                            : value === option.value, disabled: option.disabled || disabled, id: `${id}-${(_b = option.key) !== null && _b !== void 0 ? _b : escape(option.value)}`, name: name, onChange: () => {
                            if (!readOnly) {
                                onChange(multiple ? (0, xor_1.default)([option.value], value) : option.value);
                            }
                        }, type: "checkbox" }),
                    react_1.default.createElement("label", { htmlFor: `${id}-${(_c = option.key) !== null && _c !== void 0 ? _c : escape(option.value)}` }, (_d = option.label) !== null && _d !== void 0 ? _d : option.value))));
        })) : (react_1.default.createElement("select", { className: "ui selection dropdown", disabled: disabled, id: id, multiple: multiple, name: name, onChange: event => {
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
            }, ref: inputRef, style: selectStyle, value: value !== null && value !== void 0 ? value : '' },
            (!!placeholder || !required || value === undefined) && !multiple && (react_1.default.createElement("option", { value: "", disabled: required, hidden: required }, placeholder || label)), options === null || options === void 0 ? void 0 :
            options.map(option => {
                var _a, _b;
                return (react_1.default.createElement("option", { disabled: option.disabled, key: (_a = option.key) !== null && _a !== void 0 ? _a : option.value, value: option.value }, (_b = option.label) !== null && _b !== void 0 ? _b : option.value));
            }))),
        !!(error && showInlineError) && (react_1.default.createElement("div", { className: "ui red basic pointing label" }, errorMessage))));
}
exports.default = (0, uniforms_1.connectField)(Select, { kind: 'leaf' });
