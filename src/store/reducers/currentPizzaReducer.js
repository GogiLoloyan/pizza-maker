import * as actions from '../actions/actionTypes'

const currentPizza = {
	base: {},
	ingredients: [],
	weight: 0,
	price: 0
}

const currentPizzaReducer = (state = currentPizza, action) => {
	switch (action.type) {
		case actions.CHOOSE_PIZZA_BASE:
			return {
				...state,
				base: action.payload,
				weight:
					state.weight === 0
						? action.payload.weight
						: state.base.id === action.payload.id
						? state.weight
						: state.weight - state.base.weight + action.payload.weight,
				price:
					state.price === 0
						? action.payload.price
						: state.base.id === action.payload.id
						? state.price
						: state.price - state.base.price + action.payload.price
			}
		case actions.ADD_INGREDIENT:
			return {
				...state,
				ingredients: state.ingredients.some(
					({ id }) => id === action.payload.id
				)
					? state.ingredients.map(ing => ({
							...ing,
							count: ing.id === action.payload.id ? ing.count + 1 : ing.count
					  }))
					: [...state.ingredients, { ...action.payload, count: 1 }],

				weight: state.weight + action.payload.weight,
				price: state.price + action.payload.price
			}
		case actions.REMOVE_INGREDIENT:
			return {
				...state,
				ingredients: state.ingredients
					.map(ing => ({
						...ing,
						count: ing.id === action.payload.id ? ing.count - 1 : ing.count
					}))
					.filter(({ count }) => count),

				weight: state.weight - action.payload.weight,
				price: state.price - action.payload.price
			}
		case actions.CLEAR_INGREDIENTS:
			return {
				...state,
				ingredients: [],
				weight: state.base.weight,
				price: state.base.price
			}
		case actions.CLEAR_PIZZA:
			return {
				base: null,
				ingredients: [],
				weight: 0,
				price: 0
			}
		default:
			return state
	}
}

export default currentPizzaReducer
