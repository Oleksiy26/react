import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Expand extends React.Component {
  state = {
    isVisible: false,
    rotation: 180,
  };

  toggleExpandText = () => {
    this.setState({
      isVisible: !this.state.isVisible,
      rotation: !this.state.isVisible ? 0 : 180,
    });
  };

  render() {
    const { isVisible, rotation } = this.state;
    return (
      <div className="app">
        <div className="expand border">
          <div className="expand__header">
            <span className="expand__title">{this.props.title}</span>
            <button className="expand__toggle-btn" onClick={this.toggleExpandText}>
              <FontAwesomeIcon icon="fas fa-chevron-up" rotation={rotation} />
            </button>
          </div>
          {isVisible ? (
            <div className="expand__content">
              {' '}
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
