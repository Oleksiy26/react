import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Expand extends React.Component {
  state = {
    isVisible: false,
  };

  toggleExpandText = e => {
    const arrowDirection = e.target;

    if (arrowDirection.getAttribute('data-icon') === 'chevron-down') {
      arrowDirection.setAttribute('data-icon', 'chevron-up');
    } else {
      arrowDirection.setAttribute('data-icon', 'chevron-down');
    }

    this.setState({
      isVisible: !this.state.isVisible,
    });
  };

  render() {
    const { isVisible } = this.state;
    return (
      <div className="app">
        <div className="expand border">
          <div className="expand__header">
            <span className="expand__title">{this.props.title}</span>
            <button className="expand__toggle-btn" onClick={this.toggleExpandText}>
              <i className="fas fa-chevron-down"></i>
            </button>
          </div>
          {isVisible ? (
            <div className="expand__content">
              <p>
                Hooks are a new addition in React 16.8. They let you use state and other React
                features without writing a class.
              </p>
            </div>
          ) : (
            <div className="expand__content"></div>
          )}
        </div>
      </div>
    );
  }
}

export default Expand;
