// Home.jsx

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons'; 
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from './img/ExampleCarouselImage';

const myBG = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
};

const titleStyle = {
  fontSize: '4rem',
  lineHeight: '1',
  textShadow: '2px 2px black',
  color: 'white',
};

const buttonStyle = {
  cursor: 'pointer',
  margin: '10px',
};

const Home = () => {
  return (
    <div style={myBG}>
      <h1 style={titleStyle}>PT Sarana Teknik</h1>
      <div className="container">
        <div className="hero-text text-center">
          <a href="#contact" className="btn btn-primary mt-3" data-aos="fade-up" data-aos-delay="100">
            Kontak Kami Jika Ada Pertanyaan!
          </a>
          <strong className="d-block py-3 pl-5 text-white" data-aos="fade-up" data-aos-delay="200">
            <FontAwesomeIcon icon={faPhone} className="mr-2" />
            082124429565
          </strong>
        </div>
      </div>
      <Carousel>
        <Carousel.Item interval={1000}>
          <ExampleCarouselImage 
            src="https://cdn.discordapp.com/attachments/860383416872337418/1235492937333211238/newjeans-bubble-gum-kpop-members-hd-wallpaper-uhdpaper.png?ex=663491f6&is=66334076&hm=a1185a94b66d1345e4d1428e7b936a5fbd13a66c7381638b60c5348acf520247&" 
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <ExampleCarouselImage 
            src="https://cdn.discordapp.com/attachments/860383416872337418/1235572099482124399/newjeans-how-sweet-members-minji-danielle-hyein-haerin-hanni-hd-wallpaper-uhdpaper.png?ex=6634dbb0&is=66338a30&hm=7a218a0145c7aba1bdcaf81f8fba18324441eb19da5c48d69f3798f0ce6c66e6&" 
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <ExampleCarouselImage 
            src="https://cdn.discordapp.com/attachments/860383416872337418/1235572172215550044/newjeans-bubble-gum-members-hd-wallpaper-uhdpaper.png?ex=6634dbc1&is=66338a41&hm=4c8c01e8f43a21366a42b43b5872fa5a4c62055524581f8168757d797b7313d5&" 
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Home;
