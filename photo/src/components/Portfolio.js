import React from 'react'
import { Link } from "react-router-dom";

export default function Portfolio() {

    return (
        <div>
            <div className="picturebox">
                <div className="singlebox">
                    <img src="/norway/meri1.jpeg" alt="meri" width="300px"></img>
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
                    <img src="/minea/Minea1.jpeg" alt="meri" width="300px"></img>
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
                    <img src="/synttärit/bd4.jpeg" alt="meri" width="300px"></img>
                    <Link
                        className="view-button"
                        to={{
                            pathname: "/PictureThree",
                        }}
                    >
                        Minea
        </Link>
                </div>
            </div>
        </div>
    )
}
