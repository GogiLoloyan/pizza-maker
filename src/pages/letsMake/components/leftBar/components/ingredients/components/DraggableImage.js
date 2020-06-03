import React, { useContext, useRef } from 'react'
import { motion } from 'framer-motion'

import {
	addIngredient,
	choosePizzaBase
} from '../../../../../../../store/actions/currentPizzaActions'

import { DragContext } from '../../../../../../../components/Draggable'
import { useActions } from '../../../../../../../hooks/actions.hook'

const DraggableImage = ({ ...ing }) => {
	const dragImage = useRef()
	const {
		draggableRef: { current: draggable },
		pizzaRef: { current: pizza }
	} = useContext(DragContext)
	const [addIng, chooseBase] = useActions([addIngredient, choosePizzaBase])

	const dragedIngredient = { data: null }

	const cursor = style => {
		document.body.style.cursor = style
	}

	const handleDragStart = event => {
		try {
			const name = event.target.attributes['data-name'].value
			const { top, left, width, height } = dragImage.current.getBoundingClientRect()
			dragedIngredient.data = ing

			cursor('grabbing')

			draggable.innerText = name
			draggable.style.top = `${top}px`
			draggable.style.left = `${left}px`
			draggable.style.width = `${width}px`
			draggable.style.height = `${height}px`
			draggable.classList.add('draggable-display')
		} catch (e) {
			console.error(`Error in onDragStart: ${e.message}`)
		}
	}

	const handleDragEnd = (event, info) => {
		try {
			draggable.classList.remove('draggable-display')
			cursor('initial')

			if (pizza.classList.contains('onpizza')) {
				pizza.classList.remove('onpizza')

				dragImage.current.classList.add('image-opacity')
				setTimeout(() => dragImage.current.classList.remove('image-opacity'), 1300)

				const { data } = dragedIngredient
				if (data.id.startsWith('base')) {
					chooseBase(data)
				} else {
					addIng(data)
				}
			}
		} catch (e) {
			console.error(`Error in handleDragEnd: ${e.message}`)
		}
	}

	let onPizza = false

	const handleDrag = (event, { point: { x, y } }) => {
		try {
			draggable.style.transform = `translate(${x}px, ${y}px)`
			// event.target.hidden = true
			const elemBelow = document.elementFromPoint(event.clientX, event.clientY)
			// event.target.hidden = false

			if (elemBelow === pizza) {
				if (onPizza) return
				onPizza = true
				pizza.classList.add('onpizza')
			} else {
				if (onPizza) {
					onPizza = false
					pizza.classList.remove('onpizza')
				}
			}
		} catch (e) {
			console.error(`Error in handleDrag: ${e.message}`)
		}
	}

	const dragTransition = { bounceDamping: 17 }

	return (
		<motion.div
			drag
			ref={dragImage}
			onDrag={handleDrag}
			onDragStart={handleDragStart}
			onDragEnd={handleDragEnd}
			dragTransition={dragTransition}
			dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
			whileTap={{ cursor: 'grabbing' }}
			dragElastic={1}
			data-name={ing.name.en}
			className='image'
		>
			image
		</motion.div>
	)
}

export default DraggableImage
