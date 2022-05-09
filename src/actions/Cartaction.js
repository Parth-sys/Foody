


export const addToCart = (pizza, quantity, varient) => (dispatch, getState) => {
  console.log(quantity)

  var cartItem = {

    name: pizza.name,
    id: pizza._id,
    image: pizza.image,
    varient: varient,
    price: pizza.prices,
    Prices: pizza.Prices[0][varient] * quantity,
    quantity: quantity,
  }

  dispatch({ type: 'ADD_TO_CART', payload: cartItem })

  const cartItems = getState().addToCartReducer.cartItems
  localStorage.setItem('cartItems', JSON.stringify(cartItems))

}

export const deleteFromCart=(pizza)=>(dispatch,getState)=>{

  dispatch({type:'DELETE_FROM_CART',payload:pizza})
  const cartItems = getState().addToCartReducer.cartItems
  localStorage.setItem('cartItems', JSON.stringify(cartItems))
}