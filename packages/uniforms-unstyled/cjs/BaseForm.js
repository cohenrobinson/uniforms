"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uniforms_1 = require("uniforms");
function Unstyled(parent) {
    class _ extends parent {
    }
    _.Unstyled = Unstyled;
    _.displayName = `Unstyled${parent.displayName}`;
    return _;
}
exports.default = Unstyled(uniforms_1.BaseForm);
