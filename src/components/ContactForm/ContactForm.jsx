import { Button, Input } from 'components/App/App.styled';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class ContactForm extends Component {
  static defaultProps = {
    className: PropTypes.string,
    onSubmit: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
  };

  state = {
    name: '',
    number: '',
  };

  handleInputChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  prettifyName(name) {
    return name
      .split(' ')
      .map(el => el[0].toUpperCase() + el.slice(1))
      .join(' ');
  }

  handleFormSubmit = evt => {
    const { name, number } = this.state;
    evt.preventDefault();
    const namePrettified = this.prettifyName(name);
    this.props.onSubmit({ name: namePrettified, number });
    this.reset();
  };

  reset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    const { className } = this.props;
    const { name, number } = this.state;
    return (
      <form className={className} onSubmit={this.handleFormSubmit}>
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
            onChange={this.handleInputChange}
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
            onChange={this.handleInputChange}
            placeholder="Enter your phone number"
          />
        </label>
        <Button type="submit" className="contactForm__button">
          Add contact
        </Button>
      </form>
    );
  }
}
