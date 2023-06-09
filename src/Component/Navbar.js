// import React from 'react'

// function Navbar() {
//     return (
//         <>
//             <nav className="navbar navbar-expand-lg navbar-light bg-light">
//                 <div className="container-fluid">
//                     <a className="navbar-brand" href="/">Mobrilz</a>
//                     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                         <span className="navbar-toggler-icon"></span>
//                     </button>
//                     <div className="collapse navbar-collapse" id="navbarSupportedContent">
//                         <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
//                             <li className="nav-item">
//                                 <a className="nav-link active" aria-current="page" href="/">Home</a>
//                             </li>
//                             <li className="nav-item">
//                                 <a className="nav-link" href="/">About</a>
//                             </li>
//                             <li className="nav-item">
//                                 <a className="nav-link" href="/">Servies</a>
//                             </li>
//                             <li className="nav-item">
//                                 <a className="nav-link" href="/">Industry</a>
//                             </li>
//                             <li className="nav-item">
//                                 <a className="nav-link" href="/">Outsourcing</a>
//                             </li>
//                             <li className="nav-item">
//                                 <a className="nav-link" href="/">Contact</a>
//                             </li>


//                         </ul>
//                         <form className="d-flex pr-5">

//                             <button className="btn btn-outline-success" type="submit">Search</button>
//                         </form>
//                     </div>
//                 </div>
//             </nav>

//         </>
//     )
// }

// export default Navbar
import React from 'react'

function Navbar() {
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="/">Mobrilz</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav mx-auto">
                        <li class="nav-item active">
                            <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Servies</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Industry</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Outsourcing</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Contact</a>
                        </li>
                    </ul>
                    <form className="d-flex pr-5">

                        <button className="btn btn-outline-success" type="submit">Get a Quote</button>
                    </form>
                </div>
            </nav>
        </>
    )
}

export default Navbar