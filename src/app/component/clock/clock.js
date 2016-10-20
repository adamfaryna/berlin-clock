import React, {Component} from 'react';
import ClockHours from './clockHours';
import ClockHoursSingle from './clockHoursSingle';
import ClockMinutes from './clockMinutes';
import ClockMinutesSingle from './clockMinutesSingle';
import ClockSeconds from './clockSeconds';
import Timer from '../../service/timer';

export default class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: new Date()
    };
  }

  componentWillMount() {
    Timer.bind('change', date => {
      this.setState({data: date});
    });

    Timer.start();
  }

  componentWillUnmount() {
    Timer.stop();
    Timer.unbind('change');
  }

  render() {
    return (
      <div className="clock">
        <ClockSeconds data={this.state.data}/>
        <ClockHours data={this.state.data}/>
        <ClockHoursSingle data={this.state.data}/>
        <ClockMinutes data={this.state.data}/>
        <ClockMinutesSingle data={this.state.data}/>
      </div>
    );
  }
}
