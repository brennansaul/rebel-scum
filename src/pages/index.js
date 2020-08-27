import React, { useContext, useRef} from "react"
import ReactDOM from 'react-dom'
import { graphql } from "gatsby"
import ThemeContext from "../utils/theme"
import { PageLayout } from "../components"
import { SEO } from "../utils"
import { Container, Image } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons'
import ProjectsSection from '../components/Sections/ProjectsSection';

export default ({ data }) => {
  const { unemployed, firstName, lastName, occupation } = data.site.siteMetadata
  const { dark } = useContext(ThemeContext)
  const parallax = useRef();
  const url = (name, wrap = false) => `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`

  return (
    <PageLayout>
      <SEO title="Home" />
      <Parallax ref={ref => (parallax.current = ref)} pages={2}>
        <ParallaxLayer offset={0} speed={0} factor={3} style={{ width: '100%', boxSizing: 'border-box', backgroundColor: "#222", backgroundSize: 'cover' }} />
        <ParallaxLayer className="parallax-background-1" offset={0} speed={1} />

        <ParallaxLayer offset={0} speed={0} factor={3} style={{ width: '100%', boxSizing: 'border-box', backgroundImage: url('stars', true), backgroundSize: 'cover' }} />

        <ParallaxLayer offset={0} speed={1} className="flex">
        {/* <ParallaxLayer offset={1} speed={1} style={{ backgroundColor: '#805E73' }} /> */}
          <Container className="self-center flex flex-col items-center" fluid>
            <Image
              width="150"
              height="150"
              fluid
              src={dark ? `../../icons/darth-vader.png` : `../../icons/r2-d2.png`}
              alt={dark ? "Darth Vader" : "R2-D2"}
            />
            {unemployed && (
              <p className="mt-2">
                <b> Hey! I am looking for new opportunities :)</b>
              </p>
            )}
            <Container className="py-0 my-0">
              <h1
                style={{
                  fontSize: "5rem",
                  color: "black",
                }}
              >
                <span className="first-name">{firstName}</span>&nbsp;
                <span className="last-name">{lastName}</span>
              </h1>
              <p>
                <i>
                  {occupation} by day,&nbsp;
                  {dark ? `Imperial enforcer by night` : `Rebel scum by night`}
                </i>
              </p>
            </Container>
            <hr className="my-3 w-25" />
            <div className="d-md-inline-flex icons-container">
              <a
                href="https://github.com/brennansaul"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={["fab", "github"]}
                  className="icons github"
                  title="Github"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/brennansaul/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={["fab", "linkedin"]}
                  className="icons linkedin"
                  title="LinkedIn"
                />
              </a>
              <a
                href="https://stackoverflow.com/users/8168719/ob1?tab=profile"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={["fab", "stack-overflow"]}
                  className="icons stackOverflow"
                  title="Hackerrank"
                />
              </a>
              {/* <a
                href="https://www.freecodecamp.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={["fab", "free-code-camp"]}
                  className="icons fcc"
                  title="FreeCodeCamp"
                />
              </a>
              <a
                href="https://www.hackerrank.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={["fab", "hackerrank"]}
                  className="icons hr"
                  title="Hackerrank"
                />
              </a> */}
              <a
                href="mailto:james.brennan.saul@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={["fas", "envelope"]}
                  className="icons mail"
                  title="e-mail"
                />
              </a>
              <a href="../../resume.pdf" target="_blank" download>
                <FontAwesomeIcon
                  icon={["fas", "file-alt"]}
                  className="icons file"
                  title="Resume"
                />
              </a>
            </div>
          </Container>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={.3} style={{ pointerEvents: 'none', paddingTop: '100px' }}>
          <img src={dark ? `http://pngimg.com/uploads/starwars/starwars_PNG56.png` : 'http://pngimg.com/uploads/starwars/starwars_PNG10.png'} style={{ width: '20%', marginRight: '70%' }} />
          <img src={dark ? `http://pngimg.com/uploads/starwars/starwars_PNG54.png` : 'https://www.freepngimg.com/thumb/star_wars/7-2-star-wars-ship-png-thumb.png'} style={{ width: '15%', marginLeft: '84%' }} />
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={1}>
              <h1 style={{ pointerEvents: 'none', paddingTop: '100px' }}><span className="first-name">Projects</span></h1>
              <ProjectsSection />
        </ParallaxLayer>              
      </Parallax>
    </PageLayout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        unemployed
        firstName
        lastName
        occupation
      }
    }
  }
`
