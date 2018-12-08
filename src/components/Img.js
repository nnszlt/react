import React, { Component } from 'react';
import pig from '../assets/image/1.png'
class Img extends Component {

    constructor(props) {
        super(props);
        console.log(props)
        this.data = {
            class: "red",
            style: {
                color: "blue",
                fontSize: "20px"
            }
        }
    }
    render() {
        return (
            <div>
                import 引入 和  require
                  <br />
                远程图片 直接引用
                  <br />
                <img src={pig} alt="" />
                <br />
                <img src={require("../assets/image/1.png")} alt="" />
                i
            </div>

        )
    }

}

export default Img;