import { useState } from 'react'
import * as LocalAuthentication from 'expo-local-authentication'
import { Platform } from 'react-native'

interface IUseAuthentication {
  isAuthenticated: boolean
  onAuthenticate: () => void
}

/**
 * useAuthentication is a hook that handles the authenticated state of the app using expo-local-authentication
 * @param fileName
 * @returns isAuthenticated (indicates if user is authenticated or not), onAuthenticate (function that triggers the authentication)
 */
const useAuthentication = (): IUseAuthentication => {
  // local state that indicates if user is authenticated or not
  const [isAuthenticated, setisAuthenticated] = useState<boolean>(false)

  // function that runs the authentication
  const onAuthenticate = () => {
    // do not run authentication on the web as it is not supported
    if (Platform.OS === 'web') {
      setisAuthenticated(true)
    } else {
      const auth = LocalAuthentication.authenticateAsync({
        promptMessage: 'Login with PIN',
      })
      auth.then((result) => {
        setisAuthenticated(result.success)
      })
    }
  }

  return {
    isAuthenticated,
    onAuthenticate,
  }
}

export default useAuthentication
