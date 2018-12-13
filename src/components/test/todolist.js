import React, { Component } from "react";



import "./css/todolist.css";

class Todolist extends Component {
    constructor(props) {
        super();
        this.state = {
            list: [
                {
                    title: '录制nodejs',
                    checked: true
                },
                {
                    title: '录制ionic',
                    checked: false
                },
                {
                    title: '录制nodejs11',
                    checked: true
                },
                {
                    title: '录制ionic1',
                    checked: false
                }
            ]
        }
    }
    submit = (e) => {
        this.state.list.push({
            title: this.refs.title.value,
            checked: true
        })
        this.setState({
            list: this.state.list
        })
    }
    update = (i, v) => {
        var list = this.state.list;
        list[i].checked = !v;
        this.setState({
            list: list
        })
    }
    remove = (i) => {
        var temp = this.state.list;
        temp.splice(i, 1);
        this.setState({
            list: temp
        })
    }

    render() {

        return (
            <div className="Todolist">
                <header>
                    <section>
                        <form action="#" ref="form" target="testif" onSubmit={this.submit}>
                            <label htmlFor="title">ToDoList</label>
                            <input type="text" ref="title" name="title" placeholder="添加ToDo" required="required" autoComplete="off" />>
                            <iframe title="no" name="testif" style={{ "display": "none" }}></iframe>
                        </form>
                    </section>
                </header>
                <section>
                    <h2>正在进行 <span id="todocount">0</span></h2>
                    <ol id="todolist" className="demo-box">
                        {
                            this.state.list.map((v, i) => {
                                if (v.checked) {
                                    return (
                                        <li key={i}><input type="checkbox" onChange={() => this.update(i, v.checked)} /><p>{v.title}</p><a href="javascript:void(0)" onClick={() => { this.remove(i) }}>-</a></li>
                                    )
                                }
                            })
                        }
                    </ol>
                    <h2>已经完成 <span id="donecount">0</span></h2>
                    <ul id="donelist">
                        {
                            this.state.list.map((v, i) => {
                                if (!v.checked) {
                                    return (
                                        <li key={i}><input type="checkbox" checked onChange={() => this.update(i, v.checked)} /><p>{v.title}</p><a href="javascript:void(0)" onClick={() => { this.remove(i) }}>-</a></li>
                                    )
                                }
                            })
                        }
                    </ul>
                </section>
                <br /><br />

            </div>

        )
    }

}
export default Todolist;