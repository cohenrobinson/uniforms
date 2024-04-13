"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const xor_1 = (0, tslib_1.__importDefault)(require("lodash/xor"));
const react_1 = (0, tslib_1.__importDefault)(require("react"));
const uniforms_1 = require("uniforms");
const base64 = typeof btoa === 'undefined'
    ? /* istanbul ignore next */ /* istanbul ignore next */ x => Buffer.from(x).toString('base64')
    : btoa;
const escape = (x) => base64(encodeURIComponent(x)).replace(/=+$/, '');
function Select(_a) {
    var { checkboxes, disabled, fieldType, id, inputRef, label, name, onChange, placeholder, readOnly, required, value, options } = _a, props = (0, tslib_1.__rest)(_a, ["checkboxes", "disabled", "fieldType", "id", "inputRef", "label", "name", "onChange", "placeholder", "readOnly", "required", "value", "options"]);
    const multiple = fieldType === Array;
    return (react_1.default.createElement("div", Object.assign({}, (0, uniforms_1.filterDOMProps)(props)),
        label && react_1.default.createElement("label", { htmlFor: id }, label),
        checkboxes ? (options === null || options === void 0 ? void 0 : options.map(option => {
            var _a, _b, _c, _d, _e;
            return (react_1.default.createElement("div", { key: (_a = option.key) !== null && _a !== void 0 ? _a : option.value },
                react_1.default.createElement("input", { checked: fieldType === Array
                        ? value === null || value === void 0 ? void 0 : value.includes(option.value)
                        : value === option.value, disabled: (_b = option.disabled) !== null && _b !== void 0 ? _b : disabled, id: `${id}-${(_c = option.key) !== null && _c !== void 0 ? _c : escape(option.value)}`, name: name, onChange: () => {
                        if (!readOnly) {
                            onChange(fieldType === Array
                                ? (0, xor_1.default)([option.value], value)
                                : option.value);
                        }
                    }, type: "checkbox" }),
                react_1.default.createElement("label", { htmlFor: `${id}-${(_d = option.key) !== null && _d !== void 0 ? _d : escape(option.value)}` }, (_e = option.label) !== null && _e !== void 0 ? _e : option.value)));
        })) : (react_1.default.createElement("select", { disabled: disabled, id: id, multiple: multiple, name: name, onChange: event => {
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
            })))));
}
exports.default = (0, uniforms_1.connectField)(Select, { kind: 'leaf' });
