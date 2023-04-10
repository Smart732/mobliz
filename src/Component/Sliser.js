import React from 'react'
function Sliser() {
    return (
        <>
            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <div className='d-flex  flex-lg-row flex-wrap flex-lg-nowrap justify-content-between p-5 ' style={{ backgroundColor: '#0096FF' }}>
                            <div> 
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus laborum eligendi atque. Optio, aspernatur. Minus, repellendus velit laboriosam aperiam quisquam itaque quidem ex fugit fuga quasi. Expedita eligendi eveniet dolor?</p>
                                <button className='btn btn-info'>click</button>
                            </div>

                            <div className='m-sm-5'>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSVieT1-jpGaBF414LY2HCRJt5aRseAW8g1_p03mxa-cCjf7ezvItffHjf-TIplTrOI8k&usqp=CAU" alt="" srcset="" /></div>

                        </div>
                    </div>
                    <div class="carousel-item">
                        <div className='d-flex justify-content-between p-5 ' style={{ backgroundColor: '#0096FF' }}>
                            <div>
                                <p> adipisicing elit. Delectus laborum eligendi atque. Optio, aspernatur. Minus, repellendus velit laboriosam aperiam quisquam itaque quidem ex fugit fuga quasi. Expedita eligendi eveniet dolor?</p>
                                <button className='btn btn-info'>click</button>
                            </div>

                            <div><img src="https://www.aihr.com/wp-content/uploads/Learning-development-jobs.jpg" alt="" srcset="" /></div>

                        </div>
                    </div>
                    <div class="carousel-item">
                        <div className='d-flex justify-content-between p-5 ' style={{ backgroundColor: '#0093FF' }}>
                            <div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus laborum eligendi atque. Optio, aspernatur. Minus, repellendus velit laboriosam aperiam quisquam itaque quidem ex fugit fuga quasi. Expedita eligendi eveniet dolor?</p>
                                <button className='btn btn-info'>click</button>
                            </div>

                            <div className=''>
                                <img src="https://cdn.pixabay.com/photo/2015/12/04/14/05/code-1076536__340.jpg" alt="" srcset="" />
                                </div>

                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden"><i class="fa-sharp fa-solid fa-angle-left"></i></span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden"><i class="fa-sharp fa-solid fa-angle-right"></i></span>
                </button>
            </div>

            {/* <div className='d-flex justify-content-between p-5 ' style={{ backgroundColor: '#0096FF' }}>
                <div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus laborum eligendi atque. Optio, aspernatur. Minus, repellendus velit laboriosam aperiam quisquam itaque quidem ex fugit fuga quasi. Expedita eligendi eveniet dolor?</p>
                    <button className='btn btn-info'>click</button>
                </div>

                <div><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSVieT1-jpGaBF414LY2HCRJt5aRseAW8g1_p03mxa-cCjf7ezvItffHjf-TIplTrOI8k&usqp=CAU" alt="" srcset="" /></div>

            </div> */}

        </>
    )
}

export default Sliser