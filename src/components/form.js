import React from "react"

class Form extends React.Component {

    constructor(p) {
        super(p);
        this.state = {
            val1: "请填写",
            val2: "请填写2"
        }
    }

    input1 = (e) => {
        this.setState({
            val1: this.refs.input1.value
        })
    }
    input2 = (e) => {
        this.setState({
            val2:e.target.value
        })
    }
    render() {

        return (
            <div>
                {this.state.val1}
                <input onChange={this.input1} ref="input1" type="text" />
                <br />
                <hr />
                {this.state.val2}
                <input onChange={this.input2} type="text" />

            </div>
        )

    }
}
export default Form;