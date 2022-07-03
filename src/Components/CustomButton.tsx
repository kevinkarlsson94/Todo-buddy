import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import {
  TouchableOpacity,
  View,
  StyleSheet,
  Text,
  StyleProp,
  ViewStyle,
} from 'react-native'
import { colors } from '../Variables/colors'

// I had to build a custom button using a styled TouchableOpacity since the button from React-Native does not give too much style alternatives
export const CustomButton = ({
  text,
  onPress,
  accessibilityLabel,
  disabled,
  style,
  testSelector = 'custom-button',
}: {
  text: string
  onPress: () => void
  accessibilityLabel?: string
  disabled?: boolean
  style?: StyleProp<ViewStyle>
  testSelector?: string
}) => (
  <LinearGradient colors={[colors.pink, colors.purple]} style={styles.button}>
    <TouchableOpacity
      onPress={onPress}
      accessibilityLabel={accessibilityLabel}
      disabled={disabled}
      style={style}
      testID={testSelector}
    >
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  </LinearGradient>
)

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    paddingVertical: 16,
    paddingHorizontal: 8,
  },
  buttonText: {
    color: colors.white,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontSize: 16,
    textAlign: 'center',
  },
})

export default CustomButton
