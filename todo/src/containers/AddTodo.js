import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

let AddTodo = ({ dispatch }) => {
  let input;

  const submitTodo = (e) => {
    e.preventDefault();
    if (!input.value.trim())
      return;

    dispatch(addTodo(input.value));
    input.value = '';
  }

  return (
    <div>
      <form onSubmit={e => submitTodo(e)}>
        <input ref={node => { input = node }} />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  )
}
AddTodo = connect()(AddTodo)

export default AddTodo;
