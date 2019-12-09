import React from 'react';
import {Formik, Form, Field, FieldInputProps} from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { AddProductSchema } from './validation';
import FormikInputField from '../../FormikFormControls/FormikInputField/FormikInputField';
import {FormBlock} from './styled';
import { addProductStart } from '../../../store/actions/productActions';
import { IProductState, IProduct } from '../../../types/product';

interface IInput {
  field: FieldInputProps<string>,
}

export const CreateProductForm = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state: IProductState) => state.productReducer.isLoading);
  const initialValues: IProduct = { 
    title: '', 
    description: '', 
    price: 0,
    previewImage: ''
   };

  return (
  <FormBlock>
    <Formik
      initialValues={ initialValues }
      validationSchema={AddProductSchema}
      onSubmit={values => {
        console.log(values);
        dispatch(addProductStart(values));
      }}
    >
      <Form>
        <Field
          name="title"
          type="text"
          label="Name"
          placeholder="Product Name"
          autoComplete="off"
          component={FormikInputField}
        />
        <div>
          <Field name="previewImage">
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
          <Field name="description">
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
          name="price"
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
