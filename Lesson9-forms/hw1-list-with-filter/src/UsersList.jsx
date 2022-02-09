import React from 'react';
import User from './User.jsx';
import Filter from './Filter.jsx';

class UsersList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      count: null,
    };
  }

  onChange = inputValue => {
    this.setState({
      value: inputValue,
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
        <Filter filterText={this.state.value} count={usersList.length} onChange={this.onChange} />
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
