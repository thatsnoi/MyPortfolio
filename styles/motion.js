export const list = (delay = 0, staggerChildren = 0.1) => {
  return {
    visible: {
      opacity: 1,
      transition: {
        when: 'beforeChildren',
        staggerChildren: staggerChildren,
        delay: delay,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        when: 'afterChildren',
      },
    },
  }
}

export const fadeIn = {
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  hidden: { opacity: 0, y: -100 },
}

export const fadeInWithDelay = (delay = 0) => {
  return {
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, delay: delay } },
    hidden: { opacity: 0, y: -100 },
  }
}

export const underlineStyle = {
  textDecoration: 'none',
  background:
    'linear-gradient(currentColor, currentColor) bottom / 0 .1em no-repeat',
  backgroundSize: '0% 3px',
  backgroundPosition: 'right bottom',
}

export const underlineEffect = {
  backgroundSize: '100% 3px',
  transition: { duration: 0.3 },
}
