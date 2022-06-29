import React, { useReducer, useState } from 'react'
import { TodoListContext } from './TodoList.context'
import { initialState, todosReducer } from './TodoList.reducer'
import { Header, Container, AddUpdateTodo } from './Fragments'
import { ITodo } from './TodoList.types'

export const TodoList = () => {
  const [todoAppState, dispatch] = useReducer(todosReducer, initialState)
  const [editingItem, setEditingItem] = useState<ITodo | null>()

  return (
    <TodoListContext.Provider
      value={{
        dispatch,
        todoAppState,
        editingItemGetterSetter: {
          getter: editingItem,
          setter: setEditingItem,
        },
      }}
    >
      <Header />
      <Container />
      <AddUpdateTodo />
    </TodoListContext.Provider>
  )
}
