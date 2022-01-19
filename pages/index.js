import Background from '../components/Background'
import Container from '../components/Container'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import { motion } from 'framer-motion'
import { list, fadeIn, fadeInWithDelay } from './../styles/motion'
import Image from 'next/image'
import meSrc from './../public/me.png'
import Title from '../components/Title'

export default function Home() {
  return (
    <div className="relative z-50 overflow-x-hidden pr-32" id="home">
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

const About = () => {
  return (
    <div id="about" className="pt-20">
      <Container>
        <Title>About</Title>
      </Container>
      <Container className="flex flex-col md:flex-row space-x-10 items-start justify-start">
        <motion.div
          className="standard-text"
          variants={fadeInWithDelay(0.25)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Hello! I'm Noah, a software developer from Germany who is currently
          studying Data Science in Barcelona. I love to create beautiful
          applications for the web. Here are a few of my favorite technologies I
          like to work with:
        </motion.div>
        <motion.div
          className="hidden md:block relative bg-white rounded-2xl w-64 h-64 flex-shrink-0 z-0 shadow-2xl"
          whileHover={{ scale: 1.2, rotateX: 10, rotateY: 10 }}
          variants={fadeInWithDelay(0.5)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Image
            className="absolute bottom-0 left-0 right-0 top-0 rounded-2xl"
            style={{ zIndex: -1 }}
            src={meSrc}
            alt="That's me!"
          />
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
