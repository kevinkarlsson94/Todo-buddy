import * as Font from 'expo-font'
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import {
  Dimensions,
  KeyboardAvoidingView,
  StyleSheet,
  View,
} from 'react-native'
import { colors } from './Variables/colors'
import { TodoList } from './Views/TodoList/TodoList'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import { useKeyboardHeight } from './Hooks/useKeyboardHeight'

export const App = () => {
  const { keyboardHeight } = useKeyboardHeight()

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={{
        height: Dimensions.get('window').height - keyboardHeight,
      }}
      enableAutomaticScroll={false}
      enableOnAndroid={true}
    >
      <View style={styles.container}>
        <StatusBar style="auto" />
        <TodoList />
      </View>
    </KeyboardAwareScrollView>
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

export default App
