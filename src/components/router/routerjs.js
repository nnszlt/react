import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    withRouter
} from "react-router-dom";
class routerJs extends Component {

    constructor(props) {
        super(props);
        this.state = {
            login: false
        }

    }
    index = () => {

        // this.props.history.push('/Luyou')   //第一种方法
        this.setState({
            login: true
        })
    }
    render() {
        if (this.state.login) {
            return <Redirect to={{ pathname: "/" }} />
        }

        return (
            <div>
                <button onClick={this.index}>跳到首页</button>
            </div>
        )
    }

}
export default routerJs;