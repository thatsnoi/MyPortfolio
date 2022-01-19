import Container from './Container'
import { motion } from 'framer-motion'
import {
  list,
  fadeIn,
  underlineStyle,
  underlineEffect,
} from './../styles/motion'

export default function Header() {
  return (
    <Container
      className="fixed w-full flex justify-between text-3xl backdrop-blur-2xl h-16 dark:text-white dark:text-opacity-60 z-50"
      style={{
        background:
          'linear-gradient(180deg, #FFFFFF -17.13%, rgba(255, 255, 255, 0.61) 43.26%, rgba(255, 255, 255, 0) 100%)',
        filter: 'blur(50px)',
      }}
    >
      <motion.h1
        className="dark:text-white dark:text-opacity-80"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        Noah Jadallah
      </motion.h1>
      <motion.div
        className="hidden md:flex flex-col text-right cursor-pointer"
        initial="hidden"
        animate="visible"
        variants={list(1.5)}
      >
        <p>
          <motion.a
            className="font-bold dark:text-white dark:text-opacity-80 mb-2"
            variants={fadeIn}
            style={underlineStyle}
            whileHover={underlineEffect}
          >
            Home
          </motion.a>
        </p>
        <MenuItem>About</MenuItem>
        <MenuItem>Projects</MenuItem>
        <MenuItem>Contact</MenuItem>
      </motion.div>
    </Container>
  )
}

function MenuItem({ children }) {
  return (
    <p>
      <motion.a
        className="relative dark:text-opacity-60 dark:hover:text-opacity-100 text-black dark:text-white"
        variants={fadeIn}
        style={underlineStyle}
        whileHover={underlineEffect}
      >
        {children}
      </motion.a>
    </p>
  )
}
