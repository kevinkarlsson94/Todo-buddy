import { TodoItem } from '../../Fragments'
import { render, screen } from '@testing-library/react-native'
import { ITodo } from '../../TodoList.types'
import {
  generateMockedTodos,
  wrapWithMockedContext,
} from '../../../../testHelpers'

describe('TodoItem', () => {
  it('Should render a todoItem', () => {
    render(
      wrapWithMockedContext(
        <TodoItem index={1} todo={generateMockedTodos()[0]} />
      )
    )
    expect(screen.getByTestId('todo-item')).toBeTruthy()
  })
})
