import React, { Component } from "react";
import url from 'node.url';
class routerGet extends Component {

    constructor(props) {
        super(props);
        this.state = {
            list: []
        }
    }
componentDidMount(){
}
    render() {
      
        return (
            <div>
                <ul>get获取{url(window.location.href).params.aid}</ul>
            </div>
        )
    }

}
export default routerGet;