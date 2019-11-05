import React from 'react';
import { createStore } from 'redux';
import todoApp from './reducers';
import { addTodo, toggleTodo, setVisibilityFilter, VisibilityFilters } from './actions';
import Footer from './components/Footer';
import VisibleTodoList from './containers/VisibleTodoList';
import AddTodo from './containers/AddTodo';
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
  store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED));

  unsubscribe();

  return (
    <div>
      <AddTodo />
      <VisibleTodoList />
      <Footer />
    </div>
  );
}

export default App;
