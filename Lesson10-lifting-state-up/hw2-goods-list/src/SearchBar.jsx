import React from 'react';

// class SearchBar extends React.Component {
//   handleFilterTextChange = e => {
//     this.props.onFilterTextChange(e.target.value);
//   };

//   handleInStockChange = e => {
//     this.props.onInStockChange(e.target.checked);
//   };

//   render() {
//     return (
//       <form>
//         <input
//           type="text"
//           placeholder="Search..."
//           value={this.props.filterText}
//           onChange={this.handleFilterTextChange}
//         />
//         <p>
//           <input
//             type="checkbox"
//             checked={this.props.inStockOnly}
//             onChange={this.handleInStockChange}
//           />{' '}
//           Only show products in stock
//         </p>
//       </form>
//     );
//   }
// }

// -------------------------------------refactored-----------------------------------

const SearchBar = ({ filterText, inStockOnly, onFilterTextChange, onInStockChange }) => (
  <form>
    <input type="text" placeholder="Search..." value={filterText} onChange={onFilterTextChange} />
    <p>
      <input type="checkbox" checked={inStockOnly} onChange={onInStockChange} /> Only show products
      in stock
    </p>
  </form>
);
export default SearchBar;
