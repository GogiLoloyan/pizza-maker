import React, { useRef } from 'react'
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect
} from 'react-router-dom'

import Navbar from './layouts/Navbar'
import Home from './pages/home'
import LetsMake from './pages/letsMake'
import { useCheckStore } from './hooks/checkStore.hook'
import Draggable, { DragContext } from './components/Draggable'

import './App.scss'

function App() {
	const draggable = useRef()
	const { continueOrder } = useCheckStore()

	return (
		<Router>
			<main className='app'>
				<Navbar />
				
				{continueOrder && <Redirect to='/lets-make' />}

				<Switch>
					<Route exact path='/' render={() => <Home />} />
					<Route
						path='/lets-make'
						render={() => (
							<DragContext.Provider value={draggable}>
								<LetsMake />
							</DragContext.Provider>
						)}
					/>
					<Redirect to='/' />
				</Switch>

				<Draggable ref={draggable} />
			</main>
		</Router>
	)
}

export default App
