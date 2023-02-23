import styled from 'styled-components';
import ContactList from './ContactList';

const ContactListStyled = styled(ContactList)`
  padding: 15px 0;
`;
export default ContactListStyled;

export const EmptyContactList = styled.div`
  color: ${({ theme }) => theme.colors.accent};
  font-size: 25px;
  text-shadow: ${({ theme }) => theme.shadows.fontBlack};
`;
