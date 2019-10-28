import React from 'react';
import { createStore } from 'redux';
import todoApp from './reducers';
import { addTodo, toggleTodo, setVisibilityFilter } from './actions';
import './App.css';

const store = createStore(todoApp);

function App() {
  console.log('Initial State', store.getState());
  const unsubscribe = store.subscribe(() => console.log('State on subscribe', store.getState()));

  store.dispatch(addTodo('Learn about actions'));
  store.dispatch(addTodo('Learn about reducers'));
  store.dispatch(addTodo('Learn about store'));
  store.dispatch(toggleTodo(0));
  store.dispatch(toggleTodo(1));
  store.dispatch(setVisibilityFilter('SHOW_COMPLETED'));

  unsubscribe();

  return (
    <div className="App">
      <h1>React Redux Todo APP!</h1>
    </div>
  );
}

export default App;
