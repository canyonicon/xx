import React from 'react';
// import PhoneInput from 'react-phone-input-2'
// import 'react-phone-input-2/lib/style.css'

import { Formik, Field, Form, FastField  } from 'formik';

// import yup
import * as Yup from 'yup';
import { useTranslation } from 'react-i18next';

// parse and assert validity
// const customer = await userSchema.validate(await fetchUser());
  
const AddEmailHostModal = () => {
    const { t } = useTranslation();
    
    const validationRules = Yup.object().shape({
        name: Yup.string().min(2, 'short').max(50, 'long').required('required'),
        host: Yup.string().min(2, 'short').required('required'),
        username: Yup.string().required('required'),
        password: Yup.string().required('required'),
        port: Yup.number().required('required'),
        security: Yup.string().min(3, 'short').required('required')
    });

    const initialValues = {
        name: '',
        host: '',
        username: '',
        password: '',
        port: '',
        security: '',
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
                >
                {({ errors, touched }) => (
                    <Form>
                        <div className="row g-4">
                            
                            <div className="col-md-6">
                                <label htmlFor="name">{t('Name')}</label>
                                <FastField id="name" name="name" className="form-control" />
                                {touched.name && errors.name && <div className="small text-danger">{t(errors.name)}</div>}
                            </div>
                            
                            <div className="col-md-6">
                                <label htmlFor="host">{t('Host')}</label>
                                <FastField id="host" name="host" className="form-control" />
                                {touched.host && errors.host && <div className="small text-danger">{t(errors.host)}</div>}
                            </div>

                            <div className="col-md-6">
                                <label htmlFor="port">{t("Port")}</label>
                                <FastField name='port' id='port' className='form-control'/>
                                {touched.port && errors.port && <div className='small text-danger'>{t(errors.port)}</div>}
                            </div>

                            <div className="col-md-6">
                                <label htmlFor="username">{t("Username")}</label>
                                <FastField name='username' id='username' className='form-control'/>
                                {touched.username && errors.username && <div className='small text-danger'>{t(errors.username)}</div>}
                            </div>

                            <div className="col-md-6">
                                <label htmlFor="password">{t("Password")}</label>
                                <Field id="password" name="password" className="form-control" />
                                {touched.password && errors.password && <div className="small text-danger">{t(errors.password)}</div>}
                            </div>

                            <div className="col-md-6">
                                <label htmlFor="security">{t("Security")}</label>
                                <Field as="select" name='security' id='security' className='form-control'>
                                    <option value="" disabled>{t("Select")}</option>
                                    <option value="ssl">SSL</option>
                                    <option value="tls">TLS</option>
                                </Field>
                                {touched.security && errors.security && <div className='small text-danger'>{t(errors.security)}</div>}
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

export default AddEmailHostModal;