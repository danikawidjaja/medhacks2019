import React from "react";
import { TextField, FormLabel, Radio, FormControl, Fab } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";

class SignUpForm extends React.Component{
    constructor(props){
        super(props);
        this.state={
            name:"",
            reading:  null,
            hemoglobin: null,
            anemic:null,
        }
        this.submit = this.submit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    submit(event){
        event.preventDefault();
        console.log(this.state)
        //api submit
        this.props.history.push("/input");    
    }
    handleChange(event){
        event.preventDefault()
        this.setState({
            [event.target.id]: event.target.value
        });
        console.log(event.target.value)
    }
    handleChangeAnemic(boolean){
        this.setState({
            anemic: boolean,
        });
    }
    isValid(){
        return this.state.name !== "" && this.state.reading !== null && this.state.hemoglobin !== null && this.state.anemic !== null
    }
    render(){
        return(
            <form onSubmit={this.submit}>
                <div className="section">
                    <h3>Personal Information</h3>
                    <div>
                        <TextField
                            id="name"
                            label="Name"
                            value={this.state.name}
                            onChange={this.handleChange}
                            margin="normal"
                            variant="outlined"
                            required
                        />
                    </div>
                    <div>
                        <FormControl className="MuiFormControl-marginNormal">
                            <FormLabel>Anemic?</FormLabel>
                            <div className="row">
                                <div >
                                    <Radio
                                        value= {true}
                                        checked={this.state.anemic === true}
                                        onChange={() =>this.handleChangeAnemic(true)} 
                                    />
                                    <label>Yes</label>
                                </div>
                                <div className='col'>
                                    <Radio
                                        value= {false}
                                        checked={this.state.anemic === false}
                                        onChange={() => this.handleChangeAnemic(false)} 
                                    />
                                    <label>No</label>
                                </div>
                            </div>
                        </FormControl>
                    </div>
                </div>

                <div className="section">
                    <h3>Pre-Operative Information</h3>
                    <div>
                        <TextField
                            id="reading"
                            label="Device Reading"
                            type="number"
                            value={this.state.reading}
                            onChange={this.handleChange}
                            margin="normal"
                            variant="outlined"
                            required
                        />
                    </div>
                    <div>
                        <TextField
                            id="hemoglobin"
                            label="Hemoglobin"
                            type="number"
                            value={this.state.hemoglobin}
                            onChange={this.handleChange}
                            margin="normal"
                            variant="outlined"
                            required
                        />
                    </div>
                </div>
                <Fab className="gradient" type="submit" disabled={!this.isValid()} ><SendIcon style={{color:"white"}}/></Fab>
            </form>
        )
    }
}

export default SignUpForm;