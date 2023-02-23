import ContactItem from 'components/ContactItem';
import PropTypes from 'prop-types';

export default function ContactList({
  contacts,
  filter,
  deleteContact,
  className,
}) {
  contacts =
    filter === ''
      ? contacts
      : contacts.filter(contact =>
          contact.name.toLowerCase().includes(filter.toLowerCase())
        );

  return (
    <ul className={className}>
      {contacts.length !== 0 ? (
        contacts.map(({ id, name, number }) => (
          <ContactItem
            key={id}
            id={id}
            name={name}
            number={number}
            deleteContact={deleteContact}
            className="contactItem"
          />
        ))
      ) : (
        <p className="contactList__empty">No contacts in list</p>
      )}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
      className: PropTypes.string,
    })
  ),
  filter: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
