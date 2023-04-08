import React from 'react'

function Footer() {
    return (
        <>
            <footer class="container-fluid bg-info text-light p-4">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-6 col-md-3">
                            <h5>About Company</h5>
                            <ul class="list-unstyled">
                                <li>About Us</li>
                                <li>What We Do</li>
                                <li>Industry We Serve</li>
                                <li>Outsourcing</li>
                                <li>Blog</li>
                                <li>Portfolio</li>
                                <li>Make Payment</li>
                                <li>Refund Policy</li>
                                <li>Privacy Policy</li>
                                <li>Terms Conditions</li>
                                <li>Contact Us</li>
                                <li>Sitemap</li>

                            </ul>
                        </div>
                        <div class="col-sm-6 col-md-3">
                            <h5>Mobile Services</h5>

                            <ul class="list-unstyled">
                                <li>Android App Development</li>
                                <li>Android UX-UI App Development</li>
                                <li>Android Game Development</li>
                                <li>iPhone App Development</li>
                                <li>iPhone UX-UI App Development</li>
                                <li>iPhone Game Development</li>
                                <li>iPad App Development</li>
                                <li>iPad UX/UI App Development</li>
                                <li>Cross Platform App Development</li>
                                <li>React Native App Development</li>
                                <li>Kotlin App Development</li>
                                <li>Xamarin App Development</li>

                            </ul>
                        </div>
                        <div class="col-sm-6 col-md-3">
                            <h5>Web Services</h5>
                            <ul class="list-unstyled">
                                <li>Web Apps Development</li>
                                <li>PHP Development</li>
                                <li>JAVA Development</li>
                                <li>Angular JS Development</li>
                                <li>Node JS Development</li>
                                <li>React JS Development</li>
                                <li>Ruby On Rails Development</li>
                                <li>Python Development</li>
                                <li>Django Development</li>
                                <li>Framework Development</li>
                                <li>Laravel Development</li>
                                <li>zend Development</li>

                            </ul>
                        </div>
                        <div class="col-sm-6 col-md-3">
                            <h5>Contact Info</h5>
                            <ul class="list-unstyled">
                                <li><i class="fa-light fa-location-pin"></i> +91-8750047510</li>
                                <li><i class="fa-solid fa-phone" style={{ color: "#1d67e7" }}></i> sales@mobrilz.com</li>
                                <li><i class="fa-solid fa-phone" style={{ color: "#1554c1" }}></i>Opening Hours: 10:00 - 18:00</li>
                                <h2>Connect With Us</h2>
                                <li><i class="fa-brands fa-twitter fa-fade fa-2xl  mx-2" style={{ color: "#1f5129" }}></i> <i class="fa-brands fa-pinterest fa-fade fa-2xl mx-2" style={{ color: "#1f5129" }}></i> <i class="fa-brands fa-whatsapp fa-fade fa-2xl  mx-2" style={{ color: "#1f5129" }}></i><i class="fa-brands fa-linkedin fa-fade fa-2xl  mx-2" style={{ color: "#1f5129" }}></i><i class="fa-brands fa-instagram fa-fade fa-2xl  mx-2" style={{ color: "#1f5129" }}></i><i class="fa-brands fa-facebook fa-fade fa-2xl mt-4" style={{ color: "#1f5129" }}></i></li>
                                <p className='lead'>Join our mailing list to receive latest offers & news</p>
                                <li>

                                    <div class="input-group mb-3">
                                        <input type="text" class="form-control rounded-right" placeholder="Input text" aria-label="Input text" aria-describedby="input-icon" />
                                        <div class="input-group-append">
                                            <span class="input-group-text" id="input-icon">
                                                <i class="fas fa-search"></i>
                                            </span>
                                        </div>
                                    </div>


                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer >


        </>
    )
}

export default Footer