import { Button, Input } from 'components/App/App.styled';
import PropTypes from 'prop-types';
import { useState } from 'react';

export default function ContactForm({ className, onSubmit }) {
  // state = {
  //   name: '',
  //   number: '',
  // };
  const [contact, setContact] = useState({ name: '', number: '' });
  const { name, number } = contact;

  const handleInputChange = ({ target: { name, value } }) => {
    setContact({ ...contact, [name]: value });
  };

  const prettifyName = name => {
    return name
      .split(' ')
      .map(el => el[0].toUpperCase() + el.slice(1))
      .join(' ');
  };

  const reset = () => {
    setContact({
      name: '',
      number: '',
    });
  };

  const handleFormSubmit = evt => {
    evt.preventDefault();
    const namePrettified = prettifyName(name);
    onSubmit({ name: namePrettified, number });
    reset();
  };

  return (
    <form className={className} onSubmit={handleFormSubmit}>
      <label>
        <p className="contactForm__label-text">Name</p>
        <Input
          type="text"
          className="contactForm__input"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleInputChange}
          placeholder="Enter your name"
          autoFocus
        />
      </label>
      <label>
        <p className="contactForm__label-text">Number</p>
        <Input
          type="tel"
          className="contactForm__input"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleInputChange}
          placeholder="Enter your phone number"
        />
      </label>
      <Button type="submit" className="contactForm__button">
        Add contact
      </Button>
    </form>
  );
}

ContactForm.defaultProps = {
  className: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
};
