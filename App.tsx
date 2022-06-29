import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import { TodoList } from './Views/TodoList'

export const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <TodoList />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    padding: 24,
  },
})

export default App
