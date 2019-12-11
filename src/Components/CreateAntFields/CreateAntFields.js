import React from "react";
import { DatePicker, Form, Input, Select, InputNumber } from "antd";
import { FieldContainer } from './styled';

const FormItem = Form.Item;
const { Option } = Select;
const { TextArea } = Input;

const CreateAntField = AntComponent => ({
  field,
  form,
  hasFeedback,
  label,
  selectOptions,
  submitCount,
  type,
  ...props
}) => {
  const touched = form.touched[field.name];
  const submitted = submitCount > 0;
  const hasError = form.errors[field.name];
  const submittedError = hasError && submitted;
  const touchedError = hasError && touched;
  const onInputChange = ({ target: { value } }) =>
    form.setFieldValue(field.name, value);
  const onChange = value => form.setFieldValue(field.name, value);
  const onBlur = () => form.setFieldTouched(field.name, true);

  return (
    <FieldContainer>
      <FormItem
        label={label}
        labelCol= {{ span: 9 }}
        wrapperCol= {{ span: 12 }}
        hasFeedback={
          (hasFeedback && submitted) || (hasFeedback && touched) ? true : false
        }
        help={submittedError || touchedError ? hasError : false}
        validateStatus={submittedError || touchedError ? "error" : "success"}
      >
        <AntComponent
          {...field}
          {...props}
          parser={type === 'number' ? value => value.replace('-', ''): ''}
          onBlur={onBlur}
          onChange={type && type !== 'number' ? onInputChange : onChange}
        >
          {selectOptions &&
            selectOptions.map(name => <Option key={name}>{name}</Option>)}
        </AntComponent>
      </FormItem>
    </FieldContainer>
  );
};

export const AntSelect = CreateAntField(Select);
export const AntDatePicker = CreateAntField(DatePicker);
export const AntInput = CreateAntField(Input);
export const AntInputNumber = CreateAntField(InputNumber);
export const AntTextArea = CreateAntField(TextArea);
