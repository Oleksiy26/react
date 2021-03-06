import React from 'react';
import User from './User.jsx';
import Filter from './Filter.jsx';

class UsersList extends React.Component {
  state = {
    value: '',
    count: '',
  };

  handleInputChange = event => {
    this.setState({
      value: event.target.value,
      count: this.state.count,
    });
  };

  render() {
    let usersList;
    if (this.state.value) {
      usersList = this.props.users.filter(user =>
        user.name.toLowerCase().includes(this.state.value),
      );
    } else {
      usersList = this.props.users;
    }

    return (
      <div>
        <Filter
          filterText={this.state.value}
          count={usersList.length === 0 ? this.state.count : usersList.length}
          onChange={this.handleInputChange}
        />
        <ul className="users">
          {usersList.map(user => (
            <User key={user.id} {...user} />
          ))}
        </ul>
      </div>
    );
  }
}

export default UsersList;
