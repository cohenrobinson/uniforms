"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const CheckOutlined_1 = (0, tslib_1.__importDefault)(require("@ant-design/icons/CheckOutlined"));
const CloseOutlined_1 = (0, tslib_1.__importDefault)(require("@ant-design/icons/CloseOutlined"));
const checkbox_1 = (0, tslib_1.__importDefault)(require("antd/lib/checkbox"));
const switch_1 = (0, tslib_1.__importDefault)(require("antd/lib/switch"));
const react_1 = (0, tslib_1.__importDefault)(require("react"));
const uniforms_1 = require("uniforms");
const wrapField_1 = (0, tslib_1.__importDefault)(require("./wrapField"));
function Bool(_a) {
    var { checkbox = false, checkedChildren = react_1.default.createElement(CheckOutlined_1.default, null), disabled, inputRef, name, onChange, readOnly, unCheckedChildren = react_1.default.createElement(CloseOutlined_1.default, null), value } = _a, props = (0, tslib_1.__rest)(_a, ["checkbox", "checkedChildren", "disabled", "inputRef", "name", "onChange", "readOnly", "unCheckedChildren", "value"]);
    const Component = checkbox ? checkbox_1.default : switch_1.default;
    return (0, wrapField_1.default)(props, react_1.default.createElement(Component, Object.assign({ checked: value || false, checkedChildren: checkedChildren, disabled: disabled, name: name, onChange: () => (readOnly ? undefined : onChange(!value)), ref: inputRef, unCheckedChildren: unCheckedChildren }, (0, uniforms_1.filterDOMProps)(props))));
}
exports.default = (0, uniforms_1.connectField)(Bool, { kind: 'leaf' });
