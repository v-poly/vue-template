/**
 * @file All shared actions
 */

// import shop from '../api/shop'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import * as types from './mutation-types'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

export const addToCart = ({ dispatch }, product) => {
  if (product.inventory > 0) {
    dispatch(types.ADD_TO_CART, product.id){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  }
}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

export const checkout = ({ dispatch, state }, products) => {
  const savedCartItems = [...state.cart.added]{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  dispatch(types.CHECKOUT_REQUEST){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  // shop.buyProducts(
  //   products,
  //   () => dispatch(types.CHECKOUT_SUCCESS),
  //   () => dispatch(types.CHECKOUT_FAILURE, savedCartItems)
  // ){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

export const getAllProducts = ({ dispatch }) => {
  shop.getProducts(products => {
    dispatch(types.RECEIVE_PRODUCTS, products){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  }){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
