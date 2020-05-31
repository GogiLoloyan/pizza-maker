import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import uniqid from 'uniqid'

import { Bases } from '../../../../../data'

import {
	clearIngredients,
	choosePizzaBase
} from '../../../../../store/actions/currentPizzaActions'
import { addOrderedPizza } from '../../../../../store/actions/orderedPizzasActions'

import Button from '../../../../../components/Button'

const ResetOrderBtns = () => {
	const dispatch = useDispatch()
	const { currentPizza } = useSelector(store => store)

	const reset = () => {
		dispatch(clearIngredients())
		dispatch(choosePizzaBase(Bases.standart.values[0]))
	}

	const order = () => {
		const message = alert || window.alert
		if (currentPizza.ingredients.length === 0) {
			message(
				"You haven't chosen ingredients!\n...So please choose before order."
			)
			return
		}

		const orderdPizza = { ...currentPizza, id: uniqid('pizza-') }
		dispatch(addOrderedPizza(orderdPizza))
		reset()

		message('Order completed successfully!\nThank you for choosing us.')
	}

	return (
		<div className='btns--wrapper'>
			<Button
				text='reset'
				delay={0.1}
				onClick={reset}
				className='btn-small btn-clr-red btn-reset'
			/>
			<Button
				text='order'
				delay={0.2}
				onClick={order}
				className='btn-small btn-order'
			/>
		</div>
	)
}

export default ResetOrderBtns
