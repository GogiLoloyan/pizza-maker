import React from 'react'
import Header from './components/Header'
import LeftImage from './components/LeftImage'
import RightImage from './components/RightImage'

import { useMouseAxes } from '../../hooks/mouseAxes.hook'

const Home = () => {
	// set precent to reduce mouse move axes
	// 2 -> 2%
	const { ref } = useMouseAxes(2)
	
	return (
		<section className='home' ref={ref}>
			<LeftImage />
			<Header />
			<RightImage />
		</section>
	)
}

export default Home
