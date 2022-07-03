import { useEffect, useState } from 'react'
import { Keyboard } from 'react-native'

// used to get the height of the keyboard
// I used this hook to move the input over the keyboard when toggled
export const useKeyboardHeight = (): { keyboardHeight: number } => {
  const [keyboardHeight, setKeyboardHeight] = useState(0)

  useEffect(() => {
    // listen to keyboardDidShow event and set keyboard height
    const showListener = Keyboard.addListener('keyboardDidShow', (e) =>
      setKeyboardHeight(e.endCoordinates.height)
    )

    // listen to keyboardDidHide event and unsets keyboard height
    const hideListener = Keyboard.addListener('keyboardDidHide', () =>
      setKeyboardHeight(0)
    )

    // cleanup listeners on unmount
    return () => {
      showListener.remove()
      hideListener.remove()
    }
  }, [])

  return { keyboardHeight }
}
