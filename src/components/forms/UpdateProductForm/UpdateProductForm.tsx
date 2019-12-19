import React, { useEffect } from "react";
import { Formik } from "formik";
import { Spin } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { IProductState } from "../../../types/product";
import { getProductByIdStart, updateProductStart } from "../../../store/actions/productActions";
import { AddProductSchema } from "../CreateProductForm/validation";
import { FormBlock } from "../ProductForm/styled";
import { ProductForm } from "../ProductForm";
import { SpinBlock } from "./styled";

type TParams = {
  product_id: string;
};

export const UpdateProductForm = (props: TParams) => {
  const dispatch = useDispatch();
  useEffect(() => {
      dispatch(getProductByIdStart(props.product_id));
  }, [dispatch, props.product_id]);
  
  useEffect(() => {
    return () => console.log('end')
}, []);

  const {currentProduct: product} = useSelector(
    (state: IProductState) => state.productReducer
  );

  // TODO: investigate problem with update state for unmounted component
  // if (isLoading) {
  //   return (
  //     <SpinBlock>
  //       <Spin size="large" />
  //     </SpinBlock>
  //   );
  // }

  return product ? (
    <FormBlock>
      <Formik
        key={product.title}
        initialValues={product}
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
  ) : 
    <SpinBlock>
      <Spin size="large" />
    </SpinBlock>
};
