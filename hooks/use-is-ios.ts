"use client"

import { useState, useEffect } from "react"

export function useIsIOS() {
  const [isIOS, setIsIOS] = useState(false)

  useEffect(() => {
    const userAgent = window.navigator.userAgent
    setIsIOS(/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream)
  }, [])

  return isIOS
} 