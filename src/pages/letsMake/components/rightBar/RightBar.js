import React from 'react'
import { useSelector } from 'react-redux'

import Total from './components/Total'

import Ingredients from './components/Ingredients'

const RightBar = () => {
	const { price, weight, ingredients } = useSelector(
		({ currentPizza }) => currentPizza
	)

	return (
		<div className='rightbar'>
			<Ingredients ingredients={ingredients} />
			<Total weight={weight} price={price} />
		</div>
	)
}

export default RightBar
