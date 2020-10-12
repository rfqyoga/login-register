import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import FormikControl from './FormikControl'

function FormikContainer() {
    const dropdownOptions = [
        {key: 'Select an option', value:''},
        {key: 'Option 1', value:'option 1'},
        {key: 'Option 2', value:'option 2'},
        {key: 'Option 3', value:'option 3'}
    ]
    const radioOptions = [
        {key: 'Option 1', value:'rOption 1'},
        {key: 'Option 2', value:'rOption 2'},
        {key: 'Option 3', value:'rOption 3'}
    ]
    // const checkboxOptions = [
    //     {key: 'Option 1', value:'cOption 1'},
    //     {key: 'Option 2', value:'cOption 2'},
    //     {key: 'Option 3', value:'cOption 3'}
    // ]
    const initialValues = {
        email: '',
        description: '',
        selectOption: '',
        radioOption: '',
        // checkboxOptions: []
    }
    const validationSchema = Yup.object ({
        email: Yup.string().required('Required'),
        description: Yup.string().required('Required'),
        selectOption: Yup.string().required('Required'),
        radioOption: Yup.string().required('Required'),
        // checkboxOptions: Yup.array().required('Required')
    })
    const onSubmit = values => console.log('Form data', values)
    return (
        <Formik 
        initialValues={initialValues} 
        validationSchema={validationSchema} 
        onSubmit={onSubmit}>
            {
                formik => (
                <Form>
                    <FormikControl control='input' type='email' label='Email' name='email' />
                    <FormikControl control='textarea' label='Description' name='description' />
                    <FormikControl 
                        control='select'
                        label='Select a topic'
                        name='selectOption'
                        options={dropdownOptions} 
                    />
                    <FormikControl
                        control='radio'
                        label='Radio Topic'
                        name='radioOption'
                        options={radioOptions}
                    />
                    {/* <FormikControl 
                        control='checkbox'
                        label='Checkbox topics'
                        name='checkboxOption'
                        options={checkboxOptions}
                    /> */}
                    <button type='submit'>Submit</button>
                </Form>
                )}
        </Formik>
    )
}

export default FormikContainer