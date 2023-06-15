import React from "react";
import {APP_NAME} from "../../lib/utils/constant";

const Footer = () => (
  <footer>
    <div className="container">
      <a href="/" className="logo-font font-blue">
        {APP_NAME}
      </a>
      <span className="attribution">
        An interactive learning project from{" "}
        <a href="https://thinkster.io">Thinkster</a>. Code &amp; design licensed
        under MIT.
      </span>
    </div>
  </footer>
);

export default Footer;
