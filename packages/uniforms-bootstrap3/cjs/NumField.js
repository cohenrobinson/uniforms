"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const classnames_1 = (0, tslib_1.__importDefault)(require("classnames"));
const react_1 = (0, tslib_1.__importDefault)(require("react"));
const uniforms_1 = require("uniforms");
const wrapField_1 = (0, tslib_1.__importDefault)(require("./wrapField"));
function Num(props) {
    var _a;
    return (0, wrapField_1.default)(props, react_1.default.createElement("input", { className: (0, classnames_1.default)(props.inputClassName, 'form-control', {
            'form-control-danger': props.error,
        }), disabled: props.disabled, id: props.id, max: props.max, min: props.min, name: props.name, onChange: event => {
            const parse = props.decimal ? parseFloat : parseInt;
            const value = parse(event.target.value);
            props.onChange(isNaN(value) ? undefined : value);
        }, placeholder: props.placeholder, readOnly: props.readOnly, ref: props.inputRef, step: props.step || (props.decimal ? 0.01 : 1), type: "number", value: (_a = props.value) !== null && _a !== void 0 ? _a : '' }));
}
exports.default = (0, uniforms_1.connectField)(Num, { kind: 'leaf' });
