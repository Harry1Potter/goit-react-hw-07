// components/SearchBox/SearchBox.jsx
import React from 'react';
import { useId } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter, setFilterValue } from '../../redux/filtersSlice';

const SearchBox = () => {
  const searchInputId = useId();
  const dispatch = useDispatch();
  const filterValue = useSelector(selectFilter);

  const handleFilterChange = (event) => {
    dispatch(setFilterValue(event.target.value));
  };

  return (
    <div>
      <label htmlFor={searchInputId}>Find contacts by name</label>
      <input
        type="text"
        id={searchInputId}
        value={filterValue}
        onChange={handleFilterChange}
      />
    </div>
  );
};

export default SearchBox;
