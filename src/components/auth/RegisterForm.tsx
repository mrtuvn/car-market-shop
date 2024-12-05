'use client'
// src/components/RegisterForm.tsx
import { useForm, SubmitHandler } from 'react-hook-form'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import { useFormState, useFormStatus } from 'react-dom'
import { signup } from '@/app/actions/auth'

export const RegisterForm = () => {
  const [state, action] = useFormState(signup, undefined)

  function SubmitButton() {
    const { pending } = useFormStatus()

    return (
      <button disabled={pending} type="submit">
        Sign Up
      </button>
    )
  }

  return (
    <div className="m-auto w-full max-w-lg space-y-10 rounded border bg-white p-8 shadow-md">
      <h2 className="mt-3 text-center text-2xl font-medium tracking-tight text-gray-900">
        Create your account
      </h2>

      <form action={action} className="mt-8 space-y-6">
        <div className="mb-4">
          <label
            htmlFor="register-username"
            className="mb-2 block text-sm font-medium text-gray-700"
          >
            Username
          </label>
          <input
            id="register-username"
            {...register('username', {
              required: 'Username is required',
              minLength: {
                value: 3,
                message: 'Username must be at least 3 characters',
              },
            })}
            className="relative block w-full appearance-none rounded border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            placeholder="Username"
          />
          {state?.errors?.name && (
            <p className="mt-1 text-sm text-red-600">{state?.errors?.name}</p>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="register-email" className="mb-2 block text-sm font-medium text-gray-700">
            Email Address
          </label>
          <input
            id="register-email"
            type="email"
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address',
              },
            })}
            className="relative block w-full appearance-none rounded border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            placeholder="Email Address"
          />
          {state?.errors?.email && (
            <p className="mt-1 text-sm text-red-600">{errors.errors.email}</p>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="register-password"
            className="mb-2 block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <input
            id="register-password"
            type="password"
            {...register('password', {
              required: 'Password is required',
              minLength: {
                value: 6,
                message: 'Password must be at least 6 characters',
              },
            })}
            className="relative block w-full appearance-none rounded border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            placeholder="Password"
          />
          {state?.errors?.password && (
            <p className="mt-1 text-sm text-red-600">{state?.errors.password}</p>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="confirmPassword" className="mb-2 block text-sm font-medium text-gray-700">
            Confirm Password
          </label>
          <input
            id="confirmPassword"
            type="password"
            {...register('confirmPassword', {
              required: 'Please confirm your password',
              validate: (value) => value === password || 'The passwords do not match',
            })}
            className="relative block w-full appearance-none rounded border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
          />
          {errors.confirmPassword && (
            <p className="mt-1 text-sm text-red-600">{errors.confirmPassword.message}</p>
          )}
        </div>

        <div className="mb-4">
          <SubmitButton />
        </div>

        <div className="text-center">
          <p className="text-sm text-gray-600">
            Already have an account?{' '}
            <Link href="/login" className="font-medium text-indigo-600 hover:text-indigo-500">
              Sign in now
            </Link>
          </p>
        </div>
      </form>
    </div>
  )
}
