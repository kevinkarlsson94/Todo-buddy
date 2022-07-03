import React, { useContext } from 'react'
import {
  Text,
  StyleSheet,
  Animated,
  TouchableOpacity,
  View,
} from 'react-native'
import { colors, gutter } from '../../Variables/colors'
import { TodoListContext } from '../TodoList.context'
import { TodoActionEmum } from '../TodoList.reducer'
import { ITodo } from '../TodoList.types'
import { FontAwesome5 } from '@expo/vector-icons'

interface Props {
  index: number
  todo: ITodo
}

const TodoItem = ({ index, todo }: Props) => {
  const { todoAppState, dispatch, editingItemGetterSetter } =
    useContext(TodoListContext)

  // dispatch to remove the todo from the list
  const onRemove = (todoIndex: number) => () => {
    dispatch({
      type: TodoActionEmum.REMOVE,
      payload: {
        id: todoIndex,
      },
    })
    // if removing the item currently being edited, set the editing state to null
    if (todoIndex === editingItemGetterSetter.getter?.id) {
      editingItemGetterSetter.setter(null)
    }
  }

  // if todo is checked, dispatch CHECK to update the todo accordingly
  const onChecked = (todoIndex: number) => () =>
    dispatch({
      type: TodoActionEmum.CHECK,
      payload: {
        id: todoIndex,
      },
    })

  const currentTodo = todoAppState.todos[index]

  const CheckedIndicator = () => (
    <TouchableOpacity
      onPress={onChecked(index)}
      style={{ marginRight: gutter(1), padding: 10 }}
    >
      {currentTodo.isChecked ? (
        <FontAwesome5 name="check-circle" size={24} color={colors.pink} />
      ) : (
        <View
          style={{
            width: gutter(3),
            height: gutter(3),
            borderRadius: gutter(3),
            backgroundColor: colors.pink,
          }}
        />
      )}
    </TouchableOpacity>
  )

  return (
    <Animated.View key={index} testID="todo-item">
      <TouchableOpacity style={styles.container}>
        <CheckedIndicator />
        <Text
          style={[
            styles.todoText,
            {
              textDecorationLine: currentTodo.isChecked
                ? 'line-through'
                : 'none',
            },
          ]}
          onPress={() => editingItemGetterSetter.setter(todo)}
          testID="todo-text"
        >
          {currentTodo.text}
        </Text>
        <Text onPress={onRemove(todo.id)} testID="remove-button">
          <FontAwesome5 name="trash-alt" size={24} color={colors.pink} />
        </Text>
      </TouchableOpacity>
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: gutter(2),
    backgroundColor: colors.cream,
    color: colors.white,
    marginBottom: gutter(1),
    borderRadius: gutter(3),
  },
  todoText: {
    color: colors.black,
    flex: 1,
    fontWeight: '700',
  },
})

export default TodoItem
