import React, {Component} from 'react';

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
    alert(this.state.inputMovie)
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
            <button className="button is-info">
              Search
            </button>
          </div>
        </div>
      </form>
    )
  }
}