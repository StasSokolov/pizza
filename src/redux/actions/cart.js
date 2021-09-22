export const addPizzaToCart = pizza => ({
    type: 'ADD_PIZZA_CART',
    payload: pizza
})

export const clearCart = () => ({
    type: 'CLEAR_PIZZA_CART'
})

export const deleteCartItem = id => ({
    type: 'DELETE_CART_ITEM',
    payload: id
})