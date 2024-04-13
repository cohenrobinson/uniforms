"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const simpl_schema_1 = (0, tslib_1.__importDefault)(require("simpl-schema"));
const uniforms_1 = require("uniforms");
// Register custom property.
simpl_schema_1.default.extendOptions(['uniforms']);
uniforms_1.filterDOMProps.register('autoValue', 'blackbox', 'custom', 'decimal', 'defaultValue', 'exclusiveMax', 'exclusiveMin', 'max', 'maxCount', 'min', 'minCount', 'optional', 'regEx', 'trim', 'type');