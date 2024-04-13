"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const QuestionCircleOutlined_1 = (0, tslib_1.__importDefault)(require("@ant-design/icons/QuestionCircleOutlined"));
const form_1 = (0, tslib_1.__importDefault)(require("antd/lib/form"));
const tooltip_1 = (0, tslib_1.__importDefault)(require("antd/lib/tooltip"));
const react_1 = (0, tslib_1.__importDefault)(require("react"));
const uniforms_1 = require("uniforms");
const defaultWrapperStyle = { marginBottom: '12px' };
function wrapField({ colon, error, errorMessage, extra, help, id, info, label, labelCol, required, showInlineError, validateStatus, wrapperCol, wrapperStyle = defaultWrapperStyle, }, children) {
    const labelNode = !!label && (react_1.default.createElement("span", null,
        label,
        !!info && (react_1.default.createElement("span", null,
            "\u00A0",
            react_1.default.createElement(tooltip_1.default, { title: info },
                react_1.default.createElement(QuestionCircleOutlined_1.default, null))))));
    return (react_1.default.createElement(form_1.default.Item, { colon: colon, hasFeedback: true, help: help || (showInlineError && !!error && errorMessage), extra: extra, htmlFor: id, label: labelNode, labelCol: labelCol, required: required, style: wrapperStyle, validateStatus: error ? 'error' : validateStatus, wrapperCol: wrapperCol }, children));
}
exports.default = wrapField;
uniforms_1.filterDOMProps.register('checkboxes', 'colon', 'disableItem', 'labelCol', 'validateStatus', 'wrapperCol', 'wrapperStyle');
