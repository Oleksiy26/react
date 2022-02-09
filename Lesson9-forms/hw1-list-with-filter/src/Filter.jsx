import React from 'react';

const Filter = props => {
  const onChange = event => {
    event.preventDefault();
    const inputText = event.target.value;
    props.onChange(inputText);
  };

  return (
    <div className="filter">
      <span className="filter__count">{props.count}</span>
      <input type="text" className="filter__input" value={props.filterText} onChange={onChange} />
    </div>
  );
};

export default Filter;
