import React, { Component } from 'react'
import Header from './Component/Header'
import Main from './Component/Main/Main'
import Footer from './Component/Footer'

export default class App extends Component {
  render() {
    return (
      <div>
         <Header/>
         <Main/>
         <Footer/>
      </div>
    )
  }
}

