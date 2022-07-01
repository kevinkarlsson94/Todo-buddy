import React, { ReactNode, useEffect, useState } from 'react'
import * as LocalAuthentication from 'expo-local-authentication'
import { Text, View, StyleSheet } from 'react-native'
import { colors } from '../Variables/colors'
import CustomButton from '../Components/CustomButton'

interface IUseAuthentication {
  isAuthenticated: boolean
  isBiometricSupported: boolean
  onAuthenticate: () => void
}

/**
 * useAuthentication is a hook that handles the authenticated state of the app using expo-local-authentication
 * @param fileName
 * @returns isAuthenticated = if using is authenticated, LoginScreen = element that renders the login screen
 */
export const useAuthentication = (): IUseAuthentication => {
  const [isBiometricSupported, setBiometricSupported] = useState<boolean>(false)
  const [isAuthenticated, setisAuthenticated] = useState<boolean>(false)

  useEffect(() => {
    const isCompatible = async () => {
      const compatible = await LocalAuthentication.hasHardwareAsync()
      setBiometricSupported(compatible)
    }
    isCompatible()
  }, [])

  const onAuthenticate = () => {
    const auth = LocalAuthentication.authenticateAsync({
      promptMessage: 'Login with Touch-ID',
      fallbackLabel: 'Enter PIN',
    })
    auth.then((result) => {
      setisAuthenticated(result.success)
    })
  }

  return {
    isAuthenticated,
    isBiometricSupported,
    onAuthenticate,
  }
}
