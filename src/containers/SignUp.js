import React from "react";
import SignUpForm from "../components/SignUpForm";
import Logo from "../components/Logo";

class SignUp extends React.Component{
    render(){
        return(
            <div className="container" style={{paddingTop:'1rem', paddingBottom:'1rem'}}>
                <Logo/>
                <div>
                    <p>We could not find this patient's records!<br/>Please sign up below:</p>
                    <SignUpForm history={this.props.history}/>
                </div>
            </div>
        )
    }
}

export default SignUp;