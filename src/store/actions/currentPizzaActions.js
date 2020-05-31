import * as types from './actionTypes'

export const choosePizzaBase = base => ({
	type: types.CHOOSE_PIZZA_BASE,
	payload: base
})

export const addIngredient = ing => ({
	type: types.ADD_INGREDIENT,
	payload: ing
})

export const removeIngredient = ing => ({
	type: types.REMOVE_INGREDIENT,
	payload: ing
})

export const clearIngredients = () => ({
	type: types.CLEAR_INGREDIENTS
})

export const clearPizza = () => ({
	type: types.CLEAR_PIZZA
})
