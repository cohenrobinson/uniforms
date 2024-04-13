"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = (0, tslib_1.__importDefault)(require("react"));
const uniforms_1 = require("uniforms");
const defaultStyle = {
    backgroundColor: 'rgba(255, 85, 0, 0.2)',
    border: '1px solid rgb(255, 85, 0)',
    borderRadius: '2px',
    margin: '20px 0px',
    padding: '10px',
};
const rowStyle = { margin: '3px' };
function ErrorsField(_a) {
    var { children, style = defaultStyle } = _a, props = (0, tslib_1.__rest)(_a, ["children", "style"]);
    const { error, schema } = (0, uniforms_1.useForm)();
    return !error && !children ? null : (react_1.default.createElement("div", Object.assign({ style: style }, (0, uniforms_1.filterDOMProps)(props)),
        children,
        react_1.default.createElement("ul", null, schema.getErrorMessages(error).map((message, index) => (react_1.default.createElement("li", { key: index, style: rowStyle }, message))))));
}
exports.default = ErrorsField;
