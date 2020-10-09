import React, { Component } from "react";

class MainNav extends Component {
  render() {
    return (
      <div class="row row-nav">
        <div class="col-xs-12 home-logo">
          <div class="home-logo-inner">
            <a href="https://www.adeccogroup.com/" class="logo" title="Home">
              <img src="https://www.adeccogroup.com/wp-content/themes/ado-group/images/adecco-group-logo-restart.png" alt="Adecco Group" width="309" height="145" />
            </a>
          </div>
        </div>

        <div class="col-xs-12">
          <nav class="main-nav clearfix">
            <div class="menu-main-menu-container">
              <ul id="menu-main-menu" class="menu">
                <li id="menu-item-1350" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1350">
                  <a href="https://www.adeccogroup.com/our-company/">Our Company</a>
                </li>
                <li id="menu-item-1351" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1351">
                  <a href="https://www.adeccogroup.com/client-solutions/">Client Solutions</a>
                </li>
                <li id="menu-item-1352" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1352">
                  <a href="https://www.adeccogroup.com/investors/">Investors</a>
                </li>
                <li id="menu-item-1353" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1353">
                  <a href="https://www.adeccogroup.com/sustainability/">Sustainability</a>
                </li>
                <li id="menu-item-1354" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1354">
                  <a href="https://www.adeccogroup.com/futuhreinsight/">#FutuHReInsight</a>
                </li>
                <li id="menu-item-1357" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1357">
                  <a href="https://www.adeccogroup.com/join-the-adecco-group/">Why the Adecco Group</a>
                </li>
              </ul>
            </div>
            <ul class="mobile utility-mobile">
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
                <a href="http://press.adeccogroup.com" title="Press">
                  Press
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}

export default MainNav;
