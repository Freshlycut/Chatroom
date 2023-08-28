import React from "react";
import "./Footer.css";

const Footer = () => (
  <footer className="page-footer font-small pt-4">
    <div className="container-fluid text-center ">
      <div className="row">
        <div className="col-md ">
          <span>Chat by Renato Habijanec</span>
          <div>
            <span className="icon-brands">
              <i class="fa-brands fa-discord fa-xl"></i>
            </span>
            <span className="icon-brands">
              <i class="fa-brands fa-github fa-xl" />
            </span>
            <span className="icon-brands">
              <i class="fa-brands fa-twitter fa-xl"></i>
            </span>
          </div>
        </div>

        <hr className="clearfix w-100 d-md-none pb-0" />
      </div>
    </div>
  </footer>
);

export default Footer;
