import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import { motion } from 'framer-motion'
import Icon from './Icon'
import { list } from './../styles/motion'

export default function Sidebar() {
  return (
    <motion.div
      className="flex flex-col space-y-5 p-4 py-8 fixed bottom-0 right-3 sm:right-5 md:right-10 lg:right-20 xl:right-24 border-r-2 border-black dark:border-white dark:border-opacity-50"
      variants={list(1.5)}
      initial="hidden"
      animate="visible"
    >
      <a
        href="https://www.github.com/thatsnoi"
        target="_blank"
        rel="noreferrer"
      >
        <Icon Icon={FiGithub} />
      </a>
      <a
        href="https://www.linkedin.com/in/noah-jadallah"
        target="_blank"
        rel="noreferrer"
      >
        <Icon Icon={FiLinkedin} />
      </a>
      <a href="mailto:noahjadallah@outlook.de">
        <Icon Icon={FiMail} />
      </a>
    </motion.div>
  )
}
