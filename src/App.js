import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './Component/Navbar';
import Header from './Component/Header';
import Sliser from './Component/Sliser';
import Heading from './Component/Heading';
import Card from './Component/Card';
import MobileCom from './Component/MobileCom';
import Circle from './Component/Circle';
import Bcard from './Component/Bcard';
import Businesscard from './Component/Businesscard';
import TECHNOLOGY from './Component/TECHNOLOGY';
import Nestheading from './Component/Nestheading';
import Letstalk from './Component/Letstalk';
import Image from './Component/Image';
import Footer from './Component/Footer';


function App() {
  return (
    <>
      <Header />
      <Navbar />
      <Sliser />
      <Heading />

      <footer class="bg-white ">
        <div class="container">
          <div class="row ">
            <div class="col-sm-12 col-md-4 ">
              <Card />
            </div>
            <div class="col-sm-12 col-md-4">
              <Card />
            </div>
            <div class="col-sm-12 col-md-4">
              <Card />
            </div>
          </div>
        </div>
      </footer>

      <MobileCom />

      <footer class="bg-white text-white">
        <div class="container">
          <div class="row">
            <div class="col-sm-12 col-md-3 ">
              <Circle value={{ percent: "99%", name: "Satisfied Clients" }} />
            </div>
            <div class="col-sm-12 col-md-3">
              <Circle value={{ percent: "650", name: "Completed Project" }} />
            </div>
            <div class="col-sm-12 col-md-3">
              <Circle value={{ percent: "84", name: "Works in Hand" }} />
            </div>
            <div class="col-sm-12 col-md-3">
              <Circle value={{ percent: "7+", name: "Year's Industry Experience" }} />
            </div>
          </div>
        </div>
      </footer>

      <Bcard />

      <footer class="bg-white ">
        <div class="container mt-3">
          <div class="row ">
            <div class="col-sm-12 col-md-4">
              <Businesscard value={{ data: "Your technical partner providing high-end niche Android app development services with unmatchable expertise.", title: "Mobile App" }} />
              <Businesscard value={{ data: "A website with seamless flow, visual delights, and enhanced and immersive user experience.", title: "Web Development" }} />
            </div>
            <div class="col-sm-12 col-md-4">
              <Businesscard value={{ data: "Your technical partner providing high-end niche Android app development services with unmatchable expertise.", title: "Mobile App" }} />
              <Businesscard value={{ data: "A website with seamless flow, visual delights, and enhanced and immersive user experience.", title: "Web Development" }} />
            </div>
            <div class="col-sm-12 col-md-4">
              <Businesscard value={{ data: "Your technical partner providing high-end niche Android app development services with unmatchable expertise.", title: "Mobile App" }} />
              <Businesscard value={{ data: "A website with seamless flow, visual delights, and enhanced and immersive user experience.", title: "Web Development" }} />
            </div>
          </div>
        </div>
      </footer>
      <TECHNOLOGY />
<Nestheading />
<Letstalk />
<Image />
<Footer />
    </>
  );
}

export default App;
