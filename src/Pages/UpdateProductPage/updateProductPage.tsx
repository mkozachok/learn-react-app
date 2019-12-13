import React from "react";
import { UpdateProductForm } from "../../components/forms";
import { RouteComponentProps } from "react-router";

type TParams = {
  product_id: string;
};

export const updateProductPage = ({ match }: RouteComponentProps<TParams>) => {
  return (
    <div>
      <h1>Update Product </h1>
      <UpdateProductForm product_id={match.params.product_id} />
    </div>
  );
};
