import React, { Component } from 'react'

export class Home extends Component {
    render() {
        console.log(this.props.pictures)
        return (
            <div>
                <img src="/img/valas.jpeg" alt="valaskuva" width="1000px" height="600px"></img>
            </div>
        )
    }
}

export default Home
