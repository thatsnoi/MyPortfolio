import { motion } from 'framer-motion'
import { FiChevronDown } from 'react-icons/fi'
import { fadeIn } from '../styles/motion'

const InfoBox = ({ label, value, details }) => {
  return (
    <motion.div
      className="group flex items-center justify-between p-4 bg-white bg-opacity-30 rounded-2xl w-full cursor-pointer dark:hover:text-opacity-100"
      variants={fadeIn}
    >
      <p className="standard-text dark:group-hover:text-opacity-100 transition-all duration-200">
        {label}
      </p>
      <div className="flex items-center space-x-2 standard-text font-light dark:text-opacity-70 group-hover:text-opacity-100 transition-all duration-200 text-right">
        <p>{value}</p>
        <FiChevronDown />
      </div>
    </motion.div>
  )
}

export default InfoBox
