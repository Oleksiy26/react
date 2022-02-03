// input: pageNumber, prevHandler, nextHandler
// output:jsx
import React from 'react';

const Pagination = props =>{
  // isPrevPageAvalible=
  //  isNextPageAvalible=
return ( <div className="pagination">
    <button className="btn" disabled={props.prevdisabled} onClick={props.prev}>
      ←
    </button>
    <span className="pagination__page">{props.pageNumber}</span>
    <button className="btn" disabled={props.nextdisabled} onClick={props.next}>
      →
    </button>
  </div>
)}

export default Pagination;
