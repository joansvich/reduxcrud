import { SHOW_ALL_PRODUCTS } from '../actions/types';

// Cada reducer tiene su propio state

const initialState = {
  products: []
}

export default function (state = initialState, action) {
  switch (action.type) {
    case 'SHOW_ALL_PRODUCTS':
      return {
        ...state,
        products: action.payload
      }
    default: return state;
  }
}