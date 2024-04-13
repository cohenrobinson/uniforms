import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import FormLabel from '@material-ui/core/FormLabel';
import Switch from '@material-ui/core/Switch';
import useTheme from '@material-ui/core/styles/useTheme';
import omit from 'lodash/omit';
import React from 'react';
import { connectField, filterDOMProps } from 'uniforms';
import wrapField from './wrapField';
function Bool(props) {
    var _a;
    const { appearance, disabled, inputRef, label, legend, name, onChange, readOnly, value, } = props;
    const theme = useTheme();
    const formControlThemeProps = (_a = theme.props) === null || _a === void 0 ? void 0 : _a.MuiFormControl;
    const SelectionControl = appearance === 'checkbox' || appearance === undefined ? Checkbox : Switch;
    return wrapField(Object.assign(Object.assign(Object.assign(Object.assign({}, ((formControlThemeProps === null || formControlThemeProps === void 0 ? void 0 : formControlThemeProps.fullWidth) === undefined && {
        fullWidth: true,
    })), ((formControlThemeProps === null || formControlThemeProps === void 0 ? void 0 : formControlThemeProps.margin) === undefined && { margin: 'dense' })), props), { component: 'fieldset' }), legend && (React.createElement(FormLabel, { component: "legend", htmlFor: name }, legend)), React.createElement(FormGroup, null,
        React.createElement(FormControlLabel, { control: React.createElement(SelectionControl, Object.assign({ checked: !!value, name: name, onChange: event => !disabled &&
                    !readOnly &&
                    onChange &&
                    onChange(event.target.checked), ref: inputRef, value: name }, omit(filterDOMProps(props), ['helperText', 'fullWidth']))), label: label })));
}
export default connectField(Bool, { kind: 'leaf' });
