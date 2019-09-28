import React from "react";

class SignUpForm extends React.Component{
    constructor(props){
        super(props);
        this.state={
            name:"",
            reading:  null,
            hematocrit: null,
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
    }
    handleChangeAnemic(boolean){
        this.setState({
            anemic: boolean,
        });
    }
    isValid(){
        return this.state.name !== "" && this.state.reading !== null && this.state.hematocrit !== null && this.state.anemic !== null
    }
    render(){
        return(
            <form onSubmit={this.submit}>
                <div>
                    <h3>Personal Information</h3>
                    <div>
                        <label>Name*</label>
                        <input type='text' id="name" value={this.state.name} onChange={this.handleChange}/>
                    </div>
                    <div>
                        <label>Anemic?</label>
                        <div>
                            <input
                                type='radio'
                                value= {true}
                                checked={this.state.anemic === true}
                                onChange={() =>this.handleChangeAnemic(true)} 
                            />
                            <label>Yes</label>
                        </div>
                        <div>
                            <input
                                type='radio'
                                value= {false}
                                checked={this.state.anemic === false}
                                onChange={() => this.handleChangeAnemic(false)} 
                            />
                            <label>No</label>
                        </div>
                    </div>
                </div>

                <div>
                    <h3>Pre-Operative Information</h3>
                    <div>
                        <label>Device Reading*</label>
                        <input type='number' id="reading" value={this.state.reading} onChange={this.handleChange}/>
                    </div>
                    <div>
                        <label>Hematocrit*</label>
                        <input type='number' id="hematocrit" value={this.state.hematocrit} onChange={this.handleChange}/>
                    </div>
                </div>

                <button type="submit" disabled={!this.isValid()}>Submit</button>
            </form>
        )
    }
}

export default SignUpForm;