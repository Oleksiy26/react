import React from 'react';
import Login from './Login.jsx';
import Logout from './Logout.jsx';
import Spinner from './Spinner.jsx';

// algo
// 1 Show LOggin by default
// 1. after Login click -show Spinner for 2 sec
// 2. after 2 sec show LOgout

class Auth extends React.Component {
  //  isLoggedIn boolean
  //  isLoging boolean

  state = {
    isLoggedIn: false,
    isLoading: false,
  };

  handleLOginClick = () => {
    this.setState({ isLoading: true });
    setTimeout(() => {
      isLoading = false;
    }, 2000);
  };

  render() {
    return <Login />;
  }
}

export default Auth;

// REACT APPROACH
// 0. make a layout
// 1. split on components
// 2. static version in react
// 3. declare state and props
