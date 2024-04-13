import { __rest } from "tslib";
import classnames from 'classnames';
import React from 'react';
import { connectField, filterDOMProps } from 'uniforms';
function Error(_a) {
    var { children, className, error, errorMessage } = _a, props = __rest(_a, ["children", "className", "error", "errorMessage"]);
    return !error ? null : (React.createElement("div", Object.assign({ className: classnames('ui', className, 'error message') }, filterDOMProps(props)), children || React.createElement("div", { className: "header" }, errorMessage)));
}
export default connectField(Error, {
    initialValue: false,
    kind: 'leaf',
});