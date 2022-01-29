import { motion } from 'framer-motion'
import { FiExternalLink, FiGithub } from 'react-icons/fi'
import Button from '../Button'
import Icon from '../Icon'
import { fadeInWithDelay } from './../../styles/motion'

const Project = ({ name, type, github, description, learnMore, link }) => {
  return (
    <motion.div
      className="group bg-white p-4 md:p-5 bg-opacity-10 rounded-2xl w-full shadow-sm border border-black dark:border-0"
      style={{
        backdropFilter: 'blur(100px)',
      }}
      variants={fadeInWithDelay(0.5)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="flex flex-col md:flex-row lg:flex-col xl:flex-row justify-between">
        <div className="flex flex-col">
          <h3 className="standard-text group-hover:dark:text-opacity-100 group-hover:text-opacity-100 transition-all text-3xl md:text-4xl font-bold truncate">
            {name}
          </h3>
          <p className="standard-text-light italic text-xl">{type}</p>
        </div>
        <div className="flex space-x-3 pt-2">
          {link && (
            <a
              className="standard-text-light z-10"
              href={link}
              target="_blank"
              rel="noreferrer"
            >
              <Icon Icon={FiExternalLink} />
            </a>
          )}
          {github && (
            <a
              className="standard-text-light z-10"
              href={github}
              target="_blank"
              rel="noreferrer"
            >
              <Icon Icon={FiGithub} />
            </a>
          )}
        </div>
      </div>

      <div className="standard-text-light text-lg pt-2 ">
        {description?.map((text, i) => {
          return (
            <p key={i}>
              <span>- </span>
              {text}
            </p>
          )
        })}
      </div>

      <div className="flex flex-row-reverse justify-between items-center">
        {learnMore && <Button>Learn More</Button>}
      </div>
    </motion.div>
  )
}

export default Project
