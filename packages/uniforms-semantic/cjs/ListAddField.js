"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const classnames_1 = (0, tslib_1.__importDefault)(require("classnames"));
const cloneDeep_1 = (0, tslib_1.__importDefault)(require("lodash/cloneDeep"));
const react_1 = (0, tslib_1.__importDefault)(require("react"));
const uniforms_1 = require("uniforms");
function ListAdd(_a) {
    var { disabled, name, readOnly, value } = _a, props = (0, tslib_1.__rest)(_a, ["disabled", "name", "readOnly", "value"]);
    const nameParts = (0, uniforms_1.joinName)(null, name);
    const parentName = (0, uniforms_1.joinName)(nameParts.slice(0, -1));
    const parent = (0, uniforms_1.useField)(parentName, {}, { absoluteName: true })[0];
    const limitNotReached = !disabled && !(parent.maxCount <= parent.value.length);
    function onAction(event) {
        if (limitNotReached &&
            !readOnly &&
            (!('key' in event) || event.key === 'Enter')) {
            parent.onChange(parent.value.concat([(0, cloneDeep_1.default)(value)]));
        }
    }
    return (react_1.default.createElement("i", Object.assign({}, (0, uniforms_1.filterDOMProps)(props), { className: (0, classnames_1.default)('ui', props.className, limitNotReached ? 'link' : 'disabled', 'fitted add icon'), onClick: onAction, onKeyDown: onAction, role: "button", tabIndex: 0 })));
}
exports.default = (0, uniforms_1.connectField)(ListAdd, {
    initialValue: false,
    kind: 'leaf',
});
