import React from 'react';
import InputField from '../../Components/Input/Input';
import { Formik, Form, Field, FieldInputProps } from 'formik';
import * as Yup from 'yup';

interface IInput {
  field: FieldInputProps<string>,
}

export const CreateProductForm = () => (
<div style={ { display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" } }>
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
          name="product_name"
          type="text"
          label="Name"
          placeholder="Product Name"
          autoComplete="off"
          component={ InputField }
        />
        <div>
          <Field name="product_image">
            {({
              field,
            }: IInput) => (
              <div style={ { marginTop: '21px' } }>
                <label htmlFor={ field.name }>Image</label>
                <div>
                  <input id={ field.name } type="file" placeholder="Image" {...field} />
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
                <div style={ { marginTop: '21px' } }>
                  <label htmlFor={ field.name }>Image</label>
                  <div>
                    <textarea id={ field.name } placeholder="Image"></textarea>
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
          component={ InputField }
        />
      </Form>
    </Formik>
  </div>
)
