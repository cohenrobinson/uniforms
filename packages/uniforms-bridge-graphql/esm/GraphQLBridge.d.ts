import { GraphQLInputField, GraphQLType } from 'graphql/type/definition';
import { Bridge, UnknownObject } from 'uniforms';
export default class GraphQLBridge extends Bridge {
    extras: UnknownObject;
    provideDefaultLabelFromFieldName: boolean;
    schema: GraphQLType;
    validator: (model: UnknownObject) => unknown;
    constructor({ extras, provideDefaultLabelFromFieldName, schema, validator, }: {
        extras?: UnknownObject;
        provideDefaultLabelFromFieldName?: boolean;
        schema: GraphQLType;
        validator: (model: UnknownObject) => unknown;
    });
    getError(name: string, error: any): any;
    getErrorMessage(name: string, error: any): any;
    getErrorMessages(error: any): any[];
    getField(name: string): GraphQLInputField;
    getInitialValue(name: string): unknown;
    getProps(nameNormal: string): any;
    getSubfields(name?: string): string[];
    getType(name: string): ArrayConstructor | import("graphql/type/definition").GraphQLScalarType | import("graphql/type/definition").GraphQLEnumType | ObjectConstructor | BooleanConstructor | NumberConstructor | StringConstructor;
    getValidator(): (model: UnknownObject) => unknown;
}
//# sourceMappingURL=GraphQLBridge.d.ts.map