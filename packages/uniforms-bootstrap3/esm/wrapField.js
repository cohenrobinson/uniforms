import { __rest } from "tslib";
import classnames from 'classnames';
import omit from 'lodash/omit';
import React from 'react';
import { filterDOMProps } from 'uniforms';
import gridClassName from './gridClassName';
// eslint-disable-next-line complexity
export default function wrapField(_a, children) {
    var { changed, className, disabled, error, errorMessage, feedbackable, // Only some input types support feedback icons.
    grid, // Grid is either an number between 1 and 11 or an object with keys like xs and md.
    help, // Help text.
    helpClassName, // Help text class name.
    id, label, labelClassName, // Label class name (String|Array[String]).
    required, showInlineError, // Show inline error message?
    wrapClassName } = _a, // Input wrapper class name.
    props = __rest(_a, ["changed", "className", "disabled", "error", "errorMessage", "feedbackable", "grid", "help", "helpClassName", "id", "label", "labelClassName", "required", "showInlineError", "wrapClassName"]);
    const hasWrap = !!(grid || wrapClassName);
    const blockError = !!(error && showInlineError) && (React.createElement("span", { className: "help-block" }, errorMessage));
    const blockFeedback = !!(error && feedbackable) && (React.createElement("i", { className: "glyphicon glyphicon-remove form-control-feedback" }));
    const blockHelp = !!help && (React.createElement("span", { className: classnames('help-block', helpClassName) }, help));
    return (React.createElement("div", Object.assign({ className: classnames(className, 'field', 'form-group', {
            'has-feedback': error && feedbackable,
            'has-error': error,
            'has-success': !error && changed,
            disabled,
            required,
        }) }, omit(filterDOMProps(props), [
        'checkboxes',
        'inline',
        'inputClassName',
        'inputRef',
        'rows',
    ])),
        label && (React.createElement("label", { htmlFor: id, className: classnames('control-label', gridClassName(grid, 'label'), labelClassName) }, label)),
        hasWrap && (React.createElement("div", { className: classnames(wrapClassName, gridClassName(grid, 'input')) },
            children,
            blockFeedback,
            blockHelp,
            blockError)),
        !hasWrap && children,
        !hasWrap && blockFeedback,
        !hasWrap && blockHelp,
        !hasWrap && blockError));
}