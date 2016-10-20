import React, {Component} from 'react';
import Header from './header';
import Title from './title';
import Footer from './footer';
import Clock from './clock/clock';

export default class Main extends Component {
  render() {
    return (
      <div className="container">
        <Header/>
        <main>
          <Title/>
          <Clock/>
        </main>
        <Footer/>
      </div>
    );
  }
}
