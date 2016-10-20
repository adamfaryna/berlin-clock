import {Component} from 'react';
import ClockFieldBlock from './clockFieldBlock';

export default class ClockHours extends Component {
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
    return 'clock-hours';
  }

  calculateLampsToOn() {
    return Math.floor((this.props.data.getHours() + 1) / 5);
  }

  render() {
    return ClockFieldBlock.render(this);
  }
}
