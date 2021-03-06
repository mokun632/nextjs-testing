import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import userEvent from '@testing-library/user-event'
import StateProivder from '../context/StateProivder'
import ContextA from '../components/ContextA'
import ContextB from '../components/ContextB'

describe('Global state management (useContext)', () => {
  it('Should render the toggle state globally', () => {
    render(
      <StateProivder>
        <ContextA />
        <ContextB />
      </StateProivder>
    )
    expect(screen.getByTestId('toggle-a').textContent).toBe('false')
    expect(screen.getByTestId('toggle-b').textContent).toBe('false')
    userEvent.click(screen.getByRole('button'))
    expect(screen.getByTestId('toggle-a').textContent).toBe('true')
    expect(screen.getByTestId('toggle-b').textContent).toBe('true')
  })
})
