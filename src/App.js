import React, { Component } from 'react';
import './App.css';
import Header from './components/header.js';
import Content from './components/content.js';
import axios from "axios";


class App extends Component {

  constructor(props) {
    super(props);
    
  }
  state = {items:""}

  componentDidMount = () => {

    axios.get("https://panjs.com/ywc18.json").then(res => {
      console.log("res data :", res.data);
      {this.setState({
        items: res.data
      })}
    })
}

  render() {
    console.log("items are : ",this.state.items)
    return (
      <div>
        <Header items={this.state.items} />
        <h6 style={{padding:'1%'}}><b style={{color: "#000000"}}>ผลการค้นหา ร้านอาหารและเครื่องดื่ม ทั้งหมด</b></h6>
        <Content items={this.state.items} />
        
        
      </div>
    )
  }

}

export default App;
