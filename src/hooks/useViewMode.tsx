'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import type { ViewMode } from '@/types'

interface ViewModeContextType {
  viewMode: ViewMode
  setViewMode: (mode: ViewMode) => void
  isFreelanceMode: boolean
  isProfessionalMode: boolean
}

const ViewModeContext = createContext<ViewModeContextType | undefined>(undefined)

export function ViewModeProvider({ children }: { children: ReactNode }) {
  const [viewMode, setViewModeState] = useState<ViewMode>('freelance')

  useEffect(() => {
    // Check localStorage for saved preference
    const saved = localStorage.getItem('preferred-view-mode') as ViewMode
    if (saved && (saved === 'freelance' || saved === 'professional')) {
      setViewModeState(saved)
    }
  }, [])

  const setViewMode = (mode: ViewMode) => {
    console.log('setViewMode called with:', mode)
    setViewModeState(mode)
    localStorage.setItem('preferred-view-mode', mode)
    
    // Add a small delay to ensure proper state synchronization
    setTimeout(() => {
      console.log('ViewMode set to:', mode)
    }, 50)
  }

  const isFreelanceMode = viewMode === 'freelance'
  const isProfessionalMode = viewMode === 'professional'

  return (
    <ViewModeContext.Provider value={{ 
      viewMode, 
      setViewMode, 
      isFreelanceMode, 
      isProfessionalMode 
    }}>
      {children}
    </ViewModeContext.Provider>
  )
}

export function useViewMode() {
  const context = useContext(ViewModeContext)
  if (context === undefined) {
    throw new Error('useViewMode must be used within a ViewModeProvider')
  }
  return context
}