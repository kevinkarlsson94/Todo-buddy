import { useEffect, useState } from 'react'
import * as LocalAuthentication from 'expo-local-authentication'

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
  const [isAuthenticated, setisAuthenticated] = useState<boolean>(false)

  const onAuthenticate = () => {
    const auth = LocalAuthentication.authenticateAsync({
      promptMessage: 'Login with PIN',
    })
    auth.then((result) => {
      setisAuthenticated(result.success)
    })
  }

  return {
    isAuthenticated,
    onAuthenticate,
  }
}

export default useAuthentication
