import React from 'react';

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: null,
    };
  }
  componentDidMount() {
    this.fetchUserInfo(this.props.match.params.userId);
  }

  componentDidUpdate(prefProps) {
    if (prefProps.match.params.userId !== this.props.match.params.userId)
      this.fetchUserInfo(this.props.match.params.userId);
  }

  fetchUserInfo = userId => {
    fetch(`https://api.github.com/users/${userId}`)
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        throw new Error();
      })
      .then(userData => {
        this.setState({ userData });
      });
  };

  render() {
    if (!this.state.userData) {
      return null;
    }
    const { name, location, avatar_url: avatarUrl } = this.state.userData;
    return (
      <div className="user">
        <img alt="User Avatar" src={avatarUrl} className="user__avatar" />
        <div className="user__info">
          <span className="user__name">{name}</span>
          <span className="user__location">{location}</span>
        </div>
      </div>
    );
  }
}
export default User;
