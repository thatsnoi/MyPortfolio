import { motion } from 'framer-motion'

export default function Bubble({ color, height, width, top, left, right }) {
  const xValues = Array.from({ length: 12 }, () =>
    Math.floor(Math.random() * 200 - 100)
  )
  const yValues = Array.from({ length: 12 }, () =>
    Math.floor(Math.random() * 200 - 100)
  )

  return (
    <motion.div
      animate={{
        x: [...xValues, xValues[xValues.length - 1]],
        y: [...yValues, yValues[yValues.length - 1]],
      }}
      transition={{ duration: 60, repeat: 'reverse' }}
      style={{
        position: 'fixed',
        width: width,
        height: height,
        left: left,
        right: right,
        top: top,
        zIndex: -10,
        background: `radial-gradient(50% 50% at 50% 50%, ${color} 0%, rgba(255, 175, 54, 0) 100%)`,
      }}
    ></motion.div>
  )
}
