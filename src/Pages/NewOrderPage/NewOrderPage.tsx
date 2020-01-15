import React from 'react';
import { AdminPageLayout } from '../../layouts/AdminPageLayout/AdminPageLayout';
import { NewOrder } from '../../components/NewOrder/NewOrder';

export const NewOrderPage = () => (
  <AdminPageLayout>
    <NewOrder />
  </AdminPageLayout>
)
