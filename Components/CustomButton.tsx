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

export const CustomButton = ({
  text,
  onPress,
  accessibilityLabel,
  disabled,
  style,
}: {
  text: string
  onPress: () => void
  accessibilityLabel?: string
  disabled?: boolean
  style?: StyleProp<ViewStyle>
}) => (
  <LinearGradient colors={[colors.pink, colors.purple]} style={styles.button}>
    <TouchableOpacity
      onPress={onPress}
      accessibilityLabel={accessibilityLabel}
      disabled={disabled}
      style={style}
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
    backgroundImage: `linear-gradient(180deg, ${colors.pink}, ${colors.purple})`,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontSize: 16,
    textAlign: 'center',
  },
})

export default CustomButton
