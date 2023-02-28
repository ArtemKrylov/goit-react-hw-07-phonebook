import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { Notify } from 'notiflix';

import ContactList from 'components/ContactList';
import Filter from 'components/Filter';
import Section from 'components/Section';
import { GlobalStyle } from '../GlobalStyle';
import ContactForm from 'components/ContactForm';
import { Contacts, PhoneBook } from './App.styled';
import { EmptyContactList } from 'components/ContactList/ContactList.styled';

export default class App extends Component {
  state = {
    contacts: JSON.parse(localStorage.getItem('contacts')) ?? [], // [{id:str, name:str, number:str},]
    filter: '',
  };

  componentDidUpdate(_, prevState) {
    if (this.state.contacts.length !== prevState.contacts.length) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  //generate unique id string using nanoid library
  generateId = () => nanoid();

  //check if contact being added is already in contactlist
  checkContact = newContact => {
    return !this.state.contacts.some(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );
  };

  //adds new contact to contactlist (changes state)
  addContact = contact => {
    //if contact name exists
    if (!this.checkContact(contact)) {
      Notify.failure(`${contact.name} is already in contacts!`);
      return;
    }
    contact.id = this.generateId();
    this.setState(prevState => {
      return {
        contacts: [contact, ...prevState.contacts],
      };
    });
    // console.log('state in addContact', this.state);
  };

  //deletes new contact to contactlist (changes state)
  deleteContact = id => {
    // console.log('deleting', id);
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(contact => contact.id !== id),
    }));
  };

  //adds filter string (changes state)
  onFilterInput = filter => {
    this.setState({ filter });
  };

  //
  getFilteredContacts = () => {
    const { filter, contacts } = this.state;
    return filter === ''
      ? contacts
      : contacts.filter(contact =>
          contact.name.toLowerCase().includes(filter.toLowerCase())
        );
  };

  render() {
    const filteredContacts = this.getFilteredContacts();
    return (
      <div className="app">
        <GlobalStyle />

        <Section title="Phonebook">
          <PhoneBook>
            <div className="contactForm-wrapper">
              <ContactForm className="contactForm" onSubmit={this.addContact} />
            </div>

            <Contacts className="contacts">
              <h2 className="contacts__subtitle">Contacts</h2>
              <Filter onFilterInput={this.onFilterInput} className="filter" />
              {}
              {filteredContacts.length === 0 ? (
                <EmptyContactList className="contactList__empty">
                  No contacts in list
                </EmptyContactList>
              ) : (
                <ContactList
                  contacts={filteredContacts}
                  deleteContact={this.deleteContact}
                  className="contactList"
                />
              )}
            </Contacts>
          </PhoneBook>
        </Section>
      </div>
    );
  }
}
