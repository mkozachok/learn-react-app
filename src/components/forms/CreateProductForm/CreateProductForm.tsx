import React from "react";
import { Formik } from "formik";
import { useDispatch } from "react-redux";
import { AddProductSchema } from "./validation";
import { FormBlock } from "../ProductForm/styled";
import { ProductForm } from "../ProductForm";
import { addProductStart } from "../../../store/actions/productActions";
import { IProduct } from "../../../types/product";

export const CreateProductForm = () => {
  const dispatch = useDispatch();
  const initialValues: IProduct = {
    title: "",
    description: "",
    costPrice: 0,
    price: 0,
    previewImage: ""
  };

  return (
    <FormBlock>
      <Formik
        initialValues={initialValues}
        validationSchema={AddProductSchema}
        onSubmit={(values, actions) => {
          dispatch(addProductStart(values));
          actions.setSubmitting(false);
        }}
      >
        {({isSubmitting, isValid}) => (
          <ProductForm isSubmitting={isSubmitting} isValid={isValid}/>
        )}
      </Formik>
    </FormBlock>
  );
};
