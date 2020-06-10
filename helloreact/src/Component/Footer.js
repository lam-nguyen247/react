import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <footer className="footer">
            <div className="footer-middle">
              <div className="container">
                <div className="footer-ribbon">
                  Get in touch
                </div>{/* End .footer-ribbon */}
                <div className="row">
                  <div className="col-lg-3">
                    <div className="widget">
                      <h4 className="widget-title">Contact Us</h4>
                      <ul className="contact-info">
                        <li>
                          <span className="contact-info-label">Address:</span>123 Street Name, City, England
                        </li>
                        <li>
                          <span className="contact-info-label">Phone:</span>Toll Free <a href="tel:">(123) 456-7890</a>
                        </li>
                        <li>
                          <span className="contact-info-label">Email:</span> <a href="mailto:mail@example.com">mail@example.com</a>
                        </li>
                        <li>
                          <span className="contact-info-label">Working Days/Hours:</span>
                          Mon - Sun / 9:00AM - 8:00PM
                        </li>
                      </ul>
                      <div className="social-icons">
                        <a href="#" className="social-icon" target="_blank"><i className="icon-facebook" /></a>
                        <a href="#" className="social-icon" target="_blank"><i className="icon-twitter" /></a>
                        <a href="#" className="social-icon" target="_blank"><i className="icon-linkedin" /></a>
                      </div>{/* End .social-icons */}
                    </div>{/* End .widget */}
                  </div>{/* End .col-lg-3 */}
                  <div className="col-lg-9">
                    <div className="widget widget-newsletter">
                      <h4 className="widget-title">Subscribe newsletter</h4>
                      <div className="row">
                        <div className="col-md-6">
                          <p>Get all the latest information on Events,Sales and Offers. Sign up for newsletter today</p>
                        </div>{/* End .col-md-6 */}
                        <div className="col-md-6">
                          <form action="#">
                            <input type="email" className="form-control" placeholder="Email address" required />
                            <input type="submit" className="btn" defaultValue="Subscribe" />
                          </form>
                        </div>{/* End .col-md-6 */}
                      </div>{/* End .row */}
                    </div>{/* End .widget */}
                    <div className="row">
                      <div className="col-md-5">
                        <div className="widget">
                          <h4 className="widget-title">My Account</h4>
                          <div className="row">
                            <div className="col-sm-6 col-md-5">
                              <ul className="links">
                                <li><a href="about.html">About Us</a></li>
                                <li><a href="contact.html">Contact Us</a></li>
                                <li><a href="my-account.html">My Account</a></li>
                              </ul>
                            </div>{/* End .col-sm-6 */}
                            <div className="col-sm-6 col-md-5">
                              <ul className="links">
                                <li><a href="#">Orders History</a></li>
                                <li><a href="#">Advanced Search</a></li>
                                <li><a href="#" className="login-link">Login</a></li>
                              </ul>
                            </div>{/* End .col-sm-6 */}
                          </div>{/* End .row */}
                        </div>{/* End .widget */}
                      </div>{/* End .col-md-5 */}
                      <div className="col-md-7">
                        <div className="widget">
                          <h4 className="widget-title">Main Features</h4>
                          <div className="row">
                            <div className="col-sm-6">
                              <ul className="links">
                                <li><a href="#">Super Fast Magento Theme</a></li>
                                <li><a href="#">1st Fully working Ajax Theme</a></li>
                                <li><a href="#">20 Unique Homepage Layouts</a></li>
                              </ul>
                            </div>{/* End .col-sm-6 */}
                            <div className="col-sm-6">
                              <ul className="links">
                                <li><a href="#">Powerful Admin Panel</a></li>
                                <li><a href="#">Mobile &amp; Retina Optimized</a></li>
                              </ul>
                            </div>{/* End .col-sm-6 */}
                          </div>{/* End .row */}
                        </div>{/* End .widget */}
                      </div>{/* End .col-md-7 */}
                    </div>{/* End .row */}
                  </div>{/* End .col-lg-9 */}
                </div>{/* End .row */}
              </div>{/* End .container */}
            </div>{/* End .footer-middle */}
            <div className="container">
              <div className="footer-bottom">
                <p className="footer-copyright">Porto eCommerce. ©  2018.  All Rights Reserved</p>
                <img src="assets/images/payments.png" alt="payment methods" className="footer-payments" />
              </div>{/* End .footer-bottom */}
            </div>{/* End .container */}
          </footer>
        )
    }
}
