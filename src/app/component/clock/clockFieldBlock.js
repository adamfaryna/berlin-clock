import React from 'react';
import ClockField from './clockField';

const shouldLightTheLamp = lampsToTurnOn => {
  return lampsToTurnOn > 0;
};

export default class ClockFieldBlock {
  static get propTypes() {
    return {
      size: React.PropTypes.number.isRequired,
      data: React.PropTypes.object.isRequired,
      singleColor: React.PropTypes.string
    };
  }

  static render(caller) {
    const fields = [];
    let lampsToTurnOn = caller.calculateLampsToOn();

    for (let i = 0; i !== caller.props.size; i++, lampsToTurnOn--) {
      let color;
      if (caller.props.singleColor) {
        color = caller.props.singleColor;
      } else if ((i + 1) % 3 === 0) {
        color = 'dark';
      } else {
        color = 'light';
      }

      const style = {
        width: `${100 / caller.props.size}%`
      };

      fields[i] = <ClockField key={i} color={color} active={shouldLightTheLamp(lampsToTurnOn)} style={style}/>;
    }

    const styleClass = `clock-field-block ${caller.className()}`;

    return (
      <div className={styleClass}>
        {fields}
      </div>
    );
  }
}
