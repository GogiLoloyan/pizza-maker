import * as types from './actionTypes'

export const addOrderedPizza = pizza => ({
	type: types.ADD_ORDERED_PIZZA,
	payload: pizza
})

export const removeOrderedPizza = pizza => ({
	type: types.REMOVE_ORDERED_PIZZA,
	payload: pizza
})

export const clearOrderedPizzas = () => ({
	type: types.CLEAR_ORDERED_PIZZAS
})
