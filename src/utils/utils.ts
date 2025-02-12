import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
//import jwt from 'jsonwebtoken'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

// /**
//  * Xóa đi ký tự `/` đầu tiên của path
//  */
// export const normalizePath = (path: string) => {
//   return path.startsWith('/') ? path.slice(1) : path
// }

// export const decodeJWT = <Payload = any>(token: string) => {
//   return jwt.decode(token) as Payload
// }
