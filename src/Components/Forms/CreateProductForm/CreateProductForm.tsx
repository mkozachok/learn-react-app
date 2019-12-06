import React from 'react';
import {Formik, Form, Field, FieldInputProps} from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import FormikInputField from '../../FormikFormControls/FormikInputField/FormikInputField';
import {FormBlock} from './styled';
import { addProductStart } from '../../../store/actions/productActions';
import { IProductState, IProduct } from '../../../types/product';

interface IInput {
  field: FieldInputProps<string>,
}

const AddProductSchema = Yup.object().shape({
  product_name: Yup.string()
    .min(2, 'Too Short!')
    .max(40, 'Too Long!')
    .required('Required'),

    product_image: Yup.string()
    .required('Required'),

    product_details: Yup.string()
    .min(2, 'Too Short!')
    .max(300, 'Too Long!')
    .required('Required'),

    product_price: Yup.number()
    .min(1, 'Can not be zero')
    .positive('Must be positive')
    .required('Required'),
});

export const CreateProductForm = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state: IProductState) => state.productReducer.isLoading);

  return (
  <FormBlock>
    <Formik
      initialValues={{
        product_name: '',
        product_image: '',
        product_details: '',
        product_price: '',
      }}
      validationSchema={AddProductSchema}
      onSubmit={values => {
        let newProduct: IProduct = {
          title: values.product_name, 
          description: values.product_details, 
          price: Number(values.product_price), 
          previewImage: values.product_image
        };

        dispatch(addProductStart(newProduct));
      }}
    >
      <Form>
        <Field
          name="product_name"
          type="text"
          label="Name"
          placeholder="Product Name"
          autoComplete="off"
          component={FormikInputField}
        />
        <div>
          <Field name="product_image">
            {({
                field,
              }: IInput) => (
              <div style={{marginTop: '21px'}}>
                <label htmlFor={field.name}>Image</label>
                <div>
                  <input id={field.name} type="file" accept="image/*" placeholder="Image" {...field} />
                </div>
              </div>
            )}
          </Field>
        </div>
        <div>
          <Field name="product_details">
            {({
                field,
              }: any) => (
              <div style={{marginTop: '21px'}}>
                <label htmlFor={field.name}>Details</label>
                <div>
                  <textarea id={field.name} placeholder="Details" {...field}></textarea>
                </div>
              </div>
            )}
          </Field>
        </div>
        <Field
          name="product_price"
          type="number"
          label="Price"
          placeholder="0"
          component={FormikInputField}
        />
        <button type="submit" disabled={isLoading}>Submit</button>
      </Form>
    </Formik>
  </FormBlock>
  )
}
