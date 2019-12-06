import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import './App.css';
import AsyncApp from './containers/AsyncApp';

const loggerMiddleware = createLogger();
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, loggerMiddleware));

const App = () => (
	<Provider store={store}>
		<AsyncApp/>
	</Provider>
);

export default App;
