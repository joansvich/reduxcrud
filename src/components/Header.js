import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary justify-content-between d-flex">
        <h1>
          <Link to={'/'} className="text-light">CRUD - REACT, Redux, REST API & Axios</Link>
        </h1>
        <Link to={'/products/new'} className="btn btn-danger nuevo-post">Nuevo Producto +</Link>
      </nav>
    );
  }
}

export default Header;