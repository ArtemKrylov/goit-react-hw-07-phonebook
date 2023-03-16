import ContactItem from 'components/ContactItem';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { getFilteredContacts } from 'redux/selectors';

export default function ContactList({ className }) {
  const contacts = useSelector(getFilteredContacts);
  return (
    <ul className={className}>
      {contacts.map(({ id, name, number }) => (
        <ContactItem
          key={id}
          id={id}
          name={name}
          number={number}
          className="contactItem"
        />
      ))}
    </ul>
  );
}
ContactList.propTypes = {
  className: PropTypes.string.isRequired,
};
