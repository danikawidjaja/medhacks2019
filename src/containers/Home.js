import React from "react";
import LoginForm from "../components/LoginForm";
import Logo from "../components/Logo";

class Home extends React.Component{
    constructor(props){
        super(props);
        this.navigate = this.navigate.bind(this);
    }
    navigate(event){
        this.props.history.push("/"+ event.target.id)
    }
    render(){
        return(
            <div className="container centered">
                <div className="section">
                    <Logo/>
                    <h1>Hemolite</h1>
                </div>
                <div className="section">
                    <LoginForm history={this.props.history}/>
                </div>
            </div>
        )
    }
}

export default Home;