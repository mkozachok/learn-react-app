import React from "react";
import { Form, Field } from "formik";
import {
  AntInput,
  AntInputNumber,
  AntTextArea
} from "../../../components/formControls";
import { SubmitContainer } from "./styled";
import { Button } from "antd";

interface IFormikProps {
  isSubmitting: boolean;
  isValid: boolean;
}

export const ProductForm = ({ isSubmitting, isValid }: IFormikProps) => (
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
        component={AntTextArea}
        hasFeedback
      />
      <Field
        name="costPrice"
        label="Cost price"
        type="number"
        placeholder="0"
        component={AntInputNumber}
        hasFeedback
      />
      <Field
        name="price"
        label="Price"
        type="number"
        placeholder="0"
        component={AntInputNumber}
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
