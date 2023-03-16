import { Input } from 'components/App/App.styled';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/slices/filterSlice';

export default function Filter({ onFilterInput, className }) {
  const dispatch = useDispatch();
  const handleFilterChange = ({ target: { value } }) => {
    dispatch(setFilter(value));
  };

  return (
    <label className={className}>
      <p className="label-text">Find contacts by name</p>
      <Input
        placeholder="Enter a name to search"
        onChange={handleFilterChange}
      ></Input>
    </label>
  );
}

Filter.propTypes = {
  className: PropTypes.string,
};
