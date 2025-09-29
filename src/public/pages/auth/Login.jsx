import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

// import plugins
import { useTranslation } from 'react-i18next';
import * as Yup from 'yup';
import { Formik, Field, Form, FastField, useFormik  } from 'formik';
import axios from 'axios';

//styles
import './Auth.css';

const Login = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const [loader, setLoader] = useState(false);

    const validationSchema = Yup.object().shape({
        email: Yup.string().email('Invalid email').required('Required'),
        password: Yup.string().min(3, 'Too Short!').required('Required'),
    });

    const formik = useFormik({
        initialValues: {
          email: '',
          password: ''
        },
        validationSchema: validationSchema,
        onSubmit: async (values) => {
            setLoader(true)
            await axios.post('http://127.0.0.1:8000/api/login', values)
            .then(response => {
                if(response.data.status){
                    localStorage.setItem('user', response.data.data);
                    localStorage.setItem('token', response.data.data.token);
                    
                    console.log('to dashboard ||| '+ localStorage.getItem('token'))
                    // redirect to admin dashboard
                    navigate('/admin/dashboard');

                }else{
                    formik.setFieldError('general', error.response.data.message || t('Error occurred during login'));
                }
           })
           .catch(error => {
                formik.setFieldError('general', error.response.data.message || t('Error occurred during login'));
           })
           .finally(() => {
                setLoader(false)
            });

        }
      });

    return (
        <div className='login bg position-relative' style={{backgroundImage: `url('/assets/images/auth-bg.png')`}}>
            <div className="overlay"></div>
            <div className="row g-0 position-relative">
                {/* image */}
                <div className="col-md-6 px-3 px-md-5 py-3 py-md-5">
                    <div className="logo px-4 px-md-5 py-3 py-md-5">
                        <Link to={"/"} className="navbar-brand" >
                            <img src="/assets/images/logo-white.png" alt="" />
                        </Link>
                    </div>
                    <h1 className="title p-5 d-none d-md-block">
                        
                    </h1>
                    <div className="description p-5 col-md-10 d-none d-md-block">
                        Fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </div>
                </div>
                <div className="col-md-6 p-5 position-relative">
                    <div className="overlay-side"></div>
                    <h1 className="title position-relative px-0 px-md-5 py-5">
                        Login
                        {process.env.API_URL}
                    </h1>
                    {/* form */}
                    <form onSubmit={formik.handleSubmit}>
                        <div className="row g-4 p-0 p-md-5 position-relative">
                            <div className="col-md-12">
                                <label className='small' htmlFor="email">Email</label>
                                <input type="text" name='email' id='email' className="form-control form-control-lg custom-input"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.email}
                                />
                                {formik.touched.email && formik.errors.email && <div className='small'>{t(formik.errors.email)}</div>}
                            </div>
                            
                            <div className="col-md-12 position-relative">
                                {/* input group with eye-fill */}
                                <label className='small' htmlFor="password">Password</label>
                                <input type="password" name="password" id='password' className="form-control form-control-lg custom-input"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.password}
                                />
                                {formik.touched.password && formik.errors.password && <div className='small'>{t(formik.errors.password)}</div>}
                            </div>

                            <div className="col-12 mt-5">
                                {formik.errors.general && <p>{formik.errors.general}</p>}
                                <div className="row g-4">
                                    <div className="col-md-6">
                                        <button type="submit" className="btn btn-dark">
                                            <div className="spinner-border text-light me-2" role="status" hidden={!loader}>
                                                <span className="visually-hidden">Loading...</span>
                                            </div>
                                            Login
                                            <svg className="ms-2" width="19" height="17" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M5.10352 10.3011V15.4756L13.3172 6.40942L5.10352 10.3011Z" fill="#484848" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                                                <path d="M6.17285 11.1088L17.9983 1.42676L12.6029 15.6905L6.17285 11.1088Z" fill="#222222" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                                                <path d="M1 7.37L6.17454 11.0654L18 1.30945L1 7.37Z" fill="#222222" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                        </button>
                                    </div>
                                    <div className="col-md-6 d-flex gap-3 align-items-center justify-content-md-end">
                                        <span className='fw-normal'>New to FlyTaibah? </span> <Link to="/register" className='text-decoration-underline text-dark fw-semibold'>Register</Link>
                                    </div>
                                </div>
                            </div>

                        </div>
                        
                    </form>
                </div>
            </div>
        </div>
    );

    
};

export default Login;