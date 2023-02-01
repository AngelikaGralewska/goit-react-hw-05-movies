import { useState } from 'react';
import PropTypes from 'prop-types';
import style from './SerchBar.module.css';

export default function SearchBar({ onChangeQuery }) {
  const [search, setSearch] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    if (search === null) {
      return;
    }
    onChangeQuery(search);
  };

  const handleInputChange = event => {
    setSearch(event.target.value.trim());
  };

  return (
    <>
      <form
        autoComplete="off"
        className={style.searchContainer}
        onSubmit={handleSubmit}
      >
        <p>Enter you're movie name</p>
        <input
          type="text"
          className={style.inputStyle}
          value={search}
          onChange={handleInputChange}
        />
        <button className={style.searchButton} type="submit">
          Search
        </button>
      </form>
    </>
  );
}

SearchBar.propTypes = {
  onChangeQuery: PropTypes.func,
};