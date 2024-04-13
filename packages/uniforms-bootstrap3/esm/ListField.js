import { __rest } from "tslib";
import classnames from 'classnames';
import React, { Children, cloneElement, isValidElement, } from 'react';
import { connectField, filterDOMProps } from 'uniforms';
import ListAddField from './ListAddField';
import ListItemField from './ListItemField';
function List(_a) {
    var { addIcon, children = React.createElement(ListItemField, { name: "$" }), className, error, errorMessage, itemProps, label, removeIcon, showInlineError, value } = _a, props = __rest(_a, ["addIcon", "children", "className", "error", "errorMessage", "itemProps", "label", "removeIcon", "showInlineError", "value"]);
    return (React.createElement("div", Object.assign({ className: classnames('panel panel-default', { 'panel-danger': error }, className) }, filterDOMProps(props)),
        React.createElement("div", { className: "panel-body" },
            label && (React.createElement("div", { className: classnames('panel-heading', { 'has-error': error }) },
                React.createElement("label", { className: "control-label" },
                    label,
                    "\u00A0"),
                React.createElement(ListAddField, { addIcon: addIcon, name: "$" }),
                !!(error && showInlineError) && (React.createElement("span", { className: "help-block" }, errorMessage)))), value === null || value === void 0 ? void 0 :
            value.map((item, itemIndex) => Children.map(children, (child, childIndex) => {
                var _a;
                return isValidElement(child)
                    ? cloneElement(child, Object.assign(Object.assign({ key: `${itemIndex}-${childIndex}`, name: (_a = child.props.name) === null || _a === void 0 ? void 0 : _a.replace('$', '' + itemIndex) }, itemProps), { removeIcon }))
                    : child;
            })))));
}
export default connectField(List);