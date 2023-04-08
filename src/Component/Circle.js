import React from 'react'
import './circle.css'
function Circle(value) {
    return (
        <><div className="full container">
            <div className="main ">
                <div className="outer">
                    <div className="iner">
                        <div id="number">{value.value.percent}</div>
                    </div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                    <defs>
                        <linearGradient id="GradientColor">
                            <stop offset="0%" stopColor="#e91e63" />
                            <stop offset="100%" stopColor="#673ab7" />
                        </linearGradient>
                    </defs>
                    <circle cx="80" cy="80" r="70" stroke-linecap="round" />
                </svg>

            </div >
            <div className="heading">
                <h2>{value.value.name}</h2>
            </div>
            </div>
        </>
    )
}

export default Circle