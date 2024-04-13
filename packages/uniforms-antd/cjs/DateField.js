"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const date_picker_1 = (0, tslib_1.__importDefault)(require("antd/lib/date-picker"));
const moment_1 = (0, tslib_1.__importDefault)(require("moment"));
const react_1 = (0, tslib_1.__importDefault)(require("react"));
const uniforms_1 = require("uniforms");
const wrapField_1 = (0, tslib_1.__importDefault)(require("./wrapField"));
const defaultStyle = { width: '100%' };
function Date(_a) {
    var { showTime = true, style = defaultStyle } = _a, props = (0, tslib_1.__rest)(_a, ["showTime", "style"]);
    return (0, wrapField_1.default)(props, react_1.default.createElement(date_picker_1.default, Object.assign({ disabled: props.disabled, inputReadOnly: props.readOnly, name: props.name, onChange: value => {
            if (!props.readOnly) {
                props.onChange(value ? value.toDate() : undefined);
            }
        }, placeholder: props.placeholder, 
        // @ts-expect-error: `DatePicker` is an intersection.
        ref: props.inputRef, showTime: showTime, style: style, value: props.value && (0, moment_1.default)(props.value) }, (0, uniforms_1.filterDOMProps)(props))));
}
exports.default = (0, uniforms_1.connectField)(Date, { kind: 'leaf' });
