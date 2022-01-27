import { useRouter } from 'next/router'
import Container from './Container'
import { motion } from 'framer-motion'
import {
  list,
  fadeIn,
  underlineStyle,
  underlineEffect,
} from './../styles/motion'
import Link from 'next/link'

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
        className="dark:text-white dark:text-opacity-80 cursor-pointer"
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
        <MenuItem href="/#home" className="mb-2">
          Home
        </MenuItem>
        <MenuItem href="/#about">About</MenuItem>
        <MenuItem href="/#projects"> Projects</MenuItem>
        <MenuItem href="/#contact">Contact</MenuItem>
      </motion.div>
      <motion.div
        className="group md:hidden flex flex-col items-end cursor-pointer space-y-2"
        initial="hidden"
        animate="visible"
        variants={list()}
        whileHover={{ scale: 1.05 }}
      >
        <motion.div
          className="w-10 h-1 bg-black dark:bg-white bg-opacity-70 dark:bg-opacity-80 group-hover:bg-opacity-100 group-hover:dark:bg-opacity-100"
          variants={fadeIn}
        ></motion.div>
        <motion.div
          className="w-6 h-1 bg-black dark:bg-white bg-opacity-70 dark:bg-opacity-80 group-hover:bg-opacity-100 group-hover:dark:bg-opacity-100"
          variants={fadeIn}
        ></motion.div>
        <motion.div
          className="w-8 h-1 bg-black dark:bg-white bg-opacity-70 dark:bg-opacity-80 group-hover:bg-opacity-100 group-hover:dark:bg-opacity-100"
          variants={fadeIn}
        ></motion.div>
      </motion.div>
    </Container>
  )
}

function MenuItem({ className, children, href }) {
  const router = useRouter()

  return (
    <Link href={href} passHref>
      <p className={className}>
        <motion.a
          className={`relative ${
            router.asPath === href
              ? 'font-bold standard-text-strong'
              : 'standard-text-light-hover'
          }`}
          variants={fadeIn}
          style={underlineStyle}
          whileHover={underlineEffect}
        >
          {children}
        </motion.a>
      </p>
    </Link>
  )
}
