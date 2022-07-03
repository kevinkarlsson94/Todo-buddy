import { Header } from '../../Fragments'
import { render, screen } from '@testing-library/react-native'

describe('Header', () => {
  it('Should render Header with title', () => {
    const headerTitle = 'some title'
    render(<Header title={headerTitle} />).toJSON()
    screen.getByText(headerTitle)
  })
})
