import React from "react"
import "./Essai.css"
import PropTypes from "prop-types";

//function Contact({name, avatar, online}) {
//    return ( 
//        <div className="Contact">
//            
//            <img src={avatar} alt={name} className="avatar" />
//            
//            <div> {name} </div>
//
//            {online ? (
//                <div className="status">
//                    <i className="status-online" />
//                    <p className="status-text">On line</p>
//                </div>
//            ) : (
//                    <div className="status">
//                        <i className="status-offline" />
//                        <p className="status-text">Offline</p>
//                    </div>
//                )}
//
//        </div>
//            )
//}

const Contact = props => (
    <div className="Contact">
    <img className="avatar" src= {props.avatar}  alt=""/>
        <div className="status">
            <h4 className="name">{props.name}</h4>
            <p className="status">
                <span className={props.online ? 'status-online' 
                    : 'status-offline'}>
                </span>
                {props.online === true ? 'online' : 'offline'}
            </p>
        </div> 
    </div>
    )

Contact.propTypes = {
    avatar: PropTypes.string.isRequired,
    name  : PropTypes.string.isRequired,
    online: PropTypes.bool.isRequired
}

export default Contact

