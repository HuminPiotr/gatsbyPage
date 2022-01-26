import * as React from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import PropTypes from "prop-types"

import "./style.scss"

const Layout = ({ children }) => {
  return <div> {children} </div>
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
