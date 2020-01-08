import React from 'react';
import { Form, Field } from 'formik';
import { AntInput } from "../../formControls";
import { Button } from "antd";
import { IFormikProps } from '../../../types/formikProps';
import { SubmitContainer } from "../StyledFormikFields/StyledFormikFields";

const CreateOrderForm = ({ isSubmitting, isValid }: IFormikProps) => (
  <Form>
    <Field
      name="title"
      type="text"
      label="Name"
      placeholder="Product Name"
      autoComplete="off"
      component={AntInput}
      hasFeedback
    />
    <Field
      name="description"
      label="Description"
      type="text"
      placeholder="Description"
      min="10"
      component={AntInput}
      hasFeedback
    />
    <Field
      name="costPrice"
      label="Cost price"
      type="number"
      placeholder="0"
      component={AntInput}
      hasFeedback
    />
    <Field
      name="price"
      label="Price"
      type="number"
      placeholder="0"
      component={AntInput}
      hasFeedback
    />
    <Field
      name="previewImage"
      label="Image URL"
      type="text"
      placeholder="URL"
      component={AntInput}
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
  </Form>
);

export default CreateOrderForm;
