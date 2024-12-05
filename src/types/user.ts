export type UserAddress = {
  id: number
  firstName: string
  lastName: string
  address: Address['address']
}

interface Address {
  address: {
    address: string
    city: string
    postalCode: string
    state: string
  }
}

export interface User {
  id: number
  username: string
  email: string
  firstName?: string
  lastName?: string
  token: string
  role: 'admin' | 'user'
}

export interface Admin extends User {
  canEditRole: boolean
}

export interface LoginCredentials {
  username: string
  password: string
  rememberMe: boolean
}

export interface RegisterCredentials {
  username: string
  email: string
  password: string
  confirmPassword: string
}

export interface AuthState {
  user: User | null
  isLoading: boolean
  error: string | null
  isLoggedIn: boolean
  success: boolean
}
