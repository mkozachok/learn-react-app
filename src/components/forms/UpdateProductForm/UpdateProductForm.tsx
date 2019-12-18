import React, { useEffect } from "react";
import { Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { AddProductSchema } from "../CreateProductForm/validation";
import { FormBlock } from "../ProductForm/styled";
import { ProductForm } from "../ProductForm";
import { IProduct, IProductState } from "../../../types/product";
import { getProductByIdStart, updateProductStart } from "../../../store/actions/productActions";
import { Spin } from "antd";
import { SpinBlock } from "./styled";

type TParams = {
  product_id: string;
};

export const UpdateProductForm = (props: TParams) => {
  const dispatch = useDispatch();
  const product = useSelector(
    (state: IProductState) => state.productReducer.currentProduct
  );
  const isLoading = useSelector(
    (state: IProductState) => state.productReducer.isLoading
  );
  const initialValues: IProduct = product;

  useEffect(() => {
      dispatch(getProductByIdStart(props.product_id));
  }, [dispatch, props.product_id]);

  if (isLoading) {
    return (
      <SpinBlock>
        <Spin size="large" />
      </SpinBlock>
    );
  }

  return product ? (
    <FormBlock>
      <Formik
        enableReinitialize={true}
        initialValues={initialValues}
        validationSchema={AddProductSchema}
        onSubmit={(values, actions) => {
          dispatch(updateProductStart(values));
          actions.setSubmitting(false);
        }}
      >
        {({isSubmitting, isValid}) => (
          <ProductForm isSubmitting={isSubmitting} isValid={isValid}/>
        )}
      </Formik>
    </FormBlock>
  ) : null;
};
