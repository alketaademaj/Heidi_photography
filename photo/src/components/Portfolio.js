import React from 'react'
import { Link } from "react-router-dom";
import PictureOne from './PictureOne';

export default function Portfolio() {

    return (
        <div>
            <div className="picturebox">
                <div className="singlebox">
                    <Link
                        className="Form-button"
                        to={{
                            pathname: "/PictureOne",
                        }}
                    >
                        View
        </Link>
                </div>
                <div className="singlebox">
                    <Link>View</Link>
                </div>
            </div>
            <div className="picturebox">
                <div className="singlebox">
                    <Link>View</Link>
                </div>
                <div className="singlebox">
                    <Link>View</Link>
                </div>
                <div className="singlebox">
                    <Link>View</Link>
                </div>
            </div>
        </div>
    )
}
