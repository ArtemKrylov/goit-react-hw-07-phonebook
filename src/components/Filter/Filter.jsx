import { Input } from 'components/App/App.styled';
import PropTypes from 'prop-types';

export default function Filter({ onFilterInput, className }) {
  const handleFilterChange = ({ target: { value } }) => {
    onFilterInput(value);
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
  onFilterInput: PropTypes.func.isRequired,
  className: PropTypes.string,
};
