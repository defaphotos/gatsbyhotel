import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Image from "gatsby-image"
import { css } from "@emotion/core"

export const query = graphql`
  query($slug: String!) {
    allDatoCmsHabitacion(filter: { slug: { eq: $slug } }) {
      nodes {
        titulo
        contenido
        imagen {
          fluid(maxWidth: 1200) {
            ...GatsbyDatoCmsFluid
          }
        }
      }
    }
  }
`

const HabitacionesTemplate = ({ data }) => {
  const { titulo, contenido, imagen } = data.allDatoCmsHabitacion.nodes[0]
  return (
    <div>
      <Layout>
        <main
          css={css`
            margin: 0 auto;
            max-width: 1200px;
            width: 95%;
          `}
        >
          <h1
            css={css`
              text-align: center;
              margin-top: 4rem;
            `}
          >
            {titulo}
          </h1>{" "}
          <p>{contenido}</p>
          <Image fluid={imagen.fluid} />
        </main>
      </Layout>
    </div>
  )
}

export default HabitacionesTemplate
