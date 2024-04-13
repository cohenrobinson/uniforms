import { __rest } from "tslib";
import classnames from 'classnames';
import React from 'react';
import { connectField, filterDOMProps } from 'uniforms';
function Error(_a) {
    var { children, className, error, errorMessage } = _a, props = __rest(_a, ["children", "className", "error", "errorMessage"]);
    return !error ? null : (React.createElement("div", Object.assign({ className: classnames('card', 'mb-3', className) }, filterDOMProps(props)),
        React.createElement("div", { className: "card-body" }, children || React.createElement("h4", { className: "card-title" }, errorMessage))));
}
export default connectField(Error, {
    initialValue: false,
    kind: 'leaf',
});