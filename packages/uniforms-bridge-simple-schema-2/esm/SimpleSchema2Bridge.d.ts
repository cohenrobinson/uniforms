import SimpleSchema from 'simpl-schema';
import { Bridge, UnknownObject } from 'uniforms';
export default class SimpleSchema2Bridge extends Bridge {
    schema: SimpleSchema;
    constructor({ schema }: {
        schema: SimpleSchema;
    });
    getError(name: string, error: any): any;
    getErrorMessage(name: string, error: any): string;
    getErrorMessages(error: any): any[];
    getField(name: string): any;
    getInitialValue(name: string): unknown;
    getProps(name: string): any;
    getSubfields(name?: string): string[];
    getType(name: string): any;
    getValidator(options?: UnknownObject): (model: UnknownObject) => unknown;
}
//# sourceMappingURL=SimpleSchema2Bridge.d.ts.map