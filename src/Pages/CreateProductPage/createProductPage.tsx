import React from 'react';
import {CreateProductForm} from "../../components/forms";
import { AdminPageLayout } from '../../layouts/AdminPageLayout/AdminPageLayout';

export const createProductPage = () => {
  return(
    <AdminPageLayout>
      <h1>Create Product </h1>
      <CreateProductForm/>
    </AdminPageLayout>
  );
};
