import React, { Component } from "react";
class Forlist extends Component {

    constructor(props) {
        super(props);
        this.data = {
            li1: [1, 2, 3, 4, 5],
            li2: [{ name: "zlt"},{ name: "zcc" }]
        }
    }
    render() {
        var fun1 = this.data.li1.map(function (v, i) {

            return <li key={i}>{v}</li>
        });
        console.log(fun1)
        return (
            <div>
                <ul>{fun1}</ul>
                <hr />
                <ul>{this.data.li2.map((v, i) => {
                    return (<li key={i}>{v.name}</li>)
                })}</ul>

            </div>
        )
    }

}
export default Forlist;