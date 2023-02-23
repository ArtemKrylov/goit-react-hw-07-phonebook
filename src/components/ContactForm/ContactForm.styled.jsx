import styled from 'styled-components';
import ContactForm from './ContactForm';

const ContactFormStyled = styled(ContactForm)`
  & .contactForm__label-text {
    margin-bottom: 5px;
    margin-left: 5px;
    font-weight: 700;
  }
`;

export default ContactFormStyled;
