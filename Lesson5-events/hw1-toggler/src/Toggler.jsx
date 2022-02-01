// 1. Задаем начальное состояние кнопки и активирована не активирована
//  текст кнопки Off значит кнопка activeted true
// 2. в обработчике меняем значения на противоположенные On и false соответственно

import React from 'react';

class Toggler extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      btnText: 'Off',
      activated: true,
    };
  }

  toggleBtnText = () => {
    this.setState({
      activated: !this.state.activated,
      btnText: !this.state.activated ? 'Off' : 'On',
    });
  };

  render() {
    return (
      <button className="toggler" onClick={this.toggleBtnText}>
        {this.state.btnText}
      </button>
    );
  }
}

export default Toggler;
