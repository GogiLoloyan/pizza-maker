import React, { useContext } from 'react'
import { useDispatch } from 'react-redux'
import { motion } from 'framer-motion'

import {
	addIngredient,
	choosePizzaBase
} from '../../../../../../../store/actions/currentPizzaActions'

import { DragContext } from '../../../../../../../components/Draggable'

const DraggableImage = ({ ...ing }) => {
	const dispatch = useDispatch()
	const { current: draggable } = useContext(DragContext)

	const handleDragStart = event => {
		try {
			const name = event.target.attributes['data-name'].value
			const { top, left, width, height } = event.target.getBoundingClientRect()
			const ingredient = JSON.stringify(ing)

			draggable.innerText = name
			draggable.style.top = `${top}px`
			draggable.style.left = `${left}px`
			draggable.style.width = `${width}px`
			draggable.style.height = `${height}px`
			draggable.classList.add('draggable-display')
			draggable.setAttribute('ingredient', ingredient)
		} catch (e) {
			console.error(`Error in onDragStart: ${e.message}`)
		}
	}

	let flag = true
	let pizza

	const handleDragEnd = event => {
		try {
			setTimeout(() => draggable.classList.remove('draggable-display'), 150)

			if (event.target.classList.contains('pizza__base')) {
				setTimeout(() => pizza.classList.remove('onpizza'), 150)
				const ing = JSON.parse(draggable.getAttribute('ingredient'))
				if (ing.id.startsWith('base')) {
					dispatch(choosePizzaBase(ing))
				} else {
					dispatch(addIngredient(ing))
				}
			}
		} catch (e) {
			console.error(`Error in handleDragEnd: ${e.message}`)
		}
	}

	const handleDrag = (event, { point }) => {
		try {
			draggable.style.transform = `translate(${point.x}px, ${point.y}px)`
			if (event.target.classList.contains('pizza__base')) {
				if (!flag) return
				flag = false
				pizza = event.target
				pizza.classList.add('onpizza')
			} else {
				flag = true
				pizza && pizza.classList.remove('onpizza')
			}
		} catch (e) {
			console.error(`Error in handleDrag: ${e.message}`)
		}
	}

	const dragTransition = { bounceDamping: 8 }

	return (
		<motion.div
			drag
			onDrag={handleDrag}
			onDragStart={handleDragStart}
			onDragEnd={handleDragEnd}
			dragTransition={dragTransition}
			dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
			dragElastic={1}
			data-name={ing.name.en}
			className='image'
		>
			image
		</motion.div>
	)
}

export default DraggableImage
