import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import css from './ContactForm.module.css';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsSlice';

const initialValues = {
  username: "",
  userenumber: ""
};

const validationSchema = Yup.object({
  username: Yup.string()
    .min(3, "Name must be at least 3 characters")
    .max(50, "Name cannot exceed 50 characters")
    .required("Name is required"),
  userenumber: Yup.string()
    .matches(
      /^\d{3}-\d{2}-\d{2}$/, 
      "Number must be in the format xxx-xx-xx"
    )
    .required("Number is required")
});

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    const contactObject = {
      id: Date.now().toString(),
      name: values.username,
      number: values.userenumber
    };

    dispatch(addContact(contactObject));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <Form>
        <label>
          <span>Name</span>
          <Field type="text" name="username" />
          <ErrorMessage name="username" component="div" className="error" />
        </label>
        <label>
          <span>Number</span>
          <Field type="text" name="userenumber" />
          <ErrorMessage name="userenumber" component="div" className="error" />
        </label>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;