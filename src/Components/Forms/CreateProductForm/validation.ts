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

   price: Yup.number()
   .min(1, 'Can not be zero')
   .positive('Must be positive')
   .required('Required'),
});