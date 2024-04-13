"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// @ts-ignore -- This package _is_ typed, but not in all environments.
const aldeed_simple_schema_1 = require("meteor/aldeed:simple-schema");
const check_1 = require("meteor/check");
const uniforms_1 = require("uniforms");
// Register custom property.
aldeed_simple_schema_1.SimpleSchema.extendOptions({
    uniforms: check_1.Match.Optional(check_1.Match.OneOf(String, Function, check_1.Match.ObjectIncluding({
        component: check_1.Match.Optional(check_1.Match.OneOf(String, Function)),
    }))),
});
uniforms_1.filterDOMProps.register('autoValue', 'blackbox', 'custom', 'decimal', 'defaultValue', 'exclusiveMax', 'exclusiveMin', 'max', 'maxCount', 'min', 'minCount', 'optional', 'regEx', 'trim', 'type');
