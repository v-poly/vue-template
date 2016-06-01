/**
 * @file products store
 */

import {
  RECEIVE_PRODUCTS,
  ADD_TO_CART
} from '../mutation-types'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

// initial state
const state = {
  all: []
}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

// mutations
const mutations = {
  [RECEIVE_PRODUCTS] (state, products) {
    state.all = products
  },

  [ADD_TO_CART] (state, productId) {
    state.all.find(p => p.id === productId).inventory--
  }
}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

export default {
  state,
  mutations
}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
