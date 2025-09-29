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
  
const AddPlaneModal = () => {
    const { t } = useTranslation();
    
    const validationRules = Yup.object().shape({
        airplaneNumber: Yup.string().min(2, 'short').max(50, 'long').required('required'),
        airplaneName: Yup.string().min(2, 'short').max(100, 'long').required('required'),
        manufacturer: Yup.string().required('required'),
        model: Yup.string().required('required')
    });

    const initialValues = {
        airplaneNumber: '',
        airplaneName: '',
        manufacturer: '',
        description: '',
        model: '',
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
                                <label htmlFor="airplaneNumber">{t('Airplane Number')}</label>
                                <FastField id="airplaneNumber" name="airplaneNumber" className="form-control" />
                                {touched.airplaneNumber && errors.airplaneNumber && <div className="small text-danger">{t(errors.airplaneNumber)}</div>}
                            </div>
                            {/* <div className="col-md-4">
                                <label htmlFor="middle-name">Middle name</label>
                                <FastField id="middleName" name="middleName" className="form-control" />
                            </div> */}
                            <div className="col-md-6">
                                <label htmlFor="airplaneName">{t('Airplane Name')}</label>
                                <FastField id="airplaneName" name="airplaneName" className="form-control" />
                                {touched.airplaneName && errors.airplaneName && <div className="small text-danger">{t(errors.airplaneName)}</div>}
                            </div>
                            
                            <div className="col-md-6">
                                <label htmlFor="model">{t("Model")}</label>
                                <FastField name='model' id='model' className='form-control'/>
                                {touched.model && errors.model && <div className='small text-danger'>{t(errors.model)}</div>}
                            </div>

                            <div className="col-md-6">
                                <label htmlFor="manufacturer">{t("Manufacturer")}</label>
                                <FastField name='manufacturer' id='manufacturer' className='form-control'/>
                                {touched.manufacturer && errors.manufacturer && <div className='small text-danger'>{t(errors.manufacturer)}</div>}
                            </div>

                            <div className="col-md-12">
                                <label htmlFor="description">{t("Description")}</label>
                                <div className="input-group">
                                    <Field as="textarea" id="description" name="description" className="form-control" />
                                </div>
                                {touched.description && errors.description && <div className="small text-danger">{t(errors.description)}</div>}
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

export default AddPlaneModal;
