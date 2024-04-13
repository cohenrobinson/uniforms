"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const classnames_1 = (0, tslib_1.__importDefault)(require("classnames"));
const react_1 = (0, tslib_1.__importStar)(require("react"));
const uniforms_1 = require("uniforms");
const ListAddField_1 = (0, tslib_1.__importDefault)(require("./ListAddField"));
const ListItemField_1 = (0, tslib_1.__importDefault)(require("./ListItemField"));
function List(_a) {
    var { addIcon, children = react_1.default.createElement(ListItemField_1.default, { name: "$" }), className, error, errorMessage, itemProps, label, removeIcon, showInlineError, value } = _a, props = (0, tslib_1.__rest)(_a, ["addIcon", "children", "className", "error", "errorMessage", "itemProps", "label", "removeIcon", "showInlineError", "value"]);
    return (react_1.default.createElement("div", Object.assign({ className: (0, classnames_1.default)('panel panel-default', { 'panel-danger': error }, className) }, (0, uniforms_1.filterDOMProps)(props)),
        react_1.default.createElement("div", { className: "panel-body" },
            label && (react_1.default.createElement("div", { className: (0, classnames_1.default)('panel-heading', { 'has-error': error }) },
                react_1.default.createElement("label", { className: "control-label" },
                    label,
                    "\u00A0"),
                react_1.default.createElement(ListAddField_1.default, { addIcon: addIcon, name: "$" }),
                !!(error && showInlineError) && (react_1.default.createElement("span", { className: "help-block" }, errorMessage)))), value === null || value === void 0 ? void 0 :
            value.map((item, itemIndex) => react_1.Children.map(children, (child, childIndex) => {
                var _a;
                return (0, react_1.isValidElement)(child)
                    ? (0, react_1.cloneElement)(child, Object.assign(Object.assign({ key: `${itemIndex}-${childIndex}`, name: (_a = child.props.name) === null || _a === void 0 ? void 0 : _a.replace('$', '' + itemIndex) }, itemProps), { removeIcon }))
                    : child;
            })))));
}
exports.default = (0, uniforms_1.connectField)(List);
