import React, { useReducer, useRef, useState } from 'react'
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
  // I decided to lift this state since it's used in 2 components (AddUpdateTodo and TodoItem) and pass it to the TodoListContext to prevent prop-drilling
  const [editingItem, setEditingItem] = useState<ITodo | null>()

  const windowHeight = Dimensions.get('window').height
  const scrollViewRef = useRef<ScrollView>(null)

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
      {/* KeyboardAvoidingView to prevent keyboard overflowing the input when toggled */}
      <KeyboardAvoidingView
        behavior={'height'}
        style={{ height: windowHeight }}
      >
        <View style={[styles.container, { height: windowHeight }]}>
          <Header title="TodoBuddie" />
          <ScrollView
            ref={scrollViewRef}
            onContentSizeChange={() =>
              scrollViewRef.current &&
              scrollViewRef.current.scrollToEnd({ animated: true })
            } // scroll to bottom if adding elements
          >
            {todoAppState.todos.map((todo, index) => (
              <TodoItem index={index} todo={todo} key={index} />
            ))}

            {/* Map all the todos in the state to list items */}
          </ScrollView>
          <AddUpdateTodo />
        </View>
      </KeyboardAvoidingView>
    </TodoListContext.Provider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkCream,
  },
})
