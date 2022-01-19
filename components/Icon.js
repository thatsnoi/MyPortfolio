import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from './../styles/motion'

export default function Icon({ Icon, ...props }) {
  return (
    <motion.div
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 1.2 }}
      variants={fadeIn}
    >
      <Icon
        className="cursor-pointer text-3xl text-black dark:text-white dark:text-opacity-80 dark:hover:text-opacity-100"
        {...props}
      />
    </motion.div>
  )
}
