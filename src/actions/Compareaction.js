export const addToCompare = (pizza, quantity, varient) => (dispatch, getState) => {
    console.log(quantity)
  
    var compareItem = {
  
      name: pizza.name,
      id: pizza._id,
      image: pizza.image,
      varient: varient,
      price: pizza.prices,
      Prices: pizza.Prices[0][varient] * quantity,
      quantity: quantity,
    }
  
    dispatch({ type: 'ADD_TO_COMPARE', payload: compareItem })
  
    const compareItems = getState().addToCompareReducer.compareItems;
    localStorage.setItem('compareItems', JSON.stringify(compareItems))
        
  }