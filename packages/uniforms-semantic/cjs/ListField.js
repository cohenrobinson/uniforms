"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const classnames_1 = (0, tslib_1.__importDefault)(require("classnames"));
const react_1 = (0, tslib_1.__importStar)(require("react"));
const uniforms_1 = require("uniforms");
const ListAddField_1 = (0, tslib_1.__importDefault)(require("./ListAddField"));
const ListItemField_1 = (0, tslib_1.__importDefault)(require("./ListItemField"));
function List(_a) {
    var { children = react_1.default.createElement(ListItemField_1.default, { name: "$" }), className, disabled, error, errorMessage, itemProps, label, required, showInlineError, value } = _a, props = (0, tslib_1.__rest)(_a, ["children", "className", "disabled", "error", "errorMessage", "itemProps", "label", "required", "showInlineError", "value"]);
    return (react_1.default.createElement("div", Object.assign({ className: (0, classnames_1.default)('ui', className, { disabled }, 'grouped fitted fields list') }, (0, uniforms_1.filterDOMProps)(props)),
        label && (react_1.default.createElement("div", { className: (0, classnames_1.default)({ error, required }, 'field item') },
            react_1.default.createElement("label", { className: "left floated" }, label),
            react_1.default.createElement(ListAddField_1.default, { className: "right floated", name: "$" }))),
        label && (react_1.default.createElement("div", { className: "ui fitted hidden clearing horizontal divider" })),
        !!(error && showInlineError) && (react_1.default.createElement("div", { className: "ui red basic label" }, errorMessage)), value === null || value === void 0 ? void 0 :
        value.map((item, itemIndex) => react_1.Children.map(children, (child, childIndex) => {
            var _a;
            return (0, react_1.isValidElement)(child)
                ? (0, react_1.cloneElement)(child, Object.assign({ key: `${itemIndex}-${childIndex}`, name: (_a = child.props.name) === null || _a === void 0 ? void 0 : _a.replace('$', '' + itemIndex) }, itemProps))
                : child;
        }))));
}
exports.default = (0, uniforms_1.connectField)(List);