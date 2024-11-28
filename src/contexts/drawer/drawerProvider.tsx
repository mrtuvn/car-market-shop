import React, { useReducer, useMemo } from 'react'
import { initialState, DRAWER_VIEWS } from './types'
import { DrawerContext } from '@/contexts/drawer/drawerContext'
import { drawerReducer } from '@/contexts/drawer/drawerReducer'

export const DrawerProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(drawerReducer, initialState)
  const setDrawerView = (view: DRAWER_VIEWS) => dispatch({ type: 'SET_DRAWER_VIEW', view })
  const openDrawer = (data?: any) => dispatch({ type: 'OPEN_DRAWER', data })
  const closeDrawer = () => dispatch({ type: 'CLOSE_DRAWER' })

  const value = useMemo(
    () => ({
      ...state,
      openDrawer,
      closeDrawer,
      setDrawerView,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [state],
  )
  return <DrawerContext.Provider value={value}>{children}</DrawerContext.Provider>
}
