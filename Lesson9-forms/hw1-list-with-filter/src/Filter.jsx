import React from 'react';

const Filter = props => {
  const onInputChange = event => {
    event.preventDefault();
    const filterText = event.target.value;
    props.onChange(filterText);
  };

  return (
    <div className="filter">
      <span className="filter__count">{props.count}</span>
      <input
        type="text"
        className="filter__input"
        value={props.filterText}
        onChange={onInputChange}
      />
    </div>
  );
};

export default Filter;
