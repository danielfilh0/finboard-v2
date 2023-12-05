import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'

import { LoginForm } from '@/app/(routes)/(auth)/login/_components/login-form'

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(() => ({
    push: jest.fn(),
  })),
}))

describe('Login Form Component', () => {
  it('should render correctly', () => {
    render(<LoginForm />)

    const inputEmail = screen.getByPlaceholderText(/email/i)
    const inputPassword = screen.getByPlaceholderText(/senha/i)
    const button = screen.getByText('Entrar')

    expect(inputEmail).toBeVisible()
    expect(inputPassword).toBeVisible()
    expect(button).toBeVisible()
  })

  it('should display error message when email is invalid', async () => {
    render(<LoginForm />)

    fireEvent.input(screen.getByPlaceholderText('Email'), {
      target: {
        value: 'invalid@email',
      },
    })

    fireEvent.input(screen.getByPlaceholderText('Senha'), {
      target: {
        value: 'testing',
      },
    })

    fireEvent.submit(screen.getByRole('button'))

    expect(
      await screen.findByText('Informe um e-mail válido'),
    ).toBeInTheDocument()
  })

  it('should display error message when email is empty', async () => {
    render(<LoginForm />)

    fireEvent.input(screen.getByPlaceholderText('Email'), {
      target: {
        value: '',
      },
    })

    fireEvent.input(screen.getByPlaceholderText('Senha'), {
      target: {
        value: 'testing',
      },
    })

    fireEvent.submit(screen.getByRole('button'))

    expect(await screen.findByText('E-mail é obrigatório')).toBeInTheDocument()
  })

  it('should display error message when password is empty', async () => {
    render(<LoginForm />)

    fireEvent.input(screen.getByPlaceholderText('Email'), {
      target: {
        value: 'valid@email.com',
      },
    })

    fireEvent.input(screen.getByPlaceholderText('Senha'), {
      target: {
        value: '',
      },
    })

    fireEvent.submit(screen.getByRole('button'))

    expect(await screen.findByPlaceholderText('Senha')).toHaveFocus()
  })
})
