import React from 'react'
import { useSelector } from 'react-redux'

const Pizza = () => {
	const { base } = useSelector(({ currentPizza }) => currentPizza)

	return (
		<div className='lets-make__pizza'>
			<div className='pizza'>
				<div className='pizza__base'>
					<span>Base</span>
					<span>{base.name ? base.name.en : ''}</span>
				</div>
			</div>
		</div>
	)
}

export default Pizza
