import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <header className="header">
              <div className="header-top">
                <div className="container">
                  <div className="header-left header-dropdowns">
                    <div className="header-dropdown">
                      <a href="#">USD</a>
                      <div className="header-menu">
                        <ul>
                          <li><a href="#">EUR</a></li>
                          <li><a href="#">USD</a></li>
                        </ul>
                      </div>{/* End .header-menu */}
                    </div>{/* End .header-dropown */}
                    <div className="header-dropdown">
                      <a href="#"><img src="assets/images/flags/en.png" alt="England flag" />ENGLISH</a>
                      <div className="header-menu">
                        <ul>
                          <li><a href="#"><img src="assets/images/flags/en.png" alt="England flag" />ENGLISH</a></li>
                          <li><a href="#"><img src="assets/images/flags/fr.png" alt="France flag" />FRENCH</a></li>
                        </ul>
                      </div>{/* End .header-menu */}
                    </div>{/* End .header-dropown */}
                    <div className="dropdown compare-dropdown">
                      <a href="#" className="dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-display="static">
                        <i className="icon-retweet" /> Compare (2)
                      </a>
                      <div className="dropdown-menu">
                        <div className="dropdownmenu-wrapper">
                          <ul className="compare-products">
                            <li className="product">
                              <a href="#" className="btn-remove" title="Remove Product"><i className="icon-cancel" /></a>
                              <h4 className="product-title"><a href="product.html">Lady White Top</a></h4>
                            </li>
                            <li className="product">
                              <a href="#" className="btn-remove" title="Remove Product"><i className="icon-cancel" /></a>
                              <h4 className="product-title"><a href="product.html">Blue Women Shirt</a></h4>
                            </li>
                          </ul>
                          <div className="compare-actions">
                            <a href="#" className="action-link">Clear All</a>
                            <a href="#" className="btn btn-primary">Compare</a>
                          </div>
                        </div>{/* End .dropdownmenu-wrapper */}
                      </div>{/* End .dropdown-menu */}
                    </div>{/* End .dropdown */}
                  </div>{/* End .header-left */}
                  <div className="header-right">
                    <p className="welcome-msg">Default welcome msg! </p>
                    <div className="header-dropdown dropdown-expanded">
                      <a href="#">Links</a>
                      <div className="header-menu">
                        <ul>
                          <li><a href="my-account.html">MY ACCOUNT </a></li>
                          <li><a href="#">DAILY DEAL</a></li>
                          <li><a href="#">MY WISHLIST </a></li>
                          <li><a href="blog.html">BLOG</a></li>
                          <li><a href="contact.html">Contact</a></li>
                          <li><a href="#" className="login-link">LOG IN</a></li>
                        </ul>
                      </div>{/* End .header-menu */}
                    </div>{/* End .header-dropown */}
                  </div>{/* End .header-right */}
                </div>{/* End .container */}
              </div>{/* End .header-top */}
              <div className="header-middle">
                <div className="container">
                  <div className="header-left">
                    <a href="index.html" className="logo">
                      <img src="assets/images/logo.png" alt="Porto Logo" />
                    </a>
                  </div>{/* End .header-left */}
                  <div className="header-center">
                    <div className="header-search">
                      <a href="#" className="search-toggle" role="button"><i className="icon-magnifier" /></a>
                      <form action="#" method="get">
                        <div className="header-search-wrapper">
                          <input type="search" className="form-control" name="q" id="q" placeholder="Search..." required />
                          <div className="select-custom">
                            <select id="cat" name="cat">
                              <option value>All Categories</option>
                              <option value={4}>Fashion</option>
                              <option value={12}>- Women</option>
                              <option value={13}>- Men</option>
                              <option value={66}>- Jewellery</option>
                              <option value={67}>- Kids Fashion</option>
                              <option value={5}>Electronics</option>
                              <option value={21}>- Smart TVs</option>
                              <option value={22}>- Cameras</option>
                              <option value={63}>- Games</option>
                              <option value={7}>Home &amp; Garden</option>
                              <option value={11}>Motors</option>
                              <option value={31}>- Cars and Trucks</option>
                              <option value={32}>- Motorcycles &amp; Powersports</option>
                              <option value={33}>- Parts &amp; Accessories</option>
                              <option value={34}>- Boats</option>
                              <option value={57}>- Auto Tools &amp; Supplies</option>
                            </select>
                          </div>{/* End .select-custom */}
                          <button className="btn" type="submit"><i className="icon-magnifier" /></button>
                        </div>{/* End .header-search-wrapper */}
                      </form>
                    </div>{/* End .header-search */}
                  </div>{/* End .headeer-center */}
                  <div className="header-right">
                    <button className="mobile-menu-toggler" type="button">
                      <i className="icon-menu" />
                    </button>
                    <div className="header-contact">
                      <span>Call us now</span>
                      <a href="tel:#"><strong>+123 5678 890</strong></a>
                    </div>{/* End .header-contact */}
                    <div className="dropdown cart-dropdown">
                      <a href="#" className="dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-display="static">
                        <span className="cart-count">2</span>
                      </a>
                      <div className="dropdown-menu">
                        <div className="dropdownmenu-wrapper">
                          <div className="dropdown-cart-products">
                            <div className="product">
                              <div className="product-details">
                                <h4 className="product-title">
                                  <a href="product.html">Woman Ring</a>
                                </h4>
                                <span className="cart-product-info">
                                  <span className="cart-product-qty">1</span>
                                  x $99.00
                                </span>
                              </div>{/* End .product-details */}
                              <figure className="product-image-container">
                                <a href="product.html" className="product-image">
                                  <img src="assets/images/products/cart/product-1.jpg" alt="product" />
                                </a>
                                <a href="#" className="btn-remove" title="Remove Product"><i className="icon-cancel" /></a>
                              </figure>
                            </div>{/* End .product */}
                            <div className="product">
                              <div className="product-details">
                                <h4 className="product-title">
                                  <a href="product.html">Woman Necklace</a>
                                </h4>
                                <span className="cart-product-info">
                                  <span className="cart-product-qty">1</span>
                                  x $35.00
                                </span>
                              </div>{/* End .product-details */}
                              <figure className="product-image-container">
                                <a href="product.html" className="product-image">
                                  <img src="assets/images/products/cart/product-2.jpg" alt="product" />
                                </a>
                                <a href="#" className="btn-remove" title="Remove Product"><i className="icon-cancel" /></a>
                              </figure>
                            </div>{/* End .product */}
                          </div>{/* End .cart-product */}
                          <div className="dropdown-cart-total">
                            <span>Total</span>
                            <span className="cart-total-price">$134.00</span>
                          </div>{/* End .dropdown-cart-total */}
                          <div className="dropdown-cart-action">
                            <a href="cart.html" className="btn">View Cart</a>
                            <a href="checkout-shipping.html" className="btn">Checkout</a>
                          </div>{/* End .dropdown-cart-total */}
                        </div>{/* End .dropdownmenu-wrapper */}
                      </div>{/* End .dropdown-menu */}
                    </div>{/* End .dropdown */}
                  </div>{/* End .header-right */}
                </div>{/* End .container */}
              </div>{/* End .header-middle */}
            </header>
          )
    }
}
