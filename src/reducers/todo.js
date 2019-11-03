import { SET_VISIBILITY_FILTER, ADD_TODO, TOGGLE_TODO, VisibilityFilters } from '../actions';

export function visibilityFilter(state = VisibilityFilters.SHOW_ALL, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
}

export function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
          completed: false,
        }
      ];
    case TOGGLE_TODO:
      return state.map((todo, index) => {
        if (index === action.index)
          return Object.assign({}, todo, { completed: !todo.completed });

        return todo;
      });
    default:
      return state;
  }
}
