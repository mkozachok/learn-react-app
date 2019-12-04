import React from 'react';
import {Formik, Form, Field, FieldInputProps} from 'formik';
import * as Yup from 'yup';
import FormikInputField from '../../FormikFormControls/FormikInputField/FormikInputField';
import {FormBlock} from './styled';

interface IInput {
  field: FieldInputProps<string>,
}

export const CreateProductForm = () => (
  <FormBlock>
    <Formik
      initialValues={{
        product_name: '',
        product_image: '',
        product_details: '',
        product_price: '',
      }}
      validationSchema={Yup.object({})}
      onSubmit={values => {
        //should make dispatch here
        alert(values);
      }}
    >
      <Form>
        <Field
          name="productName"
          type="text"
          label="Name"
          placeholder="Product Name"
          autoComplete="off"
          component={FormikInputField}
        />
        <div>
          <Field name="productImage">
            {({
                field,
              }: IInput) => (
              <div style={{marginTop: '21px'}}>
                <label htmlFor={field.name}>Image</label>
                <div>
                  <input id={field.name} type="file" placeholder="Image" {...field} />
                </div>
              </div>
            )}
          </Field>
        </div>
        <div>
          <Field name="productDetails">
            {({
                field,
              }: any) => (
              <div style={{marginTop: '21px'}}>
                <label htmlFor={field.name}>Image</label>
                <div>
                  <textarea id={field.name} placeholder="Image"></textarea>
                </div>
              </div>
            )}
          </Field>
        </div>
        <Field
          name="productPrice"
          type="number"
          label="Price"
          placeholder="0"
          component={FormikInputField}
        />
      </Form>
    </Formik>
  </FormBlock>
)
