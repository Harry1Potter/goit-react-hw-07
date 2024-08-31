import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import css from './ContactList.module.css';
import { selectContacts, deleteContact } from '../../redux/contactsSlice';
import { selectFilter } from '../../redux/filtersSlice';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filterValue = useSelector(selectFilter);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filterValue.toLowerCase())
  );

  return (
    <ul className={css.ContactList}>
      {filteredContacts.map(contact => (
        <Contact
          key={contact.id}
          contact={contact}
          deleteContact={() => dispatch(deleteContact(contact.id))}
        />
      ))}
    </ul>
  );
};

export default ContactList;