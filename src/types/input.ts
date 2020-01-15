import { FieldInputProps, FormikProps } from 'formik';
import { IProduct } from './product';

interface ICreateProductFormValues {
  product_name: string,
  product_image: string,
  product_details: string,
  product_price: string,
}

export interface IOtherProps {
  placeholder?: string,
  autocomplete?: string,
  label?: string,
}

export interface IInputField {
  field: FieldInputProps<string>,
  form: FormikProps<any>,
}

export interface IAntdFieldProps {
  value: any,
  field: FieldInputProps<string>,
  form: FormikProps<any>,
  hasFeedback: boolean,
  label: string,
  submitCount: number,
  type?: string,
  selectOptions?: any,
}

export interface IAntdUploadProps {
  value: any,
  field: FieldInputProps<string>,
  form: FormikProps<any>,
  hasFeedback: boolean,
  label: string,
  submitCount: number,
  info: any,
}
