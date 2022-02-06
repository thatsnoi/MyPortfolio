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
import Link from 'next/link'

const About = () => {
  const [active, setActive] = useState('skills')

  return (
    <div id="about" className="pt-20">
      <Container>
        <Title>About</Title>
      </Container>
      <Container className="flex flex-col md:flex-row md:space-x-10 items-start justify-start">
        <motion.div
          className="flex flex-col justify-between standard-text text-2xl"
          variants={fadeInWithDelay(0.25)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Hello! I'm Noah, a software engineer from Germany and I am currently
          my Master's degree in Data Science at the University of Barcelona from
          which I will graduate in July. I love to create beautiful applications
          for the web and to solve Data Science problems.
        </motion.div>
        <motion.div
          className="relative rounded-2xl w-52 h-52 flex-shrink-0 z-0 shadow-2xl mt-5 md:mt-0"
          whileHover={{ scale: 1.2, rotateX: 10, rotateY: 10, rotateZ: 2 }}
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
      <Container>
        <motion.div
          className="flex flex-col justify-between standard-text text-2xl"
          variants={fadeInWithDelay(0.25)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Here are a few of my skills, my education and experience:
        </motion.div>
      </Container>
      <Container className="flex flex-col md:flex-row justify-between space-y-5 md:space-y-0 md:space-x-16 md:mt-5">
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
      <InfoBox label="Web Development" value="Node.js">
        Node.js, React/Next.js, Redux, Express.js, GraphQL, Tailwind CSS,
        HTML5/JS/CSS
      </InfoBox>
      <InfoBox label="ML/DS" value="Python">
        Python, Numpy, Pandas, Keras/Tensorflow, PyTorch, SQL | NLP, Deep
        Learning (CNNs, RNNs, LSTMs), Data Visualization, Web scraping
      </InfoBox>
      <InfoBox label="Other" value="Various">
        Java, R, SQL | Continous Integration (Git), Analytical Thinking,
        Architecture Design, Web Design, Web Scraping
      </InfoBox>
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
        value="2021/22"
      >
        Present average grade: 8.5/10
      </InfoBox>
      <InfoBox label="BS Information Systems, TUM" value="2018–21">
        Final Grade: 2.3 | Thesis Grade: 1.0 | Topic: Extraction of Causes and
        Effects from NL Requirements by Fine-Tuning Tree Recursive Neural
        Networks
      </InfoBox>
      <InfoBox
        label="Abitur, German International School Dubai"
        value="2012–18"
      >
        Final grade: 1.6
      </InfoBox>
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
      <InfoBox label="Software Developer, Qualicen" value="2021–Present">
        - Working on an analytics web app (Java, Node.js) in an agile
        environment.
      </InfoBox>
      <InfoBox label="Co-Founder, Flash AIO" value="2020–Present">
        <p>
          - Co-Founded and developed a Software as a Service (SaaS) company that
          helps users secure highly sought-after collector's items.
        </p>
        <p>
          - Developed cross-platform Electron app and worked on integrations for
          Discord and Stripe.
        </p>
        <p>- Implemented a custom license key and user management solution.</p>
        <p>- Acquired over 70 monthly paying customers.</p>
        <p>
          - More information in the{' '}
          <Link href="/#projects" passHref>
            <span className="underline standard-text-light-hover">
              projects section
            </span>
          </Link>
          .
        </p>
      </InfoBox>
      <InfoBox label="Intern, Thaltegos" value="2020–21">
        <p>
          - Improved the quality of data of over 50k EV charging points by
          utilizing various ML techniques through KNIME.
        </p>
        <p>
          - Designed software architecture and developed a new SaaS in the
          E-Mobility Sector (Node.js, React, GraphQL, SQL).
        </p>
      </InfoBox>
      <InfoBox label="Freelancer" value="2019–20">
        <p>
          - Developed websites and web apps (Admin dashboards, POS systems etc.)
          for multiple clients.
        </p>
        <p>- Handled client aquisition and communication.</p>
      </InfoBox>
    </motion.div>
  )
}

function MenuItem({ children, onClick, active }) {
  return (
    <p className="" onClick={onClick}>
      <motion.a
        className={`relative text-2xl ${
          active ? 'standard-text-strong' : 'standard-text-light-hover'
        }`}
        variants={fadeIn}
        style={underlineStyle}
        whileHover={underlineEffect}
        whileTap={underlineEffect}
      >
        {children}
      </motion.a>
    </p>
  )
}

export default About
