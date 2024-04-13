// @ts-ignore -- This package _is_ typed, but not in all environments.
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { Match } from 'meteor/check';
import { filterDOMProps } from 'uniforms';
// Register custom property.
SimpleSchema.extendOptions({
    uniforms: Match.Optional(Match.OneOf(String, Function, Match.ObjectIncluding({
        component: Match.Optional(Match.OneOf(String, Function)),
    }))),
});
filterDOMProps.register('autoValue', 'blackbox', 'custom', 'decimal', 'defaultValue', 'exclusiveMax', 'exclusiveMin', 'max', 'maxCount', 'min', 'minCount', 'optional', 'regEx', 'trim', 'type');
