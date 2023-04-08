import React from 'react'
import "./circle.css"
import Card1 from './Card1'
function Nestheading() {
    return (
        <>
           <div class="container">
                <div class="row">
                    <div class="col-md-6">
                        <div className="n-title">HOW WE WORK</div>
                        <h2>How Mobrilz Process assist your business</h2>
                        <div className="n-subtitle">Mobrilz brings on board an array of technical capacities with a team of talented and experienced professionals well-versed in end-to-end project solutions. Our approach is human-centric and customer-focused, employing agile project methodology.</div>
                        <button className='btn btn-info m-2 text-white '>View more</button>
                    </div>
                    <div class="col-md-6">
                        <div class="row">
                            <div class="col-md-6">
                                <Card1 value={{dis:"The first step is ideation that leads to scope definition and preparing an action plan.",title:"Discussion & Planning" ,num:"01"}} />
                                <Card1 value={{dis:"Prototyping, coding, and developing followed by rigorous testing for quality control and assurance.",title:"Development &Testing" ,num:"03"}} />
                            </div>
                            <div class="col-md-6">
                                
                                <Card1 value={{dis:"Crucial step of laying out designs for aesthetic and visual appeal by project designers.",title:"Design & HTML" ,num:"02"}} />
                                <Card1 value={{dis:"Release, installation of solution, and deployment of updates and patches with continued performance monitoring.",title:"Install & Deployment" ,num:"04"}}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </>
    )
}

export default Nestheading