import {Component} from 'react';
import ClockFieldBlock from './clockFieldBlock';

export default class ClockHoursSingle extends Component {
  static get propTypes() {
    return ClockFieldBlock.propTypes;
  }

  static get defaultProps() {
    return {
      size: 4,
      singleColor: 'dark'
    };
  }

  className() {
    return 'clock-hours-single';
  }

  calculateLampsToOn() {
    return this.props.data.getHours() % 5;
  }

  render() {
    return ClockFieldBlock.render(this);
  }
}
