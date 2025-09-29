import React from 'react';
// import PhoneInput from 'react-phone-input-2'
// import 'react-phone-input-2/lib/style.css'

import { Formik, Field, Form, FastField  } from 'formik';

// import yup
import * as Yup from 'yup';
import { useTranslation } from 'react-i18next';

// parse and assert validity
// const customer = await userSchema.validate(await fetchUser());
  
const SendEmailModal = (data) => {
    const { t } = useTranslation();
    
    const validationRules = Yup.object().shape({
        email: Yup.string().email('invalid_email').required('required'),
        subject: Yup.string().min(5, 'short').max(50, 'long').required('required'),
        message: Yup.string().min(5, 'short').max(300, 'long').required('required')
    });

    const handleSubmit = (values)  => {
        // console.log(values, "testing");
        console.log(data, "host");
    }
    const intitialValues = {
        email: '',
        subject: '',
        message: ''
    }

    // Component logic goes here
    return (
        // HTML markup goes here
        <div>
            <Formik
                initialValues={intitialValues}
                validationSchema={validationRules}
                onSubmit={handleSubmit}
                >
                {({ errors, touched }) => (
                    <Form>
                        <div className="row g-4">
                            <div className="col-md-12">
                                <h4>{data.data.name}</h4>
                            </div>
                            <div className="col-md-12">
                                <label htmlFor="email">{t('To email')}</label>
                                <FastField id="email" name="email" className="form-control" />
                                {touched.email && errors.email && <div className="small text-danger">{t(errors.email)}</div>}
                            </div>
                            
                            <div className="col-md-12">
                                <label htmlFor="subject">{t('Subject')}</label>
                                <FastField id="subject" name="subject" className="form-control" />
                                {touched.subject && errors.subject && <div className="small text-danger">{t(errors.subject)}</div>}
                            </div>

                            <div className="col-md-12">
                                <label htmlFor="message">{t("Message")}</label>
                                <Field as="textarea" name='message' id='message' className='form-control' rows="6"></Field>
                                {touched.message && errors.message && <div className='small text-danger'>{t(errors.message)}</div>}
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

export default SendEmailModal;