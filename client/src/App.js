//import logo from './logo.svg';
import './App.css';
//import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css';
//don't use this statement bcz the statement not suitable for bundler
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar';
import Carousel from './components/Carousel';
//import Homescreen from '../screens/Homescreen';
import Timegra from './components/Timegra';
import Foods from'./components/Foods';
function App() {
  const images=[
    require('./assests/p1.jpeg'),
    require('./assests/p2.jpeg'),
    require('./assests/p4.jpg'),
  ]

  return (
    <div className="App">
      <Navbar/>
      <Carousel images={images}/>
      <Timegra/>
      <Foods/>
    </div>
  );
}

export default App;
