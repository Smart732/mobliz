import './App.css';
import Navbar from './Component/Navbar';
import Header from './Component/Header';
import Sliser from './Component/Sliser';
import Heading from './Component/Heading';
import Card from './Component/Card';
import MobileCom from './Component/MobileCom';
import Circle from './Component/Circle';
import Bcard from './Component/Bcard';
import Businesscard from './Component/Businesscard';


function App() {
  return (
    <>
    <Header />
    <Navbar />
    <Sliser />
    <Heading />
    <div className='d-flex justify-content-evenly '>
    <Card />
    <Card />
    <Card />
    </div>
    <MobileCom />
    <div className="d-flex">
    <Circle  value={{percent:"99%",name:"Satisfied Clients"}}/>
    <Circle  value={{percent:"650",name:"Completed Project"}}/>
    <Circle  value={{percent:"84",name:"Works in Hand"}}/>
    <Circle  value={{percent:"7",name:"Year's Industry Experience"}}/>
    </div>
    <Bcard />
    <Businesscard />
    </>
  );
}

export default App;
