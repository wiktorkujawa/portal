import { useFormik } from 'formik';
import React from 'react'
import * as yup from 'yup';
import { IFormValues } from '../models/user';

const validationSchema = yup.object({
  name: yup
    .string()
    .required("Insert user name")
   ,
  password: yup
    .string()
    .required("Insert password"),
});

const initialValues: IFormValues = {
  name: '',
  password:''
};

export const SignUp = () => {

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  
  return (
    <div>
      <form data-testid="submit" autoComplete="off" onSubmit={formik.handleSubmit}>

        {/* BODY OF FORM TO IMPLEMENT! */}


      </form>
    </div>
  )
}

