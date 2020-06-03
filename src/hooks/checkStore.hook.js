import { useState, useEffect } from 'react'

import {
	clearPizza,
	choosePizzaBase
} from '../store/actions/currentPizzaActions'
import { clearOrderedPizzas } from '../store/actions/orderedPizzasActions'
import { Bases } from '../data'
import { useActions } from './actions.hook'
import { loadState } from '../lib/localStorage'

export const useCheckStore = () => {
	const [continueOrder, setContinueOrder] = useState(false)
	const [clearCurrent, chooseCurrentBase, clearOrdered] = useActions([
		clearPizza,
		choosePizzaBase,
		clearOrderedPizzas
	])

	useEffect(() => {
		const state = loadState()
		if (!state) {
			chooseCurrentBase(Bases.standart.values[0])
			return
		}

		const { currentPizza, orderdPizzas } = state
		if (!currentPizza.ingredients.length && !orderdPizzas.pizzas.length) {
			chooseCurrentBase(Bases.standart.values[0])
			return
		}

		const answer = window.confirm(
			"You haven't finished last order!\nDo you want to continue?"
		)

		if (answer) {
			setContinueOrder(true)
			return
		}

		clearCurrent()
		clearOrdered()
		chooseCurrentBase(Bases.standart.values[0])
	}, [])

	return continueOrder
}
