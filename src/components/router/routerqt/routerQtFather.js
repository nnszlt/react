import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    withRouter
} from "react-router-dom";
import "../../../assets/css/qt.css"
import RouterQtSon1 from "./routerQtSon1"
import RouterQtSon2 from "./routerQtSon2"
class routerQtFather extends Component {

    constructor(props) {
        super(props);
        this.state = {
            list: []
        }
    }
    componentDidMount() {
    }
    render() {

        return (
            <div className="qt">
                <div className="left">
                    <ul>
                        <li><Link to="/RouterQtFather"> 1</Link></li>
                        <li><Link to="/RouterQtFather/RouterQtSon2"> 2</Link></li>

                    </ul>
                </div>
                <div className="right" >
                    <Route exact path="/RouterQtFather" component={RouterQtSon1} />
                    <Route path="/RouterQtFather/RouterQtSon2" component={RouterQtSon2} />
                </div>

            </div>
        )
    }

}
export default routerQtFather;