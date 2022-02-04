import React from 'react';
import User from './User.jsx';

class UsersList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sort: null,
    };
  }

  toggleSort = () => {
    const newSort = this.state.sort === 'asc' ? 'desc' : 'asc';
    this.setState({
      sort: newSort,
    });
  };

  render() {
    let usersList;
    if (this.state.sort) {
      usersList = this.props.users
        .slice()
        .sort((a, b) => (this.state.sort === 'asc' ? a.age - b.age : b.age - a.age));
    } else {
      usersList = this.props.users;
    }

    return (
      <div>
        <button className="btn" onClick={this.toggleSort}>
          {this.state.sort || '-'}
        </button>
        <ul className="users">
          {usersList.map(user => (
            <User key={user.name} {...user} />
          ))}
        </ul>
      </div>
    );
  }
}

export default UsersList;
