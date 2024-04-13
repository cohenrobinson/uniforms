import { __rest } from "tslib";
import classnames from 'classnames';
import omit from 'lodash/omit';
import React from 'react';
import { connectField, filterDOMProps } from 'uniforms';
const base64 = typeof btoa === 'undefined'
    ? /* istanbul ignore next */ /* istanbul ignore next */ x => Buffer.from(x).toString('base64')
    : btoa;
const escape = (x) => base64(encodeURIComponent(x)).replace(/=+$/, '');
function Radio(_a) {
    var { options, className, disabled, error, errorMessage, id, label, name, onChange, readOnly, required, showInlineError, value } = _a, props = __rest(_a, ["options", "className", "disabled", "error", "errorMessage", "id", "label", "name", "onChange", "readOnly", "required", "showInlineError", "value"]);
    return (React.createElement("div", Object.assign({ className: classnames(className, { disabled, error }, 'grouped fields') }, omit(filterDOMProps(props), ['checkboxes'])),
        label && (React.createElement("div", { className: classnames({ required }, 'field') },
            React.createElement("label", null, label))), options === null || options === void 0 ? void 0 :
        options.map(option => {
            var _a, _b, _c, _d;
            return (React.createElement("div", { className: "field", key: (_a = option.key) !== null && _a !== void 0 ? _a : option.value },
                React.createElement("div", { className: "ui radio checkbox" },
                    React.createElement("input", { checked: option.value === value, disabled: option.disabled || disabled, id: `${id}-${(_b = option.key) !== null && _b !== void 0 ? _b : escape(option.value)}`, name: name, onChange: () => {
                            if (!readOnly) {
                                onChange(option.value);
                            }
                        }, type: "radio" }),
                    React.createElement("label", { htmlFor: `${id}-${(_c = option.key) !== null && _c !== void 0 ? _c : escape(option.value)}` }, (_d = option.label) !== null && _d !== void 0 ? _d : option.value))));
        }),
        !!(error && showInlineError) && (React.createElement("div", { className: "ui red basic pointing label" }, errorMessage))));
}
export default connectField(Radio, { kind: 'leaf' });
