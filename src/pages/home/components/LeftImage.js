import React from 'react'

import pizzaHome from '../../../pizza-home.png'
import leave from '../../../leave.png'

const LeftImage = () => {
	return (
		<div className='home__left'>
			<img className='home__left__pizza' src={pizzaHome} alt='pizza' />

			<img className='home__left__leave' src={leave} alt='leave' />
			<img className='home__left__leave' src={leave} alt='leave' />
			<img className='home__left__leave' src={leave} alt='leave' />
		</div>
	)
}

export default LeftImage
