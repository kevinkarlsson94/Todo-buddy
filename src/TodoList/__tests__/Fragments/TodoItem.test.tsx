import { TodoItem } from '../../Fragments'
// import useAuthentication from '../src/Hooks/useAuthentication'
import { render, screen } from '@testing-library/react-native'
import { ITodo } from '../../TodoList.types'

const { todoAppState, dispatch, editingItemGetterSetter } =
// useContext(TodoListContext)


// jest.mock('../src/Hooks/useAuthentication')
// const mockUseAuthentication = useAuthentication as jest.MockedFunction<
//   typeof useAuthentication
// >

const todos: ITodo[] = [
  {
    id: 1,
    text: 'todo 1',
  },
  {
    id: 2,
    text: 'todo 2',
  },
  {
    id: 3,
    text: 'todo 3',
  },
]

describe('TodoItem', () => {
  it('Should render App', () => {
    // mockUseAuthentication.mockReturnValue({
    //   isAuthenticated: true,
    //   onAuthenticate: jest.fn(),
    // })
    render(<TodoItem index={1} todo={todos[0]} />)
  })
})
