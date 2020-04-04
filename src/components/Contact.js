import React from "react"
import "./Essai.css"
import PropTypes from "prop-types";

function Contact({name, avatar, online}) {
    return ( 
        <div className="Contact">
            
            <img src={avatar} alt={name} className="avatar" />
            <div>
            <div> {name} </div>

            {online ? (
                <div className="status">
                    <i className="status-online" />
                    <p className="status-text">On line</p>
                </div>
            ) : (
                    <div className="status">
                        <i className="status-offline" />
                        <p className="status-text">Offline</p>
                    </div>
                )}
            </div>

        </div>
            )
}

Contact.propTypes = {
    avatar : PropTypes.string.isRequired,
    name : PropTypes.string.isRequired,
    online : PropTypes.bool.isRequired
}

export default Contact