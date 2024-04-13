import { Bridge, UnknownObject } from 'uniforms';
declare type FieldError = {
    instancePath?: string;
    /** Provided by Ajv < 8 */
    dataPath?: string;
    params?: Record<string, unknown> & {
        missingProperty?: string;
    };
    message?: string;
};
declare type ValidatorResult = {
    details: FieldError[];
};
export default class JSONSchemaBridge extends Bridge {
    provideDefaultLabelFromFieldName: boolean;
    schema: Record<string, any>;
    validator: (model: UnknownObject) => ValidatorResult | null | undefined;
    _compiledSchema: Record<string, any>;
    constructor({ provideDefaultLabelFromFieldName, schema, validator, }: {
        provideDefaultLabelFromFieldName?: boolean;
        schema: Record<string, any>;
        validator: (model: UnknownObject) => ValidatorResult | null | undefined;
    });
    getError(name: string, error: unknown): FieldError | null;
    getErrorMessage(name: string, error: unknown): string;
    getErrorMessages(error: unknown): string[];
    getField(name: string): Record<string, any>;
    getInitialValue(name: string): any;
    getProps(name: string): any;
    getSubfields(name?: string): string[];
    getType(name: string): any;
    getValidator(): (model: UnknownObject) => ValidatorResult | null | undefined;
}
export {};
//# sourceMappingURL=JSONSchemaBridge.d.ts.map