import { createContext } from 'react'
import { State } from '@/contexts/drawer/types'

export const DrawerContext = createContext<State | any>(undefined)
