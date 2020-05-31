import React from 'react'
import { motion } from 'framer-motion'
import { anticipate } from '../motion/transitions'

const Button = ({ text, delay = 0, ...props }) => {
	return (
		<motion.button
			{...props}
			initial={{ x: '100%', opacity: 0 }}
			animate={{ x: 0, opacity: 1 }}
			exit={{ x: '-100%', opacity: 0 }}
			transition={{ ...anticipate, delay }}
		>
			{text}
		</motion.button>
	)
}

export default Button
