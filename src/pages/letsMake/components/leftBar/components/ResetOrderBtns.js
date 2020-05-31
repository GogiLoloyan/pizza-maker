import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import uniqid from 'uniqid'

import {
	clearIngredients,
	choosePizzaBase
} from '../../../../../store/actions/currentPizzaActions'
import { addOrderedPizza } from '../../../../../store/actions/orderedPizzasActions'

import Button from '../../../../../components/Button'

const ResetOrderBtns = ({ data }) => {
	const dispatch = useDispatch()
	const { currentPizza } = useSelector(store => store)

	const reset = () => {
		dispatch(clearIngredients())
		dispatch(choosePizzaBase(data[0].standart.values[0]))
	}

	const order = () => {
		const orderdPizza = { ...currentPizza, id: uniqid('pizza-') }
		dispatch(addOrderedPizza(orderdPizza))
		reset()
		window.alert('Order completed successfully!\nThank you for choosing us.')
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
