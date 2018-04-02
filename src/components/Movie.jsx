import React, {Component} from 'react';
import PropTypes from 'prop-types';

export class Movie extends Component {
  // Creo una propiedad estática proptypes que verifique el tipo de las propiedades
  static propTypes = {
    title: PropTypes.string,
    year: PropTypes.string,
    poster: PropTypes.string
  }
  render() {
    // extraemos todas las props y las guardamos 
    const {poster, title, year} = this.props;
    // devolvemos una card con la informacion que rescatamos
    return (
      <div className="card card-css">
        <div className="card-image card-image-css">
          <figure className="image is-4by3">
            <img 
              alt={title}
              src={poster}/>
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-4">{title}</p>
              <p className="subtitle is-6">{year}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}