import Container from '../Container'
import { motion } from 'framer-motion'
import {
  list,
  fadeIn,
  fadeInWithDelay,
  underlineStyle,
  underlineEffect,
} from './../../styles/motion'
import Image from 'next/image'
import meSrc from './../../public/me.png'
import Title from '../Title'
import InfoBox from '../InfoBox'
import { useState } from 'react'

const About = () => {
  const [active, setActive] = useState('skills')

  return (
    <div id="about" className="pt-20">
      <Container>
        <Title>About</Title>
      </Container>
      <Container className="flex flex-col md:flex-row md:space-x-10 items-start justify-start">
        <motion.div
          className="standard-text"
          variants={fadeInWithDelay(0.25)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Hello! I'm Noah, a software developer from Germany who is currently
          studying Data Science in Barcelona. I love to create beautiful
          applications for the web. <br />
          <br />
          Here are a few of my skills, my education and experience:
        </motion.div>
        <motion.div
          className="hidden md:block relative bg-white rounded-2xl w-52 h-52 flex-shrink-0 z-0 shadow-2xl"
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
      <Container className="flex flex-col md:flex-row justify-between space-y-5 md:space-y-0 md:space-x-16 md:mt-12">
        <motion.div
          className="flex flex-col space-y-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={list()}
        >
          <MenuItem
            onClick={() => setActive('skills')}
            active={active === 'skills'}
          >
            My Skills
          </MenuItem>
          <MenuItem
            onClick={() => setActive('education')}
            active={active === 'education'}
          >
            Education
          </MenuItem>
          <MenuItem
            onClick={() => setActive('experience')}
            active={active === 'experience'}
          >
            Experience
          </MenuItem>
        </motion.div>
        {(() => {
          switch (active) {
            case 'skills':
              return <MySkills />
            case 'education':
              return <Education />
            case 'experience':
              return <Experience />
            default:
              return <MySkills />
          }
        })()}
      </Container>
    </div>
  )
}

function MySkills() {
  return (
    <motion.div
      className="flex flex-col w-full max-w-4xl space-y-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={list()}
    >
      <InfoBox label="Frontend Development" value="Node.js" />
      <InfoBox label="App Development" value="Node.js" />
      <InfoBox label="ML/DS" value="Python" />
    </motion.div>
  )
}

function Education() {
  return (
    <motion.div
      className="flex flex-col w-full max-w-4xl space-y-4"
      initial="hidden"
      animate="visible"
      variants={list()}
    >
      <InfoBox
        label="MS Data Science, Universitat de Barcelona"
        value="2021 – 2022"
      />
      <InfoBox label="BS Information Systems, TUM" value="2018 – 2021" />
      <InfoBox
        label="Abitur, German International School Dubai"
        value="2012 – 2018"
      />
    </motion.div>
  )
}

function Experience() {
  return (
    <motion.div
      className="flex flex-col w-full max-w-4xl space-y-4"
      initial="hidden"
      animate="visible"
      variants={list()}
    >
      <InfoBox label="Software Developer, Qualicen" value="2021 – Current" />
      <InfoBox label="Intern, Thaltegos" value="2020 – 2021" />
      <InfoBox label="Freelancer" value="2019 – 2020" />
    </motion.div>
  )
}

function MenuItem({ children, onClick, active }) {
  return (
    <p className="cursor-pointer" onClick={onClick}>
      <motion.a
        className={`relative standard-text ${
          active ? 'dark:text-opacity-100' : 'dark:text-opacity-60'
        } dark:hover:text-opacity-100`}
        variants={fadeIn}
        style={underlineStyle}
        whileHover={underlineEffect}
      >
        {children}
      </motion.a>
    </p>
  )
}

export default About
