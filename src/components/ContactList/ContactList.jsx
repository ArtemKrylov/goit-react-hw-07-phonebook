import ContactItem from 'components/ContactItem';
import PropTypes from 'prop-types';

export default function ContactList({ contacts, deleteContact, className }) {
  return (
    <ul className={className}>
      {contacts.map(({ id, name, number }) => (
        <ContactItem
          key={id}
          id={id}
          name={name}
          number={number}
          deleteContact={deleteContact}
          className="contactItem"
        />
      ))}
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
  deleteContact: PropTypes.func.isRequired,
};
