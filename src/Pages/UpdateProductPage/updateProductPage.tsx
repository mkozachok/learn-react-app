import React from "react";
import { UpdateProductForm } from "../../components/forms";
import { RouteComponentProps } from "react-router";
import { AdminPageLayout } from '../../layouts/AdminPageLayout/AdminPageLayout';

type TParams = {
  product_id: string;
};

export const updateProductPage = ({ match }: RouteComponentProps<TParams>) => (
  <AdminPageLayout>
    <h1>Update Product </h1>
    <UpdateProductForm product_id={match.params.product_id} />
  </AdminPageLayout>
);
