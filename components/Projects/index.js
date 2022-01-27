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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-5">
          <Project
            name="Flash AIO"
            type="SaaS Product"
            description={[
              "Created a SaaS to help users secure highly sought after collector's items.",
              'Integrations to Discord and Stripe.',
              'Developed custom solution for license key management.',
              'Tech Stack: React, Electron, Strapi, SQL.',
            ]}
          />
          <Project
            name="CATE"
            type="Bachelor Thesis"
            github="https://github.com/thatsnoi/RNN-for-Cause-Effect-Detection"
            description={[
              'Created a Recursive Neural Network for Cause-Effect Detection in NL Requirements.',
              'Implementation in PyTorch.',
              'Oustanding grade: 1,0',
              'Published an accompanying paper with a web demo.',
            ]}
            link="/Bachelor Thesis Final Noah Jadallah.pdf"
          />
          <Project
            name="GetMeAMovie"
            type="Movie Recommender"
            github="https://github.com/thatsnoi/RNN-for-Cause-Effect-Detection"
            description={[
              'Managed a team using SCRUM.',
              'Designed and implemented Frontend for Movie Recommender Web App.',
              'Tech Stack: React, Framer Motion, MobX, TailwindCSS.',
            ]}
            link="http://getmeamovie.com/"
          />
          <Project
            name="My Portfolio"
            type="Website"
            github="https://github.com/thatsnoi/RNN-for-Cause-Effect-Detection"
            description={[
              'Designed and implemented this Portfolio Website.',
              'Implemented features like dark/light mode.',
              'Tech Stack: Next.js, Framer Motion, TailwindCSS',
            ]}
            link="https://noahjadallah.vercel.app/"
          />
        </div>
      </Container>
    </div>
  )
}

export default Projects
