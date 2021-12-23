import React from "react";
import './style.css';


export default function Top() {
    return (
       <div className="counters">
           <div className="left-counter">
            <img className="dislike" src="/dislike.png" alt="dislike" />
           
           </div>
           <div className="right-counter">
          
           <img className="like" src="/like.png" alt="like" />
           </div>

       </div> 
    )
}