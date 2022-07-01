import { render, screen, fireEvent } from '@testing-library/react-native'

import LoginScreen from '../LoginScreen'

describe('LoginScreen', () => {
  it('Should render LoginScreen and a welcome text', () => {
    const onAuth = jest.fn()
    const { getByText } = render(<LoginScreen onAuthenticate={onAuth} />)
    expect(
      getByText('Welcome to Todo-Buddy. Please login using the button below.')
    ).toBeTruthy()
  })
  it('Should trigger login if Login button is clicked', () => {
    const onAuth = jest.fn()
    render(<LoginScreen onAuthenticate={onAuth} />)
    const loginButtonElement = screen.getByText('Login')
    fireEvent.press(loginButtonElement)
    expect(onAuth).toBeCalled()
  })
})
