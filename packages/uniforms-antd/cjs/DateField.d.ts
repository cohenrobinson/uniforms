import DatePicker, { DatePickerProps } from 'antd/lib/date-picker';
import moment, { Moment } from 'moment';
import { Ref } from 'react';
import { FieldProps } from 'uniforms';
export declare type DateFieldProps = FieldProps<Date | Moment, DatePickerProps, {
    inputRef?: Ref<typeof DatePicker>;
    showTime?: boolean;
}>;
declare const _default: import("uniforms").ConnectedField<DateFieldProps, Date | moment.Moment | undefined>;
export default _default;
//# sourceMappingURL=DateField.d.ts.map