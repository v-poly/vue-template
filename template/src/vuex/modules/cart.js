/**
 * @file cart store
 */
 import {
   ADD_TO_CART,
   CHECKOUT_REQUEST,
   CHECKOUT_SUCCESS,
   CHECKOUT_FAILURE
 } from '../mutation-types'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

 // initial state
 // shape: [{ id, quantity }]
 const state = {
   added: [],
   lastCheckout: null
 }{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

 // mutations
 const mutations = {
   [ADD_TO_CART] (state, productId) {
     state.lastCheckout = null{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
     const record = state.added.find(p => p.id === productId){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
     if (!record) {
       state.added.push({
         id: productId,
         quantity: 1
       }){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
     } else {
       record.quantity++{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
     }
   },

   [CHECKOUT_REQUEST] (state) {
     // clear cart
     state.added = []{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
     state.lastCheckout = null{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
   },

   [CHECKOUT_SUCCESS] (state) {
     state.lastCheckout = 'successful'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
   },

   [CHECKOUT_FAILURE] (state, savedCartItems) {
     // rollback to the cart saved before sending the request
     state.added = savedCartItems{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
     state.lastCheckout = 'failed'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
   }
 }{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

 export default {
   state,
   mutations
 }{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
