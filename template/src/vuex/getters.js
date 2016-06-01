/**
 * All shared getters
 */
export const cartProducts = state => {
  return state.cart.added.map(({ id, quantity }) => {
    const product = state.products.all.find(p => p.id === id){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
    return {
      title: product.title,
      price: product.price,
      quantity
    }{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  }){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
