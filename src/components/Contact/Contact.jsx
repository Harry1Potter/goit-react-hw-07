import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';

const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDeleteContact = () => {
    dispatch(deleteContact(contact.id));
  };

  return (
    <li>
      {contact.name}: {contact.number}
      <button type="button" onClick={handleDeleteContact}>
        Delete contact
      </button>
    </li>
  );
};

export default Contact;