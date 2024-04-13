import { Bridge, UnknownObject } from 'uniforms';
import { ZodError, ZodObject, ZodRawShape, ZodType } from 'zod';
/** Option type used in SelectField or RadioField */
declare type Option<Value> = {
    disabled?: boolean;
    label?: string;
    key?: string;
    value: Value;
};
export default class ZodBridge<T extends ZodRawShape> extends Bridge {
    schema: ZodObject<T>;
    provideDefaultLabelFromFieldName: boolean;
    constructor({ schema, provideDefaultLabelFromFieldName, }: {
        schema: ZodObject<T>;
        provideDefaultLabelFromFieldName?: boolean;
    });
    getError(name: string, error: unknown): import("zod").ZodIssue | null;
    getErrorMessage(name: string, error: unknown): string;
    getErrorMessages(error: unknown): string[];
    getField(name: string): ZodType<any, import("zod").ZodTypeDef, any>;
    getInitialValue(name: string): unknown;
    getProps(name: string): UnknownObject & {
        options?: Option<unknown>[] | undefined;
    };
    getSubfields(name?: string): string[];
    getType(name: string): ObjectConstructor | ArrayConstructor | BooleanConstructor | DateConstructor | StringConstructor | NumberConstructor;
    getValidator(): (model: UnknownObject) => ZodError<{ [k_1 in keyof import("zod").objectUtil.addQuestionMarks<{ [k in keyof T]: T[k]["_input"]; }>]: import("zod").objectUtil.addQuestionMarks<{ [k in keyof T]: T[k]["_input"]; }>[k_1]; }> | null;
}
export {};
//# sourceMappingURL=ZodBridge.d.ts.map