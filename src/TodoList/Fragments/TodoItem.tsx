import React, { useContext } from 'react'
import { Text, StyleSheet, Animated, TouchableOpacity } from 'react-native'
import { colors, gutter } from '../../Variables/colors'
import { TodoListContext } from '../TodoList.context'
import { TodoActionEmum } from '../TodoList.reducer'
import { ITodo } from '../TodoList.types'
import { FontAwesome5 } from '@expo/vector-icons'
import CheckedIndicator from './CheckedIndicator'

interface Props {
  index: number
  todo: ITodo
}

const TodoItem = ({ index, todo }: Props) => {
  const { todoAppState, dispatch, editingItemGetterSetter } =
    useContext(TodoListContext)

  const currentTodo = todoAppState.todos[index] // gets todo of current index

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

  // sets editing to off if already editing, else set editing item to current pressed item
  const onEdit = (todo: ITodo) => () =>
    editingItemGetterSetter.getter
      ? editingItemGetterSetter.setter(null)
      : editingItemGetterSetter.setter(todo)

  return (
    <Animated.View key={index} testID="todo-item">
      <TouchableOpacity style={styles.container}>
        <CheckedIndicator
          id={currentTodo.id}
          onChecked={onChecked}
          isChecked={currentTodo.isChecked}
        />
        <Text
          style={[
            styles.todoText,
            {
              textDecorationLine: currentTodo.isChecked
                ? 'line-through'
                : 'none',
            },
          ]}
          testID="todo-text"
          numberOfLines={1}
        >
          {currentTodo.text}
        </Text>

        <Text
          onPress={onEdit(todo)} // sets the current todo as editing
          testID="edit-button"
          style={styles.editButton}
        >
          <FontAwesome5 name="edit" size={24} color={colors.pink} />
        </Text>

        <Text
          onPress={onRemove(todo.id)}
          testID="remove-button"
          style={styles.removeButton}
        >
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
    fontWeight: '800',
    fontSize: 18,
  },
  removeButton: {
    padding: 16,
    paddingLeft: 8,
  },
  editButton: {
    padding: 16,
    paddingRight: 8,
  },
})

export default TodoItem
