'use client'
// src/components/LoginForm.tsx
import React from 'react'
import { useForm } from 'react-hook-form'
import Link from 'next/link'
import { redirect } from 'next/navigation'
// import { useAppDispatch, useAppSelector } from '../../hooks'
// import { LoginCredentials } from '../../contexts/auth/types'
// import { loginAsync } from '../../features/auth/authThunks'
// import { selectAuthError, selectAuthLoading } from '../../features/auth/authSelectors'
import { useFormState, useFormStatus } from 'react-dom'
import { login } from '@/app/actions/auth'

const LoginForm: React.FC = () => {
  const [state, action] = useFormState(login, undefined)

  function ButtonLogin() {
    const { pending } = useFormStatus()

    return (
      <button disabled={pending} type="submit">
        Login
      </button>
    )
  }

  return (
    <div className="m-auto w-full max-w-md space-y-8 rounded border bg-white p-8 shadow-md">
      <h2 className="mb-0 mt-3 text-center text-2xl font-medium tracking-tight text-gray-900">
        Sign in to your account demo
      </h2>
      <p className="text-center text-sm">
        username: emilys <br></br>
        password: emilyspass
      </p>

      <form action={action} className="mt-8 space-y-6">
        <div className="mb-4">
          <label htmlFor="username" className="mb-2 block text-sm font-medium text-gray-700">
            Username
          </label>
          <input
            id="username"
            className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            placeholder="Username"
          />
          {state?.errors?.username && (
            <p className="mt-1 text-sm text-red-600">{state?.errors?.username}</p>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="mb-2 block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            id="password"
            type="password"
            required
            className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            placeholder="Password"
          />
          {state?.errors.password && (
            <p className="mt-1 text-sm text-red-600">{state?.errors.password}</p>
          )}
        </div>

        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center">
            <input
              id="remember-me"
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
            />
            <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
              Remember me
            </label>
          </div>

          <div className="text-sm">
            <Link
              href="/forgot-password"
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              Forgot your password?
            </Link>
          </div>
        </div>

        <div className="mb-4">
          <button
            type="submit"
            className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-3 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:bg-indigo-400"
          >
            <ButtonLogin />
          </button>
        </div>

        <div className="text-center">
          <p className="text-sm text-gray-600">
            Don't have an account?{' '}
            <Link href="/register" className="font-medium text-indigo-600 hover:text-indigo-500">
              Create an account
            </Link>
          </p>
        </div>
      </form>
    </div>
  )
}
export default LoginForm
