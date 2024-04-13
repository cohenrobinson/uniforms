import { __rest } from "tslib";
import classnames from 'classnames';
import cloneDeep from 'lodash/cloneDeep';
import React from 'react';
import { connectField, filterDOMProps, joinName, useField, } from 'uniforms';
function ListAdd(_a) {
    var { addIcon, className, disabled, name, readOnly, value } = _a, props = __rest(_a, ["addIcon", "className", "disabled", "name", "readOnly", "value"]);
    const nameParts = joinName(null, name);
    const parentName = joinName(nameParts.slice(0, -1));
    const parent = useField(parentName, {}, { absoluteName: true })[0];
    const limitNotReached = !disabled && !(parent.maxCount <= parent.value.length);
    function onAction(event) {
        if (limitNotReached &&
            !readOnly &&
            (!('key' in event) || event.key === 'Enter')) {
            parent.onChange(parent.value.concat([cloneDeep(value)]));
        }
    }
    return (React.createElement("div", Object.assign({}, filterDOMProps(props), { className: classnames('badge badge-pill float-right', className), onClick: onAction, onKeyDown: onAction, role: "button", tabIndex: 0 }), addIcon));
}
ListAdd.defaultProps = { addIcon: React.createElement("i", { className: "octicon octicon-plus" }) };
export default connectField(ListAdd, {
    initialValue: false,
    kind: 'leaf',
});
