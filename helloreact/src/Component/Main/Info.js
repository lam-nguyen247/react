import React, { Component } from 'react'

export default class Info extends Component {
    render() {
        return (
            <div className="info-boxes-container">
            <div className="container">
              <div className="info-box">
                <i className="icon-shipping" />
                <div className="info-box-content">
                  <h4>FREE SHIPPING &amp; RETURN</h4>
                  <p>Free shipping on all orders over $99.</p>
                </div>{/* End .info-box-content */}
              </div>{/* End .info-box */}
              <div className="info-box">
                <i className="icon-us-dollar" />
                <div className="info-box-content">
                  <h4>MONEY BACK GUARANTEE</h4>
                  <p>100% money back guarantee</p>
                </div>{/* End .info-box-content */}
              </div>{/* End .info-box */}
              <div className="info-box">
                <i className="icon-support" />
                <div className="info-box-content">
                  <h4>ONLINE SUPPORT 24/7</h4>
                  <p>Lorem ipsum dolor sit amet.</p>
                </div>{/* End .info-box-content */}
              </div>{/* End .info-box */}
            </div>{/* End .container */}
          </div>
        )
    }
}
