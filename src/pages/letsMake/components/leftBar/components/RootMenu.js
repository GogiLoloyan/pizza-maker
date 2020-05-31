import React, { useEffect } from 'react'
import { motion } from 'framer-motion'

import { anticipate } from '../../../../../motion/transitions'

const variants = {
	initial: { opacity: 0, x: '100%' },
	enter: { opacity: 1, x: 0 },
	exit: { opacity: 0, x: '100%' }
}

const RootMenu = ({ list, chooseSubMenu }) => {
	const onClickExit = () => {
		variants.exit.x = '-100%'
	}

	useEffect(() => {
		variants.exit.x = '100%'
		return () => (variants.initial.x = variants.exit.x)
	})

	return (
		<motion.ul
			initial='initial'
			animate='enter'
			exit='exit'
			variants={variants}
			transition={{ ...anticipate }}
			className='menu'
		>
			{list.map(name => (
				<li
					key={name}
					onClick={() => {
						onClickExit()
						chooseSubMenu(name)
					}}
					className='btn-big menu__item'
				>
					{name}
				</li>
			))}
		</motion.ul>
	)
}

export default RootMenu
