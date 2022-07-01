import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import CustomButton from '../../Components/CustomButton'
import { colors } from '../../Variables/colors'

interface IProps {
  onAuthenticate: () => void
}

export const LoginScreen = ({ onAuthenticate }: IProps) => (
  <View style={styles.container}>
    <Text>Welcome to Todo-Buddy. Please login using the button below.</Text>
    <CustomButton
      text="Login"
      onPress={onAuthenticate}
      accessibilityLabel="Click this button to login"
    />
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkCream,
    justifyContent: 'center',
    alignContent: 'center',
    padding: 40,
  },
})
