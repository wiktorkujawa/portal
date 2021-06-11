import { useFormik } from "formik";
import React from "react";
import * as yup from "yup";
import { FormBox } from "../components/FormBox";
import { FormHeader } from "../components/FormHeader";
import { Label } from "../components/Label";
import { TextInput } from "../components/TextInput";
import { ISignUpValues } from "../models/user";
import lock from '../assets/lock-alt-open.svg';

const validationSchema = yup.object({
  name: yup.string().required("Insert user name"),
  password: yup.string().required("Insert password"),
});

const initialValues: ISignUpValues = {
  name: "",
  email:"",
  password: "",
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
    <FormBox>
      <form
        data-testid="submit"
        autoComplete="off"
        onSubmit={formik.handleSubmit}
      >

        <FormHeader>Sign Up</FormHeader>
        <Label>Full Name</Label>
        <div>
        <TextInput
          data-testid="input"
          className="mt-5"
          theme={!formik.errors.name}
          // placeholder="Full Name"
          id="name"
          name="name"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.name}
        />
        </div>
        <Label>Email</Label>
        <div>
        <TextInput
          data-testid="input"
          className="mt-5"
          theme={!formik.errors.name}
          // placeholder="Email"
          id="email"
          name="email"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        </div>
        <Label>Password</Label>
        <div>
        <TextInput
          data-testid="input"
          className="mt-5"
          theme={!formik.errors.password}
          // placeholder="Password"
          id="password"
          name="password"
          type="password"
          onChange={formik.handleChange}
          value={formik.values.password}
          lock={true}
        />
        </div>

        {/* BODY OF FORM TO IMPLEMENT! */}
      </form>
    </FormBox>
  );
};
