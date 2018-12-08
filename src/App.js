import React, { Component } from 'react';
import Todolist from "./components/test/todolist"
import Home from "./components/Home"
import Style from "./components/Style"
import Img from "./components/Img"
import Forlist from "./components/for"
import Click from "./components/click"
import Sd from "./components/setState"
import Form from './components/form'
// 组件名称必须以大写字母开头。
class App extends Component {
  render() {
    return (
      <div className="App">
        这是根元素
        <hr/>
        <Todolist/>
        {/* <hr/>
        <Home/>
        <hr/> 
        <Style/>
        <hr/>
        <Img nam="153"/>
        <hr/>
        <Forlist/>
        <hr/>
        <Click/>
        <hr/>
        <Sd/>
        <hr/>
        <Form/> */}

      </div>
    );
  }
}

export default App;
