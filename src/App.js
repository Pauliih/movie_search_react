import React, { Component } from 'react';
import './App.css';
// importamos bulma
import 'bulma/css/bulma.css';
import { Title } from './components/Title';
import { SearchForm } from './components/SearchForm';
import { MoviesList } from './components/MoviesList';

// 1 Instalamos Bulma: npm install bulma --save --save-exact

class App extends Component {
  // Añadimos un state nuevo usedSearch al componente app que evalue si hemos usado la búsqueda
  state = { usedSearch: false, results: [] }
  // creo método _renderResults
  _handleResults = (results) => {
    // Actualizo el state del componentes con los nuevos results y el state usedSearch a true (ya que usamos el buscador)
    this.setState({results, usedSearch: true})
  }

  _renderResults() {    
    return this.state.results.length === 0
      ? <p> <span role='img' aria-label='emoji'>🤔</span> Sorry! 0 results founded...</p>
    // Renderizamos pasando la prop movies que tendrá como valor el state results donde estan todas las peliculas encontradas
    : <MoviesList movies={this.state.results} />
  }

  render() {
    return (
      <div className="App">
        <Title>Search Movies</Title>
        <div className="SearchForm-wrapper">
          {/* Le pasamos la prop onResults para que ejecute los resultados */}
          <SearchForm onResults={this._handleResults}/>
        </div>
          {/* como al ingresar no hemos buscado una pelicula nos mostrará el mensaje, pero al buscar ejecutará el método _renderResults */}
          {this.state.usedSearch
            ? this._renderResults()
            : <small>Use the form to search a movie</small>
          }        
      </div>
    );
  }
}

export default App;
