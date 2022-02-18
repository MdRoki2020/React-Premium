import React, { Component } from 'react';
import {Container,Row,Form,FormGroup,FormLabel,FormControl,Button} from 'react-bootstrap';

export default class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       name: "",
       location: ""
    };
  }

  handleChange=(evt)=>{
    this.setState({
      [evt.target.name]:evt.target.value
    })
  }

  addRecord=()=>{
    var myHeaders=new Headers();
    myHeaders.append("Content-Type","application/json");

    var body=JSON.stringify({name:this.state.name,location:this.state.location});
    fetch('http://location:8000/api/create',{
      method:'POST',
      headers:  myHeaders,
      body:body,
    })
    .then((response)=>response.json())
    .then((result)=>{
      console.log(result);
    });
  }
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Form>
              <FormGroup>
                <FormLabel>Enter Your Name:</FormLabel>
                <FormControl type='text' name='name' placeholder='Enter Your Name' onChange={this.handleChange} value={this.state.name}></FormControl>
              </FormGroup>
              <FormGroup>
                <FormLabel>Enter Your Location:</FormLabel>
                <FormControl type='text' name='location' placeholder='Enter Your Location' onChange={this.handleChange} value={this.state.location}></FormControl>
              </FormGroup>
              <Button className='my-3' onClick={this.addRecord}>Save</Button>
            </Form>
          </Row>
        </Container>
      </div>
    )
  }
}
