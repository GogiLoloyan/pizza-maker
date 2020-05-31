import React from 'react'
import { useDispatch } from 'react-redux'
import { AnimatePresence, motion } from 'framer-motion'

import {
	addIngredient,
	removeIngredient
} from '../../../../../store/actions/currentPizzaActions'

import { translateX } from '../../../../../motion/variants'
import { anticipate } from '../../../../../motion/transitions'

import InDeCrease from './InDeCrease'
import IngredientInfo from './IngredientInfo'
import IngredientImage from './IngredientImage'

const Ingredients = ({ ingredients }) => {
	const dispatch = useDispatch()

	const increase = ing => {
		dispatch(addIngredient(ing))
	}

	const decrease = ing => {
		dispatch(removeIngredient(ing))
	}

	return (
		<div className='ingredients--wrapper'>
			<ul className='ingredients'>
				<AnimatePresence>
					{ingredients.map(ing => (
						<motion.li
							key={ing.id}
							initial='initial'
							animate='enter'
							exit='initial'
							variants={translateX}
							transition={{ ...anticipate }}
							className='ingredient'
						>
							<InDeCrease
								increase={() => increase(ing)}
								decrease={() => decrease(ing)}
							/>
							<IngredientInfo {...ing} />
							<IngredientImage />
						</motion.li>
					))}
				</AnimatePresence>
			</ul>
		</div>
	)
}

export default Ingredients
