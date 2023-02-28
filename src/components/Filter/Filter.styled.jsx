import styled from 'styled-components';
import Filter from './Filter';

const FilterStyled = styled(Filter)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  & .label-text {
    margin-bottom: 5px;
    margin-left: 5px;
    font-weight: 700;
  }
`;
export default FilterStyled;
