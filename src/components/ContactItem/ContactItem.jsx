import { ButtonDelete } from 'components/App/App.styled';
import PropTypes from 'prop-types';

const ContactItem = ({ id, name, number, className, deleteContact }) => {
  const handleClick = evt => {
    deleteContact(evt.target.value);
  };
  return (
    <li className={className}>
      <span className="contactItem__name">{name}:</span>
      <span className="contactItem__number">{number}</span>
      <ButtonDelete
        type="button"
        className="contactItem__button"
        value={id}
        onClick={handleClick}
      >
        Delete
      </ButtonDelete>
    </li>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export default ContactItem;
