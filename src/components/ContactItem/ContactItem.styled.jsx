import styled from 'styled-components';
import ContactItem from './ContactItem';

const ContactItemStyled = styled(ContactItem)`
  display: flex;
  align-items: center;
  gap: 5px;
  margin-bottom: 5px;

  & .contactItem__name {
    font-weight: 600;
  }
  & .contactItem__number {
    font-style: italic;
  }
`;
export default ContactItemStyled;
