import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  password: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
});

export const ValidationSchemaExample = () => (
  <div>
    <div className="text-center pb-3 wow fadeInUp" data-wow-delay=".5s">
      <h1 className="section_title section_title-2">
        <b> Yash Technologies</b>
      </h1>
    </div>
    <Formik
      initialValues={{
        firstName: "",
        password: "",
        email: "",
      }}
      validationSchema={SignupSchema}
      onSubmit={(values) => {
        // same shape as initial values
        console.log(values);
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <Field
            name="firstName"
            className="form-control"
            placeholder="Enter Email / Username"
          />

          {errors.firstName && touched.firstName ? (
            <div>
              {" "}
              <br /> {errors.firstName}
            </div>
          ) : null}

          <Field
            name="password"
            className="form-control"
            placeholder="Enter password"
          />

          {errors.password && touched.password ? (
            <div>{errors.password}</div>
          ) : null}

          {/* <Field name="email" type="email" />
          {errors.email && touched.email ? <div>{errors.email}</div> : null} */}

          <button
            className="btn w-btn w-btn-blue"
            type="submit"
            id="login_button"
            name="submit"
          >
            Log In <i className="fas fa-sign-in-alt ms-1" />
          </button>
        </Form>
      )}
    </Formik>
  </div>
);
