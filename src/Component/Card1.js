import React from 'react'
import "./circle.css"
function Card1(value) {
    return (
        <>
        <div class="card m-2" >
            
                <h2 className='title  p-3'>{value.value.num}</h2>
                <h5 class="card-title c-subtitle pl-3">{value.value.title}</h5>

                <p class="card-text p-3">{value.value.dis}</p>
                
               <div id="e"></div>
            
        </div></>
    )
}

export default Card1