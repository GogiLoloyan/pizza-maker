import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {
	clearPizza,
	choosePizzaBase
} from '../store/actions/currentPizzaActions'
import { clearOrderedPizzas } from '../store/actions/orderedPizzasActions'
import { Bases } from '../data'

export const useCheckStore = () => {
	const dispatch = useDispatch()
	const [continueOrder, setContinueOrder] = useState(false)
	const { currentPizza, orderdPizzas } = useSelector(state => state)

	useEffect(() => {
		if (!currentPizza.ingredients.length && !orderdPizzas.pizzas.length) {
			dispatch(choosePizzaBase(Bases.standart.values[0]))
			return
		}

		const answer = window.confirm(
			"You haven't finished last order!\nDo you want to continue?"
		)

		if (answer) {
			setContinueOrder(true)
			return
		}

		dispatch(clearPizza())
		dispatch(clearOrderedPizzas())
		dispatch(choosePizzaBase(Bases.standart.values[0]))
	}, [])

	return { continueOrder }
}
