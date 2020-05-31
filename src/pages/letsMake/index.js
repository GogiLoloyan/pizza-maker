import React from 'react'

import Pizza from './components/pizza/Pizza'
import LeftBar from './components/leftBar/LeftBar'
import RightBar from './components/rightBar/RightBar'

const LetsMake = () => {
	return (
		<section className='lets-make'>
			<LeftBar />
			<Pizza />
			<RightBar />
		</section>
	)
}

export default LetsMake
