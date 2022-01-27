import { motion } from 'framer-motion'
import { FiChevronDown } from 'react-icons/fi'
import { useState } from 'react/cjs/react.development'
import { fadeIn } from '../styles/motion'

const InfoBox = ({ label, value, details }) => {
  const [expanded, setExpanded] = useState(false)
  return (
    <motion.button
      className="group select-none flex flex-col bg-white bg-opacity-20 dark:bg-opacity-10 rounded-2xl w-full  dark:hover:text-opacity-100 shadow-sm border border-black dark:border-0"
      variants={fadeIn}
      style={{
        backdropFilter: 'blur(200px)',
      }}
      onClick={() => setExpanded(!expanded)}
    >
      <div className="w-full relative flex flex-col lg:flex-row items-center-between lg:items-center justify-between p-4 pr-10 lg:pr-4">
        <p className="standard-text-light text-2xl group-hover:text-opacity-100 dark:group-hover:text-opacity-100 transition-all duration-200">
          {label}
        </p>

        <div className="flex items-center space-x-2 text-2xl standard-text font-light group-hover:text-opacity-100 transition-all duration-200 text-right">
          <p>{value}</p>
          <div className="hidden lg:block">
            <motion.div
              animate={{
                rotate: expanded ? 180 : 0,
              }}
            >
              <FiChevronDown />
            </motion.div>
          </div>

          <div className="absolute right-5 top-0 bottom-0 flex items-center lg:hidden">
            <motion.div
              animate={{
                rotate: expanded ? 180 : 0,
              }}
            >
              <FiChevronDown />
            </motion.div>
          </div>
        </div>
      </div>
      <motion.div
        className="text-xl standard-text-light font-light"
        variants={{
          open: {
            height: 'auto',
            opacity: '1',
          },
          closed: {
            height: '0',
            opacity: 0,
          },
        }}
        initial="closed"
        animate={expanded ? 'open' : 'closed'}
        transition={{ type: 'spring', duration: 0.3 }}
      >
        <div className="p-4">{details}</div>
      </motion.div>
    </motion.button>
  )
}

export default InfoBox
