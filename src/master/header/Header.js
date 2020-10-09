import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <nav class="row utility-nav">
        <div class="col-xs-6">
          <a href="https://www.adeccogroup.com/" class="logo" title="Home">
            <img src="https://www.adeccogroup.com/wp-content/themes/ado-group/images/adecco-group-logo-restart-wide.png" alt="Adecco Group" width="169" height="45" />
          </a>
        </div>

        <div class="col-xs-6">
          <ul class="utility">
            <li class="menu">
              <a href="javascript:void(0);" title="Menu" class="icon-burger"></a>
            </li>

            <li>
              <a href="/contact" title="Contact">
                Contact
              </a>
            </li>

            <li>
              <a href="https://www.adeccogroup.com/worldwide-locations/" title="Worldwide">
                Worldwide
              </a>
            </li>

            <li>
              <a href="http://press.adeccogroup.com" title="Media">
                Media
              </a>
            </li>

            <li>
              <a href="https://careers.adeccogroup.com/" title="Careers">
                Careers
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
