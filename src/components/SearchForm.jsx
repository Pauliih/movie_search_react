import React, {Component} from 'react';

const API_KEY ='189b9b4d';
export class SearchForm extends Component {
  // Guardaremos lo que escribimos en el input
  state = {
    inputMovie: ''
  }

  // Creamos el método en la clase de nuestro componente
  _handleChange = (event) => {
    // Actualizo el state de mi componente
    this.setState({ inputMovie: event.target.value })
  }

  _handleSubmit = (event) => {
    // evitamos el evento de submit
    event.preventDefault()
    // extraer inputMovie del state del metodo anterior
    const { inputMovie } = this.state;
    // Petición con fetch a API omdb rescatando el valor que escribe el usuario en el input del buscador
    fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${inputMovie}`)
    // Devuelvo una promesa - transformo la respuesta a json
    .then(response => response.json())
    // se devuelve otra promesa
    .then(results => {
      // Extraemos la propiedad Search
      // Destructuring (results.Search y results.totalResults)
      const { Search = [], totalResults = ''} = results;
      console.log({Search, totalResults})
      // propiedad Search con resultados que tendrá el metodo que actualice el state en App.js
      this.props.onResults(Search);
    })
  }

  render() {
    return (
      <form onSubmit={this._handleSubmit}>
        <div className="field has-addons">
          <div className="control">
            <input 
              className="input"
              onChange={this._handleChange}
              type="text" 
              placeholder="Movie to search" />
          </div>
          <div className="control">
            <button className="button btn-search">
              Search
            </button>
          </div>
        </div>
      </form>
    )
  }
}