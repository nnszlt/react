import React from 'react'

class Click extends React.Component {
    constructor(porps) {
        super(porps);
        this.state = {
            name: "zlt"
        }
        this.click2 = this.click2.bind(this);
    }
    //方法
    click1() {
        alert(this.state.name)
    }
    click2() {
        alert(this.state.name)
    }
    click3 = () => {
        alert(this.state.name)

    }
    click4(e, v) {
        console.log(v)
        this.setState({
            name: e
        })
    }

    click5 = (e) => {
        alert(e.target.getAttribute("aid"))
        alert(e)
    }


    render() {
        return (
            <div>
                <span>this.state.name =</span>  < span className="red" > {this.state.name} </span>
                <br />
                <p onClick={this.click1.bind(this)} > bind(this)</p>
                <br />
                < p onClick={this.click2} > 构造函数中改变 </p>
                <br />
                <p onClick={this.click3} > click3 = () => {}</p>
                <br />
                <p onClick={this.click4.bind(this, "zcc")} > click 传值 </p>
                <br />
                <p aid="aid" onClick={()=>{this.click5(1)}} > click 传值获取属性</p>
            </div>
        )
    }

}
export default Click;