import Container from '../Container'
import Title from '../Title'
import Icon from '../Icon'
import { FiGithub } from 'react-icons/fi'
import Button from '../Button'
import Project from './Project'

const Projects = () => {
  return (
    <div id="projects" className="pt-20">
      <Container>
        <Title>Projects</Title>
        <p className="standard-text text-2xl mt-5">
          Here are a few projects I did:
        </p>
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
