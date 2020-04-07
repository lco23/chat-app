import React from "react"
import "./Essai.css"
import PropTypes from "prop-types";


class Contact extends React.Component { 
    constructor(props) {
        super(props)
        this.state = {
            online : props.online
        }
    }

render () {
  return ( 
    <div className="Contact">
    <img className="avatar" src= {this.props.avatar}  alt=""/>
        <div className="status">
            <h4 className="name">{this.props.name}</h4>
            <p className="status">
                <span 
                    className = {this.state.online ? "status-online" : "status-offline"}
                    onClick ={event => { 
                    const newLine = !this.state.online
                    this.setState({online: newLine})
                    }}
                ></span>
                    {this.props.online === true ? 'online' : 'offline'}

            </p>
        </div> 
    </div>
    )}
}

Contact.propTypes = {
    avatar: PropTypes.string.isRequired,
    name  : PropTypes.string.isRequired,
    online: PropTypes.bool.isRequired
}

export default Contact

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