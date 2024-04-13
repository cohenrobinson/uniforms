"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const classnames_1 = (0, tslib_1.__importDefault)(require("classnames"));
const react_1 = (0, tslib_1.__importDefault)(require("react"));
const uniforms_1 = require("uniforms");
const AutoField_1 = (0, tslib_1.__importDefault)(require("./AutoField"));
const Nest = (_a) => {
    var { children, className, error, errorMessage, fields, itemProps, label, showInlineError } = _a, props = (0, tslib_1.__rest)(_a, ["children", "className", "error", "errorMessage", "fields", "itemProps", "label", "showInlineError"]);
    return (react_1.default.createElement("div", Object.assign({ className: (0, classnames_1.default)(className, { 'has-error': error }) }, (0, uniforms_1.filterDOMProps)(props)),
        label && react_1.default.createElement("label", null, label),
        !!(error && showInlineError) && (react_1.default.createElement("span", { className: "help-block" }, errorMessage)),
        children ||
            fields.map(field => (react_1.default.createElement(AutoField_1.default, Object.assign({ key: field, name: field }, itemProps))))));
};
exports.default = (0, uniforms_1.connectField)(Nest);