import { motion } from 'framer-motion'
import { FiGithub } from 'react-icons/fi'
import Button from '../Button'
import Icon from '../Icon'
import { fadeIn, fadeInWithDelay } from './../../styles/motion'

const Project = ({ name, type, github }) => {
  return (
    <motion.div
      className="group bg-white p-4 md:p-5 p bg-opacity-10 rounded-2xl w-full shadow-sm border border-black dark:border-0"
      style={{
        backdropFilter: 'blur(100px)',
      }}
      variants={fadeInWithDelay(0.5)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <h3 className="standard-text group-hover:dark:text-opacity-100 group-hover:text-opacity-100 transition-all text-3xl md:text-4xl font-bold truncate">
        {name}
      </h3>
      <p className="standard-text-light italic text-xl">{type}</p>
      <div className="flex justify-between items-center pt-10">
        <a
          className="standard-text-light"
          href={github}
          target="_blank"
          rel="noreferrer"
        >
          {github && <Icon Icon={FiGithub} />}
        </a>
        <Button>Learn More</Button>
      </div>
    </motion.div>
  )
}

export default Project
