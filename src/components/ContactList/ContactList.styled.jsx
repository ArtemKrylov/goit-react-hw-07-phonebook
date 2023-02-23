import styled from 'styled-components';
import ContactList from './ContactList';

const ContactListStyled = styled(ContactList)`
  padding: 15px 0;
  & .contactList__empty {
    color: ${({ theme }) => theme.colors.accent};
    font-size: 25px;
    text-shadow: ${({ theme }) => theme.shadows.fontBlack};
  }
`;
export default ContactListStyled;
