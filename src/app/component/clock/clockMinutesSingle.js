import {Component} from 'react';
import ClockFieldBlock from './clockFieldBlock';

export default class ClockMinutesSingle extends Component {
  static get propTypes() {
    return ClockFieldBlock.propTypes;
  }

  static get defaultProps() {
    return {
      size: 4,
      singleColor: 'light'
    };
  }

  className() {
    return 'clock-minutes-single';
  }

  calculateLampsToOn() {
    return this.props.data.getMinutes() % 5;
  }

  render() {
    return ClockFieldBlock.render(this);
  }
}
