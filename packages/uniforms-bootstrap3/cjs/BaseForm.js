"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const classnames_1 = (0, tslib_1.__importDefault)(require("classnames"));
const uniforms_1 = require("uniforms");
function Bootstrap3(parent) {
    class _ extends parent {
        getContextState() {
            return Object.assign(Object.assign({}, super.getContextState()), { grid: this.props.grid });
        }
        getNativeFormProps() {
            const error = this.getContextError();
            const _a = super.getNativeFormProps(), { className, grid } = _a, props = (0, tslib_1.__rest)(_a, ["className", "grid"]);
            return Object.assign(Object.assign({}, props), { className: (0, classnames_1.default)('form', { error, 'form-horizontal': grid }, className) });
        }
    }
    _.Bootstrap3 = Bootstrap3;
    _.displayName = `Bootstrap3${parent.displayName}`;
    return _;
}
exports.default = Bootstrap3(uniforms_1.BaseForm);
