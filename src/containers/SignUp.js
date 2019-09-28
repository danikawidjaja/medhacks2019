import React from "react";
import SignUpForm from "../components/SignUpForm";

class SignUp extends React.Component{
    render(){
        return(
            <div>
                <p>We could not find this patient's records! Please sign up below:</p>
                <SignUpForm history={this.props.history}/>
            </div>
        )
    }
}

export default SignUp;