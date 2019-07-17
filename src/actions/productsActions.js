import { SHOW_ALL_PRODUCTS, DELETE_PRODUCT, ADD_PRODUCT, SHOW_PRODUCT, EDIT_PRODUCT } from './types';

import axios from 'axios';

export const showAllProducts = () => async dispatch => {
  const res = await axios.get('https://my-json-server.typicode.com/joansvich/db-react-crud/productos');
  dispatch({
    type: SHOW_ALL_PRODUCTS,
    payload: res.data
  })
}

export const showProduct = (id) => async dispatch => {
  const res = await axios.get(`https://my-json-server.typicode.com/joansvich/db-react-crud/productos/${id}`);
  dispatch({
    type: SHOW_PRODUCT,
    payload: res.data
  })
}

export const deleteProduct = id => async dispatch => {
  await axios.delete(`https://my-json-server.typicode.com/joansvich/db-react-crud/productos/${id}`);
  dispatch({
    type: DELETE_PRODUCT,
    payload: id
  })
}

export const addProduct = (product) => async dispatch => {
  const res = await axios.post('https://my-json-server.typicode.com/joansvich/db-react-crud/productos', product);
  dispatch({
    type: ADD_PRODUCT,
    payload: res.data
  })
}

export const editProduct = product => async dispatch => {
  const res = await axios.put(`https://my-json-server.typicode.com/joansvich/db-react-crud/productos/${product.id}`, product);
  dispatch({
    type: EDIT_PRODUCT,
    payload: res.data
  })
}