import { ADD_TODO_INPUT, CLEAR_TODO_INPUT, DELETE_TODO_INPUT, SET_TODO_INPUT } from "./constants";

export const setTodoInput = payload => ({
  type: SET_TODO_INPUT,
  payload
})

export const addTodoInput = payload => ({
  type: ADD_TODO_INPUT,
  payload
})

export const removeTodoInput = payload => ({
  type: DELETE_TODO_INPUT,
  payload
})

export const clearTodoInput = () => ({
  type: CLEAR_TODO_INPUT,
})