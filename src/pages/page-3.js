import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsy-image'
const SecondPage = () => (
  <div>
    <h1>Hi from the third page</h1>
    <p>
      Welcome to page 3. This page will have an error to tes if TravisCI only looks for error in new
      files
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
      voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
      non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
    <Link to="/">Go back to the homepage</Link>
  </div>
)

export default SecondPage
