import React from "react";

function Logo(props){
    if(props.link){
        return(
            <a href="/">
                <div className="gradient logo"/>
            </a>
        )
    }
    else{
        return(
            <div className="gradient logo"/>
        )
    }
}

export default Logo;