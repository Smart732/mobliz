import React from 'react'

function Navbar() {
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Mobrilz</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">About</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Servies</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Industry</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Outsourcing</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Contact</a>
                            </li>
                           
                            
                        </ul>
                        <form class="d-flex pr-5">
                            
                            <button class="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Navbar