import React, { useContext, useState } from 'react'
import { View, TextInput, StyleSheet, Keyboard } from 'react-native'
import { colors, gutter } from '../../Variables/colors'
import { TodoListContext } from '../TodoList.context'
import { TodoActionEmum } from '../TodoList.reducer'
import CustomButton from '../../Components/CustomButton'

const AddUpdateTodo = () => {
  const [currentText, setCurrentText] = useState<string>('') // state var used to keep the value of the current text, is only used when adding new item
  const {
    todoAppState,
    dispatch,
    editingItemGetterSetter: { getter: editingItem, setter: setEditingItem },
  } = useContext(TodoListContext)

  // I don't want a user to add an empty todo item, so for simplicity I will just disable the todo button if text length is less than 1
  // Optimally we would like some validation message to be shown in the input, but I decided to keep it simple for now
  const canAdd = currentText.length > 0
  const canEdit = editingItem && editingItem.text && editingItem.text.length > 0
  const canSubmit = canAdd || canEdit ? true : false // decides if can add/edit the todo

  // checks the state if editingItem is defined or not (user clicked a todo and is editing)
  // then executes the dispatch with edit or add depending on the state of editingItem
  const handleSubmit = () => {
    // if item being edited
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
      // if new item
      dispatch({
        type: TodoActionEmum.ADD,
        payload: {
          id: todoAppState.todos.length,
          text: currentText,
        },
      })
      setCurrentText('')
    }
    Keyboard.dismiss() // finally close keyboard when value is updated
  }

  const onUpdateTextValue = (value: string) => {
    editingItem
      ? setEditingItem({ ...editingItem, text: value })
      : setCurrentText(value)
  }

  return (
    <View style={{ marginTop: gutter(1) }}>
      <View style={styles.container}>
        <TextInput
          onChangeText={onUpdateTextValue}
          value={editingItem ? editingItem.text : currentText}
          style={styles.textInput}
          placeholder="Add here..."
          testID="text-input"
        />

        <CustomButton
          text={editingItem ? 'Update todo' : 'Add todo'}
          onPress={handleSubmit}
          accessibilityLabel={
            editingItem
              ? 'Click here to add a todo'
              : 'Click here to update todo'
          }
          disabled={!canSubmit}
          style={!canSubmit && styles.errored}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    padding: gutter(2),
    borderRadius: gutter(3),
    backgroundColor: colors.cream,
  },
  textInput: {
    width: '100%',
    borderBottomColor: '#dedede',
    borderBottomWidth: 1,
    padding: gutter(1),
    flex: 1,
  },
  errored: {
    opacity: 0.4,
  },
})

export default AddUpdateTodo