"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const classnames_1 = (0, tslib_1.__importDefault)(require("classnames"));
const uniforms_1 = require("uniforms");
function AntD(parent) {
    class _ extends parent {
        getNativeFormProps() {
            const _a = super.getNativeFormProps(), { className, layout = 'vertical' } = _a, props = (0, tslib_1.__rest)(_a, ["className", "layout"]);
            return Object.assign(Object.assign({}, props), { className: (0, classnames_1.default)('ant-form', 'ant-form-' + layout, className) });
        }
    }
    _.AntD = AntD;
    _.displayName = `AntD${parent.displayName}`;
    return _;
}
exports.default = AntD(uniforms_1.BaseForm);
