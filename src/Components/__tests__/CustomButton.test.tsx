import { CustomButton } from '../CustomButton'
import { render, screen, fireEvent } from '@testing-library/react-native'

describe('CustomButton', () => {
  const customButtonText = 'custom button text'
  it('should render CustomButton', () => {
    render(<CustomButton text={customButtonText} onPress={jest.fn()} />)
    expect(screen.getByText(customButtonText))
  })
  it('should trigger CustomButtons onPress event if pressed', () => {
    const customButtonPressEvent = jest.fn()
    render(
      <CustomButton text={customButtonText} onPress={customButtonPressEvent} />
    )
    const customButtonElement = screen.getByTestId('custom-button')
    fireEvent.press(customButtonElement)
    expect(customButtonPressEvent).toBeCalledTimes(1)
  })
  it('should not trigger onPress if button is disabled', () => {
    const customButtonPressEvent = jest.fn()
    render(
      <CustomButton
        disabled={true}
        text={customButtonText}
        onPress={customButtonPressEvent}
      />
    )
    const customButtonElement = screen.getByTestId('custom-button')
    fireEvent.press(customButtonElement)
    expect(customButtonPressEvent).toBeCalledTimes(0)
  })
})
