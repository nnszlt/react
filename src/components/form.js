import React from "react"

class Form extends React.Component {

    constructor(p) {
        super(p);
        this.state = {
            val1: "请填写",
            val2: "请填写2",
            dvalue: "defaultValue",
            people: {
                name: "zcc",
                sex: "1",
                citys: ["即墨", "青岛"],
                hobby: [
                    { title: "睡觉", checked: true },
                    { title: "海货", checked: true },
                    { title: "打游戏", checked: true }
                ],
                info: ""
            }
        }
    }

    input1 = (e) => {
        this.setState({
            val1: this.refs.input1.value
        })
    }
    input2 = (e) => {
        this.setState({
            val2: e.target.value
        })
    }
    defun() {
        alert(this.state.dvalue)
    }
    // from
    f_input = (e) => {
        this.setState({
            name: e.target.value
        })
    }
    f_rideo = (e) => {
        var sex=Object.assign({},this.state.people,{sex:e.target.value})
        this.setState({
            people:sex
        })
        console.log(this.state.people)
    }
    sbmit = (e) => {
        e.preventDefault();
        console.log(this.state.people.name)
    }



    render() {

        return (
            <div>
                <h2>input</h2>
                {this.state.val1}
                <input onChange={this.input1} ref="input1" type="text" /> 约束性绑定（双向数据绑定）
                <br />

                {this.state.val2}
                <input onChange={this.input2} type="text" />约束性绑定（双向数据绑定）
                <br />

                <input type="text" defaultValue={this.state.dvalue} />
                <button onClick={this.defun.bind(this)}>非约束性绑定</button>
                <hr />
                <h2>完整表单</h2>
                <form action="" onSubmit={this.sbmit}>
                    <label>  名字:  <input onChange={this.f_input} type="text" /></label>
                    <br />
                    性别: <label> <input type="radio" onChange={this.f_rideo} checked={this.state.people.sex === "1"} value="1" />男</label> 
                     <label> <input onChange={this.f_rideo} checked={this.state.people.sex === "2"} type="radio" value="2" />女</label>
                    <br />
                    <input type="submit" value="提交" />
                </form>
            </div>
        )

    }
}
export default Form;