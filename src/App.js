import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Link } from "react-router-dom"; //路由

import router from "./router/router"


// 组件名称必须以大写字母开头。
class App extends Component {
  constructor(props) {
    super(props);

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
            <li><Link to="/life">生命周期</Link></li>
            <li><Link to="/Zujian">组件</Link></li>
            <li><Link to="/Luyou">路由参数</Link></li>
            <li><Link to="/RouterJs">js跳转路由</Link></li>
            <li><Link to="/RouterQtFather">路由嵌套</Link></li>
          </ul>
          <hr />

          {
            router.map((v, k) => {

              if (v.exact) {
                return <Route key={k} exact path={v.path}
                  render={props => (
                    <v.component {...props} routes={v.routes} />
                  )}
                />
              } else {
                return <Route key={k} path={v.path}
                  render={props => (
                    <v.component {...props} routes={v.routes} />
                  )}
                />
              }

            })
          }


        </div>
      </Router>
    );
  }
}

export default App;
