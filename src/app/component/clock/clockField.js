import React, {Component} from 'react';

export default class ClockField extends Component {
  static get propTypes() {
    return {
      color: React.PropTypes.string.isRequired,
      active: React.PropTypes.bool.isRequired,
      style: React.PropTypes.object.isRequired
    };
  }

  static get defaultProps() {
    return {
      active: false
    };
  }

  render() {
    const styleClass = `clock-field ${this.props.color} ${this.props.active ? 'active' : 'deactive'}`;

    return (
      <div className={styleClass} style={this.props.style}></div>
    );
  }
}
