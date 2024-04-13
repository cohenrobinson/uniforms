"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const classnames_1 = (0, tslib_1.__importDefault)(require("classnames"));
const uniforms_1 = require("uniforms");
function Semantic(parent) {
    class _ extends parent {
        getNativeFormProps() {
            const props = super.getNativeFormProps();
            const error = this.getContextError();
            return Object.assign(Object.assign({}, props), { className: (0, classnames_1.default)('ui', props.className, { error }, 'form') });
        }
    }
    _.Semantic = Semantic;
    _.displayName = `Semantic${parent.displayName}`;
    return _;
}
exports.default = Semantic(uniforms_1.BaseForm);
