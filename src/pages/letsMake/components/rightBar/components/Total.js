import React from 'react'

const Total = ({ weight, price }) => {
	return (
		<div className='total'>
			<h4 className='total__name info-title'>Total</h4>
			<p className='total__weight'>
				<span className='type'>{'weight '.padEnd(10, '-')}</span>
				<span>{`${weight}`}</span>
				<span className='unit'>g</span>
			</p>
			<p className='total__price'>
				<span className='type'>{'price '.padEnd(10, '-')}</span>
				<span>{`${price}`}</span>
				<span className='unit'>$</span>
			</p>
		</div>
	)
}

export default Total
