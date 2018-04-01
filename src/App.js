import React, { Component } from 'react';
import './App.css';
// importamos bulma
import 'bulma/css/bulma.css';
import { Title } from './components/Title';
// 1 Instalamos Bulma: npm install bulma --save --save-exact

class App extends Component {
  render() {
    return (
      <div className="App">
        <Title>Search Movies</Title>
      </div>
    );
  }
}

export default App;
