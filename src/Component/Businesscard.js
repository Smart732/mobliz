import React from 'react'
function Businesscard(value) {
  return (
    <>
    <div class="card w-100 h-auto pt-2" >
    <img className='mx-auto' src="https://mobrilz.com/assets/images/services/style5/1.png" alt="" srcset="" style={{width:"50px",height:"50px"}}/>
  <div class="card-body">
    <h5 class="card-title text-center">{value.value.title}</h5>
    <p class="card-text text-center">{value.value.data}</p>
    <div className="text-center">
    <a href="/" class="btn btn-primary text">Read More</a>
    </div>
  </div>
</div>
    
    </>
  )
}

export default Businesscard