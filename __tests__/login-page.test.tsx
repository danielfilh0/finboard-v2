import { render, screen } from '@testing-library/react'

import LoginPage from '@/app/(routes)/(auth)/login/page'

jest.mock('next/navigation')

describe('Login Page', () => {
  it('should render correctly', () => {
    render(<LoginPage />)

    expect(screen.getByText('Realize aqui o seu login'))
  })
})
