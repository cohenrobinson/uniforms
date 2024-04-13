import { __rest } from "tslib";
import React, { Children, cloneElement, isValidElement } from 'react';
import { connectField, filterDOMProps } from 'uniforms';
import ListAddField from './ListAddField';
import ListItemField from './ListItemField';
function List(_a) {
    var { children = React.createElement(ListItemField, { name: "$" }), itemProps, label, value } = _a, props = __rest(_a, ["children", "itemProps", "label", "value"]);
    return (React.createElement("ul", Object.assign({}, filterDOMProps(props)),
        label && (React.createElement("label", null,
            label,
            React.createElement(ListAddField, { name: "$" }))), value === null || value === void 0 ? void 0 :
        value.map((item, itemIndex) => Children.map(children, (child, childIndex) => {
            var _a;
            return isValidElement(child)
                ? cloneElement(child, Object.assign({ key: `${itemIndex}-${childIndex}`, name: (_a = child.props.name) === null || _a === void 0 ? void 0 : _a.replace('$', '' + itemIndex) }, itemProps))
                : child;
        }))));
}
export default connectField(List);
