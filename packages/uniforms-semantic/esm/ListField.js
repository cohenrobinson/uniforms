import { __rest } from "tslib";
import classnames from 'classnames';
import React, { Children, cloneElement, isValidElement } from 'react';
import { connectField, filterDOMProps } from 'uniforms';
import ListAddField from './ListAddField';
import ListItemField from './ListItemField';
function List(_a) {
    var { children = React.createElement(ListItemField, { name: "$" }), className, disabled, error, errorMessage, itemProps, label, required, showInlineError, value } = _a, props = __rest(_a, ["children", "className", "disabled", "error", "errorMessage", "itemProps", "label", "required", "showInlineError", "value"]);
    return (React.createElement("div", Object.assign({ className: classnames('ui', className, { disabled }, 'grouped fitted fields list') }, filterDOMProps(props)),
        label && (React.createElement("div", { className: classnames({ error, required }, 'field item') },
            React.createElement("label", { className: "left floated" }, label),
            React.createElement(ListAddField, { className: "right floated", name: "$" }))),
        label && (React.createElement("div", { className: "ui fitted hidden clearing horizontal divider" })),
        !!(error && showInlineError) && (React.createElement("div", { className: "ui red basic label" }, errorMessage)), value === null || value === void 0 ? void 0 :
        value.map((item, itemIndex) => Children.map(children, (child, childIndex) => {
            var _a;
            return isValidElement(child)
                ? cloneElement(child, Object.assign({ key: `${itemIndex}-${childIndex}`, name: (_a = child.props.name) === null || _a === void 0 ? void 0 : _a.replace('$', '' + itemIndex) }, itemProps))
                : child;
        }))));
}
export default connectField(List);