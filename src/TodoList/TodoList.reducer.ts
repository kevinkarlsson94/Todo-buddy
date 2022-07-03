import { ITodo } from './TodoList.types'

export interface ITodoAppState {
  todos: ITodo[]
}

export enum TodoActionEmum {
  ADD = 'ADD',
  REMOVE = 'REMOVE',
  EDIT = 'EDIT',
  CHECK = 'CHECK',
}
type TodoActionType = TodoActionEmum

export interface TodoAction {
  type: TodoActionType
  payload: ITodo
}

export const initialState = {
  todos: [
    { id: 0, text: 'First item', isChecked: false },
    { id: 1, text: 'Second item', isChecked: true },
    { id: 2, text: 'Third item', isChecked: false },
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
      // filters/removed the specified todo from the list
      const filteredList = state.todos.filter(
        (todo) => todo.id !== action.payload.id
      )
      return {
        ...state,
        todos: [...filteredList],
      }
    }
    case TodoActionEmum.EDIT: {
      // maps through the list and sets the specified todo text to the text from payload
      const updatedTodos = state.todos.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, text: action.payload.text }
          : todo
      )
      return {
        ...state,
        todos: updatedTodos,
      }
    }
    case TodoActionEmum.CHECK: {
      // maps through the list and sets the specified todo checked prop to true if false and false if true (using !)
      const updatedTodos = state.todos.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, isChecked: !todo.isChecked }
          : todo
      )
      return {
        ...state,
        todos: updatedTodos,
      }
    }
    default: {
      return state
    }
  }
}
