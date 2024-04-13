"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const classnames_1 = (0, tslib_1.__importDefault)(require("classnames"));
const react_1 = (0, tslib_1.__importDefault)(require("react"));
const uniforms_1 = require("uniforms");
function ListDel(_a) {
    var { disabled, name, readOnly } = _a, props = (0, tslib_1.__rest)(_a, ["disabled", "name", "readOnly"]);
    const nameParts = (0, uniforms_1.joinName)(null, name);
    const nameIndex = +nameParts[nameParts.length - 1];
    const parentName = (0, uniforms_1.joinName)(nameParts.slice(0, -1));
    const parent = (0, uniforms_1.useField)(parentName, {}, { absoluteName: true })[0];
    disabled || (disabled = readOnly || parent.minCount >= parent.value.length);
    function onAction(event) {
        if (!disabled && (!('key' in event) || event.key === 'Enter')) {
            const value = parent.value.slice();
            value.splice(nameIndex, 1);
            parent.onChange(value);
        }
    }
    return (react_1.default.createElement("i", Object.assign({}, (0, uniforms_1.filterDOMProps)(props), { className: (0, classnames_1.default)('ui', props.className, disabled ? 'link' : 'disabled', 'fitted close icon'), onClick: onAction, onKeyDown: onAction, role: "button", tabIndex: 0 })));
}
exports.default = (0, uniforms_1.connectField)(ListDel, {
    initialValue: false,
    kind: 'leaf',
});
