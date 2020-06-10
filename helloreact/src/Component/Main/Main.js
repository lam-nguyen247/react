import React, { Component } from 'react'
import Info from './Info'
import Container from './Container'

export default class Main extends Component {
    render() {
        return (
            <main class="main">
                <Info/>
                <Container/>
                <div className="mb-4" />{/* margin */}
            </main>
        )
    }
}
