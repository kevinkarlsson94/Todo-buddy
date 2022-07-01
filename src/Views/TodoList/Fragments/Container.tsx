import React, { useContext } from 'react'
import { ScrollView } from 'react-native'
import { TodoListContext } from '../TodoList.context'
import { TodoItem } from './index'

const Container = () => {
  const {
    todoAppState: { todos },
  } = useContext(TodoListContext)
  return (
    <ScrollView>
      {todos.map((todo, index) => (
        <TodoItem index={index} todo={todo} key={index} />
      ))}
    </ScrollView>
  )
}

export default Container
