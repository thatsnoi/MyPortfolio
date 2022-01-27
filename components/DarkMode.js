import { useState, useEffect } from 'react'

const DarkMode = ({ setDarkMode }) => {
  const [activeTheme] = useState(document.body.dataset.theme)
  useEffect(() => {
    setDarkMode(activeTheme === 'dark')
  }, [activeTheme, setDarkMode])
  return <></>
}

export default DarkMode
