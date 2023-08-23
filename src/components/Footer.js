import React from "react";
import "./ComponentsStyle.css";

const Footer = () => (
  <footer className="page-footer font-small pt-4">
    <div className="container-fluid text-center ">
      <div className="row">
        <div className="col-md ">
          <span>Chat by Renato Habijanec</span>
          <div className="icons">
            <span>
              <i class="fa-brands fa-discord"></i>
            </span>
            <span>
              <i class="fa-brands fa-github" />
            </span>
            <span>
              <i class="fa-brands fa-twitter"></i>
            </span>
          </div>
        </div>

        <hr className="clearfix w-100 d-md-none pb-0" />
      </div>
    </div>
  </footer>
);

export default Footer;
