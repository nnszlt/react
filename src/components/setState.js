import React from 'react'

class sd extends React.Component {

    constructor(p) {
        super(p);
        this.state = {
            num: 1,
            back_num: 1,
            obj: { hah: "hahahh", color: "red", two: { "t": 2 } }
        }
    }

    add() {
        console.log(1)
        this.setState({
            num: this.state.num + 1
        })
    }
    back = () => {
        var num = this.state.back_num + 1;
        this.setState({ back_num: num }, () => {
            console.log(this.state.back_num)

        })
    }
    clickobj = () => {

        let copy = Object.assign({}, this.state.obj, { two: { "t": 8 } })
        console.log(copy)
        this.setState({
            obj: copy
        })

    }
    render() {

        return (
            <div>
                <h2>setState</h2>
                <button onClick={this.add.bind(this)}>{this.state.num}</button>
                <br />
                <button onClick={this.back}>stDate回调{this.state.back_num}</button>
                <br />
                <button onClick={this.clickobj}>修改对象中的对象  {this.state.obj.two.t}</button>
            </div>


        )

    }




}


export default sd;