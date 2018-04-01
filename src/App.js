import React, { Component } from 'react';
import './App.css';
// importamos bulma
import 'bulma/css/bulma.css';
import { Title } from './components/Title';
import { SearchForm } from './components/SearchForm';
// 1 Instalamos Bulma: npm install bulma --save --save-exact

class App extends Component {
  render() {
    return (
      <div className="App">
        <Title>Search Movies</Title>
        <div className="SearchForm-wrapper">
          <SearchForm/>
        </div>
      </div>
    );
  }
}

export default App;
