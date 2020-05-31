import * as actions from '../actions/actionTypes'

const orderdPizzas = {
	pizzas: [],
	totalPrice: 0,
	totalWeight: 0
}

const orderdPizzasReducer = (state = orderdPizzas, action) => {
	switch (action.type) {
		case actions.ADD_ORDERED_PIZZA:
			return {
				...state,
				pizzas: [...state.pizzas, action.payload],
				totalPrice: state.totalPrice + action.payload.price,
				totalWeight: state.totalWeight + action.payload.weight
			}
		case actions.REMOVE_ORDERED_PIZZA:
			return {
				...state,
				pizzas: state.pizzas.filter(({ id }) => id !== action.payload.id),
				totalPrice: state.totalPrice - action.payload.price,
				totalWeight: state.totalWeight - action.payload.weight
			}
		case actions.CLEAR_ORDERED_PIZZAS:
			return {
				pizzas: [],
				totalPrice: 0,
				totalWeight: 0
			}
		default:
			return state
	}
}

export default orderdPizzasReducer
