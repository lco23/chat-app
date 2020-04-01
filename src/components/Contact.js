import React from "react"
import "./Essai.css"

function Contact() { 
return (
    <div className = "Contact">
    <img className="avatar" src="https://randomuser.me/api/portraits/men/74.jpg" alt ="Bob" />
        <div>
            <div className = "name"> Name : Bob Dyvan</div>
            <div className = "status">
                <i className = "status-online"/>
                <span className = "status-text">online</span>
            </div>
        </div>      
        
    </div>
)}

export default Contact