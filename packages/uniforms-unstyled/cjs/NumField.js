"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = (0, tslib_1.__importDefault)(require("react"));
const uniforms_1 = require("uniforms");
function Num(_a) {
    var { decimal, disabled, id, inputRef, label, max, min, name, onChange, placeholder, readOnly, step, value } = _a, props = (0, tslib_1.__rest)(_a, ["decimal", "disabled", "id", "inputRef", "label", "max", "min", "name", "onChange", "placeholder", "readOnly", "step", "value"]);
    return (react_1.default.createElement("div", Object.assign({}, (0, uniforms_1.filterDOMProps)(props)),
        label && react_1.default.createElement("label", { htmlFor: id }, label),
        react_1.default.createElement("input", { disabled: disabled, id: id, max: max, min: min, name: name, onChange: event => {
                const parse = decimal ? parseFloat : parseInt;
                const value = parse(event.target.value);
                onChange(isNaN(value) ? undefined : value);
            }, placeholder: placeholder, readOnly: readOnly, ref: inputRef, step: step || (decimal ? 0.01 : 1), type: "number", value: value !== null && value !== void 0 ? value : '' })));
}
exports.default = (0, uniforms_1.connectField)(Num, { kind: 'leaf' });
