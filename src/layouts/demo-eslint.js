import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import Link from "gatsby-link";
import Header from "../components/header";
import "./index.css";

const Demo = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: "description", content: "Sample" },
        { name: "keywords", content: "sample, something" }
      ]}
    />
    <Header siteTitle={data.site.siteMetadata.title} />
    <div
      style={{
        margin: "0 auto",
        maxWidth: 960,
        padding: "0px 1.0875rem 1.45rem",
        paddingTop: 0
      }}
    >
      <Link to="home" style="font-size: 16pt">
        Nav
      </Link>
      {children()}
    </div>
  </div>
);

Demo.propTypes = {
  children: PropTypes.func
};

export default Demo;

export const query = graphql`
  query SiteTitleQueryDemo {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
