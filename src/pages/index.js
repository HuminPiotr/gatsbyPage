import * as React from "react"
import { graphql } from 'gatsby';
// Children components
import { Container, Row, Col } from 'react-bootstrap';
import Layout from "layout"
import Seo from "components/Seo"
import Carousel from "components/Carousel"
import Form from "components/Form/Form";

const IndexPage = ({ data }) => (
  <>
    <Seo title="Strona główna" />
    <Layout>
      <div className="hero">
        <Carousel images={data.carouselImages.edges} />
        <Container>
          <Row className="row justify-content-between align-items-lg-end">
            <Col xs={12} lg={6} xl={7} className="hero__text">
              <h1>Firma</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut auctor</p>
            </Col>
            <Col xs={12} lg={6} xl={4}>
              <Form />
            </Col>
          </Row>
        </Container>
      </div>
    </Layout>
  </>
)

export const query = graphql`
  {
    carouselImages: allFile(filter: {absolutePath: {regex: "/carousel/"}}, sort: {order: ASC, fields: relativePath}) {
      edges {
        node {
          childrenImageSharp {
            gatsbyImageData(
              layout: FIXED
              placeholder: BLURRED
            )
          }
        }
      }
    }
  }
`

export default IndexPage
