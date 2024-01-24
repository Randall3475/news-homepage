import { useEffect, useState } from 'react'

const useMediaQuery = () => {
  const [mediaQuery, setMediaQuery] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  })

  useEffect(() => {
    const handleResize = () => {
      setMediaQuery({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    // Initial window size
    handleResize()

    // Add event listener to update window size on resize
    window.addEventListener('resize', handleResize)

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, []) // Empty dependency array ensures this effect runs only once on mount

  return mediaQuery
}

export default useMediaQuery
