import React from 'react';
import Pagination from './Pagination.jsx';
import UsersList from './UsersList.jsx';

class App extends React.Component {
  users = [
    { id: 1, name: 'Bob', age: 21 },
    { id: 2, name: 'Sam', age: 45 },
    { id: 3, name: 'Con', age: 22 },
    { id: 4, name: 'Man', age: 55 },
    { id: 5, name: 'Boy', age: 55 },
    { id: 6, name: 'Her', age: 31 },
    { id: 7, name: 'Hernandes', age: 48 },
    { id: 8, name: 'Alice', age: 45 },
    { id: 9, name: 'Tom', age: 85 },
    { id: 10, name: 'Sem', age: 75 },
  ];

  state = {
    pageNumber: 1,
    prevdisabled: true,
    nextdisabled: false,
    usersCount: Math.ceil(this.users.length / 3),
  };

  prevBtnHandler = () => {
    this.setState({
      pageNumber: this.state.pageNumber - 1,
      prevdisabled: this.state.pageNumber === 2,
      nextdisabled: false,
    });
  };

  nextBtnHandler = () => {
    this.setState({
      pageNumber: this.state.pageNumber + 1,
      prevdisabled: false,
      nextdisabled: this.state.usersCount === this.state.pageNumber + 1,
    });
  };

  render() {
    const { pageNumber } = this.state;
    const itemsPerPage = 3;
    const startIndex = (pageNumber - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const usersToRender = this.users.slice(startIndex, endIndex);

    return (
      <div>
        <Pagination
          pageNumber={this.state.pageNumber}
          prev={this.prevBtnHandler}
          next={this.nextBtnHandler}
          itemsPerPage={3}
          prevdisabled={this.state.prevdisabled}
          nextdisabled={this.state.nextdisabled}
        />
        <UsersList users={usersToRender} />
      </div>
    );
  }
}
// Pagenumber

export default App;
