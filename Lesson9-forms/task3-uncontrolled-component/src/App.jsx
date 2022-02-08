import React from 'react';
import UserForm from './UserForm.jsx';

class App extends React.Component {
  createUser = user => {
    console.log(user);
  };

  render() {
    return <UserForm method={this.createUser} />;
  }
}
export default App;
