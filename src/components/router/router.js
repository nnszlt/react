import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom"; //路由
import axios from 'axios';
class Luyou extends Component {

    constructor(props) {
        super(props);
        this.state = {
            list: []
        }
    }
    getData = () => {

        var api = 'http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20';   //接口后台允许了跨域
        axios.get(api)
            .then((response) => {
                this.setState({
                    list: response.data.result
                })
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    componentDidMount() {
        this.getData()
    }
    render() {
        var fun1 = this.state.list.map(function (v, i) {
            if (i < 2)
                return <li key={i}><Link to={`/Routerson/${v.aid}`}>动态路由------{v.title}</Link></li>
        });
        var fun2 = this.state.list.map(function (v, i) {
            if (i>2&&i<5) {
                console.log(456)
                return <li key={i}><Link to={`/RouterGet?aid=${v.aid}`}>动态路由------{v.title}</Link></li>
            }

        });
        return (

            <div>
                <h2>路由</h2>
                <p>动态路由:id</p>
                <ul>{fun1}</ul>
                <p>get 路由</p>
                <ul>
                    {fun2}
                </ul>
            </div>

        )
    }

}
export default Luyou;