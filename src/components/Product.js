import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//REDUX
import { connect } from 'react-redux';
import { deleteProduct } from '../actions/productsActions';

class Product extends Component {

  deleteProduct = () => {
    this.props.deleteProduct(this.props.product.id);
  }

  render() {
    const { id, name, price } = this.props.product
    return (
      <li className="list-group-item">
        <div className="row justify-content-between align-items-center">
          <div className="col-md-8 d-flex justify-content-between align-items-center">
            <p className="text-dark m-0">{name}</p>
            <span className="badge badge-warning text-dark">{price} €</span>
          </div>
          <div className="col-md-4 d-flex justify-content-end acciones">
            <Link to={`product/edit/${id}`} className="btn btn-primary mr-2">Editar</Link>
            <button onClick={this.deleteProduct} type="button" className="btn btn-danger">Borrar</button>
          </div>
        </div>
      </li>
    );
  }
}

export default connect(null, { deleteProduct })(Product);