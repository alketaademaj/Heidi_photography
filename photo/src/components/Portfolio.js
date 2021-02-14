import React, { Component } from 'react'

export class Portfolio extends Component {

    constructor(props) {
        super(props)

        this.state = {

        }
    }
    render() {
        return (
            <div>
                <div className="picturebox">
                    <div className="singlebox">
                        <button className="view-button">View</button>
                    </div>
                    <div className="singlebox">
                        <button className="view-button">View</button>
                    </div>
                    <div className="singlebox">
                        <button className="view-button">View</button>
                    </div>
                </div>
                <div className="picturebox">
                    <div className="singlebox">
                        <button className="view-button">View</button>
                    </div>
                    <div className="singlebox">
                        <button className="view-button">View</button>
                    </div>
                    <div className="singlebox">
                        <button className="view-button">View</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Portfolio
