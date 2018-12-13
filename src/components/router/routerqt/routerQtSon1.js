import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    withRouter
} from "react-router-dom";
class routerQtSon extends Component {

    constructor(props) {
        super(props);
        this.state = {
            list: []
        }
    }
    componentDidMount() {
        console.log(this.props)
    }
    render() {

        return (
            <div>
                我是son1
              <ul>
                    <li><Link to="/RouterQtFather/RouterQtSun1">Click</Link></li>
                </ul>
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
        )
    }

}
export default routerQtSon;