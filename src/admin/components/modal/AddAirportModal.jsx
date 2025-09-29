import React from 'react';
// import PhoneInput from 'react-phone-input-2'
// import 'react-phone-input-2/lib/style.css'

import { Formik, Field, Form, FastField  } from 'formik';

// import yup
import * as Yup from 'yup';
import AsyncSelect from 'react-select/async';

import { useTranslation } from 'react-i18next';

 
// parse and assert validity
// const customer = await userSchema.validate(await fetchUser());
  
const AddAirportModal = () => {
    const { t } = useTranslation();
    
    const validationRules = Yup.object().shape({
        airportNumber: Yup.string().min(2, 'short').max(50, 'long').required('required'),
        airportName: Yup.string().min(2, 'short').max(100, 'long').required('required'),
        country: Yup.string().required('required'),
        city: Yup.string().required('required'),
        location: Yup.string().required('required'),
    });

    const initialValues = {
        airportNumber: '',
        airportName: '',
        country: '',
        city: '',
        location: '',
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
                                <label htmlFor="airportNumber">{t('Airport Number')}</label>
                                <FastField id="airportNumber" name="airportNumber" className="form-control" />
                                {touched.airportNumber && errors.airportNumber && <div className="small text-danger">{t(errors.airportNumber)}</div>}
                            </div>
                            {/* <div className="col-md-4">
                                <label htmlFor="middle-name">Middle name</label>
                                <FastField id="middleName" name="middleName" className="form-control" />
                            </div> */}
                            <div className="col-md-6">
                                <label htmlFor="airportName">{t('Airport Name')}</label>
                                <FastField id="airportName" name="airportName" className="form-control" />
                                {touched.airportName && errors.airportName && <div className="small text-danger">{t(errors.airportName)}</div>}
                            </div>
                            
                            <div className="col-md-6">
                                <label htmlFor="country">{t("Country")}</label>
                                <AsyncSelect
                                    name='country'
                                    id='country'
                                    className='form-contro'
                                    cacheOptions
                                />
                                {touched.country && errors.country && <div className='small text-danger'>{t(errors.country)}</div>}
                            </div>

                            <div className="col-md-6">
                                <label htmlFor="city">{t("City")}</label>
                                <AsyncSelect
                                    isDisabled={true}
                                    name='city'
                                    id='city'
                                    className='form-contro'
                                    cacheOptions
                                />
                                {touched.city && errors.city && <div className='small text-danger'>{t(errors.city)}</div>}
                            </div>

                            <div className="col-md-12">
                                <label htmlFor="location">{t("Location")}</label>
                                <div className="input-group">
                                    <FastField type="text" id="location" name="location" className="form-control" />
                                    <button className="btn btn-light" type='button' role='button'>
                                        <b className="bi-geo-alt-fill"></b>
                                    </button>
                                    
                                </div>
                                {touched.location && errors.location && <div className="small text-danger">{t(errors.location)}</div>}
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

export default AddAirportModal;
