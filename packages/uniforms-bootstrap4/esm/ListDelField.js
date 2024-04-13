import { __rest } from "tslib";
import classnames from 'classnames';
import React from 'react';
import { connectField, filterDOMProps, joinName, useField, } from 'uniforms';
function ListDel(_a) {
    var { className, disabled, name, readOnly, removeIcon } = _a, props = __rest(_a, ["className", "disabled", "name", "readOnly", "removeIcon"]);
    const nameParts = joinName(null, name);
    const nameIndex = +nameParts[nameParts.length - 1];
    const parentName = joinName(nameParts.slice(0, -1));
    const parent = useField(parentName, {}, { absoluteName: true })[0];
    disabled || (disabled = readOnly || parent.minCount >= parent.value.length);
    function onAction(event) {
        if (!disabled && (!('key' in event) || event.key === 'Enter')) {
            const value = parent.value.slice();
            value.splice(nameIndex, 1);
            parent.onChange(value);
        }
    }
    return (React.createElement("span", Object.assign({}, filterDOMProps(props), { className: classnames('badge badge-pill', className), onClick: onAction, onKeyDown: onAction, role: "button", tabIndex: 0 }), removeIcon));
}
ListDel.defaultProps = {
    removeIcon: React.createElement("i", { className: "octicon octicon-dash" }),
};
export default connectField(ListDel, {
    initialValue: false,
    kind: 'leaf',
});
