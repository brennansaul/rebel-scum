import React from "react"
import { StaticQuery } from "gatsby"
import { PageLayout, PageTitle, ProjectLink } from "../../components"
import { SEO, Utils } from "../../utils"
import Container from "react-bootstrap/Container"


const Projects = ({ data }) => {
  const allProjects = data.allMarkdownRemark.edges || [];
  const allFeaturedImages = data.allFile.edges || [];
  const regex = /\/[projects].*\/|$/;
  const featuredImageMap = Utils.getImageMap(allFeaturedImages, regex, true, 3);
  
  return (
      <Container className="text-left" style={{width: '65%'}}>
        <section>
          {allProjects.map(({ node }) => (
            <div key={node.id} className="mb-5">
              <ProjectLink
                to={node.fields.slug}
                featuredImages={featuredImageMap[node.fields.slug]}
                title={node.frontmatter.title}
                tags={node.frontmatter.tags}
                date={node.frontmatter.date}
                excerpt={node.excerpt}
              />
            </div>
          ))}
        </section>
      </Container>
  )
}

const ProjectsSection = () => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark(
          filter: { fileAbsolutePath: { regex: "/projects/" } }
          sort: { fields: [frontmatter___date], order: DESC }
        ) {
          totalCount
          edges {
            node {
              id
              timeToRead
              frontmatter {
                title
                description
                tags
                date(formatString: "DD MMMM, YYYY")
              }
              fields {
                slug
              }
              excerpt
            }
          }
        }
        allFile(
          filter: {
            extension: { eq: "png" }
            relativePath: { regex: "/feature/" }
            relativeDirectory: { regex: "/content/projects/" }
          }
        ) {
          edges {
            node {
              childImageSharp {
                fluid(maxWidth: 200) {
                  ...GatsbyImageSharpFluid
                }
              }
              relativePath
            }
          }
        }
      }
    `}
    render={data => (
     <Projects data={data} />
    )}
  />
);

export default ProjectsSection;
