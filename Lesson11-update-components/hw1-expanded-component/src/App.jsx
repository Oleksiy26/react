import React from 'react';
import Expand from './Expand.jsx';

class App extends React.Component {
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
    return (
      <div className="app">
        <Expand
          title="Some title"
          rotation={this.state.rotation}
          isVisible={this.state.isVisible}
          onExpand={this.toggleExpandText}
        >
          <p>
            Hooks are a new addition in React 16.8. They let you use state and other React features
            without writing a class.
          </p>
        </Expand>
      </div>
    );
  }
}

export default App;
