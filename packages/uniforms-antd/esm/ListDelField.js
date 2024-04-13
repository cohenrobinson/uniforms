import { __rest } from "tslib";
import DeleteOutlined from '@ant-design/icons/DeleteOutlined';
import Button from 'antd/lib/button';
import React from 'react';
import { connectField, filterDOMProps, joinName, useField, } from 'uniforms';
function ListDel(_a) {
    var { disabled, icon = React.createElement(DeleteOutlined, null), name, readOnly, shape = 'circle', size = 'small', type = 'ghost' } = _a, props = __rest(_a, ["disabled", "icon", "name", "readOnly", "shape", "size", "type"]);
    const nameParts = joinName(null, name);
    const nameIndex = +nameParts[nameParts.length - 1];
    const parentName = joinName(nameParts.slice(0, -1));
    const parent = useField(parentName, {}, { absoluteName: true })[0];
    disabled || (disabled = readOnly || parent.minCount >= parent.value.length);
    return (React.createElement(Button, Object.assign({}, filterDOMProps(props), { disabled: disabled, icon: icon, onClick: () => {
            const value = parent.value.slice();
            value.splice(nameIndex, 1);
            parent.onChange(value);
        }, shape: shape, size: size, type: type })));
}
export default connectField(ListDel, {
    initialValue: false,
    kind: 'leaf',
});
