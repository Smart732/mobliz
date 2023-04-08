import React from 'react'
import "./Style.css"
function Header() {
    return (
        <>
            <div className='d-flex justify-content-between bg-info'>
                <div className='px-5'><i class="fa-sharp fa-solid fa-envelope fa-sm"></i>Sales@mobrilz.com | <i class="fa-sharp fa-solid fa-phone"></i>+91-8750047510 </div>
                <div className='px-5'><div className='px-2'>
                    <i class="fa-duotone fa-timer "></i>10:00 - 18:00<i class="fa-brands fa-whatsapp"></i><i class="fa-brands fa-facebook"></i><i class="fa-brands fa-twitter"></i><i class="fa-brands fa-pinterest"></i><i class="fa-brands fa-instagram"></i><i class="fa-brands fa-linkedin"></i>
                </div></div>
            </div>
        </>
    )
}

export default Header