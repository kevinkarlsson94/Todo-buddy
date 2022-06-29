import React from 'react'
import { Text, StyleSheet } from 'react-native'

export const AppHeader = () => (
  <Text style={styles.header}>Kevins TODO list</Text>
)

const styles = StyleSheet.create({
  header: {
    color: '#074F57',
    fontSize: 24,
    marginBottom: 24,
  },
})
