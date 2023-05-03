import React from 'react'
import './Circles.css'

const Circles = (props) => {
    return ( 
       <div className="Circles">
        {props.circleNumber.map((circle, idx) =>
        <div 
        key={idx}
        className={props.circleIdx === idx ? 'selected' : ''}
        onClick={() => props.handleSelect(idx)}>
            {idx+1}
        </div>)}
       </div>
     );
}
 
export default Circles;