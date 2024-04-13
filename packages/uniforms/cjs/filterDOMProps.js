"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filterDOMProps = void 0;
const registered = [];
const registeredCache = new Set();
exports.filterDOMProps = Object.assign(function filterDOMProps(props) {
    const filteredProps = Object.assign({}, props);
    for (const prop in props) {
        if (registeredCache.has(prop)) {
            delete filteredProps[prop];
        }
    }
    return filteredProps;
}, {
    register(...props) {
        props.forEach(prop => {
            if (!registeredCache.has(prop)) {
                registered.push(prop);
                registeredCache.add(prop);
            }
        });
        registered.sort();
    },
    registered: registered,
});
exports.filterDOMProps.register(
// These props are provided by useField directly.
'changed', 'error', 'errorMessage', 'field', 'fieldType', 'fields', 'name', 'onChange', 'value', 
// These props are provided by useField through context.state.
'disabled', 'showInlineError', 
// This is used by AutoField.
'component');
