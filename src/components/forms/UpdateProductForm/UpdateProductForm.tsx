import React, { useEffect } from "react";
import { Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { AddProductSchema } from "../CreateProductForm/validation";
import { FormBlock } from "../ProductForm/styled";
import { ProductForm } from "../ProductForm";
import { IProduct, IProductState } from "../../../types/product";
import { getProductByIdStart } from "../../../store/actions/productActions";
import { Spin } from "antd";
import { SpinBlock } from "./styled";
import { productActionTypes } from '../../../store/actionTypes/productActionTypes';

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
        render={ProductForm}
        onSubmit={(values, actions) => {
          dispatch({ type: productActionTypes.UPDATE_PRODUCT__START });
          actions.setSubmitting(false);
        }}
      >
        )}
      </Formik>
    </FormBlock>
  ) : null;
};
