import React from "react"
import { Container } from "react-bootstrap"
import Header from "./Header"
import Footer from "./Footer"

export default ({ children }) => (
  <Container fluid className="px-0 theme-light app-container" >
    <Header />
    <Container fluid className="pt-5 text-center min-vh-100" style={{padding: '0px'}}>
      {children}
    </Container>
    <Footer />
  </Container>
)
