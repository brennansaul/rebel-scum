import React from "react"
import { Link } from "gatsby";
import Img from "gatsby-image";
import { Container, Badge, Col, Row } from "react-bootstrap";
import moment from 'moment';

// const Ago = styled.div.attrs({
//   className: 'text-xs tracking-narrow font-bold',
// })`
//   color: ${textColor};
//   transition: color 200ms ease;
// `


export default ({ excerpt, featuredImages, tags, date, title, to }) => {
  return (
    // <Container className="text-center">
    <Link to={to} style={{ textDecoration: "none"}}>
      <div className="bg-gray-100 bg-opacity-50 shadow-md rounded-lg px-6 py-4">
        {/* <Row>
          {featuredImages &&
            featuredImages.map(image => (
              <Col key={image.src}>
                <Img fluid={image} className="m-auto w-75" />
              </Col>
            ))}
        </Row> */}
        <div className="flex flex-col lg:flex-row justify-between">
          <div className="lg:w-5/6">
              <h2>{title}</h2>
              <div className="mb-2 text-muted">{moment(date, 'DD MMMM, YYYY').fromNow()}</div>
              {/* <div>{date}</div> */}
              <p className="mb-0">{excerpt}</p>
          </div>
          <div className="lg:justify-end lg:text-right">
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
