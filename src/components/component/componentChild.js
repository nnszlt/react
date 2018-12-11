import React from 'react';

class componentChild extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            title:"--子组件传值过来了"
        }

    }
    getstat = () => {
        alert(this.props.zujian.state.title)
    }
    render() {
        return (
            <div style={{ "background": "yellow" }}>
                <p>子组件</p>
                <div>
                    组件传属性
                    <pre>
                        1.在调用子组件的时候定义一个属性
                        2.子组件里面 this.props.msg
                    </pre>
                    父组件传的值是=>{this.props.title}
                </div>
                <div>
                    组件传方法
                    <button onClick={this.props.run}>点击获取父组件方法</button>
                    <br />
                    整个父组件传过来
                    <button onClick={this.props.zujian.get}>点击获取整个父组件</button>
                    本地方法获取 父组件stats  <button onClick={this.getstat}>getstat</button>
                    <br /> <br />
                    <button onClick={this.props.zujian.getChild.bind(this,this.state.title)}>子组件传值给父组件</button>

                </div>
            </div>
        )
    }

}
export default componentChild;