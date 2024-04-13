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
    disabled || (disabled = readOnly || parent.maxCount <= parent.value.length);
    function onAction() {
        if (!disabled) {
            parent.onChange(parent.value.concat([cloneDeep(value)]));
        }
    }
    return (React.createElement("button", Object.assign({}, filterDOMProps(props), { className: classnames('btn btn-secondary btn-sm float-end', className), disabled: disabled, onClick: onAction, tabIndex: 0, type: "button" }), addIcon));
}
ListAdd.defaultProps = { addIcon: React.createElement("i", { className: "octicon octicon-plus" }) };
export default connectField(ListAdd, {
    initialValue: false,
    kind: 'leaf',
});
