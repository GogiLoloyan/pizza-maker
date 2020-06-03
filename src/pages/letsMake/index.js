import React, { useRef } from 'react'

import Pizza from './components/pizza/Pizza'
import LeftBar from './components/leftBar/LeftBar'
import RightBar from './components/rightBar/RightBar'
import Draggable, { DragContext } from '../../components/Draggable'

const LetsMake = React.memo(() => {
	const draggableRef = useRef()
	const pizzaRef = useRef()

	console.log('pizza', pizzaRef)

	return (
		<section className='lets-make'>
			<DragContext.Provider value={{ draggableRef, pizzaRef }}>
				<LeftBar />
			</DragContext.Provider>

			<Pizza ref={pizzaRef} />
			<RightBar />

			<Draggable ref={draggableRef} />
		</section>
	)
})

export default LetsMake
