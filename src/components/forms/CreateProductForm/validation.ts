import * as Yup from 'yup';

export const AddProductSchema = Yup.object().shape({
    title: Yup.string()
   .min(2, 'Too Short!')
   .max(40, 'Too Long!')
   .required('Required'),

   previewImage: Yup.string()
   .required('Required'),

   description: Yup.string()
   .min(2, 'Too Short!')
   .max(300, 'Too Long!')
   .required('Required'),

   costPrice: Yup.number()
   .positive('Must be positive')
   .min(1, 'Can not be zero')
   .required('Required'),

   price: Yup.number()
   .positive('Must be positive')
   .min(1, 'Can not be zero')
   .required('Required'),
});