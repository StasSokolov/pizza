export const addPizzaToCart = pizza => ({
    type: 'ADD_PIZZA_CART',
    payload: pizza
})

export const clearCart = () => ({
    type: 'CLEAR_PIZZA_CART'
})

export const plusCartItem = (id) => ({
    type: 'PLUS_CART_ITEM',
    payload: id
})

export const minusCartItem = (id) => ({
    type: 'MINUS_CART_ITEM',
    payload: id
})

export const deleteCartItem = id => ({
    type: 'DELETE_CART_ITEM',
    payload: id
})