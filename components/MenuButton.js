import React from 'react'
import { motion } from 'framer-motion'

const MenuButton = ({
  isOpen = false,
  width = 30,
  height = 30,
  strokeWidth = 1,
  color = '#000',
  transition = null,
  lineProps = null,
  ...props
}) => {
  const variant = isOpen ? 'opened' : 'closed'
  const top = {
    closed: {
      rotate: 0,
      translateY: 0,
    },
    opened: {
      rotate: 45,
      translateY: 1.5,
    },
  }
  const center = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  }
  const bottom = {
    closed: {
      rotate: 0,
      translateY: 0,
    },
    opened: {
      rotate: -45,
      translateY: -1.5,
    },
  }
  lineProps = {
    stroke: 'currentColor',
    strokeWidth: strokeWidth,
    vectorEffect: 'non-scaling-stroke',
    initial: 'closed',
    animate: variant,
    transition,
    ...lineProps,
  }
  const unitHeight = 4
  const unitWidth = (unitHeight * width) / height

  return (
    <motion.svg
      viewBox={`0 0 ${unitWidth} 4`}
      overflow="visible"
      preserveAspectRatio="none"
      width={width}
      height={height}
      {...props}
      className="md:hidden standard-text-light z-50"
    >
      <motion.line
        x1="0"
        x2="0.3rem"
        y1="0"
        y2="0"
        variants={top}
        {...lineProps}
      />
      <motion.line
        x1="0.1rem"
        x2="0.3rem"
        y1="1.5"
        y2="1.5"
        variants={center}
        {...lineProps}
      />
      <motion.line
        x1="0"
        x2="0.3rem"
        y1="3"
        y2="3"
        variants={bottom}
        {...lineProps}
      />
    </motion.svg>
  )
}

export { MenuButton }
