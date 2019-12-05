import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { Provider } from 'react-redux';
import { selectSubreddit, fetchPostsIfNeeded } from './actions';
import rootReducer from './reducers';
import './App.css';

const loggerMiddleware = createLogger();
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, loggerMiddleware));

function App() {
	store.dispatch(selectSubreddit('reactjs'));
	store
		.dispatch(fetchPostsIfNeeded('reactjs'))
		.then(() => console.log(store.getState()));

  return (
		<Provider store={store}>
			<div className="App">
				<h1>Async APP</h1>
			</div>
		</Provider>
  );
}

export default App;
