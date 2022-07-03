import React from 'react'
import { Text, StyleSheet } from 'react-native'
import { colors, gutter } from '../../Variables/colors'

interface Props {
  title: string
}

const Header = ({ title }: Props) => <Text style={styles.header}>{title}</Text>

const styles = StyleSheet.create({
  header: {
    color: colors.pink,
    fontSize: gutter(5),
    marginBottom: gutter(3),
    fontWeight: 'bold',
  },
})

export default Header
