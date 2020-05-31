import { combineReducers } from 'redux'
import currentPizzaReducer from './currentPizzaReducer'
import orderdPizzasReducer from './orderdPizzasReducer'

export default combineReducers({
	currentPizza: currentPizzaReducer,
	orderdPizzas: orderdPizzasReducer
})
