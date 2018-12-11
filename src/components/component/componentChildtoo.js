import React from 'react';

class componentChildtoo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            title:"我是另一个组件的title值"
        }

    }

    render() {
        return (
            <div style={{ "background": "green" }}>
                <p>我是另一个子组件</p>
                <div>
                
                </div>
            </div>
        )
    }

}
export default componentChildtoo;