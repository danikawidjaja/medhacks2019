import React from "react";
import SignUpForm from "../components/SignUpForm";

class SignUp extends React.Component{
    render(){
        return(
            <div>
                <SignUpForm history={this.props.history}/>
            </div>
        )
    }
}

export default SignUp;