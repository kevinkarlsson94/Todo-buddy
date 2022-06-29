import React, { useContext } from 'react'
import { ScrollView } from 'react-native'
import { TodoAppContext } from '../../App.context'
import { TodoItem } from './TodoItem'

export const TodoItemListContainer = () => {
  const { todoAppState } = useContext(TodoAppContext)
  return (
    <ScrollView>
      {todoAppState.todos.map((todo, index) => (
        <TodoItem index={index} todo={todo} key={index} />
      ))}
    </ScrollView>
  )
}
