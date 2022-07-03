import { TodoListContext } from './src/TodoList/TodoList.context'
import { ITodo } from './src/TodoList/TodoList.types'

export const generateMockedTodos = (): ITodo[] => [
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

export const wrapWithMockedContext = (children: JSX.Element) => (
  <TodoListContext.Provider
    value={{
      todoAppState: { todos: generateMockedTodos() },
      dispatch: () => null,
      editingItemGetterSetter: {
        getter: null,
        setter: () => null,
      },
    }}
  >
    {children}
  </TodoListContext.Provider>
)
