import { useRouter } from 'next/router'
import Container from './Container'
import { motion, AnimatePresence } from 'framer-motion'
import {
  list,
  fadeIn,
  underlineStyle,
  underlineEffect,
} from './../styles/motion'
import Link from 'next/link'
import { useState } from 'react'
import { MenuButton } from './MenuButton'

export default function Header() {
  const [expandedMenu, setExpandedMenu] = useState(false)

  return (
    <Container
      className="fixed w-full flex justify-between items-center md:items-start text-3xl backdrop-blur-2xl h-16 dark:text-white dark:text-opacity-60 z-50"
      style={{
        background:
          'linear-gradient(180deg, #FFFFFF -17.13%, rgba(255, 255, 255, 0.61) 43.26%, rgba(255, 255, 255, 0) 100%)',
        filter: 'blur(50px)',
      }}
    >
      <motion.h1
        className="dark:text-white dark:text-opacity-80 "
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        Noah Jadallah
      </motion.h1>
      <motion.div
        className="hidden md:flex flex-col text-right "
        initial="hidden"
        animate="visible"
        variants={list(1.5)}
      >
        <MenuItem href="/#home" className="mb-2">
          Home
        </MenuItem>
        <MenuItem href="/#about">About</MenuItem>
        <MenuItem href="/#projects"> Projects</MenuItem>
        <MenuItem href="/#contact">Contact</MenuItem>
      </motion.div>
      <MenuButton
        isOpen={expandedMenu}
        onClick={() => setExpandedMenu(!expandedMenu)}
        strokeWidth="3"
        width="30"
        color="white"
      />
      <motion.div
        className="fixed top-0 right-0 left-0 bg-white dark:bg-black bg-opacity-90 z-40"
        animate={{ height: expandedMenu ? '100vh' : '0vh' }}
        initial={false}
        transition={{ duration: 0.3 }}
        style={{
          backdropFilter: 'blur(100px)',
        }}
      >
        <AnimatePresence>
          {expandedMenu && (
            <motion.div
              className="flex flex-col p-4 items-center justify-center space-y-5 pt-20"
              animate={expandedMenu ? 'visible' : 'hidden'}
              variants={list(0)}
              initial="hidden"
            >
              <MenuItem
                href="/#home"
                large
                onClick={() => setExpandedMenu(!expandedMenu)}
              >
                Home
              </MenuItem>
              <MenuItem
                href="/#about"
                large
                onClick={() => setExpandedMenu(!expandedMenu)}
              >
                About
              </MenuItem>
              <MenuItem
                href="/#projects"
                large
                onClick={() => setExpandedMenu(!expandedMenu)}
              >
                Projects
              </MenuItem>
              <MenuItem
                href="/#contact"
                large
                onClick={() => setExpandedMenu(!expandedMenu)}
              >
                Contact
              </MenuItem>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </Container>
  )
}

function MenuItem({ className, children, href, large, onClick }) {
  const router = useRouter()

  return (
    <Link href={href} passHref>
      <p className={className} onClick={onClick}>
        <motion.a
          className={`relative ${large ? 'text-5xl' : ''} ${
            router.asPath === href
              ? 'font-bold standard-text-strong'
              : 'standard-text-light-hover'
          }`}
          variants={fadeIn}
          style={underlineStyle}
          whileHover={underlineEffect}
          whileTap={underlineEffect}
        >
          {children}
        </motion.a>
      </p>
    </Link>
  )
}
