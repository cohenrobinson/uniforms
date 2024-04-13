import { __rest } from "tslib";
import classnames from 'classnames';
import omit from 'lodash/omit';
import React from 'react';
import { filterDOMProps } from 'uniforms';
import gridClassName from './gridClassName';
export default function wrapField(_a, children) {
    var { changed, className, disabled, error, errorMessage, grid, // Grid is either an number between 1 and 11 or an object with keys like xs and md.
    help, // Help text.
    helpClassName, // Help text class name.
    id, label, labelClassName, // Label class name (String|Array[String]).
    required, showInlineError, // Show inline error message?
    wrapClassName } = _a, // Input wrapper class name.
    props = __rest(_a, ["changed", "className", "disabled", "error", "errorMessage", "grid", "help", "helpClassName", "id", "label", "labelClassName", "required", "showInlineError", "wrapClassName"]);
    const hasWrap = !!(grid || wrapClassName);
    const blockError = !!(error && showInlineError) && (React.createElement("span", { className: "form-text text-danger" }, errorMessage));
    const blockHelp = !!help && (React.createElement("span", { className: classnames('form-text', helpClassName || 'text-muted') }, help));
    return (React.createElement("div", Object.assign({ className: classnames(className, 'mb-3', {
            'is-invalid': error,
            disabled,
            required,
            row: grid,
        }) }, omit(filterDOMProps(props), [
        'checkboxes',
        'inline',
        'inputClassName',
        'inputRef',
        'rows',
    ])),
        label && (React.createElement("label", { htmlFor: id, className: classnames({
                'col-form-label': grid,
                'text-danger': error,
                'text-success': !error && changed,
            }, gridClassName(grid, 'label'), labelClassName) }, label)),
        hasWrap && (React.createElement("div", { className: classnames(wrapClassName, gridClassName(grid, 'input')) },
            children,
            blockHelp,
            blockError)),
        !hasWrap && children,
        !hasWrap && blockHelp,
        !hasWrap && blockError));
}
