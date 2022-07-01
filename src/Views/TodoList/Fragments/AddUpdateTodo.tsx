import React, { useContext, useState } from 'react'
import { View, TextInput, StyleSheet, Button } from 'react-native'
import { colors } from '../../../Variables/colors'
import { TodoListContext } from '../TodoList.context'
import { TodoActionEmum } from '../TodoList.reducer'
import CustomButton from '../../../Components/CustomButton'

const AddUpdateTodo = () => {
  const [currentText, setCurrentText] = useState<string>('')
  const {
    todoAppState,
    dispatch,
    editingItemGetterSetter: { getter: editingItem, setter: setEditingItem },
  } = useContext(TodoListContext)

  // I don't want a user to add an empty todo item, so for simplicity I will just disable the todo button if text length is less than 1
  // Optimally we would like some validation message to be shown in the input, but I decided to keep it simple for now
  const canAdd = currentText.length > 0
  const canEdit = editingItem && editingItem.text.length > 0
  const canSubmit = !canAdd && !canEdit // decides if can add/edit the todo

  // checks the state if editingItem is defined or not (user clicked a todo and is editing)
  // then executes the dispatch with edit or add depending on the state of editingItem
  const handleSubmit = () => {
    if (editingItem) {
      dispatch({
        type: TodoActionEmum.EDIT,
        payload: {
          id: editingItem.id,
          text: editingItem.text,
        },
      })
      setEditingItem(null)
    } else {
      dispatch({
        type: TodoActionEmum.ADD,
        payload: {
          id: todoAppState.todos.length,
          text: currentText,
        },
      })
      setCurrentText('')
    }
  }

  const onUpdateTextValue = (value: string) => {
    editingItem
      ? setEditingItem({ ...editingItem, text: value })
      : setCurrentText(value)
  }

  return (
    <View style={styles.addTodo}>
      <TextInput
        onChangeText={onUpdateTextValue}
        value={editingItem ? editingItem.text : currentText}
        style={[styles.textInput]}
        placeholder="Add here..."
      />

      <CustomButton
        text={editingItem ? 'Update TODO' : 'Add todo'}
        onPress={handleSubmit}
        accessibilityLabel={
          editingItem ? 'Click here to add a todo' : 'Click here to update todo'
        }
        disabled={canSubmit}
        style={canSubmit && styles.errored}
      />
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
    backgroundColor: colors.cream,
  },
  textInput: {
    width: '100%',
    borderBottomColor: '#dedede',
    borderBottomWidth: 1,
    padding: 8,
    flex: 1,
  },
  errored: {
    opacity: 0.2,
  },
})

export default AddUpdateTodo
