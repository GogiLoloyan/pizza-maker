import React from 'react'
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

import './App.scss'

function App() {
	const continueOrder = useCheckStore()

	return (
		<Router>
			<main className='app'>
				<Navbar />

				{continueOrder && <Redirect to='/lets-make' />}

				<Switch>
					<Route exact path='/' component={Home} />
					<Route path='/lets-make' component={LetsMake} />
					<Redirect to='/' />
				</Switch>
			</main>
		</Router>
	)
}

export default App
