import { FieldInputProps, FormikProps } from 'formik';

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
  form: FormikProps<ICreateProductFormValues>,
}