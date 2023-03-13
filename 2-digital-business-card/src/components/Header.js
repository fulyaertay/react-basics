import React from "react";
import avatar from "../images/avatar.png"

export default function Header(){
    return(
        <div className="header">
            <img src={avatar} alt="avatar" className="avatar"></img>
            <h3 className="name">Fulya Ertay</h3>
            <p className="job">Frontend Developer</p>
            <p className="website"><a href="https://fulyaertay.netlify.app/">https://fulyaertay.netlify.app/</a></p>
            <div className="CTA">
                <button type="submit" className="Email-submit" > <i class="fa-solid fa-envelope"></i><a href="mailto:fulya.ertay@gmail.com"> Email</a>
               
                </button>    
                <button type="submit" className="Linkedin-submit"> <i class="fa-brands fa-linkedin"></i> <a href="https://www.linkedin.com/in/fulyaertay/">LinkedIn </a></button>
            </div>
        </div>
    )
}