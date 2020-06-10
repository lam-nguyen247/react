import React, { Component } from 'react'

export default class Container extends Component {
    render() {
        return (
            <div className="container">
            <div className="row">
              <div className="col-lg-9">
                <div className="home-slider owl-carousel owl-carousel-lazy owl-theme owl-theme-light">
                  <div className="home-slide">
                    <div className="owl-lazy slide-bg" data-src="assets/images/slider/slide-1.jpg" />
                    <div className="home-slide-content text-white">
                      <h3>Get up to <span>60%</span> off</h3>
                      <h1>Summer Sale</h1>
                      <p>Limited items available at this price.</p>
                      <a href="category.html" className="btn btn-dark">Shop Now</a>
                    </div>{/* End .home-slide-content */}
                  </div>{/* End .home-slide */}
                  <div className="home-slide">
                    <div className="owl-lazy slide-bg" data-src="assets/images/slider/slide-2.jpg" />
                    <div className="home-slide-content">
                      <h3>OVER <span>200+</span></h3>
                      <h1>GREAT DEALS</h1>
                      <p>While they last!</p>
                      <a href="category.html" className="btn btn-dark">Shop Now</a>
                    </div>{/* End .home-slide-content */}
                  </div>{/* End .home-slide */}
                  <div className="home-slide">
                    <div className="owl-lazy slide-bg" data-src="assets/images/slider/slide-3.jpg" />
                    <div className="home-slide-content">
                      <h3>up to <span>40%</span> off</h3>
                      <h1>NEW ARRIVALS</h1>
                      <p>Starting at $9</p>
                      <a href="category.html" className="btn btn-dark">Shop Now</a>
                    </div>{/* End .home-slide-content */}
                  </div>{/* End .home-slide */}
                </div>{/* End .home-slider */}
                <div className="row">
                  <div className="col-md-4">
                    <div className="banner banner-image">
                      <a href="#">
                        <img src="assets/images/banners/banner-1.jpg" alt="banner" />
                      </a>
                    </div>{/* End .banner */}
                  </div>{/* End .col-md-4 */}
                  <div className="col-md-4">
                    <div className="banner banner-image">
                      <a href="#">
                        <img src="assets/images/banners/banner-2.jpg" alt="banner" />
                      </a>
                    </div>{/* End .banner */}
                  </div>{/* End .col-md-4 */}
                  <div className="col-md-4">
                    <div className="banner banner-image">
                      <a href="#">
                        <img src="assets/images/banners/banner-3.jpg" alt="banner" />
                      </a>
                    </div>{/* End .banner */}
                  </div>{/* End .col-md-4 */}
                </div>{/* End .row */}
                <div className="mb-3" />{/* margin */}
                <h2 className="carousel-title">Featured Products</h2>
                <div className="home-featured-products owl-carousel owl-theme owl-dots-top">
                  <div className="product-default">
                    <figure>
                      <a href="product.html">
                        <img src="assets/images/products/home-featured-1.jpg" />
                      </a>
                    </figure>
                    <div className="product-details">
                      <div className="ratings-container">
                        <div className="product-ratings">
                          <span className="ratings" style={{width: '100%'}} />{/* End .ratings */}
                          <span className="tooltiptext tooltip-top" />
                        </div>{/* End .product-ratings */}
                      </div>{/* End .product-container */}
                      <h2 className="product-title">
                        <a href="product.html">Product Short Name</a>
                      </h2>
                      <div className="price-box">
                        <span className="product-price">$9.00</span>
                      </div>{/* End .price-box */}
                      <div className="product-action">
                        <a href="#" className="btn-icon-wish"><i className="icon-heart" /></a>
                        <button className="btn-icon btn-add-cart" data-toggle="modal" data-target="#addCartModal"><i className="icon-bag" />ADD TO CART</button>
                        <a href="ajax/product-quick-view.html" className="btn-quickview" title="Quick View"><i className="fas fa-external-link-alt" /></a> 
                      </div>
                    </div>{/* End .product-details */}
                  </div>
                  <div className="product-default">
                    <figure>
                      <a href="product.html">
                        <img src="assets/images/products/home-featured-2.jpg" />
                      </a>
                    </figure>
                    <div className="product-details">
                      <div className="ratings-container">
                        <div className="product-ratings">
                          <span className="ratings" style={{width: '100%'}} />{/* End .ratings */}
                          <span className="tooltiptext tooltip-top" />
                        </div>{/* End .product-ratings */}
                      </div>{/* End .product-container */}
                      <h2 className="product-title">
                        <a href="product.html">Product Short Name</a>
                      </h2>
                      <div className="price-box">
                        <span className="product-price">$9.00</span>
                      </div>{/* End .price-box */}
                      <div className="product-action">
                        <a href="#" className="btn-icon-wish"><i className="icon-heart" /></a>
                        <button className="btn-icon btn-add-cart" data-toggle="modal" data-target="#addCartModal"><i className="icon-bag" />ADD TO CART</button>
                        <a href="ajax/product-quick-view.html" className="btn-quickview" title="Quick View"><i className="fas fa-external-link-alt" /></a> 
                      </div>
                    </div>{/* End .product-details */}
                  </div>
                  <div className="product-default">
                    <figure>
                      <a href="product.html">
                        <img src="assets/images/products/home-featured-3.jpg" />
                      </a>
                    </figure>
                    <div className="product-details">
                      <div className="ratings-container">
                        <div className="product-ratings">
                          <span className="ratings" style={{width: '100%'}} />{/* End .ratings */}
                          <span className="tooltiptext tooltip-top" />
                        </div>{/* End .product-ratings */}
                      </div>{/* End .product-container */}
                      <h2 className="product-title">
                        <a href="product.html">Product Short Name</a>
                      </h2>
                      <div className="price-box">
                        <span className="product-price">$9.00</span>
                      </div>{/* End .price-box */}
                      <div className="product-action">
                        <a href="#" className="btn-icon-wish"><i className="icon-heart" /></a>
                        <button className="btn-icon btn-add-cart" data-toggle="modal" data-target="#addCartModal"><i className="icon-bag" />ADD TO CART</button>
                        <a href="ajax/product-quick-view.html" className="btn-quickview" title="Quick View"><i className="fas fa-external-link-alt" /></a> 
                      </div>
                    </div>{/* End .product-details */}
                  </div>
                  <div className="product-default">
                    <figure>
                      <a href="product.html">
                        <img src="assets/images/products/home-featured-4.jpg" />
                      </a>
                    </figure>
                    <div className="product-details">
                      <div className="ratings-container">
                        <div className="product-ratings">
                          <span className="ratings" style={{width: '100%'}} />{/* End .ratings */}
                          <span className="tooltiptext tooltip-top" />
                        </div>{/* End .product-ratings */}
                      </div>{/* End .product-container */}
                      <h2 className="product-title">
                        <a href="product.html">Product Short Name</a>
                      </h2>
                      <div className="price-box">
                        <span className="product-price">$9.00</span>
                      </div>{/* End .price-box */}
                      <div className="product-action">
                        <a href="#" className="btn-icon-wish"><i className="icon-heart" /></a>
                        <button className="btn-icon btn-add-cart" data-toggle="modal" data-target="#addCartModal"><i className="icon-bag" />ADD TO CART</button>
                        <a href="ajax/product-quick-view.html" className="btn-quickview" title="Quick View"><i className="fas fa-external-link-alt" /></a> 
                      </div>
                    </div>{/* End .product-details */}
                  </div>
                  <div className="product-default">
                    <figure>
                      <a href="product.html">
                        <img src="assets/images/products/home-featured-5.jpg" />
                      </a>
                    </figure>
                    <div className="product-details">
                      <div className="ratings-container">
                        <div className="product-ratings">
                          <span className="ratings" style={{width: '100%'}} />{/* End .ratings */}
                          <span className="tooltiptext tooltip-top" />
                        </div>{/* End .product-ratings */}
                      </div>{/* End .product-container */}
                      <h2 className="product-title">
                        <a href="product.html">Product Short Name</a>
                      </h2>
                      <div className="price-box">
                        <span className="product-price">$9.00</span>
                      </div>{/* End .price-box */}
                      <div className="product-action">
                        <a href="#" className="btn-icon-wish"><i className="icon-heart" /></a>
                        <button className="btn-icon btn-add-cart" data-toggle="modal" data-target="#addCartModal"><i className="icon-bag" />ADD TO CART</button>
                        <a href="ajax/product-quick-view.html" className="btn-quickview" title="Quick View"><i className="fas fa-external-link-alt" /></a> 
                      </div>
                    </div>{/* End .product-details */}
                  </div>
                </div>{/* End .featured-proucts */}
                <div className="mb-6" />{/* margin */}
                <div className="row">
                  <div className="col-6 col-md-4">
                    <div className="product-column">
                      <h3 className="title">New</h3>
                      <div className="product-default left-details product-widget mb-3">
                        <figure>
                          <a href="product.html">
                            <img src="assets/images/products/home-featured-3.jpg" />
                          </a>
                        </figure>
                        <div className="product-details">
                          <h2 className="product-title">
                            <a href="product.html">Product Short Name</a>
                          </h2>
                          <div className="ratings-container">
                            <div className="product-ratings">
                              <span className="ratings" style={{width: '100%'}} />{/* End .ratings */}
                              <span className="tooltiptext tooltip-top" />
                            </div>{/* End .product-ratings */}
                          </div>{/* End .product-container */}
                          <div className="price-box">
                            <span className="product-price">$49.00</span>
                          </div>{/* End .price-box */}
                        </div>{/* End .product-details */}
                      </div>
                      <div className="product-default left-details product-widget mb-3">
                        <figure>
                          <a href="product.html">
                            <img src="assets/images/products/home-featured-4.jpg" />
                          </a>
                        </figure>
                        <div className="product-details">
                          <h2 className="product-title">
                            <a href="product.html">Product Short Name</a>
                          </h2>
                          <div className="ratings-container">
                            <div className="product-ratings">
                              <span className="ratings" style={{width: '100%'}} />{/* End .ratings */}
                              <span className="tooltiptext tooltip-top" />
                            </div>{/* End .product-ratings */}
                          </div>{/* End .product-container */}
                          <div className="price-box">
                            <span className="product-price">$49.00</span>
                          </div>{/* End .price-box */}
                        </div>{/* End .product-details */}
                      </div>
                      <div className="product-default left-details product-widget mb-3">
                        <figure>
                          <a href="product.html">
                            <img src="assets/images/products/small/product-1.jpg" />
                          </a>
                        </figure>
                        <div className="product-details">
                          <h2 className="product-title">
                            <a href="product.html">Product Short Name</a>
                          </h2>
                          <div className="ratings-container">
                            <div className="product-ratings">
                              <span className="ratings" style={{width: '100%'}} />{/* End .ratings */}
                              <span className="tooltiptext tooltip-top" />
                            </div>{/* End .product-ratings */}
                          </div>{/* End .product-container */}
                          <div className="price-box">
                            <span className="product-price">$49.00</span>
                          </div>{/* End .price-box */}
                        </div>{/* End .product-details */}
                      </div>
                    </div>{/* End .product-column */}
                  </div>{/* End .col-md-4 */}
                  <div className="col-6 col-md-4">
                    <div className="product-column">
                      <h3 className="title">Hot</h3>
                      <div className="product-default left-details product-widget mb-3">
                        <figure>
                          <a href="product.html">
                            <img src="assets/images/products/home-featured-1.jpg" />
                          </a>
                        </figure>
                        <div className="product-details">
                          <h2 className="product-title">
                            <a href="product.html">Product Short Name</a>
                          </h2>
                          <div className="ratings-container">
                            <div className="product-ratings">
                              <span className="ratings" style={{width: '100%'}} />{/* End .ratings */}
                              <span className="tooltiptext tooltip-top" />
                            </div>{/* End .product-ratings */}
                          </div>{/* End .product-container */}
                          <div className="price-box">
                            <span className="product-price">$49.00</span>
                          </div>{/* End .price-box */}
                        </div>{/* End .product-details */}
                      </div>
                      <div className="product-default left-details product-widget mb-3">
                        <figure>
                          <a href="product.html">
                            <img src="assets/images/products/home-featured-2.jpg" />
                          </a>
                        </figure>
                        <div className="product-details">
                          <h2 className="product-title">
                            <a href="product.html">Product Short Name</a>
                          </h2>
                          <div className="ratings-container">
                            <div className="product-ratings">
                              <span className="ratings" style={{width: '100%'}} />{/* End .ratings */}
                              <span className="tooltiptext tooltip-top" />
                            </div>{/* End .product-ratings */}
                          </div>{/* End .product-container */}
                          <div className="price-box">
                            <span className="product-price">$49.00</span>
                          </div>{/* End .price-box */}
                        </div>{/* End .product-details */}
                      </div>
                      <div className="product-default left-details product-widget mb-3">
                        <figure>
                          <a href="product.html">
                            <img src="assets/images/products/home-featured-5.jpg" />
                          </a>
                        </figure>
                        <div className="product-details">
                          <h2 className="product-title">
                            <a href="product.html">Product Short Name</a>
                          </h2>
                          <div className="ratings-container">
                            <div className="product-ratings">
                              <span className="ratings" style={{width: '100%'}} />{/* End .ratings */}
                              <span className="tooltiptext tooltip-top" />
                            </div>{/* End .product-ratings */}
                          </div>{/* End .product-container */}
                          <div className="price-box">
                            <span className="product-price">$49.00</span>
                          </div>{/* End .price-box */}
                        </div>{/* End .product-details */}
                      </div>
                    </div>{/* End .product-column */}
                  </div>{/* End .col-md-4 */}
                  <div className="col-6 col-md-4">
                    <div className="product-column">
                      <h3 className="title">Sale</h3>
                      <div className="product-default left-details product-widget mb-3">
                        <figure>
                          <a href="product.html">
                            <img src="assets/images/products/home-featured-4.jpg" />
                          </a>
                        </figure>
                        <div className="product-details">
                          <h2 className="product-title">
                            <a href="product.html">Product Short Name</a>
                          </h2>
                          <div className="ratings-container">
                            <div className="product-ratings">
                              <span className="ratings" style={{width: '100%'}} />{/* End .ratings */}
                              <span className="tooltiptext tooltip-top" />
                            </div>{/* End .product-ratings */}
                          </div>{/* End .product-container */}
                          <div className="price-box">
                            <span className="product-price">$49.00</span>
                          </div>{/* End .price-box */}
                        </div>{/* End .product-details */}
                      </div>
                      <div className="product-default left-details product-widget mb-3">
                        <figure>
                          <a href="product.html">
                            <img src="assets/images/products/small/product-1.jpg" />
                          </a>
                        </figure>
                        <div className="product-details">
                          <h2 className="product-title">
                            <a href="product.html">Product Short Name</a>
                          </h2>
                          <div className="ratings-container">
                            <div className="product-ratings">
                              <span className="ratings" style={{width: '100%'}} />{/* End .ratings */}
                              <span className="tooltiptext tooltip-top" />
                            </div>{/* End .product-ratings */}
                          </div>{/* End .product-container */}
                          <div className="price-box">
                            <span className="product-price">$49.00</span>
                          </div>{/* End .price-box */}
                        </div>{/* End .product-details */}
                      </div>
                      <div className="product-default left-details product-widget mb-3">
                        <figure>
                          <a href="product.html">
                            <img src="assets/images/products/home-featured-3.jpg" />
                          </a>
                        </figure>
                        <div className="product-details">
                          <h2 className="product-title">
                            <a href="product.html">Product Short Name</a>
                          </h2>
                          <div className="ratings-container">
                            <div className="product-ratings">
                              <span className="ratings" style={{width: '100%'}} />{/* End .ratings */}
                              <span className="tooltiptext tooltip-top" />
                            </div>{/* End .product-ratings */}
                          </div>{/* End .product-container */}
                          <div className="price-box">
                            <span className="product-price">$49.00</span>
                          </div>{/* End .price-box */}
                        </div>{/* End .product-details */}
                      </div>
                    </div>{/* End .product-column */}
                  </div>{/* End .col-md-4 */}
                </div>{/* End .row */}
                <div className="mb-3" />{/* margin */}
                <div className="row">
                  <div className="col-sm-6 col-md-4">
                    <div className="feature-box feature-box-simple text-center">
                      <i className="icon-star" />
                      <div className="feature-box-content">
                        <h3>Dedicated Service</h3>
                        <p>Consult our specialists for help with an order, customization, or design advice</p>
                        <a href="#" className="btn btn-outline-dark">Get in touch</a>
                      </div>{/* End .feature-box-content */}
                    </div>{/* End .feature-box */}
                  </div>{/* End .col-md-4 */}
                  <div className="col-sm-6 col-md-4">
                    <div className="feature-box feature-box-simple text-center">
                      <i className="icon-reply" />
                      <div className="feature-box-content">
                        <h3>Free Returns</h3>
                        <p>We stand behind our goods and services and want you to be satisfied with them.</p>
                        <a href="#" className="btn btn-outline-dark">Return Policy</a>
                      </div>{/* End .feature-box-content */}
                    </div>{/* End .feature-box */}
                  </div>{/* End .col-md-4 */}
                  <div className="col-sm-6 col-md-4">
                    <div className="feature-box feature-box-simple text-center">
                      <i className="icon-paper-plane" />
                      <div className="feature-box-content">
                        <h3>International Shipping</h3>
                        <p>Currently over 50 countries qualify for express international shipping.</p>
                        <a href="#" className="btn btn-outline-dark">Lear More</a>
                      </div>{/* End .feature-box-content */}
                    </div>{/* End .feature-box */}
                  </div>{/* End .col-md-4 */}
                </div>{/* End .row */}
              </div>{/* End .col-lg-9 */}
              <aside className="sidebar-home col-lg-3 order-lg-first">
                <div className="side-menu-container">
                  <h2>CATEGORIES</h2>
                  <nav className="side-nav">
                    <ul className="menu menu-vertical sf-arrows">
                      <li className="active"><a href="index.html"><i className="icon-home" />Home</a></li>
                      <li>
                        <a href="category.html" className="sf-with-ul"><i className="icon-briefcase" />
                          Categories</a>
                        <div className="megamenu megamenu-fixed-width">
                          <div className="row">
                            <div className="col-lg-8">
                              <div className="row">
                                <div className="col-lg-6">
                                  <div className="menu-title">
                                    <a href="#">Variations 1<span className="tip tip-new">New!</span></a>
                                  </div>
                                  <ul>
                                    <li><a href="category.html">Fullwidth Banner<span className="tip tip-hot">Hot!</span></a></li>
                                    <li><a href="category-banner-boxed-slider.html">Boxed Slider Banner</a></li>
                                    <li><a href="category-banner-boxed-image.html">Boxed Image Banner</a></li>
                                    <li><a href="category.html">Left Sidebar</a></li>
                                    <li><a href="category-sidebar-right.html">Right Sidebar</a></li>
                                    <li><a href="category-flex-grid.html">Product Flex Grid</a></li>
                                    <li><a href="category-horizontal-filter1.html">Horizontal Filter1</a></li>
                                    <li><a href="category-horizontal-filter2.html">Horizontal Filter2</a></li>
                                  </ul>
                                </div>{/* End .col-lg-6 */}
                                <div className="col-lg-6">
                                  <div className="menu-title">
                                    <a href="#">Variations 2</a>
                                  </div>
                                  <ul>
                                    <li><a href="#">Product List Item Types</a></li>
                                    <li><a href="category-infinite-scroll.html">Ajax Infinite Scroll</a></li>
                                    <li><a href="category.html">3 Columns Products</a></li>
                                    <li><a href="category-4col.html">4 Columns Products <span className="tip tip-new">New</span></a></li>
                                    <li><a href="category-5col.html">5 Columns Products</a></li>
                                    <li><a href="category-6col.html">6 Columns Products</a></li>
                                    <li><a href="category-7col.html">7 Columns Products</a></li>
                                    <li><a href="category-8col.html">8 Columns Products</a></li>
                                  </ul>
                                </div>{/* End .col-lg-6 */}
                              </div>{/* End .row */}
                            </div>{/* End .col-lg-8 */}
                            <div className="col-lg-4">
                              <div className="banner">
                                <a href="#">
                                  <img src="assets/images/menu-banner-2.jpg" alt="Menu banner" />
                                </a>
                              </div>{/* End .banner */}
                            </div>{/* End .col-lg-4 */}
                          </div>
                        </div>{/* End .megamenu */}
                      </li>
                      <li className="megamenu-container">
                        <a href="product.html" className="sf-with-ul"><i className="icon-video" />Products</a>
                        <div className="megamenu">
                          <div className="row">
                            <div className="col-lg-8">
                              <div className="row">
                                <div className="col-lg-4">
                                  <div className="menu-title">
                                    <a href="#">Variations</a>
                                  </div>
                                  <ul>
                                    <li><a href="product.html">Horizontal Thumbnails</a></li>
                                    <li><a href="product-full-width.html">Vertical Thumbnails<span className="tip tip-hot">Hot!</span></a></li>
                                    <li><a href="product.html">Inner Zoom</a></li>
                                    <li><a href="product-addcart-sticky.html">Addtocart Sticky</a></li>
                                    <li><a href="product-sidebar-left.html">Accordion Tabs</a></li>
                                  </ul>
                                </div>{/* End .col-lg-4 */}
                                <div className="col-lg-4">
                                  <div className="menu-title">
                                    <a href="#">Variations</a>
                                  </div>
                                  <ul>
                                    <li><a href="product-sticky-tab.html">Sticky Tabs</a></li>
                                    <li><a href="product-simple.html">Simple Product</a></li>
                                    <li><a href="product-sidebar-left.html">With Left Sidebar</a></li>
                                  </ul>
                                </div>{/* End .col-lg-4 */}
                                <div className="col-lg-4">
                                  <div className="menu-title">
                                    <a href="#">Product Layout Types</a>
                                  </div>
                                  <ul>
                                    <li><a href="product.html">Default Layout</a></li>
                                    <li><a href="product-extended-layout.html">Extended Layout</a></li>
                                    <li><a href="product-full-width.html">Full Width Layout</a></li>
                                    <li><a href="product-grid-layout.html">Grid Images Layout</a></li>
                                    <li><a href="product-sticky-both.html">Sticky Both Side Info<span className="tip tip-hot">Hot!</span></a></li>
                                    <li><a href="product-sticky-info.html">Sticky Right Side Info</a></li>
                                  </ul>
                                </div>{/* End .col-lg-4 */}
                              </div>{/* End .row */}
                            </div>{/* End .col-lg-8 */}
                            <div className="col-lg-4">
                              <div className="banner">
                                <a href="#">
                                  <img src="assets/images/menu-banner.jpg" alt="Menu banner" className="product-promo" />
                                </a>
                              </div>{/* End .banner */}
                            </div>{/* End .col-lg-4 */}
                          </div>{/* End .row */}
                        </div>{/* End .megamenu */}
                      </li>
                      <li>
                        <a href="#" className="sf-with-ul"><i className="icon-docs-inv" />Pages</a>
                        <ul>
                          <li><a href="cart.html">Shopping Cart</a></li>
                          <li><a href="#">Checkout</a>
                            <ul>
                              <li><a href="checkout-shipping.html">Checkout Shipping</a></li>
                              <li><a href="checkout-shipping-2.html">Checkout Shipping 2</a></li>
                              <li><a href="checkout-review.html">Checkout Review</a></li>
                            </ul>
                          </li>
                          <li><a href="#">Dashboard</a>
                            <ul>
                              <li><a href="dashboard.html">Dashboard</a></li>
                              <li><a href="my-account.html">My Account</a></li>
                            </ul>
                          </li>
                          <li><a href="about.html">About Us</a></li>
                          <li><a href="#">Blog</a>
                            <ul>
                              <li><a href="blog.html">Blog</a></li>
                              <li><a href="single.html">Blog Post</a></li>
                            </ul>
                          </li>
                          <li><a href="contact.html">Contact Us</a></li>
                          <li><a href="#" className="login-link">Login</a></li>
                          <li><a href="forgot-password.html">Forgot Password</a></li>
                        </ul>
                      </li>
                      <li><a href="#" className="sf-with-ul"><i className="icon-sliders" />Features</a>
                        <ul>
                          <li><a href="#">Header Types</a></li>
                          <li><a href="#">Footer Types</a></li>
                        </ul>
                      </li>
                      <li><a href="#"><i className="icon-cat-gift" />Special Offer!</a></li>
                      <li><a href="https://1.envato.market/DdLk5" target="_blank"><i className="icon-star-empty" />Buy Porto!</a></li>
                    </ul>
                  </nav>
                </div>{/* End .side-menu-container */}
                <div className="widget widget-banners">
                  <div className="widget-banners-slider owl-carousel owl-theme">
                    <div className="banner banner-image">
                      <a href="#">
                        <img src="assets/images/banners/banner-sidebar.jpg" alt="banner" />
                      </a>
                    </div>{/* End .banner */}
                    <div className="banner banner-image">
                      <a href="#">
                        <img src="assets/images/banners/banner-sidebar-2.jpg" alt="banner" />
                      </a>
                    </div>{/* End .banner */}
                  </div>{/* End .banner-slider */}
                </div>{/* End .widget */}
                <div className="widget widget-newsletters">
                  <h3 className="widget-title">Newsletter</h3>
                  <p>Get all the latest information on Events, Sales and Offers. </p>
                  <form action="#">
                    <div className="form-group">
                      <input type="email" className="form-control" id="wemail" />
                      <label htmlFor="wemail"><i className="icon-envolope" />Email Address</label>
                    </div>{/* Endd .form-group */}
                    <input type="submit" className="btn btn-block" defaultValue="Subscribe Now" />
                  </form>
                </div>{/* End .widget */}
                <div className="widget widget-testimonials">
                  <div className="widget-testimonials-slider owl-carousel owl-theme">
                    <div className="testimonial">
                      <div className="testimonial-owner">
                        <figure>
                          <img src="assets/images/clients/client1.png" alt="client" />
                        </figure>
                        <div>
                          <h4 className="testimonial-title">john Smith</h4>
                          <span>CEO &amp; Founder</span>
                        </div>
                      </div>{/* End .testimonial-owner */}
                      <blockquote>
                        <p>Lorem ipsum dolor sit amet, consectetur elitad adipiscing Cras non placerat mi.</p>
                      </blockquote>
                    </div>{/* End .testimonial */}
                    <div className="testimonial">
                      <div className="testimonial-owner">
                        <figure>
                          <img src="assets/images/clients/client2.png" alt="client" />
                        </figure>
                        <div>
                          <h4 className="testimonial-title">Dae Smith</h4>
                          <span>Co-founder</span>
                        </div>
                      </div>{/* End .testimonial-owner */}
                      <blockquote>
                        <p>Lorem ipsum dolor sit amet, consectetur elitad adipiscing Cras non placerat mi.</p>
                      </blockquote>
                    </div>{/* End .testimonial */}
                  </div>{/* End .testimonials-slider */}
                </div>{/* End .widget */}
                <div className="widget">
                  <div className="widget-posts-slider owl-carousel owl-theme">
                    <div className="post">
                      <span className="post-date">01- Jun -2018</span>
                      <h4 className="post-title"><a href="#">Fashion News</a></h4>
                      <p>Lorem ipsum dolor sit amet, consectetur elitad adipiscing Cras non placerat mi. </p>
                    </div>{/* End .post */}
                    <div className="post">
                      <span className="post-date">22- May -2018</span>
                      <h4 className="post-title"><a href="#">Shopping News</a></h4>
                      <p>Lorem ipsum dolor sit amet, consectetur elitad adipiscing Cras non plasasyi. </p>
                    </div>{/* End .post */}
                    <div className="post">
                      <span className="post-date">13- May -2018</span>
                      <h4 className="post-title"><a href="#">Fashion News</a></h4>
                      <p>Lorem ipsum dolor sit amet, consectetur elitad adipiscing Cras non placerat. </p>
                    </div>{/* End .post */}
                  </div>{/* End .posts-slider */}
                </div>{/* End .widget */}
              </aside>{/* End .col-lg-3 */}
            </div>{/* End .row */}
          </div>
        )
    }
}
