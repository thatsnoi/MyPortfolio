import Background from '../components/Background'
import Container from '../components/Container'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import { motion } from 'framer-motion'
import { list, fadeIn, fadeInWithDelay } from './../styles/motion'
import About from '../components/About'
import Projects from '../components/Projects'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <div className="relative z-50 overflow-x-hidden pr-16 md:pr-32" id="home">
      <Background />
      <Header />
      <Sidebar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Container className="flex justify-between">
        <p className="standard-text-light">Copyright © 2022</p>
        <p className="standard-text-light">Made by me with ❤️</p>
      </Container>
    </div>
  )
}

const Hero = () => {
  return (
    <div className="h-screen z-50">
      <Container className="pt-48 standard-text">
        <motion.div
          variants={list(0.25, 0.25)}
          initial="hidden"
          animate="visible"
        >
          <motion.p
            className="pb-3 text-3xl standard-text-light"
            variants={fadeIn}
          >
            Hi, my name is
          </motion.p>
          <motion.p
            className="text-6xl md:text-7xl lg:text-8xl font-black pb-2 dark:text-opacity-100 dark:text-white"
            variants={fadeIn}
          >
            Noah Jadallah.
          </motion.p>
          <motion.p className="text-3xl md:text-4xl" variants={fadeIn}>
            I am a software developer and data scientist.
          </motion.p>
        </motion.div>
      </Container>
    </div>
  )
}
