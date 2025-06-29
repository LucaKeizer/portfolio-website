'use client'

import { useState, useEffect } from 'react'

export function useWelcome() {
  const [showWelcome, setShowWelcome] = useState(false)
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    // Check if this is the first visit
    const hasVisited = localStorage.getItem('luca-portfolio-visited')
    
    if (!hasVisited) {
      setShowWelcome(true)
    } else {
      setIsReady(true)
    }
  }, [])

  const handleWelcomeComplete = () => {
    setShowWelcome(false)
    setIsReady(true)
  }

  const resetWelcome = () => {
    localStorage.removeItem('luca-portfolio-visited')
    localStorage.removeItem('preferred-language')
    localStorage.removeItem('preferred-view-mode')
    setShowWelcome(true)
    setIsReady(false)
  }

  return {
    showWelcome,
    isReady,
    handleWelcomeComplete,
    resetWelcome
  }
}