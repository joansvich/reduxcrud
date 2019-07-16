import React, { Component } from 'react';

class Product extends Component {
  render() {
    return (
      <li className="list-group-item">
        <div className="row justify-content-between align-items-center">
          <div className="col-md-8">
            1
          </div>
          <div className="col-md-4">
            2
          </div>
        </div>
      </li>
    );
  }
}

export default Product;