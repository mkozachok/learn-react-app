import React from "react";
import { DatePicker, Form, Input, Select, InputNumber, Checkbox } from "antd";
import { FieldContainer } from "./styled";
import { IAntdFieldProps } from "../../../types/input";

const FormItem = Form.Item;
const { Option } = Select;
const { TextArea } = Input;

interface IInputChangeProps {
  target: any;
}

const createAntField = (AntComponent: any) => ({
  field,
  form,
  hasFeedback,
  label,
  selectOptions,
  submitCount,
  type,
  ...props
}: IAntdFieldProps) => {
  const touched = form.touched[field.name];
  const submitted = submitCount > 0;
  const hasError = form.errors[field.name];
  const submittedError = hasError && submitted;
  const touchedError = hasError && touched;
  const onInputChange = ({ target: { value } }: IInputChangeProps) =>
    form.setFieldValue(field.name, value);
  const onChange = (value: any) => form.setFieldValue(field.name, value);
  const onBlur = () => form.setFieldTouched(field.name, true);
  const formValues = form.values;

  return (
    <FieldContainer>
      <FormItem
        label={label}
        labelCol={label ? { span: 9 } : { span: 0 }}
        wrapperCol={label ? { span: 12 } : {}}
        hasFeedback={
          (hasFeedback && submitted) || (hasFeedback && touched) ? true : false
        }
        help={
          submittedError || touchedError
            ? hasError
            : field.name === "price"
            ? `The profit is ${formValues.price - formValues.costPrice}`
            : false
        }
        validateStatus={submittedError || touchedError ? "error" : "success"}
      >
        <AntComponent
          {...field}
          {...props}
          parser={
            type === "number" ? (value: any) => value.replace("-", "") : ""
          }
          onBlur={onBlur}
          onChange={
            (type && type !== "number") || "checkbox" ? onInputChange : onChange
          }
        >
          {selectOptions &&
            selectOptions.map((name: any) => (
              <Option key={name}>{name}</Option>
            ))}
        </AntComponent>
      </FormItem>
    </FieldContainer>
  );
};

const createAntCheckbox = () => ({
  field,
  form,
  label,
  ...props
}: IAntdFieldProps) => {
  const onChange = () => form.setFieldValue(field.name, !field.value);

  return (
    <Checkbox {...field} {...props} onChange={onChange}>
      {label}
    </Checkbox>
  );
};

export const AntSelect = createAntField(Select);
export const AntCheckbox = createAntCheckbox();
export const AntDatePicker = createAntField(DatePicker);
export const AntInput = createAntField(Input);
export const AntPassword = createAntField(Input.Password);
export const AntInputNumber = createAntField(InputNumber);
export const AntTextArea = createAntField(TextArea);
