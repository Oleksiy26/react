import React from 'react';

const Filter = props => {
  const { onChange } = props;
  const onInputChange = event => {
    event.preventDefault();
    const inputText = event.target.value;
    onChange(inputText);
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
