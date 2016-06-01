/**
 * @file App single store
 */
import Vuex from 'vuex'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import cart from './modules/cart'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import products from './modules/products'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

export default new Vuex.Store({
  // combine sub modules
  modules: {
    cart,
    products
  }
}){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
