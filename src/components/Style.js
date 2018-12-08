import React, { Component } from 'react';
import "../assets/css/style.css"
class Style extends Component {

    constructor(props) {

        super(props);
        this.data = {
            class: "red",
            style:{
                color:"blue",
                fontSize:"20px"
            }
        }
    }
    render() {
        return (
            <div>
                <p className={this.data.class}>这里绑定属性和class</p>
                <br />
                <label htmlFor="name">
                    label 标签的for 要写成 htmlFor
                </label>
                <input type="texxt" name="" id="name" />
                <br />
                <div style={{'color':this.data.class}}>行内样式 </div>
                <br />
                <div style={this.data.style}>行内样式</div>
            </div>
        )
    }

}

export default Style;