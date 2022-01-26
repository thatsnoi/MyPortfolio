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
        className="cursor-pointer standard-text-light-hover text-3xl"
        {...props}
      />
    </motion.div>
  )
}
