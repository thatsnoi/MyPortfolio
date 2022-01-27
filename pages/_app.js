import '../styles/globals.css'
import dynamic from 'next/dynamic'
import { useState, useEffect } from 'react'

const AnimatedCursor = dynamic(() => import('react-animated-cursor'), {
  ssr: false,
})

const DarkMode = dynamic(() => import('../components/DarkMode'), {
  ssr: false,
})

function MyApp({ Component, pageProps }) {
  const [isMounted, setIsMounted] = useState(false)
  const [darkMode, setDarkMode] = useState(true)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <>
      <DarkMode setDarkMode={setDarkMode} />
      {isMounted && (
        <>
          <Component {...pageProps} />
          {darkMode ? (
            <AnimatedCursor color="255,255,255" outerSize={25} outerScale={3} />
          ) : (
            <AnimatedCursor color="0,0,0" outerSize={25} outerScale={3} />
          )}
        </>
      )}
    </>
  )
}

export default MyApp
