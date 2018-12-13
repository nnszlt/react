import React, { Component } from 'react';


class Home extends Component {
    constructor(props) {
        super(props);

        this.data = {
            name: "我是Home组件"
        }
    }

    render() {
        return (
            <div>
                <p>{this.data.name}</p>
            </div>
        )
    }

}
export default Home;