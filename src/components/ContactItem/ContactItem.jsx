import { ButtonDelete } from 'components/App/App.styled';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';

export default function ContactItem({ id, name, number, className }) {
  const dispatch = useDispatch();
  const handleClick = evt => {
    dispatch(deleteContact(id));
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
}

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  className: PropTypes.string,
};
