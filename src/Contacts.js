import React, { Component } from 'react';
import {Config} from './config';

class Contacts extends Component {

  constructor() {
    super();
    this.state = {
      list:[]
    }
  }

  componentDidMount(){
    let url = Config.apiUrl;
    fetch(url)
    fetch(url)
    .then(response => response.json())
    .then(({ contacts: list }) => this.setState({ list }))  
    .catch(err => console.error(err));
  }
  

  handleToggle = () => this.setState({open: !this.state.open});
  
  render(){
    
    let contacts = this.state.list.map((contact,index)=>{
      return (
        <div key={contact.name.toString()}>
          <div>{contact.name}</div>
          <div>{contact.phone_number}</div>
          <div>{contact.address}</div>
        </div>
      )
    })
    return(
      <h1>{contacts}</h1>
    )
  }
}


export default Contacts;
