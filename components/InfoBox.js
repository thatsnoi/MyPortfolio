import { motion } from 'framer-motion'
import { FiChevronDown } from 'react-icons/fi'
import { fadeIn } from '../styles/motion'

const InfoBox = ({ label, value, details }) => {
  return (
    <motion.div
      className="relative group flex flex-col md:flex-row items-center-between md:items-center justify-between p-4 pr-10 md:pr-4 bg-white bg-opacity-30 rounded-2xl w-full cursor-pointer dark:hover:text-opacity-100 shadow-sm"
      variants={fadeIn}
    >
      <p className="standard-text-light text-2xl group-hover:text-opacity-100 dark:group-hover:text-opacity-100 transition-all duration-200">
        {label}
      </p>

      <div className="flex items-center space-x-2 text-2xl standard-text font-light group-hover:text-opacity-100 transition-all duration-200 text-right">
        <p>{value}</p>
        <div className="hidden md:block">
          <FiChevronDown />
        </div>

        <div className="absolute right-5 top-0 bottom-0 flex items-center md:hidden">
          <FiChevronDown />
        </div>
      </div>
    </motion.div>
  )
}

export default InfoBox
