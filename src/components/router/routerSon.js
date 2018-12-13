import React, { Component } from "react";
class Luyou extends Component {

    constructor(props) {
        super(props);
        this.state = {
            list: []
        }
    }
componentDidMount(){
    console.log(this)
}
    render() {
      
        return (
            <div>
                <ul>动态路由{this.props.match.params.aid}</ul>
            </div>
        )
    }

}
export default Luyou;