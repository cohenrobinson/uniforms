"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const QuestionCircleOutlined_1 = (0, tslib_1.__importDefault)(require("@ant-design/icons/QuestionCircleOutlined"));
const tooltip_1 = (0, tslib_1.__importDefault)(require("antd/lib/tooltip"));
const classnames_1 = (0, tslib_1.__importDefault)(require("classnames"));
const react_1 = (0, tslib_1.__importStar)(require("react"));
const uniforms_1 = require("uniforms");
const ListAddField_1 = (0, tslib_1.__importDefault)(require("./ListAddField"));
const ListItemField_1 = (0, tslib_1.__importDefault)(require("./ListItemField"));
const defaultStyle = {
    marginBottom: '5px',
    marginTop: '5px',
    padding: '10px',
};
const errorStyle = { borderColor: 'rgb(255, 85, 0)' };
function List(_a) {
    var { children = react_1.default.createElement(ListItemField_1.default, { name: "$" }), className, error, errorMessage, info, itemProps, label, labelCol, showInlineError, style = defaultStyle, value, wrapperCol } = _a, props = (0, tslib_1.__rest)(_a, ["children", "className", "error", "errorMessage", "info", "itemProps", "label", "labelCol", "showInlineError", "style", "value", "wrapperCol"]);
    const wrapperStyle = error
        ? style
            ? Object.assign(Object.assign({}, errorStyle), style) : errorStyle
        : style;
    return (react_1.default.createElement("div", Object.assign({}, (0, uniforms_1.filterDOMProps)(props), { style: wrapperStyle, className: (0, classnames_1.default)([className, 'ant-list', 'ant-list-bordered']) }),
        !!label && (react_1.default.createElement("div", null,
            label,
            !!info && (react_1.default.createElement("span", null,
                "\u00A0",
                react_1.default.createElement(tooltip_1.default, { title: info },
                    react_1.default.createElement(QuestionCircleOutlined_1.default, null)))))),
        !!(error && showInlineError) && react_1.default.createElement("div", null, errorMessage), value === null || value === void 0 ? void 0 :
        value.map((item, itemIndex) => react_1.Children.map(children, (child, childIndex) => {
            var _a;
            return (0, react_1.isValidElement)(child)
                ? (0, react_1.cloneElement)(child, Object.assign({ key: `${itemIndex}-${childIndex}`, name: (_a = child.props.name) === null || _a === void 0 ? void 0 : _a.replace('$', '' + itemIndex), labelCol,
                    wrapperCol }, itemProps))
                : child;
        })),
        react_1.default.createElement(ListAddField_1.default, { name: "$" })));
}
exports.default = (0, uniforms_1.connectField)(List);
