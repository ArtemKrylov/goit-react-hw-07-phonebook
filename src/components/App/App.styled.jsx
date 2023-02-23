import styled from 'styled-components';

export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-right: 20px;
  padding-left: 20px;
  width: 320px;
  max-width: 100%;

  ${props => props.theme.media.tablet} {
    width: 768px;
    padding-right: 32px;
    padding-left: 32px;
  }

  ${props => props.theme.media.desktop} {
    width: 1024px;
  }
`;

export const Contacts = styled.div`
  & .contacts__subtitle {
    margin-bottom: 15px;
    text-align: center;
  }
`;

export const PhoneBook = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 25px;

  ${props => props.theme.media.tablet} {
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-around;
    gap: 0;
  }
`;

export const Button = styled.button`
  display: block;
  margin-top: 10px;
  margin-left: auto;
  margin-right: auto;
  padding: 10px;

  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: ${({ theme }) => theme.shadows.boxDark};
  color: ${({ theme }) => theme.colors.accent};
  text-shadow: ${({ theme }) => theme.shadows.fontAccent};

  transition: box-shadow ${({ theme }) => theme.cubic},
    transform ${({ theme }) => theme.cubic};

  &:hover,
  &:focus,
  &:active {
    transform: translate(1px, 1px);
    box-shadow: ${({ theme }) => theme.shadows.boxAccent};
  }

  &:active {
    transform: translate(2px, 2px);
  }

  ${props => props.theme.media.tablet} {
    margin-left: 0;
    margin-right: 0;
  }
`;

export const ButtonDelete = styled(Button)`
  display: inline-block;
  margin-top: 0;
  margin-left: auto;
  padding: 3px;
`;

export const Input = styled.input`
  margin-bottom: 15px;
  padding: 7px;

  border-radius: ${({ theme }) => theme.borderRadius};

  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.accent};

  transition: box-shadow ${({ theme }) => theme.cubic};
  cursor: pointer;

  &::placeholder {
    color: ${({ theme }) => theme.colors.white};
  }

  &:hover,
  &:focus {
    box-shadow: ${({ theme }) => theme.shadows.boxDarkHover};
  }
`;
