import React from 'react';
import './style.css';
const Card=(props)=>{
    return(
        <div className="cards">
            
         <div className="card">
            <div className="img">  
            <img src={props.imgsrc} alt=""></img>
            </div>
                    
            <div className="card-info">
                <h3 >{props.title}</h3>
                <h4 className="sname">{props.sname}</h4>
                
                <button className="btn">
                <a href={props.link} target="_blank">
                    Click here</a>
                </button>
            </div>
            

        </div>


        </div>
    )


}
export default Card;
