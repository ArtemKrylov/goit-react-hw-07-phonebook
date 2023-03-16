import React, { useEffect } from 'react';
import { nanoid } from 'nanoid';
import { Notify } from 'notiflix';

import ContactList from 'components/ContactList';
import Filter from 'components/Filter';
import Section from 'components/Section';
import { GlobalStyle } from '../GlobalStyle';
import ContactForm from 'components/ContactForm';
import { Contacts, PhoneBook } from './App.styled';
import { EmptyContactList } from 'components/ContactList/ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import { setFilter } from 'redux/slices/filterSlice';
import { addContact, deleteContact } from 'redux/slices/contactsSlice';

export default function App() {
  const dispatch = useDispatch();

  //getting state from redux store
  const filter = useSelector(getFilter);
  const contacts = useSelector(getContacts);

  //while updating contacts put them to localStorage
  useEffect(() => {
    console.log('contacts: ', contacts);
    if (contacts.length === 0) return;
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  //generate unique id string using nanoid library
  const generateId = () => nanoid();

  //check if contact being added is already in contactlist
  const checkContact = newContact => {
    return !contacts.some(
      contact => contact?.name.toLowerCase() === newContact?.name.toLowerCase()
    );
  };

  //adds new contact to contactlist (changes state)
  const handleContactFormSubmit = contact => {
    //if contact name exists
    if (!checkContact(contact)) {
      Notify.failure(`${contact.name} is already in contacts!`);
      return;
    }
    contact.id = generateId();
    dispatch(addContact(contact));
  };

  //deletes new contact to contactlist (changes state)
  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  //adds filter string (changes state)
  const onFilterInput = newFilter => {
    dispatch(setFilter(newFilter));
  };

  //filter contacts by filter value
  const getFilteredContacts = () => {
    return filter === ''
      ? contacts
      : contacts.filter(contact =>
          contact.name.toLowerCase().includes(filter.toLowerCase())
        );
  };

  const filteredContacts = getFilteredContacts();

  return (
    <div className="app">
      <GlobalStyle />

      <Section title="Phonebook">
        <PhoneBook>
          <div className="contactForm-wrapper">
            <ContactForm
              className="contactForm"
              onSubmit={handleContactFormSubmit}
            />
          </div>

          <Contacts className="contacts">
            <h2 className="contacts__subtitle">Contacts</h2>
            <Filter onFilterInput={onFilterInput} className="filter" />
            {}
            {filteredContacts.length === 0 ? (
              <EmptyContactList className="contactList__empty">
                No contacts in list
              </EmptyContactList>
            ) : (
              <ContactList
                contacts={filteredContacts}
                deleteContact={handleDeleteContact}
                className="contactList"
              />
            )}
          </Contacts>
        </PhoneBook>
      </Section>
    </div>
  );
}
