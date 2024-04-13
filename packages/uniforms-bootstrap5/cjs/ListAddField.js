"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const classnames_1 = (0, tslib_1.__importDefault)(require("classnames"));
const cloneDeep_1 = (0, tslib_1.__importDefault)(require("lodash/cloneDeep"));
const react_1 = (0, tslib_1.__importDefault)(require("react"));
const uniforms_1 = require("uniforms");
function ListAdd(_a) {
    var { addIcon, className, disabled, name, readOnly, value } = _a, props = (0, tslib_1.__rest)(_a, ["addIcon", "className", "disabled", "name", "readOnly", "value"]);
    const nameParts = (0, uniforms_1.joinName)(null, name);
    const parentName = (0, uniforms_1.joinName)(nameParts.slice(0, -1));
    const parent = (0, uniforms_1.useField)(parentName, {}, { absoluteName: true })[0];
    disabled || (disabled = readOnly || parent.maxCount <= parent.value.length);
    function onAction() {
        if (!disabled) {
            parent.onChange(parent.value.concat([(0, cloneDeep_1.default)(value)]));
        }
    }
    return (react_1.default.createElement("button", Object.assign({}, (0, uniforms_1.filterDOMProps)(props), { className: (0, classnames_1.default)('btn btn-secondary btn-sm float-end', className), disabled: disabled, onClick: onAction, tabIndex: 0, type: "button" }), addIcon));
}
ListAdd.defaultProps = { addIcon: react_1.default.createElement("i", { className: "octicon octicon-plus" }) };
exports.default = (0, uniforms_1.connectField)(ListAdd, {
    initialValue: false,
    kind: 'leaf',
});
