"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = (0, tslib_1.__importDefault)(require("react"));
const uniforms_1 = require("uniforms");
const AutoField_1 = (0, tslib_1.__importDefault)(require("./AutoField"));
const ListDelField_1 = (0, tslib_1.__importDefault)(require("./ListDelField"));
const delStyle = {
    float: 'right',
    marginBottom: '10px',
    marginLeft: '10px',
    marginRight: '6px',
    width: '20px',
};
const itemStyle = { marginBottom: '24px', overflow: 'hidden' };
const dividerStyle = {
    borderBottom: '1px solid #DDD',
    height: '20px',
    marginTop: '-8px',
};
const childrenStyle = { width: '100%' };
function ListItem({ children = react_1.default.createElement(AutoField_1.default, { label: null, name: "" }), }) {
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("div", { style: delStyle },
            react_1.default.createElement(ListDelField_1.default, { className: "top aligned", name: "" })),
        react_1.default.createElement("div", { style: itemStyle },
            react_1.default.createElement("div", { style: dividerStyle })),
        react_1.default.createElement("div", { style: childrenStyle }, children)));
}
exports.default = (0, uniforms_1.connectField)(ListItem);
