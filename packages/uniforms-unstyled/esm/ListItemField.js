import React from 'react';
import { connectField } from 'uniforms';
import AutoField from './AutoField';
import ListDelField from './ListDelField';
function ListItem({ children = React.createElement(AutoField, { label: null, name: "" }), }) {
    return (React.createElement("div", null,
        React.createElement(ListDelField, { name: "" }),
        children));
}
export default connectField(ListItem, {
    initialValue: false,
});
