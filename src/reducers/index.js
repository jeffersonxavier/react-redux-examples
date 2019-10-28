import { combineReducers } from 'redux';
import * as todoReducers from './todo';

/*
  Other options to this:

  combineReducers({
    visibilityFilter: todoReducers.visibilityFilter,
    todos: todoReducers.todos,
  });

  function todoApp(state = {}, action) {
    return {
      visibilityFilter: todoReducers.visibilityFilter(state.visibilityFilter, action),
      todos: todoReducers.todos(state.todos, action)
    }
  }
*/
export default combineReducers(todoReducers);
