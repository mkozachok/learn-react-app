import React from "react";
import { Formik } from "formik";
import { useDispatch } from "react-redux";
import { AddProductSchema } from "./validation";
import { productAddSuccess } from "../../../Components/Notification/Notification";
import { FormBlock } from "../ProductForm/styled";
import ProductForm from "../ProductForm";
import { addProductStart } from "../../../store/actions/productActions";
import { IProduct } from "../../../types/product";

export const CreateProductForm = () => {
  const dispatch = useDispatch();
  const initialValues: IProduct = {
    title: "",
    description: "",
    price: 0,
    previewImage: ""
  };

  return (
    <FormBlock>
      <Formik
        initialValues={initialValues}
        validationSchema={AddProductSchema}
        render={ProductForm}
        onSubmit={(values, actions) => {
          dispatch(addProductStart(values));
          productAddSuccess();
          actions.setSubmitting(false);
        }}
      ></Formik>
    </FormBlock>
  );
};
