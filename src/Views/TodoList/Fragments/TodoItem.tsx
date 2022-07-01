import React, { useContext } from 'react'
import {
  View,
  Text,
  StyleSheet,
  Animated,
  TouchableOpacity,
} from 'react-native'
import { colors } from '../../../Variables/colors'
import { TodoListContext } from '../TodoList.context'
import { TodoActionEmum } from '../TodoList.reducer'
import { ITodo } from '../TodoList.types'
import { FontAwesome5 } from '@expo/vector-icons'
import useFadeIn from '../../../Hooks/useFadeIn'

interface Props {
  index: number
  todo: ITodo
}

const TodoItem = ({ index, todo }: Props) => {
  const { opacity } = useFadeIn()

  const { todoAppState, dispatch, editingItemGetterSetter } =
    useContext(TodoListContext)

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
    <Animated.View key={index} style={{ opacity: opacity }}>
      <TouchableOpacity
        style={styles.container}
        onPress={() => editingItemGetterSetter.setter(todo)}
      >
        <View style={styles.todoDot} />
        <Text style={styles.todoText}>{todoAppState.todos[index].text}</Text>
        <Text onPress={onRemove(todo.id)}>
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
    padding: 16,
    backgroundColor: colors.cream,
    color: colors.white,
    marginBottom: 8,
    borderRadius: 24,
  },
  todoText: {
    color: '#000',
    flex: 1,
    fontWeight: '700',
  },
  todoDot: {
    backgroundImage: `linear-gradient(180deg, ${colors.pink}, ${colors.purple})`,
    width: 16,
    height: 16,
    borderRadius: 24,
    marginRight: 8,
  },
})

export default TodoItem
