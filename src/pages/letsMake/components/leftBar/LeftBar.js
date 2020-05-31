import React, { useState, useCallback } from 'react'
import { AnimatePresence } from 'framer-motion'

import DATA from '../../../../data'

import History from './components/History'
import SubMenu from './components/SubMenu'
import RootMenu from './components/RootMenu'
import Ingredients from './components/ingredients/Ingredients'
import Button from '../../../../components/Button'

import ResetOrderBtns from './components/ResetOrderBtns'

const LeftBar = () => {
	const [menu, setMenu] = useState({
		values: ['Bases', 'Ingredients'],
		visible: true
	})
	const [submenu, setSubmenu] = useState({ visible: false })
	const [ingredients, setIngredients] = useState({ visible: false })
	const [history, setHistory] = useState([])

	const back = useCallback(() => {
		switch (history.length) {
			case 0:
				return
			case 1:
				setMenu(state => ({ ...state, visible: true }))
				setSubmenu(state => ({ ...state, visible: false }))
				setHistory([])
				return
			case 2:
				setSubmenu(state => ({ ...state, visible: true }))
				setIngredients(state => ({ ...state, visible: false }))
				setHistory(state => [...state.slice(0, -1)])
				return
			default:
				return
		}
	}, [submenu, setSubmenu, setMenu, ingredients])

	const chooseSubMenu = useCallback(
		name => {
			const submenu = DATA.find(item => item.name === name)
			const values = submenu.enumKeys.map(name => name.replace(/_/g, ' '))
			setSubmenu(state => ({ ...state, values, name, visible: true }))
			setMenu(state => ({ ...state, visible: false }))

			setHistory([name])
		},
		[setSubmenu, setMenu]
	)

	const chooseIngredients = useCallback(
		name => {
			const _submenu = DATA.find(item => item.name === submenu.name)
			const values = _submenu[name.replace(/ /g, '_')].values
			setIngredients(state => ({ ...state, values, visible: true }))
			setSubmenu(state => ({ ...state, visible: false }))

			setHistory(state => [...state, name])
		},
		[submenu.name]
	)

	return (
		<div className='lets-make__leftbar'>
			<Button text='back' onClick={back} className='btn-small btn-prev' />
			<History history={history} />

			<div className='menu--wrapper'>
				<AnimatePresence>
					{menu.visible && (
						<RootMenu key='menu' list={menu.values} chooseSubMenu={chooseSubMenu} />
					)}
					{submenu.visible && (
						<SubMenu
							key='submenu'
							list={submenu.values}
							chooseIngredients={chooseIngredients}
						/>
					)}
					{ingredients.visible && (
						<Ingredients key='ing' list={ingredients.values} />
					)}
				</AnimatePresence>
			</div>

			<ResetOrderBtns data={DATA} />
		</div>
	)
}

export default LeftBar
