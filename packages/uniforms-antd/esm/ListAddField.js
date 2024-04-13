import { __rest } from "tslib";
import PlusSquareOutlined from '@ant-design/icons/PlusSquareOutlined';
import Button from 'antd/lib/button';
import cloneDeep from 'lodash/cloneDeep';
import React from 'react';
import { connectField, filterDOMProps, joinName, useField, } from 'uniforms';
const defaultStyle = { width: '100%' };
function ListAdd(_a) {
    var { disabled, icon = React.createElement(PlusSquareOutlined, null), name, readOnly, size = 'small', style = defaultStyle, type = 'dashed', value } = _a, props = __rest(_a, ["disabled", "icon", "name", "readOnly", "size", "style", "type", "value"]);
    const nameParts = joinName(null, name);
    const parentName = joinName(nameParts.slice(0, -1));
    const parent = useField(parentName, {}, { absoluteName: true })[0];
    const limitNotReached = !disabled && !(parent.maxCount <= parent.value.length);
    return (React.createElement(Button, Object.assign({}, filterDOMProps(props), { disabled: !limitNotReached, icon: icon, onClick: () => {
            if (!readOnly) {
                parent.onChange(parent.value.concat([cloneDeep(value)]));
            }
        }, size: size, style: style, type: type })));
}
export default connectField(ListAdd, {
    initialValue: false,
    kind: 'leaf',
});
