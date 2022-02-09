import React from 'react';

const Filter = ({ onChange, filterText, count }) => {
  const onInputChange = event => {
    event.preventDefault();
    onChange(event.target.value);
  };

  return (
    <div className="filter">
      <span className="filter__count">{count}</span>
      <input type="text" className="filter__input" value={filterText} onChange={onInputChange} />
    </div>
  );
};

export default Filter;
