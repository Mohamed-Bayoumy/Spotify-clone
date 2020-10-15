import React from 'react';
import "./login.scss";
import { loginUrl} from './spotify';
function login() {
    return (
       
        <div className="logo">
            <img className="logo__image" src="https://yungcitizen.com/wp-content/uploads/2018/09/spotify-logo-horizontal-white.png" alt="spotify Logo"></img>
        
        <a href={loginUrl} className="logo__btn">Login with spotify</a>
        </div>
    )


}

export default login
