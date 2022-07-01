import React from 'react'
import { Text, StyleSheet } from 'react-native'
import { colors } from '../../../Variables/colors'

export const Header = () => <Text style={styles.header}>Kevins TODO list</Text>

const styles = StyleSheet.create({
  header: {
    color: colors.pink,
    fontSize: 24,
    marginBottom: 24,
    fontWeight: 'bold',
  },
})
