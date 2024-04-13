"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const classnames_1 = (0, tslib_1.__importDefault)(require("classnames"));
const omit_1 = (0, tslib_1.__importDefault)(require("lodash/omit"));
const react_1 = (0, tslib_1.__importDefault)(require("react"));
const uniforms_1 = require("uniforms");
const base64 = typeof btoa === 'undefined'
    ? /* istanbul ignore next */ /* istanbul ignore next */ x => Buffer.from(x).toString('base64')
    : btoa;
const escape = (x) => base64(encodeURIComponent(x)).replace(/=+$/, '');
function Radio(_a) {
    var { options, className, disabled, error, errorMessage, id, label, name, onChange, readOnly, required, showInlineError, value } = _a, props = (0, tslib_1.__rest)(_a, ["options", "className", "disabled", "error", "errorMessage", "id", "label", "name", "onChange", "readOnly", "required", "showInlineError", "value"]);
    return (react_1.default.createElement("div", Object.assign({ className: (0, classnames_1.default)(className, { disabled, error }, 'grouped fields') }, (0, omit_1.default)((0, uniforms_1.filterDOMProps)(props), ['checkboxes'])),
        label && (react_1.default.createElement("div", { className: (0, classnames_1.default)({ required }, 'field') },
            react_1.default.createElement("label", null, label))), options === null || options === void 0 ? void 0 :
        options.map(option => {
            var _a, _b, _c, _d;
            return (react_1.default.createElement("div", { className: "field", key: (_a = option.key) !== null && _a !== void 0 ? _a : option.value },
                react_1.default.createElement("div", { className: "ui radio checkbox" },
                    react_1.default.createElement("input", { checked: option.value === value, disabled: option.disabled || disabled, id: `${id}-${(_b = option.key) !== null && _b !== void 0 ? _b : escape(option.value)}`, name: name, onChange: () => {
                            if (!readOnly) {
                                onChange(option.value);
                            }
                        }, type: "radio" }),
                    react_1.default.createElement("label", { htmlFor: `${id}-${(_c = option.key) !== null && _c !== void 0 ? _c : escape(option.value)}` }, (_d = option.label) !== null && _d !== void 0 ? _d : option.value))));
        }),
        !!(error && showInlineError) && (react_1.default.createElement("div", { className: "ui red basic pointing label" }, errorMessage))));
}
exports.default = (0, uniforms_1.connectField)(Radio, { kind: 'leaf' });
