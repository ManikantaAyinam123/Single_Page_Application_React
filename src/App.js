import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'

import Carousel from './components/Carousel';
import Cards from './components/Cards';
import Swiper from './components/Swiper';
import Footer from './components/Footer';
import Banner from './components/Banner';
function App() {
  const imagesData =[
    {
      imageUrl:"./assets/images/cards_1.jpg"
    },
    {
      imageUrl:"./assets/images/cards_2.jpg"
    },
    {
      imageUrl:"./assets/images/cards_3.jpg"
    },
    {
      imageUrl:"./assets/images/cards_4.jpg"
    }
  ];
  const swiperImageData =[
    {
      imageUrl:"./assets/images/Chino-Pants.jpg"
    },
    {
      imageUrl:"./assets/images/pyjamas.jpg"
    },
    {
      imageUrl:"./assets/images/full-sleeve.jpg"
    },
    {
      imageUrl:"./assets/images/Chino-Pants.jpg"
    },
    {
      imageUrl:"./assets/images/polos.jpg"
    }
  ];
  return (
    <div className="App">
    <Navbar/>
    <Carousel/>
    <Cards image={imagesData} />
    <Swiper image={swiperImageData}/>
    <Banner/>
    <Footer/>




    </div>
  );
}

export default App;
