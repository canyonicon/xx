import React from 'react';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

import { Formik, Field, Form, FastField  } from 'formik';

import AsyncSelect from 'react-select/async';
// import yup
import * as Yup from 'yup';
import { useTranslation } from 'react-i18next';

 
// parse and assert validity
// const customer = await userSchema.validate(await fetchUser());
  
const AddEmployeeModal = () => {
    const { t } = useTranslation();
    
    const validationRules = Yup.object().shape({
        first_name: Yup.string().min(2, 'short').max(50, 'long').required('required'),
        last_name: Yup.string().min(2, 'short').max(100, 'long').required('required'),
        mobile: Yup.string().required('required'),
        email: Yup.string().email('invalid_email').required('required'),
        dob: Yup.date().required('required'),
        designation: Yup.string().required('required'),
        gender: Yup.string().required('required'),
        address: Yup.string().required('required'),
        id_number: Yup.string().required('required'),
        passport_number: Yup.string().required('required'),
        nationality: Yup.string().required('required'),
    });

    const initialValues = {
        first_name: '',
        last_name: '',
        mobile: '',
        email: '',
        dob: '',
        designation: '',
        gender: '',
        address: '',
        id_number: '',
        passport_number: '',
        nationality: '',
    };

    const handleSubmit = (values)  => {
        console.log(values, "testing");
    }

    // Component logic goes here
    return (
        // HTML markup goes here
        <div>
            <Formik
                initialValues={initialValues}
                validationSchema={validationRules}
                onSubmit={handleSubmit}
                autoComplete="off"
                >
                {({ errors, touched }) => (
                    <Form>
                        <div className="row g-4">
                            
                            <div className="col-md-6">
                                <label htmlFor="first_name">{t('First name')}</label>
                                <FastField id="first_name" name="first_name" className="form-control" />
                                {touched.first_name && errors.first_name && <div className="small text-danger">{t(errors.first_name)}</div>}
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="last_name">{t('Last name')}</label>
                                <FastField id="last_name" name="last_name" className="form-control" />
                                {touched.last_name && errors.last_name && <div className="small text-danger">{t(errors.last_name)}</div>}
                            </div>
                            
                            <div className="col-md-6">
                                <label htmlFor="mobile">{t('Mobile number')}</label>
                                <PhoneInput
                                    country={'sa'}
                                    localization={'ar'}
                                    enableSearch={true}
                                    inputClass="form-control w-100"
                                    countryCodeEditable={false}
                                    // onChange={phone => 
                                    //     // remove country code and spaces then set value to formik phone
                                    //     // console.log(phone.replace(/[^0-9]/g, '').substring(4), 'phone')
                                    // }
                                />
                                {touched.mobile && errors.mobile && <div className="small text-danger">{t(errors.mobile)}</div>}
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="email">{t('Email address')}</label>
                                <FastField id="email" name="email" className="form-control" />
                                {touched.email && errors.email && <div className="small text-danger">{t(errors.email)}</div>}
                            </div>

                            <div className="col-md-12">
                                <label htmlFor="address">{t('Address')}</label>
                                <FastField id="address" name="address" className="form-control" />
                                {touched.address && errors.address && <div className="small text-danger">{t(errors.address)}</div>}
                            </div>
                            
                            <div className="col-md-6">
                                <label htmlFor="dob">{t('Date of birth')}</label>
                                <FastField type="date" id="dob" name="dob" className="form-control" />
                                {touched.dob && errors.dob && <div className="small text-danger">{t(errors.dob)}</div>}
                            </div>

                            <div className="col-md-6">
                                <label htmlFor="gender">{t('Gender')}</label>
                                <Field as="select" defaultValue="" type="date" id="gender" name="gender" className="form-select">
                                    <option value="" disabled>{t('Select')}</option>
                                    <option value='male'>{t('male')}</option>
                                    <option value='female'>{t('female')}</option>
                                </Field>
                                {touched.gender && errors.gender && <div className="small text-danger">{t(errors.gender)}</div>}
                            </div>
                            
                            <div className="col-md-6">
                                <label htmlFor="designation">{t("Designation")}</label>
                                <AsyncSelect
                                    name='designation'
                                    id='designation'
                                    className='form-contro'
                                    cacheOptions
                                />
                                {touched.designation && errors.designation && <div className='small text-danger'>{t(errors.designation)}</div>}
                            </div>
                            
                            <div className="col-md-6">
                                <label htmlFor="id_number">{t("ID number")}</label>
                                <div className="input-group">
                                    <FastField type="text" id="id_number" name="id_number" className="form-control" />
                                </div>
                                {touched.id_number && errors.id_number && <div className="small text-danger">{t(errors.id_number)}</div>}
                            </div>
                            
                            <div className="col-md-6">
                                <label htmlFor="passport_number">{t("Passport number")}</label>
                                <div className="input-group">
                                    <FastField type="text" id="passport_number" name="passport_number" className="form-control" />
                                </div>
                                {touched.passport_number && errors.passport_number && <div className="small text-danger">{t(errors.passport_number)}</div>}
                            </div>

                            <div className="col-md-6">
                                <label htmlFor="nationality">{t("Nationality")}</label>
                                <AsyncSelect
                                    name='nationality'
                                    id='nationality'
                                    className='form-contro'
                                    cacheOptions
                                />
                                {touched.nationality && errors.nationality && <div className='small text-danger'>{t(errors.nationality)}</div>}
                            </div>

                            

                            
                            <div className="col-md-12">
                                <button type="submit" className="btn btn-primary float-end px-4">{t("Save")}</button>
                            </div>
                        </div>
                    </Form>
                )}
            </Formik>

            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>

        </div>
    );
};

export default AddEmployeeModal;
