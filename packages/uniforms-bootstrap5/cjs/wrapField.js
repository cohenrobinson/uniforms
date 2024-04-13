"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const classnames_1 = (0, tslib_1.__importDefault)(require("classnames"));
const omit_1 = (0, tslib_1.__importDefault)(require("lodash/omit"));
const react_1 = (0, tslib_1.__importDefault)(require("react"));
const uniforms_1 = require("uniforms");
const gridClassName_1 = (0, tslib_1.__importDefault)(require("./gridClassName"));
function wrapField(_a, children) {
    var { changed, className, disabled, error, errorMessage, grid, // Grid is either an number between 1 and 11 or an object with keys like xs and md.
    help, // Help text.
    helpClassName, // Help text class name.
    id, label, labelClassName, // Label class name (String|Array[String]).
    required, showInlineError, // Show inline error message?
    wrapClassName } = _a, // Input wrapper class name.
    props = (0, tslib_1.__rest)(_a, ["changed", "className", "disabled", "error", "errorMessage", "grid", "help", "helpClassName", "id", "label", "labelClassName", "required", "showInlineError", "wrapClassName"]);
    const hasWrap = !!(grid || wrapClassName);
    const blockError = !!(error && showInlineError) && (react_1.default.createElement("span", { className: "form-text text-danger" }, errorMessage));
    const blockHelp = !!help && (react_1.default.createElement("span", { className: (0, classnames_1.default)('form-text', helpClassName || 'text-muted') }, help));
    return (react_1.default.createElement("div", Object.assign({ className: (0, classnames_1.default)(className, 'mb-3', {
            'is-invalid': error,
            disabled,
            required,
            row: grid,
        }) }, (0, omit_1.default)((0, uniforms_1.filterDOMProps)(props), [
        'checkboxes',
        'inline',
        'inputClassName',
        'inputRef',
        'rows',
    ])),
        label && (react_1.default.createElement("label", { htmlFor: id, className: (0, classnames_1.default)({
                'col-form-label': grid,
                'text-danger': error,
                'text-success': !error && changed,
            }, (0, gridClassName_1.default)(grid, 'label'), labelClassName) }, label)),
        hasWrap && (react_1.default.createElement("div", { className: (0, classnames_1.default)(wrapClassName, (0, gridClassName_1.default)(grid, 'input')) },
            children,
            blockHelp,
            blockError)),
        !hasWrap && children,
        !hasWrap && blockHelp,
        !hasWrap && blockError));
}
exports.default = wrapField;
