import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Link } from "react-router-dom"; //路由


import Todolist from "./components/test/todolist"
import Home from "./components/Home"
import Style from "./components/Style"
import Img from "./components/Img"
import Forlist from "./components/for"
import Click from "./components/click"
import Sd from "./components/setState"
import Form from './components/form'
import Zujian from './components/component/componentFather'
import Ajax from './components/ajax'
import Life from './components/life'
import Luyou from './components/router/router'
import Routerson from "./components/router/routerSon"
import RouterGet from "./components/router/routerGet"
import RouterJs from "./components/router/routerjs"
import RouterQtFather from "./components/router/routerqt/routerQtFather"


// 组件名称必须以大写字母开头。
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      life: "父组件穿的msg",
      flag: false
    };
  }
  setFlag = () => {
    this.setState({
      flag: !this.state.flag,
    })

  }
  setTitle = () => {
    if (this.state.flag) {
      this.setState({
        life: "对"
      })
    } else {
      this.setState({
        life: "错"
      })
    }
  }

  render() {
    return (
      <Router>
        <div className="App">
          这是根元素
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/Style">Style</Link></li>
            <li><Link to="/Img">Img</Link></li>
            <li><Link to="/Forlist">Forlist</Link></li>
            <li><Link to="/Click">Click</Link></li>
            <li><Link to="/Sd">setStat</Link></li>
            <li><Link to="/Form">Form</Link></li>
            <li><Link to="/Todolist">Todolist</Link></li>
            <li><Link to="/Zujian">组件</Link></li>
            <li><Link to="/Luyou">路由参数</Link></li>
            <li><Link to="/RouterJs">js跳转路由</Link></li>
            <li><Link to="/RouterQtFather">路由嵌套</Link></li>
            
          </ul>
          <hr />
          <div>
            <button onClick={this.setFlag}>组件挂载状态改变</button>
            <br />
            <button onClick={this.setTitle}>改变父组件title</button>
            {
              this.state.flag ? <Life life={this.state.life} /> : ""
            }
            <hr />
          </div>
          <Route exact path="/" component={Home} />
          <Route path="/Style" component={Style} />
          <Route path="/Img" component={Img} />
          <Route path="/Forlist" component={Forlist} />
          <Route path="/Click" component={Click} />
          <Route path="/Sd" component={Sd} />
          <Route path="/Form" component={Form} />
          <Route path="/Ajax" component={Ajax} />
          <Route path="/Todolist" component={Todolist} />
          <Route path="/Zujian" component={Zujian} />
          <Route path="/Luyou" component={Luyou} />
          <Route path="/Routerson/:aid" component={Routerson} />
          <Route path="/RouterGet" component={RouterGet} />
          <Route path="/RouterJs" component={RouterJs} />
          <Route path="/RouterQtFather" component={RouterQtFather} />


        </div>
      </Router>
    );
  }
}

export default App;
