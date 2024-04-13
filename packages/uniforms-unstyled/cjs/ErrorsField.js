"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = (0, tslib_1.__importDefault)(require("react"));
const uniforms_1 = require("uniforms");
function ErrorsField(props) {
    const { error, schema } = (0, uniforms_1.useForm)();
    return !error && !props.children ? null : (react_1.default.createElement("div", Object.assign({}, (0, uniforms_1.filterDOMProps)(props)),
        props.children,
        react_1.default.createElement("ul", null, schema.getErrorMessages(error).map((message, index) => (react_1.default.createElement("li", { key: index }, message))))));
}
exports.default = ErrorsField;
