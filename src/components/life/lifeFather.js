import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    withRouter
} from "react-router-dom";
import Lifeson from './lifeson'
class component extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            life: "父组件穿的msg",
            flag: false
        }
    }

    setFlag = () => {
        this.setState({
            flag: !this.state.flag,
        })
    }
    setTitle = () => {
        if (this.state.flag) {
            this.setState({
                life: "对"
            })
        } else {
            this.setState({
                life: "错"
            })
        }
    }
    render() {
        return (
            <div>
                <div>
                    <button onClick={this.setFlag}>组件挂载状态改变</button>
                    <br />
                    <button onClick={this.setTitle}>改变父组件title</button>
                    {
                        this.state.flag ? <Lifeson life={this.state.life} /> : ""
                    }
                    <hr />
                </div>

            </div>
        )
    }

}
export default component;