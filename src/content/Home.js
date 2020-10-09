import React, { Component } from "react";

class Home extends Component {
  render() {
    return (
      <>
        <div class="row row-hero">
          <div class="col-xs-12 hero">
            <a class="no-hover" href="https://www.adeccogroup.com/restart-safely/">
              <figure class="hero-ratio"></figure>
            </a>
          </div>
        </div>

        <div class="row mobile-marg">
          <div class="col-xs-12">
            <div class="stats-bar box-border">
              <div class="box-border-inner">
                <div class="date-time">
                  October 9, 2020<span>as of 11:56 AM CET at our Zurich HQ</span>
                </div>

                <div class="num-hours-worked">
                  <div class="num-hours" id="numHours">
                    732156
                  </div>
                  <div class="num-hours-text">
                    hours worked today <span>by the Adecco Group associates and employees</span>
                  </div>
                </div>

                <div class="work-places">
                  <img src="https://www.adeccogroup.com/wp-content/themes/ado-group/images/best-workplaces.png" alt="Best workplaces" width="130px" height="110px" />
                </div>

                <div class="join-us">
                  <a href="https://careers.adeccogroup.com/" class="btn btn-large btn-border">
                    Join us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="row mobile-marg flex-mobile">
          <div class="stats-box stats-box-list scroll-box-outer">
            <ul class="stats-box-inner stats-box-list-inner scroll-box-inner">
              <li>
                <span>+100,000</span>
                <p>Clients</p>
              </li>

              <li>
                <span>1 million+</span>
                <p>people work with us every day</p>
              </li>

              <li>
                <span>Revenue 2019</span>
                <p>EUR 23.4 billion</p>
              </li>

              <li>
                <span>~5,000</span>
                <p>Branches around the globe</p>
              </li>

              <li>
                <span>60</span>
                <p>Countries and territories</p>
              </li>
            </ul>
          </div>
        </div>

        <div class="row mobile-marg flex-wrap">
          <div class="col-sm-6">
            <div class="box-border">
              <h2>Latest Financial News</h2>
              <h3>Visit our Investors section to catch up with the latest the Adecco Group financial news.</h3>

              <a href="https://www.adeccogroup.com/investors/">Read More</a>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="box-border">
              <h2>Meet FU.SE</h2>
              <h3>FU.SE is an innovative 'un-conference' co-hosted with the Adecco Group, Microsoft and Boston Consulting Group.</h3>
              <p>Our goal is to create a community that will provide action and solutions to shape the future of work.</p>
              <a href="https://www.futureseriesfuse.com/" target="_blank">
                Read More
              </a>
            </div>
          </div>
        </div>

        <div class="row mobile-marg">
          <div class="col-xs-12 safely-back-tout">
            <figure class="csr-tout-ratio"></figure>
            <h2>Resetting normal:</h2>
            <h2 class="subtitle">
              Defining the new
              <br />
              era of work
            </h2>
            <a href="https://www.adeccogroup.com/reset-normal/" class="btn btn-large btn-img">
              Read more
            </a>
          </div>
        </div>

        <div class="row mobile-marg">
          <div class="col-xs-12 workforce-tout">
            <figure class="csr-tout-ratio" styleXX="background-image: url(/wp-content/themes/ado-group/images/virus.jpg); background-position: center 39%;"></figure>
            <a href="https://www.adeccogroup.com/covid-19/" class="btn btn-large btn-img">
              Information on COVID-19
            </a>
          </div>
        </div>

        <div class="row mobile-marg">
          <div class="col-xs-12 report-tout">
            <figure class="report-tout-ratio" styleXX="background-image: url(/wp-content/themes/ado-group/images/OAR-2019-Banner.jpg); background-position: center"></figure>

            <a href="http://ar.adeccogroup.com" class="btn btn-teal-border btn-large btn-img" styleXX="bottom: 11rem;" target="_blank">
              Online Annual Report 2019
            </a>
          </div>

          <div class="col-xs-12">
            <div class="view-past view-past-annual-reports">
              <a href="javascript:void(0);" title="View past reports">
                View past reports
              </a>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Home;
