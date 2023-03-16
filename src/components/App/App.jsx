import ContactList from 'components/ContactList';
import Filter from 'components/Filter';
import Section from 'components/Section';
import { GlobalStyle } from '../GlobalStyle';
import ContactForm from 'components/ContactForm';
import { Contacts, PhoneBook } from './App.styled';
import { EmptyContactList } from 'components/ContactList/ContactList.styled';
import { useSelector } from 'react-redux';
import { getFilteredContacts } from 'redux/selectors';

export default function App() {
  const filteredContacts = useSelector(getFilteredContacts);

  return (
    <div className="app">
      <GlobalStyle />

      <Section title="Phonebook">
        <PhoneBook>
          <div className="contactForm-wrapper">
            <ContactForm className="contactForm" />
          </div>

          <Contacts className="contacts">
            <h2 className="contacts__subtitle">Contacts</h2>
            <Filter className="filter" />
            {}
            {filteredContacts.length === 0 ? (
              <EmptyContactList className="contactList__empty">
                No contacts in list
              </EmptyContactList>
            ) : (
              <ContactList className="contactList" />
            )}
          </Contacts>
        </PhoneBook>
      </Section>
    </div>
  );
}
