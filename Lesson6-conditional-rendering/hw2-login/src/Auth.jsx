import React from 'react';
import Login from './Login.jsx';
import Logout from './Logout.jsx';
import Spinner from './Spinner.jsx';

class Auth extends React.Component {
  state = {
    isLoggedIn: false,
    isLoading: false,
  };

  handleLoginBtn = () => {
    this.setState({
      isLoading: true,
    });

    setTimeout(() => {
      this.setState({
        isLoading: false,
        isLoggedIn: true,
      });
    }, 2000);
  };

  handleLogoutBtn = () => {
    this.setState({
      isLoggedIn: false,
    });
  };

  render() {
    const { isLoggedIn, isLoading } = this.state;

    if (isLoading) {
      return <Spinner />;
    }
    if (isLoggedIn) {
      return <Logout onLogout={this.handleLogoutBtn} />;
    }
    return <Login onLogin={this.handleLoginBtn} />;
  }
}
export default Auth;
