import {Component} from 'react';
import ClockFieldBlock from './clockFieldBlock';

export default class ClockSeconds extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lightOn: false
    };
  }

  static get propTypes() {
    return ClockFieldBlock.propTypes;
  }

  static get defaultProps() {
    return {
      size: 1,
      singleColor: 'light'
    };
  }

  className() {
    return 'clock-seconds';
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      lightOn: this.props.data.getSeconds() === nextProps.data.getSeconds() ?
        this.state.lightOn : !this.state.lightOn
    });
  }

  calculateLampsToOn() {
    return this.state.lightOn ? 1 : 0;
  }

  render() {
    return ClockFieldBlock.render(this);
  }
}
