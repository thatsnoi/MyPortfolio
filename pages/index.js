import Background from '../components/Background'
import Container from '../components/Container'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import { motion } from 'framer-motion'
import { list, fadeIn } from './../styles/motion'
import Title from '../components/Title'
import About from '../components/About'

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
            className="text-3xl pb-3 text-gray-900 dark:text-white dark:text-opacity-50"
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

const Projects = () => {
  return (
    <div id="projects" className="pt-20">
      <Container className="h-96">
        <Title>Projects</Title>
      </Container>
    </div>
  )
}

const Contact = () => {
  return (
    <div id="contact" className="pt-20">
      <Container className="h-96">
        <Title>Contact</Title>
      </Container>
    </div>
  )
}
