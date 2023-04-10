import React from 'react'
import "./Style.css"
function Header() {
    return (
        <>
            <div className='d-flex flex-lg-row flex-sm-col flex-wrap justify-content-lg-between bg-info'>
                <div className='px-5 text-sm-center mx-3 p-3'>
                    <i class="fa-sharp fa-solid fa-envelope fa-sm"></i>
                    Sales@mobrilz.com |
                    <i class="fa-sharp fa-solid fa-phone"></i>
                    +91-8750047510 </div>
                <div className='px-5 text-sm-center'>

                    <div className='p-3'>
                    <i class="fa-duotone fa-timer"></i>
                    10:00 - 18:00<i class="fa-brands fa-whatsapp  mx-2"></i>
                    <i class="fa-brands fa-facebook mx-2"></i>
                    <i class="fa-brands fa-twitter mx-2"></i>
                    <i class="fa-brands fa-pinterest mx-2"></i>
                    <i class="fa-brands fa-instagram mx-2"></i>
                    <i class="fa-brands fa-linkedin mx-2"></i>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header