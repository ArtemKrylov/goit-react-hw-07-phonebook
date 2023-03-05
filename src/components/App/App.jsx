import React, { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import { Notify } from 'notiflix';

import ContactList from 'components/ContactList';
import Filter from 'components/Filter';
import Section from 'components/Section';
import { GlobalStyle } from '../GlobalStyle';
import ContactForm from 'components/ContactForm';
import { Contacts, PhoneBook } from './App.styled';
import { EmptyContactList } from 'components/ContactList/ContactList.styled';

export default function App() {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem('contacts')) ?? [] //get initial contacts value from localStorage if any
  ); // contacts: [{id:str, name:str, number:str},]
  const [filter, setFilter] = useState('');

  //while updating contacts put them to localStorage
  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  //generate unique id string using nanoid library
  const generateId = () => nanoid();

  //check if contact being added is already in contactlist
  const checkContact = newContact => {
    return !contacts.some(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );
  };

  //adds new contact to contactlist (changes state)
  const addContact = contact => {
    //if contact name exists
    if (!checkContact(contact)) {
      Notify.failure(`${contact.name} is already in contacts!`);
      return;
    }
    contact.id = generateId();
    setContacts(prev => [contact, ...prev]);
  };

  //deletes new contact to contactlist (changes state)
  const deleteContact = id => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  //adds filter string (changes state)
  const onFilterInput = newFilter => {
    setFilter(newFilter);
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
            <ContactForm className="contactForm" onSubmit={addContact} />
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
                deleteContact={deleteContact}
                className="contactList"
              />
            )}
          </Contacts>
        </PhoneBook>
      </Section>
    </div>
  );
}
