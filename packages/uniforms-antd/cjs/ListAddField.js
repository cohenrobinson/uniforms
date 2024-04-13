"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const PlusSquareOutlined_1 = (0, tslib_1.__importDefault)(require("@ant-design/icons/PlusSquareOutlined"));
const button_1 = (0, tslib_1.__importDefault)(require("antd/lib/button"));
const cloneDeep_1 = (0, tslib_1.__importDefault)(require("lodash/cloneDeep"));
const react_1 = (0, tslib_1.__importDefault)(require("react"));
const uniforms_1 = require("uniforms");
const defaultStyle = { width: '100%' };
function ListAdd(_a) {
    var { disabled, icon = react_1.default.createElement(PlusSquareOutlined_1.default, null), name, readOnly, size = 'small', style = defaultStyle, type = 'dashed', value } = _a, props = (0, tslib_1.__rest)(_a, ["disabled", "icon", "name", "readOnly", "size", "style", "type", "value"]);
    const nameParts = (0, uniforms_1.joinName)(null, name);
    const parentName = (0, uniforms_1.joinName)(nameParts.slice(0, -1));
    const parent = (0, uniforms_1.useField)(parentName, {}, { absoluteName: true })[0];
    const limitNotReached = !disabled && !(parent.maxCount <= parent.value.length);
    return (react_1.default.createElement(button_1.default, Object.assign({}, (0, uniforms_1.filterDOMProps)(props), { disabled: !limitNotReached, icon: icon, onClick: () => {
            if (!readOnly) {
                parent.onChange(parent.value.concat([(0, cloneDeep_1.default)(value)]));
            }
        }, size: size, style: style, type: type })));
}
exports.default = (0, uniforms_1.connectField)(ListAdd, {
    initialValue: false,
    kind: 'leaf',
});
