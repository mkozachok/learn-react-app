import React from "react";
import { Form, Field } from "formik";
import {
  AntInput,
  AntInputNumber,
  AntTextArea
} from "../../../Components/CreateAntFields/CreateAntFields";
import { SubmitContainer } from "./styled";
import { Button } from "antd";

interface IFormikProps {
  isSubmitting: boolean;
  isValid: boolean;
}

export default ({ isSubmitting, isValid }: IFormikProps) => {
  return (
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
      {/* <Field
          name="previewImage"
          label="Upload image"
          component={AntUpload}
          /> */}
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
          disabled={!isValid}
        >
          Submit
        </Button>
      </SubmitContainer>
    </Form>
  );
};
