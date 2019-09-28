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
        good: false,
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
        <Logo/>
        <form onSubmit={this.submit}>
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
        <Recommendation recommendation={this.state.recommendation}/>}
      </div>
    );
  }
}

class Recommendation extends React.Component{
  render(){
    return(
      <div className={this.props.recommendation.good ? "recommendation good" : "recommendation bad"}>
        <p>{this.props.recommendation.status}</p>
        <p>{this.props.recommendation.treatment}</p>
      </div>
    )
  }
}

export default InputPage;
