import React from 'react'
import { Text, StyleSheet } from 'react-native'
import { colors } from '../../../Variables/colors'

interface Props {
  title: string
}

const Header = ({ title }: Props) => <Text style={styles.header}>{title}</Text>

const styles = StyleSheet.create({
  header: {
    color: colors.pink,
    fontSize: 24,
    marginBottom: 24,
    fontWeight: 'bold',
  },
})

export default Header
