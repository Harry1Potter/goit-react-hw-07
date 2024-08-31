// App.jsx
import './App.css';
import React from 'react';
import { useSelector } from 'react-redux';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import SearchBox from './components/SearchBox/SearchBox';
import { selectFilter } from './redux/filtersSlice';
import { selectContacts } from './redux/contactsSlice';

function App() {
  const contacts = useSelector(selectContacts);
  const filterValue = useSelector(selectFilter);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filterValue.toLowerCase())
  );

  return (
    <div className='Phonebook'>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList contacts={filteredContacts} />
    </div>
  );
}

export default App;
