import React from 'react';
import { Form, Field, Formik } from 'formik';
import { AntInput, AntPhoneNumber } from "../../formControls";
import { Button } from "antd";
import { SubmitContainer } from "../StyledFormikFields/StyledFormikFields";
import { FormBlock } from '../StyledFormikFields/StyledFormikFields';
import * as Yup from 'yup';

const CreateOrderForm = () => {
  const initialValues = {
    firstName: "",
    middleName: "",
    lastName: "",
    phoneNumber: "",

  };

  const validationSchema = Yup.object().shape({
    title: Yup.string()
      .min(2, 'Too Short!')
      .max(40, 'Too Long!')
      .required('Required'),

    previewImage: Yup.string()
      .required('Required'),

    description: Yup.string()
      .min(2, 'Too Short!')
      .max(300, 'Too Long!')
      .required('Required'),

    costPrice: Yup.number()
      .positive('Must be positive')
      .min(1, 'Can not be zero')
      .required('Required'),

    price: Yup.number()
      .positive('Must be positive')
      .min(1, 'Can not be zero')
      .required('Required'),
  });

  const onSubmit = () => {
    alert("Submitted");
  };

  return (
    <FormBlock>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ isSubmitting, isValid }) => (
          <Form>
            <Field
              name="firstName"
              type="text"
              label="First name"
              placeholder="Deacon"
              autoComplete="off"
              component={AntInput}
              hasFeedback
            />
            <Field
              name="middleName"
              label="Middle name"
              type="text"
              placeholder="Saint"
              min="10"
              component={AntInput}
              hasFeedback
            />
            <Field
              name="lastName"
              label="Last name"
              type="text"
              placeholder="John"
              min="10"
              component={AntInput}
              hasFeedback
            />
            <Field
              name="lastName"
              label="Last name"
              type="text"
              placeholder="John"
              min="10"
              component={AntPhoneNumber}
              hasFeedback
            />
            <SubmitContainer>
              <Button
                htmlType="submit"
                loading={isSubmitting}
                disabled={!isValid || isSubmitting}
              >
                Submit
            </Button>
            </SubmitContainer>
          </Form>)}
      </Formik>
    </FormBlock>
  )
}

export default CreateOrderForm;
