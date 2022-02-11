import React from 'react';
import SearchBar from './SearchBar.jsx';
import ProductTable from './ProductTable.jsx';

class FilterableProductTable extends React.Component {
  state = {
    filterText: '',
    inStockOnly: false,
  };

  handleFilterTextChange = e => {
    const filterText = e.target.value;
    this.setState({
      filterText,
    });
  };

  handleInStockChange = e => {
    const inStockOnly = e.target.value;
    this.setState({
      inStockOnly,
    });
  };

  render() {
    return (
      <div>
        <SearchBar
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
          onFilterTextChange={this.handleFilterTextChange}
          onInStockChange={this.handleInStockChange}
        />
        <ProductTable
          products={this.props.products}
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
        />
      </div>
    );
  }
}

export default FilterableProductTable;
