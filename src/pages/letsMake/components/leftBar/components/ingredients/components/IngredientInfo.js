import React from 'react'

const IngredientInfo = ({ name, weight, price, type }) => {
	return (
		<div className='info'>
			<p className='info__name info-title'>{name.en}</p>
			<p className='info__type'>{type.replace(/_/g, ' ')}</p>
			<p className='info__weight'>
				<span className='type'>{'weight '.padEnd(10, '-')}</span>
				<span>{` ${weight}`}</span>
				<span className='unit'>g</span>
			</p>
			<p className='info__price'>
				<span className='type'>{'price '.padEnd(10, '-')}</span>
				<span>{` ${price}`}</span>
				<span className='unit'>$</span>
			</p>
		</div>
	)
}

export default IngredientInfo
