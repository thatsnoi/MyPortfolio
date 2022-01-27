import Background from '../components/Background'
import Container from '../components/Container'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import { motion } from 'framer-motion'
import { list, fadeIn, fadeInWithDelay } from './../styles/motion'
import Title from '../components/Title'
import About from '../components/About'
import Projects from '../components/Projects'

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
        <p className="standard-text-light">Copyright 2022</p>
        <p className="standard-text-light">Made by me with ❤️</p>
        <p className="standard-text-light">Privacy Policy</p>
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

const Contact = () => {
  return (
    <div id="contact" className="pt-20 pb-24">
      <Container>
        <Title>Contact</Title>
        <motion.p
          className="standard-text text-2xl mt-5"
          variants={fadeInWithDelay(0.25)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Whether you have new opportunities for me or you just want to talk, I
          am always all ears.
        </motion.p>

        <motion.p
          className="standard-text text-2xl mt-5"
          variants={fadeInWithDelay(0.25)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Email:{' '}
          <a className="underline " href="mailto:noahjadallah@outlook.de">
            noahjadallah@outlook.de
          </a>
        </motion.p>
        <motion.p
          className="standard-text text-2xl mt-5"
          variants={fadeInWithDelay(0.25)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Want to have a look at my CV?{' '}
          <span className="underline ">Download it here.</span>
        </motion.p>
      </Container>
    </div>
  )
}
