import { fireEvent, render, screen } from '@testing-library/react-native'
import { wrapWithMockedContext } from '../../../testHelpers'
import { TodoList } from '../TodoList'

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper')

jest.mock('react-native-keyboard-aware-scroll-view', () => {
  const KeyboardAwareScrollView = ({ children }: { children: JSX.Element }) =>
    children
  return { KeyboardAwareScrollView }
})

describe('TodoItem', () => {
  it('should render 3 todo items', () => {
    render(wrapWithMockedContext(<TodoList />))
    expect(screen.getAllByTestId('todo-item')).toHaveLength(3)
  })

  it('should add one item', () => {
    render(wrapWithMockedContext(<TodoList />))
    fireEvent.changeText(screen.getByTestId('text-input'), 'hej')
    fireEvent.press(screen.getByTestId('custom-button'))
    expect(screen.getAllByTestId('todo-item')).toHaveLength(4)
  })

  it('should remove First item', () => {
    render(wrapWithMockedContext(<TodoList />))
    fireEvent.press(screen.getAllByTestId('remove-button')[0])
    expect(screen.getAllByTestId('todo-item')).toHaveLength(2)
    expect(screen.queryByText('First item')).toBeFalsy()
  })

  it('should edit First item', () => {
    const editedText = 'changed item'
    render(wrapWithMockedContext(<TodoList />))
    fireEvent.press(screen.getAllByTestId('todo-text')[0])
    fireEvent.changeText(screen.getByTestId('text-input'), editedText)
    fireEvent.press(screen.getByTestId('custom-button'))
    expect(screen.getByText(editedText)).toBeTruthy()
  })
})
