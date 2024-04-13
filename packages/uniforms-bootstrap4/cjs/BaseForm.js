"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const classnames_1 = (0, tslib_1.__importDefault)(require("classnames"));
const omit_1 = (0, tslib_1.__importDefault)(require("lodash/omit"));
const uniforms_1 = require("uniforms");
function Bootstrap4(parent) {
    class _ extends parent {
        getContextState() {
            return Object.assign(Object.assign({}, super.getContextState()), { grid: this.props.grid });
        }
        getNativeFormProps() {
            const error = this.getContextError();
            const props = super.getNativeFormProps();
            return Object.assign(Object.assign({}, (0, omit_1.default)(props, ['grid'])), { className: (0, classnames_1.default)('form', { error }, props.className) });
        }
    }
    _.Bootstrap4 = Bootstrap4;
    _.displayName = `Bootstrap4${parent.displayName}`;
    return _;
}
exports.default = Bootstrap4(uniforms_1.BaseForm);
