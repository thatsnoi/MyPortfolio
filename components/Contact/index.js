import Container from '../Container'
import { motion } from 'framer-motion'
import { fadeInWithDelay } from './../../styles/motion'
import Title from '../Title'

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
          <a className="underline" href="mailto:noahjadallah@outlook.de">
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
          <a
            className="underline"
            href="/Noah Jadallah.pdf"
            target="_blank"
            rel="noreferrer"
          >
            Download it here.
          </a>
        </motion.p>
      </Container>
    </div>
  )
}

export default Contact
