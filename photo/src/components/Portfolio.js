import React from 'react'
import { Link } from "react-router-dom";
import meri from '../norway/meri1.jpeg'
import minea from '../minea/Minea1.jpeg'
import synttärit from '../synttärit/bd4.jpeg'

export default function Portfolio() {

    return (
        <div>
            <div className="picturebox">
                <div className="singlebox">
                    <img src={meri} alt={"meri"} width="400px"></img>
                    <Link
                        className="view-button"
                        to={{
                            pathname: "/PictureOne",
                        }}
                    >
                        Norway
        </Link>
                </div>
                <div className="singlebox">
                    <img src={minea} alt={"minea"} width="400px"></img>
                    <Link
                        className="view-button"
                        to={{
                            pathname: "/PictureTwo",
                        }}
                    >
                        Minea
        </Link>
                </div>
                <div className="singlebox">
                    <img src={synttärit} alt="synttärit" width="400px"></img>
                    <Link
                        className="view-button"
                        to={{
                            pathname: "/PictureThree",
                        }}
                    >
                        Birthday
        </Link>
                </div>
            </div>
        </div>
    )
}
