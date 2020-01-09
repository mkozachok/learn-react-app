import React from "react";
import { DatePicker, Form, Input, Select, InputNumber } from "antd";
import { FieldContainer } from './styled';
import { IAntdFieldProps } from "../../../types/input";

const FormItem = Form.Item;
const { Option } = Select;
const { TextArea, Group } = Input;

interface IInputChangeProps {
  target: any
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
        labelCol={{ span: 9 }}
        wrapperCol={{ span: 12 }}
        hasFeedback={
          (hasFeedback && submitted) || (hasFeedback && touched) ? true : false
        }
        help={submittedError || touchedError ? hasError :
          (
            field.name === "price" ?
              `The profit is ${formValues.price - formValues.costPrice}` : false
          )
        }
        validateStatus={submittedError || touchedError ? "error" : "success"}
      >
        <AntComponent
          {...field}
          {...props}
          parser={type === 'number' ? (value: any) => value.replace('-', '') : ''}
          onBlur={onBlur}
          onChange={type && type !== 'number' ? onInputChange : onChange}
        >
          {selectOptions &&
            selectOptions.map((name: any) => <Option key={name}>{name}</Option>)}
        </AntComponent>
      </FormItem>
    </FieldContainer>
  );
};

export const AntPhoneNumber = () => (
  <Group compact>
    <Select defaultValue="Zhejiang">
      <Option value="Zhejiang">Zhejiang</Option>
      <Option value="Jiangsu">Jiangsu</Option>
    </Select>
    {createAntField(Input)}
  </Group>
)

export const AntSelect = createAntField(Select);
export const AntDatePicker = createAntField(DatePicker);
export const AntInput = createAntField(Input);
export const AntInputNumber = createAntField(InputNumber);
export const AntTextArea = createAntField(TextArea);
