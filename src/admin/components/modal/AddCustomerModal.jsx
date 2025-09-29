import React, { useEffect, useState } from 'react';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

// import plugins
import * as Yup from 'yup';
import { Formik, Field, Form, FastField} from 'formik';
import AsyncSelect from 'react-select/async';
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import toast from 'react-hot-toast';

// parse and assert validity
// const customer = await userSchema.validate(await fetchUser());
  
const AddCustomerModal = () => {
    const { t } = useTranslation();
    // let countries = [];
    const [countryOptions, setCountryOptions] = useState([]);
    

    // errors
    const [errorMessage, setErrorMessage] = useState('');
    const [errorMessages, setErrorMessages] = useState([]);

    const processResponse = (errorObject) => {
        console.log(errorObject, 'errorObject')
        if (errorObject.errors && Array.isArray(errorObject.errors)) {
            setErrorMessages(errorObject.errors);
            setErrorMessage(errorObject.message)
        }
    };

    const customerValidation = Yup.object().shape({
        title: Yup.string().required('required'),
        first_name: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('required'),
        last_name: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('required'),
        email: Yup.string().email('Invalid email'),
        dob: Yup.date().required('required'),
        passport: Yup.string().required('required'),
        passport_expiry: Yup.date().required('required'),
        issuing_country: Yup.mixed().required('required'),
        nationality: Yup.mixed().required('required'),
        // password: Yup.string().min(8, 'Too Short!').max(50, 'Too Long!').required('Required'),
        // confirm: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required('Required'),
    });

    const initialValues = {
        title: '',
        first_name: '',
        last_name: '',
        email: '',
        mobile: '',
        dob: '',
        id_number: '',
        passport: '',
        passport_expiry: '',
        nationality:'',
        issuing_country: ''
        // password: '',
        // confirm: '',
    };

    // when component mounts
    useEffect(() => {
        fetchCountries();
    }, []);

    const handleSubmit = (values)  => {
        // console.log(values, "testing");
        
        const toastLoading = toast.loading(t('Please wait...'));
        setErrorMessages([]);

        // send request for adding customer
        axios.post('http://127.0.0.1:8000/api/customers/createOrUpdate', values)
        .then(response => {
            if(response.data.status){
                // console.log(response.data.data, 'customer added')
                toast.success(t('Customer added successfully'));
                
                // close modal
                closeModal('addCustomerModal');
                
                // empty formik form
                // initialValues = {};
               
            }else{
                console.log('error', t('Script error 1'));
                // formik.setFieldError('general', t('Script error'));
            }
        })
        .catch(error => {
            if(error.response){
                processResponse(error.response.data);
            }
            // console.log('error', error);
            // formik.setFieldError('general', t('Script error'));
        })
        .finally(() => {
            toast.dismiss(toastLoading);
            
        });

    }

    const fetchCountries = async () => {
        await axios.get('http://127.0.0.1:8000/api/countries?keyword')
        .then(response => {
            if(response.data.status){
                // console.log(response.data.data, 'countries')
                
                // assign countries to a variable
                setCountryOptions(response.data.data);
                
            }else{
                console.log('error', t('Script error 1'));
            }
        })
        .catch(error => {
            console.log('error', error);
        })
    }
    
    // write code for AsyncSelect loadOptions function to show countries from countries array, the response from the server is like this: {'status': true, 'data': [{'id': 1, 'name': 'Saudi Arabia'}, {'id': 2, 'name': 'United Arab Emirates'}]}
    const loadCountries = async (inputValue, callback) => {
        // console.log(countryOptions, 'Countries')
        let filteredCountries = countryOptions
            .filter(country => country.name.toLowerCase().includes(inputValue.toLowerCase()))
            .map(country => ({ value: country.id, label: country.name })); // Transform the data to match { value, label } format
        // console.log(filteredCountries, 'filteredCountries')
        callback(filteredCountries);
    }

    // Component logic goes here
    return (
        // HTML markup goes here
        <div>
            {errorMessages.length > 0 && (
                <div className="error-messages">
                    <div className="alert alert-danger alert-dismissible fade show" role="alert">
                        <strong>{t('Whoops!')} {errorMessage}</strong> 
                        {errorMessages.map((error, index) => (
                            <div className='d-block'>{error}</div>
                        ))}
                        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>
                </div>
            )}
            <Formik
                initialValues={initialValues}
                validationSchema={customerValidation}
                onSubmit={handleSubmit}
                >
                {({ setFieldValue, errors, touched }) => (
                    <Form>
                        <div className="row g-4">
                            <div className="col-md-4">
                                <label htmlFor="title">{t('Title')}</label>
                                <Field as="select" id="title" name="title" className="form-select" value="">
                                    <option disabled>{t('Mr, Mrs, Ms')}</option>
                                    <option value="mr">{t('Mr')}</option>
                                    <option value="ms">{t('Ms')}</option>
                                    <option value="mrs">{t('Mrs')}</option>
                                    <option value="miss">{t('Miss')}</option>
                                    <option value="dr">{t('Dr')}</option>
                                    <option value="prof">{t('Prof')}</option>
                                    <option value="sir">{t('Sir')}</option>
                                </Field>
                                {touched.first_name && errors.first_name && <div className="small text-danger">{t(errors.first_name)}</div>}    
                            </div>

                            <div className="col-md-4">
                                <label htmlFor="first_name">{t("First name")}</label>
                                <FastField id="first_name" name="first_name" className="form-control" />
                                {touched.first_name && errors.first_name && <div className="small text-danger">{t(errors.first_name)}</div>}
                            </div>
                            {/* <div className="col-md-4">
                                <label htmlFor="middle-name">Middle name</label>
                                <FastField id="middleName" name="middleName" className="form-control" />
                            </div> */}
                            <div className="col-md-4">
                                <label htmlFor="last_name">{t("Last name")}</label>
                                <FastField id="last_name" name="last_name" className="form-control" />
                                {touched.last_name && errors.last_name && <div className="small text-danger">{t(errors.last_name)}</div>}
                            </div>

                            <div className="col-md-4">
                                <label htmlFor="date">{t("Date of Birth")}</label>
                                <FastField type="date" id="dob" name="dob" className="form-control" />
                                {touched.dob && errors.dob && <div className="small text-danger">{t(errors.dob)}</div>}
                            </div>
                            <div className="col-md-4">
                                <label htmlFor="nationality">{t("Nationality")}</label>
                                <AsyncSelect
                                    name='nationality'
                                    id='nationality'
                                    className='form-contro'
                                    cacheOptions
                                    loadOptions={loadCountries}
                                    onChange={data => setFieldValue('nationality', data.value)}
                                />
                                {touched.nationality && errors.nationality && <div className='small text-danger'>{t(errors.nationality)}</div>}
                            </div>
                            <div className="col-md-4">
                                <label htmlFor="id_number">{t("ID number")}</label>
                                <FastField id="id_number" name="id_number" className="form-control" />
                                {touched.id_number && errors.id_number && <div className="small text-danger">{t(errors.id_number)}</div>}
                            </div>
                            <div className="col-md-4">
                                <label htmlFor="passport">{t("Passport number")}</label>
                                <FastField id="passport" name="passport" className="form-control" />
                                {touched.passport && errors.passport && <div className="small text-danger">{t(errors.passport)}</div>}
                            </div>
                            <div className="col-md-4">
                                <label htmlFor="issuing_country">{t("Issuing country")}</label>
                                <AsyncSelect
                                    name='issuing_country'
                                    id='issuing_country'
                                    className='form-contro'
                                    cacheOptions
                                    loadOptions={loadCountries}
                                    onChange={data => setFieldValue('issuing_country', data.value)}
                                />
                                {touched.issuing_country && errors.issuing_country && <div className="small text-danger">{t(errors.issuing_country)}</div>}
                            </div>
                            <div className="col-md-4">
                                <label htmlFor="passport_expiry">{t("Passport expiry")}</label>
                                <FastField type="date" id="passport_expiry" name="passport_expiry" className="form-control" />
                                {touched.passport_expiry && errors.passport_expiry && <div className="small text-danger">{t(errors.passport_expiry)}</div>}
                            </div>
                            
                            <div className="col-md-6">
                                <label htmlFor="email">{t("Email")}</label>
                                <FastField id="email" name="email" className="form-control" />
                                {touched.email && errors.email && <div className="small text-danger">{t(errors.email)}</div>}
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="mobile">{t("Mobile")}</label>
                                <PhoneInput
                                    country={'sa'}
                                    localization={'ar'}
                                    enableSearch={true}
                                    inputClassName="form-control w-100"
                                    countryCodeEditable={false}
                                    onChange={mobile => setFieldValue('mobile', mobile)}
                                    // onChange={mobile => 
                                    //     // remove country code and spaces then set value to formik mobile
                                    //     // console.log(mobile.replace(/[^0-9]/g, '').substring(4), 'mobile')
                                    // }
                                />
                                {touched.mobile && errors.mobile && <div className="small text-danger">{t(errors.mobile)}</div>}
                            </div>
                            {/* <div className="col-md-6">
                                <label htmlFor="password">Password</label>
                                <Field id="password" name="password" className="form-control" />
                                {touched.password && errors.password && <div className="small text-danger">{t(errors.password)}</div>}
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="confirm">Confirm password</label>
                                <Field id="confirm" name="confirm" className="form-control" />
                                {touched.confirm && errors.confirm && <div className="small text-danger">{t(errors.confirm)}</div>}
                            </div> */}

                            <div className="col-md-12">
                                <button type="submit" className="btn btn-primary float-end px-4">
                                    {t("Save")}
                                </button>
                            </div>
                        </div>
                    </Form>
                )}
            </Formik>

            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>

        </div>
    );
};

export default AddCustomerModal;
