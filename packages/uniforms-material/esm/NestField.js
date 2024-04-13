import { __rest } from "tslib";
import FormLabel from '@material-ui/core/FormLabel';
import useTheme from '@material-ui/core/styles/useTheme';
import React from 'react';
import { connectField } from 'uniforms';
import AutoField from './AutoField';
import wrapField from './wrapField';
function Nest(_a) {
    var _b, _c, _d;
    var { children, fields, itemProps, label } = _a, props = __rest(_a, ["children", "fields", "itemProps", "label"]);
    const theme = useTheme();
    const formControlThemeProps = (_b = theme.props) === null || _b === void 0 ? void 0 : _b.MuiFormControl;
    return wrapField(Object.assign(Object.assign({ fullWidth: (_c = formControlThemeProps === null || formControlThemeProps === void 0 ? void 0 : formControlThemeProps.fullWidth) !== null && _c !== void 0 ? _c : true, margin: (_d = formControlThemeProps === null || formControlThemeProps === void 0 ? void 0 : formControlThemeProps.margin) !== null && _d !== void 0 ? _d : 'dense' }, props), { component: undefined }), label && React.createElement(FormLabel, { component: "legend" }, label), children ||
        fields.map(field => (React.createElement(AutoField, Object.assign({ key: field, name: field }, itemProps)))));
}
export default connectField(Nest);
