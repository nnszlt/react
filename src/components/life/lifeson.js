import React, { Component } from 'react'

class Life extends Component {
    constructor(props) {
        console.log("01构造函数")
        super(props);
        this.state = {
            msg: "我是一个数据"
        };
    }
    componentWillMount() {
        //组件将要挂载
        console.log("生命周期函数--02组件将要挂载")
    }
    componentDidMount() {
        //组件渲染完毕  dom操作  请求数据
        console.log("生命周期函数--04组件渲染完毕")
    }
    change = () => {
        this.setState({
            msg: "改变啦数据"
        })
    }
    shouldComponentUpdate(nextProps, nextState) {
        // 判断是否要更新数据
        console.log("数据更新函数--判断是否更新")
        console.log(nextProps)
        console.log(nextState) //要改变的数据
        return true;
    }
    componentWillUpdate() {
        console.log("数据更新函数--组件将要被更新")
    }
    componentDidUpdate() {
        console.log("数据更新函数--组件更新完成")
    }
    componentWillReceiveProps() {
        console.log("父组件传值--Props")
    }
    componentWillUnmount() {
        console.log("组件销毁")
    }


    render() {
        console.log("03数据渲染")
        return (
            <div>
                <h2>生命周期</h2>
                <br />
                <h3>{this.state.msg}</h3>
                <br />
                <pre>1 组件加载的时候触发的函数：constructor 、componentWillMount、 render 、componentDidMount</pre>
                <br />
                <pre>2 组件数据更新的时候触发的生命周期函数：shouldComponentUpdate、componentWillUpdate、render、componentDidUpdate</pre>
                <button onClick={this.change}>更新数据</button>
                <br />
                <pre>3 你在父组件里面改变props传值的时候触发的：componentWillReceiveProps</pre>
                <pre>4 组件销毁的时候触发的：componentWillUnmount</pre>

            </div>
        )
    }

}
export default Life;