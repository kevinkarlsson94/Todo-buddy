import React, { useReducer, useState } from 'react'
import { TodoListContext } from './TodoList.context'
import { initialState, todosReducer } from './TodoList.reducer'
import { Header, Container, AddUpdateTodo } from './Fragments'
import { ITodo } from './TodoList.types'
import { StatusBar } from 'expo-status-bar'
import { Dimensions, View, StyleSheet } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { useKeyboardHeight } from '../../Hooks/useKeyboardHeight'
import { colors } from '../../Variables/colors'

export const TodoList = () => {
  const [todoAppState, dispatch] = useReducer(todosReducer, initialState)
  const [editingItem, setEditingItem] = useState<ITodo | null>()
  const { keyboardHeight } = useKeyboardHeight()

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
      <KeyboardAwareScrollView
        contentContainerStyle={{
          height: Dimensions.get('window').height - keyboardHeight,
        }}
        enableAutomaticScroll={false}
        enableOnAndroid={true}
      >
        <View style={styles.container}>
          <StatusBar style="auto" />

          <Header />
          <Container />
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
    padding: 24,
    paddingTop: 56,
  },
})
