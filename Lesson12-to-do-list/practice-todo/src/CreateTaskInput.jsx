import React from 'react';
import PropTypes from 'prop-types';

class CreateTaskInput extends React.Component {
  state = {
    value: '',
  };

  handeleChange = event => {
    this.setState({
      value: event.target.value,
    });
  };

  handleTaskCreate = () => {
    this.props.onCreate(this.state.value);
    this.setState({
      value: '',
    });
  };

  render() {
    return (
      <div className="create-task">
        <input
          type="text"
          className="create-task__input"
          value={this.state.value}
          onChange={this.handeleChange}
        />
        <button className="btn" onClick={this.handleTaskCreate}>
          Create
        </button>
      </div>
    );
  }
}

CreateTaskInput.propTypes = {
  onCreate: PropTypes.func.isRequired,
};

export default CreateTaskInput;