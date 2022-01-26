import Container from '../Container'
import Title from '../Title'
import Project from './Project'
import { motion } from 'framer-motion'
import { fadeIn, fadeInWithDelay } from './../../styles/motion'

const Projects = () => {
  return (
    <div id="projects" className="pt-20">
      <Container>
        <Title>Projects</Title>
        <motion.p
          className="standard-text text-2xl mt-5"
          variants={fadeInWithDelay(0.25)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Here are a few projects I did:
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
          <Project name="Flash AIO" type="SaaS Product" />
          <Project
            name="CATE"
            type="Bachelor Thesis"
            github="https://github.com/thatsnoi/RNN-for-Cause-Effect-Detection"
          />
          <Project
            name="GetMeAMovie"
            type="MovieRecommender"
            github="https://github.com/thatsnoi/RNN-for-Cause-Effect-Detection"
          />
          <Project
            name="My Portfolio"
            type="Website"
            github="https://github.com/thatsnoi/RNN-for-Cause-Effect-Detection"
          />
        </div>
      </Container>
    </div>
  )
}

export default Projects
