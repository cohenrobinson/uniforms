"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const classnames_1 = (0, tslib_1.__importDefault)(require("classnames"));
const react_1 = (0, tslib_1.__importDefault)(require("react"));
const uniforms_1 = require("uniforms");
const AutoField_1 = (0, tslib_1.__importDefault)(require("./AutoField"));
function Nest(_a) {
    var { children, className, disabled, error, errorMessage, fields, grouped, itemProps, label, showInlineError } = _a, props = (0, tslib_1.__rest)(_a, ["children", "className", "disabled", "error", "errorMessage", "fields", "grouped", "itemProps", "label", "showInlineError"]);
    return (react_1.default.createElement("div", Object.assign({ className: (0, classnames_1.default)(className, { disabled, error, grouped }, 'fields') }, (0, uniforms_1.filterDOMProps)(props)),
        label && (react_1.default.createElement("div", { className: "field" },
            react_1.default.createElement("label", null, label))),
        !!(error && showInlineError) && (react_1.default.createElement("div", { className: "ui red basic label" }, errorMessage)),
        children ||
            fields.map(field => (react_1.default.createElement(AutoField_1.default, Object.assign({ key: field, name: field }, itemProps))))));
}
Nest.defaultProps = { grouped: true };
exports.default = (0, uniforms_1.connectField)(Nest);
