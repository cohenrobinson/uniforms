"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const input_number_1 = (0, tslib_1.__importDefault)(require("antd/lib/input-number"));
const react_1 = (0, tslib_1.__importDefault)(require("react"));
const uniforms_1 = require("uniforms");
const wrapField_1 = (0, tslib_1.__importDefault)(require("./wrapField"));
function Num(props) {
    return (0, wrapField_1.default)(props, react_1.default.createElement(input_number_1.default, Object.assign({ disabled: props.disabled, max: props.max, min: props.min, name: props.name, onChange: event => {
            const parse = props.decimal ? parseFloat : parseInt;
            const value = parse('' + event);
            props.onChange(isNaN(value) ? undefined : value);
        }, placeholder: props.placeholder, readOnly: props.readOnly, ref: props.inputRef, step: props.step || (props.decimal ? 0.01 : 1), style: { width: '100%' }, value: props.value }, (0, uniforms_1.filterDOMProps)(props))));
}
exports.default = (0, uniforms_1.connectField)(Num, { kind: 'leaf' });
