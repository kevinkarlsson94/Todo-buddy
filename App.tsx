import React from 'react'
import { TodoList } from './src/Views/TodoList/TodoList'

import { useAuthentication } from './src/Hooks/useAuthentication'
import { LoginScreen } from './src/Views/Login/LoginScreen'

export const App = () => {
  const { isAuthenticated, onAuthenticate } = useAuthentication()

  if (!isAuthenticated) {
    return <LoginScreen onAuthenticate={onAuthenticate} />
  }

  return <TodoList />
}

export default App
