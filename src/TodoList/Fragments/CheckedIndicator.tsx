import React from 'react'
import { TouchableOpacity, View } from 'react-native'
import { colors, gutter } from '../../Variables/colors'
import { FontAwesome5 } from '@expo/vector-icons'

interface Props {
  index: number
  onChecked: (todoIndex: number) => () => void
  isChecked?: boolean
}

const CheckedIndicator = ({ index, onChecked, isChecked }: Props) => (
  <TouchableOpacity
    onPress={onChecked(index)}
    style={{ marginRight: gutter(1), padding: 10 }}
  >
    {isChecked ? (
      <FontAwesome5 name="check-circle" size={24} color={colors.pink} />
    ) : (
      <View
        style={{
          width: gutter(3),
          height: gutter(3),
          borderRadius: gutter(3),
          backgroundColor: colors.pink,
        }}
      />
    )}
  </TouchableOpacity>
)

export default CheckedIndicator
