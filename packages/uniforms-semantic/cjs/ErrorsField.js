"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const classnames_1 = (0, tslib_1.__importDefault)(require("classnames"));
const react_1 = (0, tslib_1.__importDefault)(require("react"));
const uniforms_1 = require("uniforms");
function ErrorsField(_a) {
    var { children, className } = _a, props = (0, tslib_1.__rest)(_a, ["children", "className"]);
    const { error, schema } = (0, uniforms_1.useForm)();
    return !error && !children ? null : (react_1.default.createElement("div", Object.assign({ className: (0, classnames_1.default)('ui', className, 'error message') }, (0, uniforms_1.filterDOMProps)(props)),
        children,
        react_1.default.createElement("ul", { className: "list" }, schema.getErrorMessages(error).map((message, index) => (react_1.default.createElement("li", { key: index }, message))))));
}
exports.default = ErrorsField;
