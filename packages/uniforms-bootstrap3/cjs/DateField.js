"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const classnames_1 = (0, tslib_1.__importDefault)(require("classnames"));
const react_1 = (0, tslib_1.__importDefault)(require("react"));
const uniforms_1 = require("uniforms");
const wrapField_1 = (0, tslib_1.__importDefault)(require("./wrapField"));
/* istanbul ignore next */
const DateConstructor = (typeof global === 'object' ? global : window).Date;
const dateFormat = (value, type = 'datetime-local') => value === null || value === void 0 ? void 0 : value.toISOString().slice(0, type === 'datetime-local' ? -8 : -14);
function Date(_a) {
    var _b;
    var { disabled, error, id, inputClassName, inputRef, max, min, name, onChange, placeholder, readOnly, value, type = 'datetime-local' } = _a, props = (0, tslib_1.__rest)(_a, ["disabled", "error", "id", "inputClassName", "inputRef", "max", "min", "name", "onChange", "placeholder", "readOnly", "value", "type"]);
    return (0, wrapField_1.default)(Object.assign(Object.assign({}, props), { id }), react_1.default.createElement("input", { className: (0, classnames_1.default)(inputClassName, 'form-control', {
            'form-control-danger': error,
        }), disabled: disabled, id: id, max: dateFormat(max), min: dateFormat(min), name: name, onChange: event => {
            const date = new DateConstructor(event.target.valueAsNumber);
            if (date.getFullYear() < 10000) {
                onChange(date);
            }
            else if (isNaN(event.target.valueAsNumber)) {
                onChange(undefined);
            }
        }, placeholder: placeholder, readOnly: readOnly, ref: inputRef, type: type, value: (_b = dateFormat(value, type)) !== null && _b !== void 0 ? _b : '' }));
}
exports.default = (0, uniforms_1.connectField)(Date, { kind: 'leaf' });
