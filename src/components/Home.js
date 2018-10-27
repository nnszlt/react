import React, { Component } from 'react';

class Home extends Component {
    constructor(props) {
        super(props);

        this.data = {
            name: "zhah"
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