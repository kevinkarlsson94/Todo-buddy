import { ITodo } from '../App.types'

export interface ITodoAppState {
  todos: ITodo[]
}

export enum TodoActionEmum {
  ADD = 'ADD',
  REMOVE = 'REMOVE',
  EDIT = 'EDIT',
}

export interface TodoAction {
  type: TodoActionEmum
  payload: ITodo
}

export const initialState = {
  todos: [
    { id: 0, text: 'First item' },
    { id: 1, text: 'Second item' },
    { id: 2, text: 'Third item' },
  ],
}

export const todosReducer = (state: ITodoAppState, action: TodoAction) => {
  switch (action.type) {
    case TodoActionEmum.ADD: {
      return {
        ...state,
        todos: [...state.todos, action.payload],
      }
    }
    case TodoActionEmum.REMOVE: {
      return {
        ...state,
        todos: [...state.todos.filter((todo) => todo.id !== action.payload.id)],
      }
    }
    case TodoActionEmum.EDIT: {
      const updatedData = state.todos.map((x) =>
        x.id === action.payload.id ? { ...x, text: action.payload.text } : x
      )
      return {
        ...state,
        todos: updatedData,
      }
    }
    default: {
      return state
    }
  }
}
