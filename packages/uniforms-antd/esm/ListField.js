import { __rest } from "tslib";
import QuestionCircleOutlined from '@ant-design/icons/QuestionCircleOutlined';
import Tooltip from 'antd/lib/tooltip';
import classNames from 'classnames';
import React, { Children, cloneElement, isValidElement, } from 'react';
import { connectField, filterDOMProps } from 'uniforms';
import ListAddField from './ListAddField';
import ListItemField from './ListItemField';
const defaultStyle = {
    marginBottom: '5px',
    marginTop: '5px',
    padding: '10px',
};
const errorStyle = { borderColor: 'rgb(255, 85, 0)' };
function List(_a) {
    var { children = React.createElement(ListItemField, { name: "$" }), className, error, errorMessage, info, itemProps, label, labelCol, showInlineError, style = defaultStyle, value, wrapperCol } = _a, props = __rest(_a, ["children", "className", "error", "errorMessage", "info", "itemProps", "label", "labelCol", "showInlineError", "style", "value", "wrapperCol"]);
    const wrapperStyle = error
        ? style
            ? Object.assign(Object.assign({}, errorStyle), style) : errorStyle
        : style;
    return (React.createElement("div", Object.assign({}, filterDOMProps(props), { style: wrapperStyle, className: classNames([className, 'ant-list', 'ant-list-bordered']) }),
        !!label && (React.createElement("div", null,
            label,
            !!info && (React.createElement("span", null,
                "\u00A0",
                React.createElement(Tooltip, { title: info },
                    React.createElement(QuestionCircleOutlined, null)))))),
        !!(error && showInlineError) && React.createElement("div", null, errorMessage), value === null || value === void 0 ? void 0 :
        value.map((item, itemIndex) => Children.map(children, (child, childIndex) => {
            var _a;
            return isValidElement(child)
                ? cloneElement(child, Object.assign({ key: `${itemIndex}-${childIndex}`, name: (_a = child.props.name) === null || _a === void 0 ? void 0 : _a.replace('$', '' + itemIndex), labelCol,
                    wrapperCol }, itemProps))
                : child;
        })),
        React.createElement(ListAddField, { name: "$" })));
}
export default connectField(List);
