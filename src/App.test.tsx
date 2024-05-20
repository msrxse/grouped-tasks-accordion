import { render, screen } from '@testing-library/react'

import App from '@/App'

describe('RatesHeader', () => {
  const props = {}
  test('should show title', async () => {
    render(<App {...props} />)
    const title = screen.getByTestId('app-id')

    expect(title).toBeInTheDocument()
  })
})
