import React, { Component } from 'react';
import ComponentChild from './componentChild'
import ComponentChildtoo from './componentChildtoo'
class componentFather extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: "我是Father组件",
            zj: ""

        }

    }
    run = () => {
        alert("我是componentFather父组件的run方法")
    }
    get = () => {
        alert("我是componentFather父组件的get方法,通过传整个组件过来的")
    }
    getChild = (res) => {
        //子组=>件传值->父组件
        this.setState({
            zj: res
        })
    }
    getOtherChild = () => {
        //父组件向子组件拿值
        alert(this.refs.componentChildtoo.state.title)
    }
    render() {
        return (
            <div style={{ "background": "red" }}>
                <h2>组件</h2>
                <p>父组件{this.state.zj}</p>
                <br />

                <ComponentChild ref="componentChild" title="父组件叫componentFather" run={this.run} zujian={this} />
                <br />
                父组件主动获取子组件的数据
                1、调用子组件的时候指定ref的值
                2、通过this.refs.componentChildtoo  获取整个子组件实例
                <ComponentChildtoo ref="componentChildtoo" df="" />
                <button onClick={this.getOtherChild}>    父组件向子组件拿值</button>
            </div>
        )
    }

}
export default componentFather;