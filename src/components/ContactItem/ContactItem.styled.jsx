import styled from 'styled-components';
import ContactItem from './ContactItem';

const ContactItemStyled = styled(ContactItem)`
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 5px 0;
  border-bottom: 1px dotted ${({ theme }) => theme.colors.accent};

  & .contactItem__name {
    margin-right: auto;
    font-weight: 600;
  }
  & .contactItem__number {
    margin-right: 5px;
    font-style: italic;
  }
`;
export default ContactItemStyled;
