import React from 'react'

const IngredientInfo = ({ name, count, weight, price }) => {
	return (
		<div className='ingredient-info--wrapper'>
			<p className='ingredient__name info-title'>{name.en}</p>
			<p className='ingredient__count'>
				<span className='type'>{'count '.padEnd(10, '-')}</span>
				<span>{`${count}`}</span>
				<span className='unit'>.</span>
			</p>
			<p className='ingredient__weight'>
				<span className='type'>{'weight '.padEnd(10, '-')}</span>
				<span>{`${weight * count}`}</span>
				<span className='unit'>g</span>
			</p>
			<p className='ingredient__price'>
				<span className='type'>{'price '.padEnd(10, '-')}</span>
				<span>{`${price * count}`}</span>
				<span className='unit'>$</span>
			</p>
		</div>
	)
}

export default IngredientInfo
