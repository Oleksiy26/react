import React from 'react';

const scaleNames = {
  c: 'Цельсия',
  f: 'Фаренгейта',
};
// ----------------------------before refactor----------------
// class TemperatureInput extends React.Component {
//   render() {
//     const { temperature, scale } = this.props;
//     return (
//       <fieldset>
//         <legend>Введите градусы по шкале {scaleNames[scale]}:</legend>
//         <input value={temperature} onChange={this.props.onTemperatureChange} />
//       </fieldset>
//     );
//   }
// }

// ----------------------------refactored----------------

const TemperatureInput = ({ scale, temperature, onTemperatureChange }) => (
  <fieldset>
    <legend>Введите градусы по шкале {scaleNames[scale]}:</legend>
    <input value={temperature} onChange={onTemperatureChange} />
  </fieldset>
);

export default TemperatureInput;
