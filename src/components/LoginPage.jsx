import React, { useState, useRef } from "react";
import axios from "axios";
import ReactCaptchaCode from "react-captcha-code";
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import {useNavigate} from 'react-router-dom'

const LoginPage = ({ setLoginUser }) => {
  const [user, setUser] = useState({
    email_id: "",
    password: "",
  });


  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => {

    setPasswordShown(!passwordShown);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };


  const SignupSchema = Yup.object().shape({
    email_id: Yup.string().email('Invalid email').required('Email field is required'),
    password: Yup.string()
      .min(3, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Password field is required'),
    captcha1: Yup.string()
      .min(5, 'Too Short!')
      // .max(6, 'Invalid Captcha!')
      .required('Captcha Required'),
  });

  const [captchaCode, setCaptchaCode] = useState("");
  const captchaRef = useRef(null);
  const navigate = useNavigate();

  const handleRefresh = () => {
    captchaRef.current.refresh();
  };

  const handleCaptchaChange = (value) => {
    setCaptchaCode(value);
  };

  const login = () => {
    axios({
      method: "POST",
      url: "http://localhost:5000/login",
      data: user,
    }).then((res) => {
      if (res.body.status === "success") {
        alert("Admin added successfully");
      }
    });
  };


  return (
    <div>

      {/* <ValidationSchemaExample/> */}
      <Formik
        initialValues={{
          email_id: '',
          password: '',
          captcha1: '',
        }}
        validationSchema={SignupSchema}
        onSubmit={values => {
          // same shape as initial values
          console.log(values);
        }}
      >
        {({ errors, touched }) => (
          <Form >

            <div className="services__shape-2">
              <img className="services-2-circle" src="assets/images/sarvagya-left-bg.png" alt="img" />
              <img className="services-2-circle-2" src="assets/images/sarvagya-left-bg-2.png" alt="img" />
            </div>
            <div className="about__shape-2">
              <img className="about-2-circle" src="assets/images/sarvagya-right-bg.png" alt="img" />
              <img className="about-2-circle-2" src="assets/images/sarvagya-right-bg-2.png" alt="img" />
            </div>
            <div class="text-center sarvagya-logo"></div>

            <div className="container-md">
              <div className="row body-row-height d-flex justify-content-center">
                <div className="col-12 align-self-center">
                  <div className="text-center pb-3 wow fadeInUp" data-wow-delay=".5s">
                    <h1 className="section_title section_title-2"><b> YT Dashboard</b></h1>
                  </div>
                  <div className="card-body">
                    <div className="row">
                      <div className="col-xl-5 col-lg-6 col-md-8 mx-auto">
                        <div className="card">
                          <div className="card-body px-4">
                            <h2 className="h2 text-center">Sign in</h2>
                            <div className="form-group mb-4">
                              <div className="input-group">
                                {/* <input type="email" className="form-control" id="email" name="email_id" value={user.email_id} onChange={handleChange} autoComplete="off" placeholder="Enter Email / Username" maxLength={40} required /> */}
                                <Field name="email_id" className="form-control" placeholder="Enter Email / Username" value={user.email_id} onChange={handleChange}/>
                                <div className="input-group-append">
                                  <div className="input-group-text" style={{ backgroundImage: 'linear-gradient(95deg, #525252 10%, #01377ea3 50%)', padding: '10px 10px', height: 40, border: '1px solid #cfcfcf' }}>
                                    <i className="fas fa-user-cog text-white" htmlFor="email" style={{ right: 0, left: 'auto', width: 16 }} />

                                  </div>
                                  <div className="req" style={{ color: "red", marginTop: "-15px", position: "absolute", left: "105px" }} >
                                    {errors.email_id && touched.email_id ? (
                                      <div> <br /> {errors.email_id}</div>
                                    ) : null} </div>
                                </div>
                                <div className="input-group-append">
                                  {/* <div className="input-group-text" style={{backgroundImage: 'linear-gradient(95deg, #525252 10%, #01377ea3 50%)', padding: '10px 10px', height: 40, border: '1px solid #cfcfcf'}}>
                          <i className="fas fa-user-cog text-white" htmlFor="email" style={{right: 0, left: 'auto', width: 16}} />
                        </div> */}
                                </div>
                              </div>
                            </div>
                            <div className="form-group mb-4 eyediv">
                              <div className="input-group">
                                {/* <input type="password" className="form-control" name="password" value={user.password} onChange={handleChange} id="userpassword" placeholder="Enter password" autoComplete="off" required /> */}
                                <Field name="password" className="form-control" type={passwordShown ? "text" : "password"} placeholder="Enter password" value={user.password} onChange={handleChange} />
                                <div className="input-group-append">
                                  <div className="input-group-text" style={{ backgroundImage: 'linear-gradient(95deg, #525252 10%, #01377ea3 50%)', padding: '10px 17px', height: 40, border: '1px solid #cfcfcf' }}>
                                    <span id="lock" className={passwordShown ? ('fas fa-eye') : ('fas fa-eye-slash text-white')}  style={{ right: 0, left: 'auto', width: 35 }} onClick={togglePassword} />
                                  </div>  <div className="req" style={{ color: "red", marginTop: "5px", position: "absolute", left: "100px" }}>
                                    {errors.password && touched.password ? (
                                      <div>{errors.password}</div>
                                      /* "fas fa-eye-slash text-white" */
                                    ) : null} </div>
                                </div>

                                <div className="input-group-append">
                                  {/* <div className="input-group-text" style={{backgroundImage: 'linear-gradient(95deg, #525252 10%, #01377ea3 50%)', padding: '10px 17px', height: 40, border: '1px solid #cfcfcf'}}>
                          <span id="lock" onclick="changeLock()" className="fas fa-eye-slash text-white" style={{right: 0, left: 'auto', width: 35}} />
                        </div> */}
                                </div>

                              </div>
                              {/* <p className="error_msg text-center" id="psswordErrorMsg" /> */}
                            </div>

                            <div className="input-group">
                              <div className="input-group-prepend" style={{ padding: '0px!important' }}>
                                <span id="captchaText" style={{ fontFamily: 'Lato' }}> <div style={{ width: "50%" }}><ReactCaptchaCode ref={captchaRef} charNum={5} onChange={handleCaptchaChange} /></div></span>
                                <input type="hidden" id="user_captcha_input" name="user_captcha_input" />
                              </div>
                              <Field name="captcha1" type="text" className="form-control captchaText" id="user_captcha_input" placeholder="Enter captcha" />

                              <div className="input-group-append" onClick={handleRefresh}>

                                <div className="input-group-text" style={{ backgroundImage: 'linear-gradient(95deg, #525252 10%, #01377ea3 50%)', padding: '10px 10px', height: 40, border: '1px solid #cfcfcf', cursor: 'pointer' }}>

                                  <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="redo" id="reload_captcha" className="svg-inline--fa fa-redo fa-w-16 text-white" role="img" xmlns viewBox="0 0 512 512" style={{ right: 0, left: 'auto', width: 15 }}>


                                    <path fill="currentColor" d="M500.33 0h-47.41a12 12 0 0 0-12 12.57l4 82.76A247.42 247.42 0 0 0 256 8C119.34 8 7.9 119.53 8 256.19 8.1 393.07 119.1 504 256 504a247.1 247.1 0 0 0 166.18-63.91 12 12 0 0 0 .48-17.43l-34-34a12 12 0 0 0-16.38-.55A176 176 0 1 1 402.1 157.8l-101.53-4.87a12 12 0 0 0-12.57 12v47.41a12 12 0 0 0 12 12h200.33a12 12 0 0 0 12-12V12a12 12 0 0 0-12-12z">
                                    </path>
                                  </svg>

                                </div>
                              </div>


                            </div>
                            <div className="req" style={{ color: "red", marginTop: "5px", position: "absolute", left: "150px" }}>

                              {errors.captcha1 && touched.captcha1 ? (
                                <div>{errors.captcha1}</div>
                              ) : null} </div>
                            <p className="error_msg text-center" id="captchaErrorMsg" />
                            <div className="form-group mb-0 row">
                              <div className="col-12">
                                <div className="mx-auto text-center mt-3">
                                  <button className="btn w-btn w-btn-blue" type="submit" id="login_button" onClick={() => { login(); navigate('/'); }} name="submit">Log In <i className="fas fa-sign-in-alt ms-1" /></button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </Form>
        )}
      </Formik>
    </div>


  );
};

export default LoginPage;