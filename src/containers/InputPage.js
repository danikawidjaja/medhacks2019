import React from 'react';
import '../App.css';
import Logo from '../components/Logo';
import { Fab, TextField } from '@material-ui/core';
import SendIcon from "@material-ui/icons/Send";


class InputPage extends React.Component {
  constructor(props){
    super(props);
    this.state={
      reading:"",
      recommendation:null
    }
    this.submit = this.submit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  submit(event){
    event.preventDefault();
    console.log(new Date())
    this.setState({
      recommendation: {
        status: "your hematocrit is too low!",
        treatment:"take oxytocin"
      }
    })
  }
  handleChange(event){
    event.preventDefault()
    this.setState({
      [event.target.id]: event.target.value
    });
  }
  render(){
    return (
      <div className="container centered">
        <Logo link={true}/>
        <form onSubmit={this.submit}>
          {/* <label>Reading: </label>
          <input type='number' id="reading" value={this.state.reading} onChange={this.handleChange}/> */}
          <div>
            <TextField
                id="reading"
                label="Reading"
                type="number"
                value={this.state.reading}
                onChange={this.handleChange}
                margin="normal"
                variant="outlined"
                required
                style={{marginBottom:'1rem'}}
            />
          </div>
          <Fab className="gradient" type="submit" ><SendIcon style={{color:"white"}}/></Fab>
        </form>
        {this.state.recommendation && 
        <div>
          <p>{this.state.recommendation.status}</p>
          <p>{this.state.recommendation.treatment}</p>
        </div>}
      </div>
    );
  }
  
}

export default InputPage;
