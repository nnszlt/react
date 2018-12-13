import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Route,
    Link
} from "react-router-dom";
import "../../../assets/css/qt.css"

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
            <div>
                <div className="qt">
                    <div className="left">
                        <ul>
                            <li><Link to="/RouterQtFather"> 1</Link></li>
                            <li><Link to="/RouterQtFather/RouterQtSon2"> 2</Link></li>

                        </ul>
                    </div>
                    <div className="right" >
                        {

                            this.props.routes.map((v, k) => {
                                return <Route key={k} exact path={v.path}
                                    render={props => (
                                        <v.component {...props} routes={v.routes} />
                                    )}
                                />
                            })
                        }
                    </div>

                </div>
   
            </div>
        )
    }

}
export default routerQtFather;