import React, { forwardRef } from 'react'
import { useSelector } from 'react-redux'

const Pizza = forwardRef((_, ref) => {
	// destruction ({ base }) was not used here
	// to avoid unnecessary updates
	const base = useSelector(({ currentPizza }) => currentPizza.base)

	return (
		<div className='lets-make__pizza'>
			<div className='pizza'>
				<div className='pizza__base' ref={ref}>
					<p className='info-title drag-text'>Drag and drop</p>
					<span>Base</span>
					<span>{base.name ? base.name.en : ''}</span>
				</div>
			</div>
		</div>
	)
})

export default Pizza
