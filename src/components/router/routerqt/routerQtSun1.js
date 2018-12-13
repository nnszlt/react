import React, { Component } from "react";

class routerQtSun1 extends Component {

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
              我是孙子1
            </div>
        )
    }

}
export default routerQtSun1;