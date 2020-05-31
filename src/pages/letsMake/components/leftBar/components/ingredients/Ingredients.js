import React from 'react'

import { motion } from 'framer-motion'

import { anticipate } from '../../../../../../motion/transitions'

import IngredientInfo from './components/IngredientInfo'
import DraggableImage from './components/DraggableImage'

const variants = {
	initial: { opacity: 0, x: '100%' },
	enter: { opacity: 1, x: 0 }
}

const Ingredients = ({ list, onClick }) => {
	return (
		<motion.ul
			initial='initial'
			animate='enter'
			exit='initial'
			variants={variants}
			transition={{ ...anticipate }}
			className='ingredients'
		>
			{list.map(ing => (
				<li key={ing.id} onClick={onClick} className='ingredients__item'>
					<DraggableImage {...ing} />
					<IngredientInfo {...ing} />
				</li>
			))}
		</motion.ul>
	)
}

export default Ingredients
