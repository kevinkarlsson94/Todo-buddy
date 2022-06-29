import React, { useReducer, useState } from 'react'
import { TodoAppContext } from '../App.context'
import { initialState, TodoActionEmum, todosReducer } from '../State/State'
import { AppHeader } from './Fragments/AppHeader'
import { TodoItemListContainer } from './Fragments/TodoItemListContainer'
import { AddTodo } from './Fragments/AddTodo'
import { ITodo } from '../App.types'

export const TodoList = () => {
  const [todoAppState, dispatch] = useReducer(todosReducer, initialState)
  const [editingItem, setEditingItem] = useState<ITodo | null>()

  return (
    <TodoAppContext.Provider
      value={{
        dispatch,
        todoAppState,
        editingItemGetterSetter: {
          getter: editingItem,
          setter: setEditingItem,
        },
      }}
    >
      <AppHeader />
      <TodoItemListContainer />
      <AddTodo />
    </TodoAppContext.Provider>
  )
}
