import React, {Component} from 'react';

export default class Header extends Component {
  render() {
    const currentDate = new Date().toString();

    return (
      <header className="header">
        <p className="title"></p>
        <p className="created-date">
          Created with passion on {currentDate}
        </p>
      </header>
    );
  }
}
