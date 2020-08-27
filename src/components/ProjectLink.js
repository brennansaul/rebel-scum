import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import { Container, Badge, Col, Row } from "react-bootstrap"

export default ({ excerpt, featuredImages, tags, title, to }) => {
  return (
    // <Container className="text-center">
    <Link to={to} style={{ textDecoration: "none"}}>
      <div className="bg-gray-100 bg-opacity-50 shadow-md rounded-lg m-3 px-6 py-4">
        {/* <Row>
          {featuredImages &&
            featuredImages.map(image => (
              <Col key={image.src}>
                <Img fluid={image} className="m-auto w-75" />
              </Col>
            ))}
        </Row> */}
        <div className="flex flex-col lg:flex-row justify-between">
          <div>
              <h2>{title}</h2>
              {/* <Ago>{moment(date, 'MMMM-DD-YYYY').fromNow()}</Ago> */}
              <p className="">{excerpt}</p>
          </div>
          <div>
            {tags.map(tag => (
              <Badge key={tag} pill variant="dark" className="px-2 mr-1">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </Link>
    // </Container>

  )
}
