import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { Bridge, UnknownObject } from 'uniforms';
export default class SimpleSchemaBridge extends Bridge {
    schema: SimpleSchema;
    constructor({ schema }: {
        schema: SimpleSchema;
    });
    getError(name: string, error: any): any;
    getErrorMessage(name: string, error: any): any;
    getErrorMessages(error: any): any[];
    getField(name: string): any;
    getInitialValue(name: string): unknown;
    getProps(name: string): any;
    getSubfields(name?: string): string[];
    getType(name: string): any;
    getValidator(options?: UnknownObject): (model: any) => unknown;
}
//# sourceMappingURL=SimpleSchemaBridge.d.ts.map