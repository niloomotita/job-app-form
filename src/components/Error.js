import React from 'react';
import {Link} from 'react-router-dom';
import "../styles/App.css";
import "../styles/Error.css";
function Error(props){
    return(
        <div className="error-msg-box">
            <h1>404 Page Not Found!</h1>
            <Link to= '/home' className="error-msg">Visit the Home Page</Link>
            <img src="https://media.giphy.com/media/gCL5fOMAVijWE/giphy.gif" alt=""/>
        </div>
        
    )
}

export default Error;