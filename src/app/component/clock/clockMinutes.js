import {Component} from 'react';
import ClockFieldBlock from './clockFieldBlock';

export default class ClockMinutes extends Component {
  static get propTypes() {
    return ClockFieldBlock.propTypes;
  }

  static get defaultProps() {
    return {
      size: 11
    };
  }

  className() {
    return 'clock-minutes';
  }

  calculateLampsToOn() {
    return Math.floor((this.props.data.getMinutes() + 1) / 5);
  }

  render() {
    return ClockFieldBlock.render(this);
  }
}
