import React from "react";
import { Fab, TextField } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";

class SignUpForm extends React.Component{
    constructor(props){
        super(props);
        this.state={
            name:"",
        }
        this.submit = this.submit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    submit(event){
        event.preventDefault();
        if (this.state.name === "Danika Widjaja"){
            this.props.history.push("/input");   
        }
        else{
            this.props.history.push("/signup")
        }
         
    }
    handleChange(event){
        event.preventDefault()
        this.setState({
            [event.target.id]: event.target.value
        });
    }
    isValid(){
        return this.state.name !== ""
    }
    render(){
        return(
            <form onSubmit={this.submit}>
                <div>
                    <TextField
                        id="name"
                        label="Name"
                        value={this.state.name}
                        onChange={this.handleChange}
                        margin="normal"
                        variant="outlined"
                        required
                        style={{marginBottom:'1rem'}}
                    />
                </div>
                <Fab className="gradient" type="submit" disabled={!this.isValid()} ><SendIcon style={{color:"white"}}/></Fab>
            </form>
        )
    }
}

export default SignUpForm;