import React from "react";
import avatar from "../images/avatar.png"
export default function Header(){
    return(
        <div className="header">
            <img src={avatar} alt="avatar" className="avatar"></img>
        </div>
    )
}