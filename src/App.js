import React, { Component } from 'react';
import './App.css';
// importamos bulma
import 'bulma/css/bulma.css';
import { Title } from './components/Title';
import { SearchForm } from './components/SearchForm';
// 1 Instalamos Bulma: npm install bulma --save --save-exact

class App extends Component {
  // Inicializamos un state para results como un array vacío
  state = { results: [] }
  // creo método _renderResults
  _handleResults = (results) => {
    // Actualizo el state del componentes con los nuevos results
    this.setState({results})
  }

  // Método _renderResults() para devolver el mapeado de cada pelicula del array
  _renderResults() {
    const {results} = this.state;
    return results.map(movie => {
     return <p key={movie.imdbID}>{movie.Title}</p> 
    })
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
            // Creamos un método llamado _renderResults que sólo se ejecuta si tenemos resultados
            : this._renderResults()
          }        
      </div>
    );
  }
}

export default App;
