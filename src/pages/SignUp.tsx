import { useFormik } from "formik";
import React from "react";
import * as yup from "yup";
import { FormBox } from "../components/FormBox";
import { FormHeader } from "../components/FormHeader";
import { Label } from "../components/Label";
import { TextInput } from "../components/TextInput";
import { ISignUpValues } from "../models/user";
import lock from '../assets/lock-alt-open.svg';
import logo from '../assets/logo.svg';
import arrow from '../assets/arrow.svg';
import { LoginButton } from "../components/LoginButton";
import { P } from "../components/P";
import { Link } from "../components/Link";
import { theme } from "../theme/theme";
import { Menu } from "../components/Menu";


const validationSchema = yup.object({
  name: yup.string().required("Insert user name"),
  email: yup.string().required("Insert email"),
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
    // <div className="formBox">
    //   <form action="">
    //     <h1 className="formHeader">Sign Up</h1>
    //     <label className="label" htmlFor="name">Full Name</label>

    //     <div>
    //      <input
    //       data-testid="input"
    //       className="textInput"
    //       id="name"
    //       name="name"
    //       type="text"
    //     />
    //     </div>

    //     <label className="label" htmlFor="email">Email</label>

    //     <div>
    //      <input
    //       data-testid="password"
    //       className="textInput"
    //       id="email"
    //       name="email"
    //       type="text"
    //     />
    //     </div>

    //     <label className="label" htmlFor="password">Password</label>

    //     <div>
    //      <input
    //       data-testid="password"
    //       className="textInput"
    //       id="password"
    //       name="password"
    //       type="password"
    //     />
    //     </div>
    //   </form>
    // </div>
    <>
    <Menu> 
      <img src={logo} alt="" />

      
      <Link style={{marginLeft:'44px'}} color={theme.header}> <img src={arrow} alt="" /> Back  </Link>

    </Menu>
    
    <FormBox>
      <form
        data-testid="submit"
        autoComplete="off"
        onSubmit={formik.handleSubmit}
      >

        <FormHeader>Sign Up</FormHeader>
        <Label>Full Name</Label>
        <TextInput
          data-testid="input"
          // theme={!formik.errors.name}
          // placeholder="Full Name"
          id="name"
          name="name"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.name}
        />
        <Label>Email</Label>
        <TextInput
          data-testid="input"
          // theme={!formik.errors.email}
          // placeholder="Email"
          id="email"
          name="email"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        <Label htmlFor="name">Password</Label>
        <div style={{position: 'relative', textAlign:'center'}}>
        <TextInput
          data-testid="input"
          // theme={!formik.errors.password}
          // placeholder="Password"
          id="password"
          name="password"
          type="password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        <img className="icon" src={lock} alt="" />
        </div>

        <LoginButton data-testid="click" type="submit">
              Create Account
        </LoginButton>

        <P>Do you have an account already? Log in <Link href="/">here</Link>.</P>
      
        <P style={{width:'421px'}}>By clicking Create Account you agree for <Link href="/">Terms</Link> 
        <br />
         and have read our <Link href="/">Privacy statment</Link></P>

      </form>
    </FormBox>
    </>
  );
};
