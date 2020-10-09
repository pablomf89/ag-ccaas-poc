import React from "react";
import Header from "./master/header/Header";
import MainNav from "./master/mainNav/MainNav";
import Home from "./content/Home";
import Contact from "./content/Contact";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <div className="App">
        <Header />

        <div class="main">
          <MainNav />
        </div>
      </div>

      <Router>
        <Switch>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>

      <footer>
        <div class="main-footer-outer">
          <div class="container">
            <div class="scroll-box-outer row">
              <div class="main-footer scroll-box-inner">
                <div class="col-xs-2">
                  <a href="https://www.adeccogroup.com/our-company/" title="Our Company">
                    Our Company
                  </a>

                  <a href="https://www.adeccogroup.com/our-company/our-brands/" title="Our Brands">
                    Our Brands
                  </a>

                  <a href="https://www.adeccogroup.com/our-company/history/" title="Our History">
                    Our History
                  </a>

                  <a href="https://www.adeccogroup.com/our-company/code-of-conduct/" title="Code of Conduct">
                    Code of Conduct
                  </a>

                  <a href="https://www.adeccogroup.com/our-company/core-values/" title="Core Values">
                    Core Values
                  </a>

                  <a href="https://www.adeccogroup.com/our-company/leadership/" title="Leadership">
                    Leadership
                  </a>

                  <a href="https://www.adeccogroup.com/our-company/cooperations/" title="Cooperations">
                    Cooperations
                  </a>

                  <a href="https://www.adeccogroup.com/our-company/sponsorships/" title="Sponsorships">
                    Sponsorships
                  </a>

                  <a href="https://www.adeccogroup.com/our-company/compliance-and-ethics/" title="Compliance & Ethics">
                    Compliance &amp; Ethics
                  </a>
                </div>

                <div class="col-xs-2">
                  <a href="https://www.adeccogroup.com/client-solutions/" title="Client Solutions">
                    Client Solutions
                  </a>

                  <a href="https://www.adeccogroup.com/client-solutions/temp-staffing/" title="Temp Staffing">
                    Temp Staffing
                  </a>

                  <a href="https://www.adeccogroup.com/client-solutions/permanent-placement/" title="Permanent Placement">
                    Permanent Placement
                  </a>

                  <a href="https://www.adeccogroup.com/client-solutions/outsourcing/" title="Outsourcing">
                    Outsourcing
                  </a>

                  <a href="https://www.adeccogroup.com/client-solutions/msp/" title="MSP">
                    MSP
                  </a>

                  <a href="https://www.adeccogroup.com/client-solutions/talent-management/" title="Talent Management">
                    Talent Management
                  </a>

                  {/* <!--<a href="" title="Onsite">Onsite</a>--> */}
                </div>

                <div class="col-xs-2">
                  <a href="https://www.adeccogroup.com/investors/" title="Investors">
                    Investors
                  </a>

                  <a href="https://www.adeccogroup.com/investors/results-events-centre/" title="Results & Events Centre">
                    Results &amp; Events Centre
                  </a>

                  <a href="https://www.adeccogroup.com/investors/shareholder-debt-info/" title="Shareholder & Debt Info">
                    Shareholder &amp; Debt Info
                  </a>

                  {/* <!--<a href="https://www.adeccogroup.com/investors/investment-case/" title="Investment Case">Investment Case</a>--> */}

                  <a href="https://www.adeccogroup.com/investors/investor-relations-team/" title="Investor Relations Team">
                    Investor Relations Team
                  </a>

                  <a href="https://www.adeccogroup.com/investors/financial-news/" title="Financial News">
                    Financial News
                  </a>

                  <a href="https://www.adeccogroup.com/investors/corporate-governance/" title="Corporate Governance">
                    Corporate Governance
                  </a>
                </div>

                <div class="col-xs-2">
                  <a href="https://www.adeccogroup.com/sustainability/" title="Sustainability">
                    Sustainability
                  </a>

                  <a href="https://www.adeccogroup.com/sustainability/social-responsibility/" title="Social Responsibility">
                    Social Responsibility
                  </a>

                  <a href="https://www.adeccogroup.com/sustainability/economic-responsibility/" title="Economic Responsibility">
                    Economic Responsibility
                  </a>

                  <a href="https://www.adeccogroup.com/sustainability/environmental-responsibility/" title="Economic Responsibility">
                    Environmental Responsibility
                  </a>
                  {/* 
                      <!--<a href="https://www.adeccogroup.com/sustainability/the-adecco-group-foundation/" title="The Adecco Group Foundation">The Adecco Group Foundation</a>-->

                      <!--<a href="" title="CSR News">CSR News</a>--> */}
                </div>

                {/* <!-- <div class="col-xs-2">

                      <a href="https://www.adeccogroup.com/power-of-work/" title="Power of Work">Power of Work</a>

                      <a href="" title="Youth Employability">Youth Employability</a>

                      <a href="" title="Future of Work">Future of Work</a>

                      <a href="" title="Company News">Company News</a>

                      <a href="" title="Community">Community</a>

                  </div>--> */}

                <div class="col-xs-2">
                  <a href="https://www.adeccogroup.com/join-the-adecco-group/" title="Join The Adecco Group">
                    Join The Adecco Group
                  </a>

                  <a href="https://www.adeccogroup.com/join-the-adecco-group/why-the-adecco-group/" title="Why Adecco Group">
                    Why Adecco Group
                  </a>

                  <a href="https://www.adeccogroup.com/join-the-adecco-group/learning-growing/" title="Learning & Growing">
                    Learning &amp; Growing
                  </a>

                  <a href="https://www.adeccogroup.com/join-the-adecco-group/inclusion/" title="Inclusion">
                    Inclusion
                  </a>
                  {/* 
                      <!--<a href="https://www.adeccogroup.com/join-the-adecco-group/open-positions/" title="Open Positions">Open Positions</a>--> */}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="container">
          <div class="row utility-footer">
            <div class="col-xs-12">
              <ul class="ft-social clearfix">
                <li>
                  <a href="https://www.facebook.com/theadeccogroup" title="Adecco Facebook" class="icon-fb" target="_blank"></a>
                </li>

                <li>
                  <a
                    href="https://www.linkedin.com/company/1929?trk=tyah&trkInfo=clickedVertical%3Acompany%2CclickedEntityId%3A1929%2Cidx%3A2-1-4%2CtarId%3A1481318905304%2Ctas%3AAdecco%20Group"
                    title="Adecco LinkedIn"
                    class="icon-ln"
                    target="_blank"
                  ></a>
                </li>

                <li>
                  <a href="https://twitter.com/adeccogroup" title="Adecco Twitter" class="icon-tw" target="_blank"></a>
                </li>
              </ul>
            </div>

            <div class="col-xs-12">
              <ul class="ft-utility clearfix">
                <li>
                  <a href="https://www.adeccogroup.com/" title="Home">
                    Home
                  </a>
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

            <div class="col-xs-12">
              <ul class="ft-copyright clearfix">
                <li>&copy; 2020 Adecco Group</li>

                <li>
                  <a href="https://www.adeccogroup.com/terms-of-use/" title="Terms of Use">
                    Terms of Use
                  </a>
                </li>

                <li>
                  <a href="https://www.adeccogroup.com/privacy-policy/" title="Privacy Policy">
                    Privacy Policy
                  </a>
                </li>

                <li>
                  <a href="https://www.adeccogroup.com/cookies-policy/" title="Cookies Policy">
                    Cookies policy
                  </a>
                </li>

                <li>
                  <a href="https://www.adeccogroup.com/candidates-security-phishing/" title="Candidates’ Security and Phishing">
                    Candidates&rsquo; Security and Phishing
                  </a>
                </li>

                <li>
                  <a href="https://www.adeccogroup.com/directory/" title="Directory">
                    Directory
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>

      <div class="overlay csr-overlay"></div>

      <div class="modal modal-teal csr-modal report-modal">
        <div class="modal-flex">
          <a href="javascript:void(0);" class="modal-close icon-close"></a>

          <div class="modal-inner">
            <div class="csr-past-reports past-reports">
              <h3>Past Sustainability Reports</h3>

              <div class="row">
                <div class="col-xs-12 col-sm-3 csr-item report-item">
                  <img src="https://www.adeccogroup.com/wp-content/themes/ado-group/images/icons/pdf.png" />

                  <a href="https://www.adeccogroup.com/wp-content/themes/ado-group/downloads/The-Adecco-Group-2018-Sustainability-Report.pdf" target="_blank">
                    Sustainability Report 2018
                  </a>
                </div>

                <div class="col-xs-12 col-sm-3 csr-item report-item">
                  <img src="https://www.adeccogroup.com/wp-content/themes/ado-group/images/icons/pdf.png" />

                  <a href="https://www.adeccogroup.com/wp-content/themes/ado-group/downloads/sustainability-review-2017.pdf" target="_blank">
                    Sustainability Report 2017
                  </a>
                </div>
              </div>

              <h3>Past CSR Reports</h3>

              <div class="row">
                <div class="col-xs-12 col-sm-3 csr-item report-item">
                  <img src="https://www.adeccogroup.com/wp-content/themes/ado-group/images/icons/pdf.png" />

                  <a href="https://www.adeccogroup.com/wp-content/themes/ado-group/downloads/CSRreport_2016.pdf" target="_blank">
                    CSR Report 2016
                  </a>
                </div>

                <div class="col-xs-12 col-sm-3 csr-item report-item">
                  <img src="https://www.adeccogroup.com/wp-content/themes/ado-group/images/icons/pdf.png" />

                  <a href="https://www.adeccogroup.com/wp-content/themes/ado-group/downloads/CSRreport_2015.pdf" target="_blank">
                    CSR Report 2015
                  </a>
                </div>

                <div class="col-xs-12 col-sm-3 csr-item report-item">
                  <img src="https://www.adeccogroup.com/wp-content/themes/ado-group/images/icons/pdf.png" />

                  <a href="https://www.adeccogroup.com/wp-content/themes/ado-group/downloads/CSRexecutive-summary_2015.pdf" target="_blank">
                    Executive Summary 2015
                  </a>
                </div>

                <div class="col-xs-12 col-sm-3 csr-item report-item">
                  <img src="https://www.adeccogroup.com/wp-content/themes/ado-group/images/icons/pdf.png" />

                  <a href="https://www.adeccogroup.com/wp-content/themes/ado-group/downloads/CSRreport_2014.pdf" target="_blank">
                    CSR Report 2014
                  </a>
                </div>
              </div>

              <div class="row">
                <div class="col-xs-12 col-sm-3 csr-item report-item">
                  <img src="https://www.adeccogroup.com/wp-content/themes/ado-group/images/icons/pdf.png" />

                  <a href="https://www.adeccogroup.com/wp-content/themes/ado-group/downloads/CSRreport_2013.pdf" target="_blank">
                    CSR Report 2013
                  </a>
                </div>

                <div class="col-xs-12 col-sm-3 csr-item report-item">
                  <img src="https://www.adeccogroup.com/wp-content/themes/ado-group/images/icons/pdf.png" />

                  <a href="https://www.adeccogroup.com/wp-content/themes/ado-group/downloads/CSRreport_2012.pdf" target="_blank">
                    CSR Report 2012
                  </a>
                </div>

                <div class="col-xs-12 col-sm-3 csr-item report-item">
                  <img src="https://www.adeccogroup.com/wp-content/themes/ado-group/images/icons/pdf.png" />

                  <a href="https://www.adeccogroup.com/wp-content/themes/ado-group/downloads/CSRreport_2011.pdf" target="_blank">
                    CSR Report 2011
                  </a>
                </div>

                <div class="col-xs-12 col-sm-3 csr-item report-item">
                  <img src="https://www.adeccogroup.com/wp-content/themes/ado-group/images/icons/pdf.png" />

                  <a href="https://www.adeccogroup.com/wp-content/themes/ado-group/downloads/CSRreport_2010.pdf" target="_blank">
                    CSR Report 2010
                  </a>
                </div>

                <div class="col-xs-12 col-sm-3 csr-item report-item">
                  <img src="https://www.adeccogroup.com/wp-content/themes/ado-group/images/icons/pdf.png" />

                  <a href="https://www.adeccogroup.com/wp-content/themes/ado-group/downloads/CSRreport_2009.pdf" target="_blank">
                    CSR Report 2009
                  </a>
                </div>

                <div class="col-xs-12 col-sm-3 csr-item report-item">
                  <img src="https://www.adeccogroup.com/wp-content/themes/ado-group/images/icons/pdf.png" />

                  <a href="https://www.adeccogroup.com/wp-content/themes/ado-group/downloads/CSRreport_2011.pdf" target="_blank">
                    CSR Report 2011
                  </a>
                </div>

                <div class="col-xs-12 col-sm-3 csr-item report-item">
                  <img src="https://www.adeccogroup.com/wp-content/themes/ado-group/images/icons/pdf.png" />

                  <a href="https://www.adeccogroup.com/wp-content/themes/ado-group/downloads/CSRreport_2010.pdf" target="_blank">
                    CSR Report 2010
                  </a>
                </div>

                <div class="col-xs-12 col-sm-3 csr-item report-item">
                  <img src="https://www.adeccogroup.com/wp-content/themes/ado-group/images/icons/pdf.png" />

                  <a href="https://www.adeccogroup.com/wp-content/themes/ado-group/downloads/CSRreport_2009.pdf" target="_blank">
                    CSR Report 2009
                  </a>
                </div>

                <div class="col-xs-12 col-sm-3 csr-item report-item">
                  <img src="https://www.adeccogroup.com/wp-content/themes/ado-group/images/icons/pdf.png" />

                  <a href="https://www.adeccogroup.com/wp-content/themes/ado-group/downloads/CSRreport_2008.pdf" target="_blank">
                    CSR Report 2008
                  </a>
                </div>

                <div class="col-xs-12 col-sm-3 csr-item report-item">
                  <img src="https://www.adeccogroup.com/wp-content/themes/ado-group/images/icons/pdf.png" />

                  <a href="https://www.adeccogroup.com/wp-content/themes/ado-group/downloads/CSRreport_2004-2007.pdf" target="_blank">
                    CSR Report 2004 - 2007
                  </a>
                </div>
              </div>

              {/* <!--			<div class="row">

        <div class="col-xs-12 col-sm-3 csr-item report-item">

          <img src="https://www.adeccogroup.com/wp-content/themes/ado-group/images/icons/pdf.png"/>

          <a href="https://www.adeccogroup.com/wp-content/themes/ado-group/downloads/CSRreport_2004-2007.pdf" target="_blank">CSR Report 2004 - 2007</a>

        </div>

      </div> --> */}

              <h3>Supporting Documents</h3>

              <div class="row">
                <div class="col-xs-12 col-sm-3 csr-item report-item">
                  <img src="https://www.adeccogroup.com/wp-content/themes/ado-group/images/icons/pdf.png" />

                  <a href="https://www.adeccogroup.com/wp-content/themes/ado-group/downloads/gri-index-2019.pdf" target="_blank">
                    GRI Index 2019
                  </a>
                </div>

                <div class="col-xs-12 col-sm-3 csr-item report-item">
                  <img src="https://www.adeccogroup.com/wp-content/themes/ado-group/images/icons/pdf.png" />

                  <a href="https://www.adeccogroup.com/wp-content/themes/ado-group/downloads/gri-index-2018.pdf" target="_blank">
                    GRI Index 2018
                  </a>
                </div>

                <div class="col-xs-12 col-sm-3 csr-item report-item">
                  <img src="https://www.adeccogroup.com/wp-content/themes/ado-group/images/icons/pdf.png" />

                  <a href="https://www.adeccogroup.com/wp-content/themes/ado-group/downloads/gri-index.pdf" target="_blank">
                    GRI Index 2016/2017
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="overlay annual-overlay"></div>

      <div class="modal modal-teal annual-modal report-modal">
        <div class="modal-flex">
          <a href="javascript:void(0);" class="modal-close icon-close"></a>

          <div class="modal-inner">
            <div class="annual-past-reports past-reports">
              <h3>Past Annual Reports</h3>

              <div class="row">
                <div class="col-xs-12 col-sm-3 annual-item report-item">
                  <img src="https://www.adeccogroup.com/wp-content/themes/ado-group/images/icons/pdf.png" />

                  <a href="https://www.adeccogroup.com/wp-content/themes/ado-group/downloads/AnnualReport2018.pdf" target="_blank">
                    Annual Report 2018
                  </a>
                </div>

                <div class="col-xs-12 col-sm-3 annual-item report-item">
                  <img src="https://www.adeccogroup.com/wp-content/themes/ado-group/images/icons/pdf.png" />

                  <a href="https://www.adeccogroup.com/wp-content/themes/ado-group/downloads/AnnualReport2017.pdf" target="_blank">
                    Annual Report 2017
                  </a>
                </div>

                <div class="col-xs-12 col-sm-3 annual-item report-item">
                  <img src="https://www.adeccogroup.com/wp-content/themes/ado-group/images/icons/pdf.png" />

                  <a href="https://www.adeccogroup.com/wp-content/themes/ado-group/downloads/AnnualReport2016.pdf" target="_blank">
                    Annual Report 2016
                  </a>
                </div>

                <div class="col-xs-12 col-sm-3 annual-item report-item">
                  <img src="https://www.adeccogroup.com/wp-content/themes/ado-group/images/icons/pdf.png" />

                  <a href="https://www.adeccogroup.com/wp-content/themes/ado-group/downloads/AnnualReport2015.pdf" target="_blank">
                    Annual Report 2015
                  </a>
                </div>
              </div>

              <div class="row">
                <div class="col-xs-12 col-sm-3 annual-item report-item">
                  <img src="https://www.adeccogroup.com/wp-content/themes/ado-group/images/icons/pdf.png" />

                  <a href="https://www.adeccogroup.com/wp-content/themes/ado-group/downloads/AnnualReport2014.pdf" target="_blank">
                    Annual Report 2014
                  </a>
                </div>

                <div class="col-xs-12 col-sm-3 annual-item report-item">
                  <img src="https://www.adeccogroup.com/wp-content/themes/ado-group/images/icons/pdf.png" />

                  <a href="https://www.adeccogroup.com/wp-content/themes/ado-group/downloads/AnnualReport2013.pdf" target="_blank">
                    Annual Report 2013
                  </a>
                </div>

                <div class="col-xs-12 col-sm-3 annual-item report-item">
                  <img src="https://www.adeccogroup.com/wp-content/themes/ado-group/images/icons/pdf.png" />

                  <a href="https://www.adeccogroup.com/wp-content/themes/ado-group/downloads/AnnualReport2012.pdf" target="_blank">
                    Annual Report 2012
                  </a>
                </div>

                <div class="col-xs-12 col-sm-3 annual-item report-item">
                  <img src="https://www.adeccogroup.com/wp-content/themes/ado-group/images/icons/pdf.png" />

                  <a href="https://www.adeccogroup.com/wp-content/themes/ado-group/downloads/AnnualReport2011.pdf" target="_blank">
                    Annual Report 2011
                  </a>
                </div>
              </div>

              <div class="row">
                <div class="col-xs-12 col-sm-3 annual-item report-item">
                  <img src="https://www.adeccogroup.com/wp-content/themes/ado-group/images/icons/pdf.png" />

                  <a href="https://www.adeccogroup.com/wp-content/themes/ado-group/downloads/AnnualReport2010.pdf" target="_blank">
                    Annual Report 2010
                  </a>
                </div>

                <div class="col-xs-12 col-sm-3 annual-item report-item">
                  <img src="https://www.adeccogroup.com/wp-content/themes/ado-group/images/icons/pdf.png" />

                  <a href="https://www.adeccogroup.com/wp-content/themes/ado-group/downloads/AnnualReport2009.pdf" target="_blank">
                    Annual Report 2009
                  </a>
                </div>

                <div class="col-xs-12 col-sm-3 annual-item report-item">
                  <img src="https://www.adeccogroup.com/wp-content/themes/ado-group/images/icons/pdf.png" />

                  <a href="https://www.adeccogroup.com/wp-content/themes/ado-group/downloads/AnnualReport2008.pdf" target="_blank">
                    Annual Report 2008
                  </a>
                </div>

                <div class="col-xs-12 col-sm-3 annual-item report-item">
                  <img src="https://www.adeccogroup.com/wp-content/themes/ado-group/images/icons/pdf.png" />

                  <a href="https://www.adeccogroup.com/wp-content/themes/ado-group/downloads/AnnualReport2007.pdf" target="_blank">
                    Annual Report 2007
                  </a>
                </div>
              </div>

              <div class="row">
                <div class="col-xs-12 col-sm-3 annual-item report-item">
                  <img src="https://www.adeccogroup.com/wp-content/themes/ado-group/images/icons/pdf.png" />

                  <a href="https://www.adeccogroup.com/wp-content/themes/ado-group/downloads/AnnualReport2006.pdf" target="_blank">
                    Annual Report 2006
                  </a>
                </div>

                <div class="col-xs-12 col-sm-3 annual-item report-item">
                  <img src="https://www.adeccogroup.com/wp-content/themes/ado-group/images/icons/pdf.png" />

                  <a href="https://www.adeccogroup.com/wp-content/themes/ado-group/downloads/AnnualReport2005.pdf" target="_blank">
                    Annual Report 2005
                  </a>
                </div>

                <div class="col-xs-12 col-sm-3 annual-item report-item">
                  <img src="https://www.adeccogroup.com/wp-content/themes/ado-group/images/icons/pdf.png" />

                  <a href="https://www.adeccogroup.com/wp-content/themes/ado-group/downloads/AnnualReport2004.pdf" target="_blank">
                    Annual Report 2004
                  </a>
                </div>

                <div class="col-xs-12 col-sm-3 annual-item report-item">
                  <img src="https://www.adeccogroup.com/wp-content/themes/ado-group/images/icons/pdf.png" />

                  <a href="https://www.adeccogroup.com/wp-content/themes/ado-group/downloads/AnnualReport2003.pdf" target="_blank">
                    Annual Report 2003
                  </a>
                </div>
              </div>

              <div class="row">
                <div class="col-xs-12 col-sm-3 annual-item report-item">
                  <img src="https://www.adeccogroup.com/wp-content/themes/ado-group/images/icons/pdf.png" />

                  <a href="https://www.adeccogroup.com/wp-content/themes/ado-group/downloads/AnnualReport2002.pdf" target="_blank">
                    Annual Report 2002
                  </a>
                </div>

                <div class="col-xs-12 col-sm-3 annual-item report-item">
                  <img src="https://www.adeccogroup.com/wp-content/themes/ado-group/images/icons/pdf.png" />

                  <a href="https://www.adeccogroup.com/wp-content/themes/ado-group/downloads/AnnualReport2001.pdf" target="_blank">
                    Annual Report 2001
                  </a>
                </div>

                <div class="col-xs-12 col-sm-3 annual-item report-item">
                  <img src="https://www.adeccogroup.com/wp-content/themes/ado-group/images/icons/pdf.png" />

                  <a href="https://www.adeccogroup.com/wp-content/themes/ado-group/downloads/AnnualReport2000.pdf" target="_blank">
                    Annual Report 2000
                  </a>
                </div>

                <div class="col-xs-12 col-sm-3 annual-item report-item">
                  <img src="https://www.adeccogroup.com/wp-content/themes/ado-group/images/icons/pdf.png" />

                  <a href="https://www.adeccogroup.com/wp-content/themes/ado-group/downloads/AnnualReport1999.pdf" target="_blank">
                    Annual Report 1999
                  </a>
                </div>

                <div class="col-xs-12 col-sm-3 annual-item report-item">
                  <img src="https://www.adeccogroup.com/wp-content/themes/ado-group/images/icons/pdf.png" />

                  <a href="https://www.adeccogroup.com/wp-content/themes/ado-group/downloads/AnnualReport1998.pdf" target="_blank">
                    Annual Report 1998
                  </a>
                </div>

                <div class="col-xs-12 col-sm-3 annual-item report-item">
                  <img src="https://www.adeccogroup.com/wp-content/themes/ado-group/images/icons/pdf.png" />

                  <a href="https://www.adeccogroup.com/wp-content/themes/ado-group/downloads/AnnualReport1997.pdf" target="_blank">
                    Annual Report 1997
                  </a>
                </div>

                <div class="col-xs-12 col-sm-3 annual-item report-item">
                  <img src="https://www.adeccogroup.com/wp-content/themes/ado-group/images/icons/pdf.png" />

                  <a href="https://www.adeccogroup.com/wp-content/themes/ado-group/downloads/AnnualReport1996.pdf" target="_blank">
                    Annual Report 1996
                  </a>
                </div>

                <div class="col-xs-12 col-sm-3 annual-item report-item">&nbsp;</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
