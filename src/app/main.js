import React, {Component} from 'react';
import Header from './component/header';
import Title from './component/title';
import Footer from './component/footer';
import Clock from './component/clock/clock';

export default class Main extends Component {
  render() {
    return (
      <div>
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
