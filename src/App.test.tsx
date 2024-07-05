import { render, screen } from '@testing-library/react'

import App from '@/App'

describe('RatesHeader', () => {
  const props = {}
  test('should show app', async () => {
    render(<App {...props} />)

    expect(screen.getByTestId('app-id')).toBeInTheDocument()
  })
})
