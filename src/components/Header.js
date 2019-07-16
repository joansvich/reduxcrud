import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary justify-content-between d-flex">
        <h1>
          CRUD - REACT, Redux, REST API & Axios
        </h1>
        <button type="button" className="btn btn-danger nuevo-post">Agregar Producto +</button>
      </nav>
    );
  } 
}

export default Header;