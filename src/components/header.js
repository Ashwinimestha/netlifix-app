import React from 'react';
import logo from '../images/mainscreen.jpg';
import Vinu from '../images/movie4.jpg';

const Header=()=>{
    return(
        <div className="main-screen">
            <div className="nav">
                <h1 CLASS="logo">NETLIFIX</h1>
                <div class="nav-btn">
                    <button className="english">English</button>
                    <button class="sign">Sign in</button>
                </div>

            </div>
            
            <div class="content">
                <h1 className="tv">Unlimited movies, TV <br/>
                shows and more.</h1>
                <h3 className="watch">Watch anywhere. Cancel anytime.</h3>
                <p>Ready to watch?Enter your email to create
                    or restart your membership.
                </p>
                
                <input type="text" placeholder="Email address" className="email"></input>
                <button className="get-btn">Get Started</button>
           
            </div>
            
               

        </div>
    )

}
export default Header;