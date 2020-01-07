import React, { Component } from 'react';
import logo from './pan-icon-3.png';
import DataViz from './components/DataViz';
import './App.css';

class App extends Component {
  constructor(props) {
    super();
    this.state = {
    }
  }

  render() {
    const BASE_URL = 'localhost:5000'

    return (
      <main className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt="logo"/>
          <h6 className='App-brand'>dinder</h6>
          <h1 className='App-title'>Match. Cook. Eat.</h1>
        </header>
        <body className='App-body'>
          <DataViz url={BASE_URL}/>
        </body>
        <footer>

        </footer>
      </main>
    );
  }
}

export default App;
