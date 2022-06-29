import React, { useContext } from 'react'
import { View, SafeAreaView, Text, StyleSheet } from 'react-native'
import { TodoAppContext } from '../../App.context'
import { ITodo } from '../../App.types'
import { TodoActionEmum } from '../../State/State'

export const TodoItem = ({ index, todo }: { index: number; todo: ITodo }) => {
  const { todoAppState, dispatch, editingItemGetterSetter } =
    useContext(TodoAppContext)

  const onRemove = (todoIndex: number) => () => {
    dispatch({
      type: TodoActionEmum.REMOVE,
      payload: {
        id: todoIndex,
        text: '',
      },
    })
  }

  return (
    <View key={index} style={styles.container}>
      <View style={styles.todoDot} />
      <Text
        onPress={() => editingItemGetterSetter.setter(todo)}
        style={{ flex: 1 }}
      >
        {todoAppState.todos[index].text}
      </Text>
      <Text onPress={onRemove(todo.id)}>Remove</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
    marginBottom: 8,
    borderRadius: 24,
  },
  todoDot: {
    backgroundColor: 'blue',
    width: 16,
    height: 16,
    borderRadius: 24,
    marginRight: 8,
  },
})
