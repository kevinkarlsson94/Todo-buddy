import { useEffect, useState } from 'react'
import { Animated } from 'react-native'

const useFadeIn = (duration = 300): { opacity: Animated.Value } => {
  const opacity = useState(new Animated.Value(0))[0]
  const fadeIn = () => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: duration,
      useNativeDriver: true,
    }).start()
  }

  useEffect(() => {
    fadeIn()
  }, [])

  return {
    opacity,
  }
}

export default useFadeIn
