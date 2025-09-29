import React from 'react';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

import { Formik, Field, Form, FastField  } from 'formik';

// import yup
import * as Yup from 'yup';
import { useTranslation } from 'react-i18next';

// parse and assert validity
// const customer = await userSchema.validate(await fetchUser());
  
const SendSmsModal = (data) => {
    const { t } = useTranslation();
    
    const validationRules = Yup.object().shape({
        mobile: Yup.string().min(11, 'short').max(15, 'long').required('required'),
        message: Yup.string().min(2, 'short').max(160, 'long').required('required')
    });

    const handleSubmit = (values)  => {
        console.log(values, "host");
    }

    const intitialValues = {
        mobile: '',
        message: ''
    }

    const PhoneNumber = ({ field, form, ...props }) => {
        return (
            <div>
                <PhoneInput
                    country={'sa'}
                    localization={'ar'}
                    enableSearch={true}
                    inputClass="form-control w-100"
                    countryCodeEditable={false}
                    onChange={phone =>
                        // set the field value into the formik form
                        form.setFieldValue(field.name, phone)
                    }
                />
            </div>
        )
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
                                <label htmlFor="mobile">{t('To mobile')}</label>
                                {/* <FastField id="mobile" name="mobile" className="form-control" /> */}
                                <Field id="mobile" name="mobile" component={PhoneNumber}/>
                                {touched.mobile && errors.mobile && <div className="small text-danger">{t(errors.mobile)}</div>}
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

export default SendSmsModal;