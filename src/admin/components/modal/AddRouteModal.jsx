import React from 'react';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

import { Formik, Field, Form, FastField  } from 'formik';

// import yup
import * as Yup from 'yup';
import AsyncSelect from 'react-select/async';

import { useTranslation } from 'react-i18next';

 
// parse and assert validity
// const customer = await userSchema.validate(await fetchUser());
  
const AddRouteModal = () => {
    const { t } = useTranslation();
    
    const validationRules = Yup.object().shape({
        routeNumber: Yup.string().min(2, 'short').max(50, 'long').required('required'),
        routeName: Yup.string().min(2, 'short').max(100, 'long').required('required'),
        origin: Yup.string().required('required'),
        destination: Yup.string().required('required'),
        miles: Yup.number().required('required'),
        price: Yup.number().required('required'),
    });

    const initialValues = {
        routeNumber: '',
        routeName: '',
        origin: '',
        destination: '',
        miles: '',
        price: '',
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
                                <label htmlFor="routeNumber">{t('Route Number')}</label>
                                <FastField id="routeNumber" name="routeNumber" className="form-control" />
                                {touched.routeNumber && errors.routeNumber && <div className="small text-danger">{t(errors.routeNumber)}</div>}
                            </div>
                            {/* <div className="col-md-4">
                                <label htmlFor="middle-name">Middle name</label>
                                <FastField id="middleName" name="middleName" className="form-control" />
                            </div> */}
                            <div className="col-md-6">
                                <label htmlFor="routeName">{t('Route Name')}</label>
                                <FastField id="routeName" name="routeName" className="form-control" />
                                {touched.routeName && errors.routeName && <div className="small text-danger">{t(errors.routeName)}</div>}
                            </div>
                            
                            <div className="col-md-6">
                                <label htmlFor="origin">{t("Origin")}</label>
                                <AsyncSelect
                                    name='origin'
                                    id='origin'
                                    className='form-contro'
                                    cacheOptions
                                />
                                {touched.origin && errors.origin && <div className='small text-danger'>{t(errors.origin)}</div>}
                            </div>

                            <div className="col-md-6">
                                <label htmlFor="destination">{t("Destination")}</label>
                                <AsyncSelect
                                    name='destination'
                                    id='destination'
                                    className='form-contro'
                                    cacheOptions
                                />
                                {touched.destination && errors.destination && <div className='small text-danger'>{t(errors.destination)}</div>}
                            </div>

                            <div className="col-md-6">
                                <label htmlFor="miles">{t("Miles")}</label>
                                <FastField type="number" id="miles" name="miles" className="form-control" />
                                {touched.miles && errors.miles && <div className="small text-danger">{t(errors.miles)}</div>}
                            </div>

                            <div className="col-md-6">
                                <label htmlFor="price">{t("Price")}</label>
                                <div className="input-group">
                                    <FastField type="number" id="price" name="price" className="form-control" />
                                    <span className="input-group-text">SAR</span>
                                </div>
                                {touched.price && errors.price && <div className="small text-danger">{t(errors.price)}</div>}
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

export default AddRouteModal;
