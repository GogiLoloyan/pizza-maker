import { createStore } from 'redux'
import reduser from './reducers'
import { loadState, saveState } from '../lib/localStorage'

export const configureStore = () => {
	const store = createStore(
		reduser,
		loadState(),
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	)
	store.subscribe(() => saveState(store.getState()))
	return store
}
