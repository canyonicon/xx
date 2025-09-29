import React from 'react';
import AsyncSelect from 'react-select/async';
import { useTranslation } from 'react-i18next';
import { Formik, Form, FastField } from 'formik';
import * as Yup from 'yup';

const AddFlightModal = () => {
    const { t } = useTranslation();

    // validation rules for flight number, plane, route, reseller, departure, departure date, departure time, arrival, arrival date, arrival time, crew
    const validationRules = Yup.object().shape({
        flightNumber: Yup.string().min(2, 'short').max(50, 'long').required('required'),
        plane: Yup.string().required('required'),
        route: Yup.string().required('required'),
        reseller: Yup.string().required('required'),
        departure: Yup.string().required('required'),
        departureDate: Yup.date().required('required'),
        departureTime: Yup.string().required('required'),
        arrival: Yup.string().required('required'),
        arrivalDate: Yup.date().required('required'),
        arrivalTime: Yup.string().required('required'),
        crew: Yup.string().required('required'),
    });

    const initialValues = {
        flightNumber: '',
        plane: '',
        route: '',
        reseller: '',
        departure: '',
        departureDate: '',
        departureTime: '',
        arrival: '',
        arrivalDate: '',
        arrivalTime: '',
        crew: '',
    };

    const handleSubmit = (values) => {
        console.log(values, "testing");
    }

    return (
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
                                <label htmlFor="flightNumber">{t('Flight Number')}</label>
                                <FastField id="flightNumber" name="flightNumber" className="form-control" />
                                {touched.flightNumber && errors.flightNumber && <div className="small text-danger">{t(errors.flightNumber)}</div>}
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="plane">{t('Plane')}</label>
                                <AsyncSelect id="plane" name="plane" className="form-contro" />
                                {touched.plane && errors.plane && <div className="small text-danger">{t(errors.plane)}</div>}
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="route">{t('Route')}</label>
                                <AsyncSelect id="route" name="route" className="form-contro" />
                                {touched.route && errors.route && <div className="small text-danger">{t(errors.route)}</div>}
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="reseller">{t('Reseller')}</label>
                                <AsyncSelect id="reseller" name="reseller" className="form-contro" />
                                {touched.reseller && errors.reseller && <div className="small text-danger">{t(errors.reseller)}</div>}
                            </div>
                            <div className="col-md-12">
                                <label htmlFor="departure">{t('Departure')}</label>
                                <AsyncSelect id="departure" name="departure" className="form-contro" />
                                {touched.departure && errors.departure && <div className="small text-danger">{t(errors.departure)}</div>}
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="departureDate">{t('Departure Date')}</label>
                                <FastField id="departureDate" name="departureDate" className="form-control" />
                                {touched.departureDate && errors.departureDate && <div className="small text-danger">{t(errors.departureDate)}</div>}
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="departureTime">{t('Departure Time')}</label>
                                <FastField id="departureTime" name="departureTime" className="form-control" />
                                {touched.departureTime && errors.departureTime && <div className="small text-danger">{t(errors.departureTime)}</div>}
                            </div>
                            <div className="col-md-12">
                                <label htmlFor="arrival">{t('Arrival')}</label>
                                <AsyncSelect id="arrival" name="arrival" className="form-contro" />
                                {touched.arrival && errors.arrival && <div className="small text-danger">{t(errors.arrival)}</div>}
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="arrivalDate">{t('Arrival Date')}</label>
                                <FastField id="arrivalDate" name="arrivalDate" className="form-control" />
                                {touched.arrivalDate && errors.arrivalDate && <div className="small text-danger">{t(errors.arrivalDate)}</div>}
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="arrivalTime">{t('Arrival Time')}</label>
                                <FastField id="arrivalTime" name="arrivalTime" className="form-control" />
                                {touched.arrivalTime && errors.arrivalTime && <div className="small text-danger">{t(errors.arrivalTime)}</div>}
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="crew">{t('Crew')}</label>
                                <AsyncSelect id="crew" name="crew" className="form-contro" />
                                {touched.crew && errors.crew && <div className="small text-danger">{t(errors.crew)}</div>}
                            </div>
                            <div className="col-md-12">
                                <button type="submit" className="btn btn-primary float-end px-4">{t("Save")}</button>
                            </div>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default AddFlightModal;
