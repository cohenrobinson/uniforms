"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const DeleteOutlined_1 = (0, tslib_1.__importDefault)(require("@ant-design/icons/DeleteOutlined"));
const button_1 = (0, tslib_1.__importDefault)(require("antd/lib/button"));
const react_1 = (0, tslib_1.__importDefault)(require("react"));
const uniforms_1 = require("uniforms");
function ListDel(_a) {
    var { disabled, icon = react_1.default.createElement(DeleteOutlined_1.default, null), name, readOnly, shape = 'circle', size = 'small', type = 'ghost' } = _a, props = (0, tslib_1.__rest)(_a, ["disabled", "icon", "name", "readOnly", "shape", "size", "type"]);
    const nameParts = (0, uniforms_1.joinName)(null, name);
    const nameIndex = +nameParts[nameParts.length - 1];
    const parentName = (0, uniforms_1.joinName)(nameParts.slice(0, -1));
    const parent = (0, uniforms_1.useField)(parentName, {}, { absoluteName: true })[0];
    disabled || (disabled = readOnly || parent.minCount >= parent.value.length);
    return (react_1.default.createElement(button_1.default, Object.assign({}, (0, uniforms_1.filterDOMProps)(props), { disabled: disabled, icon: icon, onClick: () => {
            const value = parent.value.slice();
            value.splice(nameIndex, 1);
            parent.onChange(value);
        }, shape: shape, size: size, type: type })));
}
exports.default = (0, uniforms_1.connectField)(ListDel, {
    initialValue: false,
    kind: 'leaf',
});
