import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import { Text, StyleSheet } from 'react-native'
import { colors, gutter } from '../../Variables/colors'

interface Props {
  title: string
}

const Header = ({ title }: Props) => (
  <LinearGradient colors={[colors.pink, colors.purple]} style={styles.header}>
    <Text style={styles.headerText}>{title}</Text>
    <Text style={styles.subText}>by Kevin Karlsson</Text>
  </LinearGradient>
)

const styles = StyleSheet.create({
  header: {
    marginBottom: gutter(3),
    padding: gutter(3),
    paddingTop: gutter(8),
  },
  headerText: {
    color: colors.white,
    fontSize: gutter(5),
    fontWeight: '800',
    textAlign: 'center',
  },
  subText: {
    fontWeight: '500',
    fontSize: 12,
    textAlign: 'center',
    color: colors.white,
  },
})

export default Header
