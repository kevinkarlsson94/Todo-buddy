import React, { useReducer, useState } from 'react'
import { TodoListContext } from './TodoList.context'
import { initialState, todosReducer } from './TodoList.reducer'
import { Header, AddUpdateTodo, TodoItem } from './Fragments'
import { ITodo } from './TodoList.types'
import {
  Dimensions,
  View,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native'
import { colors } from '../Variables/colors'

export const TodoList = () => {
  // I decided to use useReducer to keep and manage the state.
  const [todoAppState, dispatch] = useReducer(todosReducer, initialState)

  // editingItem is used to check if current todo should be updated. If not a new todo is added.
  // I decided to lift this state since it's used in 2 components and pass it to the TodoListContext to prevent prop-drilling
  const [editingItem, setEditingItem] = useState<ITodo | null>()

  let ScreenHeight = Dimensions.get('window').height
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.darkCream,
      padding: 24,
      paddingTop: 56,
      height: ScreenHeight,
    },
  })

  const renderItem = (index: number, todo: ITodo) => (
    <TodoItem index={index} todo={todo} />
  )

  return (
    // Since some state/functionalities have to be shared between components I decided to use the react context api for this.
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
      {/* KeyboardAvoidingView in order to avoid the keyboard to overlap the input */}
      <KeyboardAvoidingView behavior="padding">
        <ScrollView
          keyboardShouldPersistTaps="always"
          contentContainerStyle={{
            flexGrow: 1,
            justifyContent: 'flex-end',
          }}
        >
          <View style={styles.container}>
            <Header title="Todo app" />
            {todoAppState.todos.map((todo, index) => (
              <TodoItem index={index} todo={todo} key={index} />
            ))}
            <View
              style={{ flex: 1, justifyContent: 'flex-end', marginBottom: 36 }}
            >
              <AddUpdateTodo />
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </TodoListContext.Provider>
  )
}
