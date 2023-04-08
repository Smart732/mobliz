import React from 'react'
function Sliser() {
    return (
        <>
            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <div className='d-flex justify-content-between p-5 ' style={{ backgroundColor: '#0096FF' }}>
                            <div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus laborum eligendi atque. Optio, aspernatur. Minus, repellendus velit laboriosam aperiam quisquam itaque quidem ex fugit fuga quasi. Expedita eligendi eveniet dolor?</p>
                                <button className='btn btn-info'>click</button>
                            </div>

                            <div><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSVieT1-jpGaBF414LY2HCRJt5aRseAW8g1_p03mxa-cCjf7ezvItffHjf-TIplTrOI8k&usqp=CAU" alt="" srcset="" /></div>

                        </div>
                    </div>
                    <div class="carousel-item">
                        <div className='d-flex justify-content-between p-5 ' style={{ backgroundColor: '#0096FF' }}>
                            <div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus laborum eligendi atque. Optio, aspernatur. Minus, repellendus velit laboriosam aperiam quisquam itaque quidem ex fugit fuga quasi. Expedita eligendi eveniet dolor?</p>
                                <button className='btn btn-info'>click</button>
                            </div>

                            <div><img src="data:image/jpeg;base64,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" alt="" srcset="" /></div>

                        </div>
                    </div>
                    <div class="carousel-item">
                        <div className='d-flex justify-content-between p-5 ' style={{ backgroundColor: '#0093FF' }}>
                            <div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus laborum eligendi atque. Optio, aspernatur. Minus, repellendus velit laboriosam aperiam quisquam itaque quidem ex fugit fuga quasi. Expedita eligendi eveniet dolor?</p>
                                <button className='btn btn-info'>click</button>
                            </div>

                            <div><img src="https://cdn.pixabay.com/photo/2015/12/04/14/05/code-1076536__340.jpg" alt="" srcset="" /></div>

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