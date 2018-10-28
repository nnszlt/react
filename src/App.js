import React, { Component } from 'react';
import Home from "./components/Home"
import Style from "./components/Style"
import Img from "./components/Img"
import Forlist from "./components/for"
import Click from "./components/click"
import Form from './components/form'

class App extends Component {
  render() {
    return (
      <div className="App">
        这是根元素
        <hr/>
        <Home/>
        <hr/> 
        <Style/>
        <hr/>
        <Img/>
        <hr/>
        <Forlist/>
        <hr/>
        <Click/>
        <hr/>
        <Form/>

      </div>
    );
  }
}

export default App;
