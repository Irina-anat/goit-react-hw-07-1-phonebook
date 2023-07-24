import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "redux/filtersSlices";


export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filters);
  //console.log(filter)
        
  const handleChange = ({ target: { value } }) => {
    const normalizedValue = value.toLowerCase().trim();
    dispatch(setFilter(normalizedValue));
  };
  
  return (
    <label>
      <input
        type="text"
        placeholder="Find contacts by Name"
        value={filter}
        onChange={handleChange} />
    </label>
  );
};








/*

Filter.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default Filter;
*/