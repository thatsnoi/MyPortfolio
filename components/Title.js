import { motion } from 'framer-motion'
import { fadeInWithDelay } from './../styles/motion'

const Title = ({ children }) => {
  return (
    <motion.p
      className="text-7xl font-black pb-2 dark:text-opacity-100 dark:text-white"
      variants={fadeInWithDelay(0.25)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {children}
    </motion.p>
  )
}

export default Title
