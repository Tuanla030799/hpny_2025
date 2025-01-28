import { ADD_TODO_INPUT, CLEAR_TODO_INPUT, DELETE_TODO_INPUT, SET_TODO_INPUT } from "./constants"

const initState = {
  todos: [],
  todoInput: ''
}

function reducer(state, action) {
  switch (action.type) {
    case SET_TODO_INPUT: {
      return {
        ...state,
        todoInput: action.payload
      }
    }
    case ADD_TODO_INPUT: {
      return {
        ...state,
        todos: [...state.todos, action.payload]
      }
    }

    case DELETE_TODO_INPUT: {
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload)
      }
    }

    case CLEAR_TODO_INPUT: {
      return {
        ...state,
        todos: []
      }
    }

    default:
      throw new Error(`Invalid action ${action.type}`)
  }
}

export { initState }
export default reducer