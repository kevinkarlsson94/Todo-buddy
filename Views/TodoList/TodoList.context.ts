import { createContext } from 'react'
import { ITodoAppState, TodoAction } from './TodoList.reducer'
import { ITodo } from './TodoList.types'

interface ITodoListContext {
  todoAppState: ITodoAppState
  dispatch: React.Dispatch<TodoAction>
  editingItemGetterSetter: {
    getter: ITodo | null | undefined
    setter: React.Dispatch<React.SetStateAction<ITodo | null | undefined>>
  }
}

export const TodoListContext = createContext<ITodoListContext>({
  todoAppState: { todos: [] },
  dispatch: () => null,
  editingItemGetterSetter: {
    setter: () => null,
    getter: null,
  },
})
