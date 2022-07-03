import React, { useReducer, useState } from 'react'
import { TodoListContext } from './TodoList.context'
import { initialState, todosReducer } from './TodoList.reducer'
import { Header, AddUpdateTodo, TodoItem } from './Fragments'
import { ITodo } from './TodoList.types'
import { Dimensions, View, StyleSheet, ScrollView, Text } from 'react-native'
import { colors, gutter } from '../Variables/colors'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { useKeyboardHeight } from '../Hooks/useKeyboardHeight'

export const TodoList = () => {
  // I decided to use useReducer to keep and manage the state.
  const [todoAppState, dispatch] = useReducer(todosReducer, initialState)

  // editingItem is used to check if current todo should be updated. If not a new todo is added.
  // I decided to lift this state since it's used in 2 components (AddUpdateTodo and TodoItem) and pass it to the TodoListContext to prevent prop-drilling
  const [editingItem, setEditingItem] = useState<ITodo | null>()

  const { keyboardHeight } = useKeyboardHeight()
  const windowHeight = Dimensions.get('window').height

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
      {/* had to use KeyboardAwareScrollView to make sure the keyboard is always on the screen if keyboard is expanded */}
      <KeyboardAwareScrollView
        contentContainerStyle={{
          height: windowHeight - keyboardHeight,
        }}
        enableAutomaticScroll={false}
        enableOnAndroid={true}
        keyboardShouldPersistTaps="always"
      >
        <View style={[styles.container, { height: windowHeight }]}>
          <Header title="TodoBuddie" />
          <ScrollView>
            {/* Map all the todos in the state to list items */}
            {todoAppState.todos.map((todo, index) => (
              <TodoItem index={index} todo={todo} key={index} />
            ))}
          </ScrollView>
          <AddUpdateTodo />
        </View>
      </KeyboardAwareScrollView>
    </TodoListContext.Provider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkCream,
    padding: gutter(3),
    paddingTop: gutter(8),
  },
})
