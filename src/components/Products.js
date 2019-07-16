import React, { Component } from 'react';

import Product from './Product';

// Redux
import { connect } from 'react-redux';
import { showAllProducts } from '../actions/productsActions';

class Products extends Component {

  componentDidMount() {
    this.props.showAllProducts();
  }

  render() {
    const { products } = this.props
    return (
      <>
        <h2 className="text-center my-5">Listado de productos</h2>
        <div className="row justify-content-center">
          <div className="col-md-8">
            <ul>
              {products.map(product => (
                <Product
                  key={product.id}
                  product={product}
                />
              ))}
            </ul>
          </div>
        </div>
      </>
    );
  }
}

// state
const mapStateToProps = state => ({
  products: state.products.products
})

export default connect(mapStateToProps, { showAllProducts })(Products);