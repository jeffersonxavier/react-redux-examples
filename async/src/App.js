import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { selectSubreddit, invalidateSubreddit, requestPosts, receivePosts } from './actions';
import rootReducer from './reducers';
import './App.css';

const store = createStore(rootReducer);

function App() {
	console.log('Initial State', store.getState());
	const unsubscribe = store.subscribe(() => console.log('State on subscribe', store.getState()));

	store.dispatch(selectSubreddit('frontend'));
	store.dispatch(requestPosts('frontend'));
	store.dispatch(receivePosts('frontend', { data: { children: [
		{ data: { id: 1, name: 'subreddit 1' }},
		{ data: { id: 2, name: 'subreddit 2' }},
	] } }));
	store.dispatch(invalidateSubreddit('frontend'));
	
	unsubscribe();

  return (
		<Provider store={store}>
			<div className="App">
				<h1>Async APP</h1>
			</div>
		</Provider>
  );
}

export default App;
