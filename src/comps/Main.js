import React, {useState} from "react";
import './style.css';
import { SliderData } from "./SilderData";
import {FaAngellist, FaAngry} from 'react-icons/fa'



const Main = ({slides}) => {
const [current, setCurrent] = useState(0)
const [count, setCount] = useState(0)
const [goodCount, setGoodCount] = useState(0)
const length = slides.length;

if(!Array.isArray(slides) || slides.length <= 0) {
    return null
}

const badSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
    setCount(count + 1);
}

const goodSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
    setGoodCount(goodCount + 1);
}

console.log(current)


    return (
        <>  
        <div className="numbers">
             <h1>{count}</h1>
            <h1>{goodCount}</h1>
         </div> 
        <div className="slider">
           {SliderData.map((slide,index) =>{
               return (
              
                 
                   <div className={index === current ? 'slide active' : 'slide'} key={index}>
                       {index === current && ( <div>
                        <img className="album" src={slide.image} alt="album" />
                   <h3>{slide.title}</h3>
                   </div>)}
                  
                   
                   
                   </div>
                   
               )
           })}
           <div className="icons">
           <FaAngry className='bad' onClick={badSlide}/>
            <FaAngellist className='good' onClick={goodSlide} />

           </div>
                   
        </div>

        </>
    )
}

export default Main