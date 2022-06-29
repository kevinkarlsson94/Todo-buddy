import { createContext } from 'react'
import { ITodo } from './App.types'
import { ITodoAppState, TodoAction } from './State/State'

interface ITodoAppContext {
  todoAppState: ITodoAppState
  dispatch: React.Dispatch<TodoAction>
  editingItemGetterSetter: {
    getter: ITodo | null | undefined
    setter: React.Dispatch<React.SetStateAction<ITodo | null | undefined>>
  }
}

export const TodoAppContext = createContext<ITodoAppContext>({
  todoAppState: { todos: [] },
  dispatch: () => null,
  editingItemGetterSetter: {
    setter: () => null,
    getter: null,
  },
})
