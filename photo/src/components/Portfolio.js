import React from 'react'
import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom";
import PictureOne from './PictureOne';

export default function Portfolio() {

    return (
        <Router>
            <div>
                <div className="picturebox">
                    <div className="singlebox">
                        <Link>View</Link>
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
                    <Switch>
                        <Route path="/Album" exact component={PictureOne}></Route>
                    </Switch>
                </div>
            </div>
        </Router>
    )
}
