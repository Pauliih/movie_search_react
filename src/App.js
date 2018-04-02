import React, { Component } from 'react';
import './App.css';
// importamos bulma
import 'bulma/css/bulma.css';
import { Title } from './components/Title';
import { SearchForm } from './components/SearchForm';
import { MoviesList } from './components/MoviesList';

// 1 Instalamos Bulma: npm install bulma --save --save-exact

class App extends Component {
  // Inicializamos un state para results como un array vacío
  state = { results: [] }
  // creo método _renderResults
  _handleResults = (results) => {
    // Actualizo el state del componentes con los nuevos results
    this.setState({results})
  }

  render() {
    return (
      <div className="App">
        <Title>Search Movies</Title>
        <div className="SearchForm-wrapper">
          {/* Le pasamos la prop onResults para que ejecute los resultados */}
          <SearchForm onResults={this._handleResults}/>
        </div>
          {this.state.results.length === 0
            ? <p>0 results founded...</p>
            // Le pasamos la prop movies que tendrá como valor el state results donde estan todas las peliculas encontradas
            : <MoviesList movies={this.state.results}/>
          }        
      </div>
    );
  }
}

export default App;
