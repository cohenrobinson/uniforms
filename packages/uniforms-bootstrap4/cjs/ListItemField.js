"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = (0, tslib_1.__importDefault)(require("react"));
const uniforms_1 = require("uniforms");
const AutoField_1 = (0, tslib_1.__importDefault)(require("./AutoField"));
const ListDelField_1 = (0, tslib_1.__importDefault)(require("./ListDelField"));
function ListItem({ children = react_1.default.createElement(AutoField_1.default, { className: "col-11", label: null, name: "" }), removeIcon, }) {
    return (react_1.default.createElement("div", { className: "row" },
        react_1.default.createElement("div", { className: "col-1" },
            react_1.default.createElement(ListDelField_1.default, { name: "", removeIcon: removeIcon })),
        children));
}
exports.default = (0, uniforms_1.connectField)(ListItem, {
    initialValue: false,
});
