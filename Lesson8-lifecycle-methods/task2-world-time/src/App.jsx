import React from 'react';
import Clock from './Clock.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: true,
    };
  }

  toggle = () => {
    this.setState({
      visible: !this.state.visible,
    });
  };

  render() {
    return (
      <div className="wrapper">
        <button className="btn" onClick={this.toggle}>
          Toggle
        </button>
        {this.state.visible && (
          <>
            <Clock location="Chicago" offset={-6} />
            <Clock location="Kyiv" offset={+2} />
            <Clock location="London" offset={0} />
          </>
        )}
      </div>
    );
  }
}

export default App;
