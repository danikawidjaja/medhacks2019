import React from 'react';
import '../App.css';

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
      <div className="App">
        <form onSubmit={this.submit}>
          <label>Reading: </label>
          <input type='number' id="reading" value={this.state.reading} onChange={this.handleChange}/>
          <button type="submit">Submit</button>
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
