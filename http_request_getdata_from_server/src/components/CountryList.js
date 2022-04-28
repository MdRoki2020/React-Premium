import React, { Component } from 'react'
import axios from 'axios';

export default class CountryList extends Component {
    componentDidMount(){
        axios.get('http://localhost/react%20accessories/view.php')
        .then(response=>{
            console.log(response.data);
        })
        .catch(error=>{
            console.log(error);
        })
    }
  render() {
    return (
      <div>CountryList</div>
    )
  }
}
