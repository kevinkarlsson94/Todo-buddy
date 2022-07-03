import React, { useEffect } from 'react'
import { TodoList } from './src/TodoList/TodoList'
import useAuthentication from './src/Hooks/useAuthentication'

const App = () => {
  const { isAuthenticated, onAuthenticate } = useAuthentication()

  // if user didn't authenticate, run the authentication process
  useEffect(() => {
    if (!isAuthenticated) {
      onAuthenticate()
    }
  }, [isAuthenticated])

  // make sure to not render anything before user is authenticated
  return isAuthenticated ? <TodoList /> : null
}

export default App
