import React, { useContext, useState } from 'react'
import {
  View,
  TextInput,
  TouchableHighlight,
  Button,
  StyleSheet,
} from 'react-native'
import { TodoAppContext } from '../../App.context'
import { ITodo } from '../../App.types'
import { TodoActionEmum } from '../../State/State'

export const AddTodo = () => {
  const [currentText, setCurrentText] = useState<string>('')
  const {
    todoAppState,
    dispatch,
    editingItemGetterSetter: { getter: editingItem, setter: setEditingItem },
  } = useContext(TodoAppContext)
  const onAdd = () => {
    dispatch({
      type: TodoActionEmum.ADD,
      payload: {
        id: todoAppState.todos.length,
        text: currentText,
      },
    })
    setCurrentText('')
  }

  const onUpdate = (todoValues: ITodo) => () => {
    dispatch({
      type: TodoActionEmum.EDIT,
      payload: {
        id: todoValues.id,
        text: todoValues.text,
      },
    })
    setEditingItem(null)
  }
  return (
    <View style={styles.addTodo}>
      <TextInput
        onChangeText={(e) => {
          editingItem
            ? setEditingItem({ ...editingItem, text: e })
            : setCurrentText(e)
        }}
        value={editingItem ? editingItem.text : currentText}
        style={styles.textInput}
      />
      <View>
        <TouchableHighlight
          style={{
            borderRadius: 8,
          }}
        >
          <Button
            onPress={editingItem ? onUpdate(editingItem) : onAdd}
            title={editingItem ? 'Update TODO' : 'Add todo'}
            accessibilityLabel={
              editingItem
                ? 'Click here to add a todo'
                : 'Click here to update todo'
            }
            color="#077187"
          />
        </TouchableHighlight>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  addTodo: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    padding: 16,
    borderRadius: 24,
    backgroundColor: '#fff',
  },
  textInput: {
    width: '100%',
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    padding: 8,
    flex: 1,
  },
})
