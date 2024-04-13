import { __rest } from "tslib";
import classnames from 'classnames';
import React from 'react';
import { filterDOMProps, useForm } from 'uniforms';
function ErrorsField(_a) {
    var { className, children } = _a, props = __rest(_a, ["className", "children"]);
    const { error, schema } = useForm();
    return !error && !children ? null : (React.createElement("div", Object.assign({ className: classnames('panel panel-danger', className) }, filterDOMProps(props)),
        React.createElement("div", { className: "panel-body" },
            children,
            schema.getErrorMessages(error).map((message, index) => (React.createElement("div", { key: index }, message))))));
}
export default ErrorsField;
