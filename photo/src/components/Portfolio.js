import React, { Component } from 'react'

export class Portfolio extends Component {

    constructor(props) {
        super(props)

        this.state = {

        }
    }

    PictureOnePortfolio = () => {
        //create here the pathway on click to go to the pictureOne js file

    }

    render() {
        return (
            <div>
                <div className="picturebox">
                    <div className="singlebox">
                        <button className="view-button" onClick={ } > View </button>
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
