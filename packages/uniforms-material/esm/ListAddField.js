import { __rest } from "tslib";
import FormControl from '@material-ui/core/FormControl';
import IconButton from '@material-ui/core/IconButton';
import cloneDeep from 'lodash/cloneDeep';
import React from 'react';
import { connectField, filterDOMProps, joinName, useField, } from 'uniforms';
function ListAdd(_a) {
    var { disabled, fullWidth = true, icon = '+', margin = 'dense', name, readOnly, value, variant } = _a, props = __rest(_a, ["disabled", "fullWidth", "icon", "margin", "name", "readOnly", "value", "variant"]);
    const nameParts = joinName(null, name);
    const parentName = joinName(nameParts.slice(0, -1));
    const parent = useField(parentName, {}, { absoluteName: true })[0];
    const limitNotReached = !disabled && !(parent.maxCount <= parent.value.length);
    return (React.createElement(FormControl, { fullWidth: fullWidth, margin: margin, variant: variant },
        React.createElement(IconButton, Object.assign({}, filterDOMProps(props), { disabled: !limitNotReached, onClick: () => {
                if (!readOnly) {
                    parent.onChange(parent.value.concat([cloneDeep(value)]));
                }
            } }), icon)));
}
export default connectField(ListAdd, {
    initialValue: false,
    kind: 'leaf',
});
