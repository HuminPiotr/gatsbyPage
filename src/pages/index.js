import * as React from "react"
import { graphql } from 'gatsby';
// Children components
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { Container, Row, Col } from 'react-bootstrap';
import Layout from "layout"
import Seo from "components/Seo"
import Carousel from "components/Carousel"
import Form from "components/Form/Form";
import PhotoCard from "components/PhotoCard";
import PictureCard from "components/PictureCard";
import Button from "components/Button";

const IndexPage = ({ data }) => {
  console.log(data.baner);
  const baner = getImage(data.baner.edges[0].node.childImageSharp.gatsbyImageData);
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
              <Col >
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

          <section className="pictureCards">
            <Row xs={1} md={2} lg={4} className="justify-content-space-between">
              <Col >
                <h2>Lorem ipsum dolor sit amet, conse</h2>
              </Col>
              <Col >
                 <PictureCard pictureSrc='/picture-1.svg' signature="Lorem ipsum" picturePosition={{top: 0, left: 3}}/>
              </Col>
              <Col >
                 <PictureCard pictureSrc='/picture-2.svg' signature="Lorem ipsum dolor sit amet conse"  picturePosition={{top: 7, left: 3}} />
              </Col>
              <Col>
                 <PictureCard pictureSrc='/picture-3.svg' signature="Lorem ipsum dolor sit amet, conse" picturePosition={{top: -4, left: 3}} />
              </Col>
              <Col>
                 <PictureCard pictureSrc='/picture-4.svg' signature="Lorem ipsum dolor sit amet, conse" picturePosition={{top: 8, left: -1}} />
              </Col>
              <Col>
                 <PictureCard pictureSrc='/picture-5.svg' signature="Lorem ipsum dolor sit amet, conse lorem ipsum lorem ipsum" picturePosition={{top: 16, left: 2}}/>
              </Col>
              <Col>
                 <PictureCard pictureSrc='/picture-6.svg' signature="Lorem ipsum dolor sit amet amet, conse lorem ipsum lorem" picturePosition={{top: -1, left: 0}} />
              </Col>
              <Col>
                 <PictureCard pictureSrc='/picture-7.svg' signature="Lorem ipsum dolor sit amet amet, conse lorem ipsum lorem" picturePosition={{top: 15, left: 1}} />
              </Col>
              <Col>
                  <Button variant="arrow">Dowiedz się więcej</Button>
              </Col>
            </Row>
          </section>
        </Container>

        
        <section className="banner">
            <img src="/ornament.svg" className="ornament" alt="ornament"  />
            <GatsbyImage image={baner}/>
            <h2>{`Lorem ipsum \n vs własne biuro`}</h2>
        </section>
        <div className="clearfix"></div>

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

    baner: allFile(filter: {absolutePath: {regex: "/baner/"}}) {
      edges {
        node {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }

  }
`

export default IndexPage
