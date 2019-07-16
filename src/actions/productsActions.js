import { SHOW_ALL_PRODUCTS } from './types';

import axios from 'axios';

export const showAllProducts = () => async dispatch => {
  const res = await axios.get('http://localhost:5000/productos');
  dispatch({
    type: SHOW_ALL_PRODUCTS,
    payload: res.data
  })
}