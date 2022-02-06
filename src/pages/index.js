import * as React from "react"
import { graphql } from 'gatsby';
// Children components
import { Container, Row, Col } from 'react-bootstrap';
import Layout from "layout"
import Seo from "components/Seo"
import Carousel from "components/Carousel"
import Form from "components/Form/Form";
import PhotoCard from "components/PhotoCard";

const IndexPage = ({ data }) => {

  return (
    <>
      <Seo title="Strona główna" />
      <Layout>
        <section className="hero">
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
        </section>
        <Container>
          <section className="photoCards">
            <Row xs={1} md={2}>
              <Col className="pr-5">
                <PhotoCard
                  image={data.photoCardImages.edges[0]}
                  title="Biuro"
                  subtitle="od 1000 zł/mc"
                  link="#"
                />
              </Col>
              <Col>
              <PhotoCard
                  image={data.photoCardImages.edges[1]}
                  title="Lorem ipsum Biuro"
                  subtitle="od 500 zł/mc"
                  link="#"
                />
              </Col>
              <Col>
              <PhotoCard
                  image={data.photoCardImages.edges[2]}
                  title={`Biuro lorem   \n\n`}
                  subtitle="od 100 zł/mc"
                  link="#"
                  headerPosition="bottom"
                />
              </Col>
              <Col>
              <PhotoCard
                  image={data.photoCardImages.edges[3]}
                  title="Biuro lorem ipsum Lorem"
                  subtitle="od 100 zł/mc"
                  link="#"
                  headerPosition="bottom"
                />
              </Col>
            </Row>
          </section>
        </Container>
      </Layout>
    </>
  )
}

export const query = graphql`
  {
    carouselImages: allFile(
      filter: {absolutePath: {regex: "/carousel/"}},
      sort: {order: ASC, fields: relativePath}
    ) {
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

    photoCardImages: allFile(
      filter: {absolutePath: {regex: "/photoCard/"}}
      sort: {fields: relativePath}
    ) {
      edges {
        node {
          childrenImageSharp {
            gatsbyImageData
          }
        }
      }
    }

  }
`

export default IndexPage
