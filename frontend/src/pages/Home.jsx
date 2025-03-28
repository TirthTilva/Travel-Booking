import React from 'react'
import '../styles/home.css'
import {Container,Row,Col} from 'reactstrap';
import heroImg01 from '../assets/images/hero-img01.jpg';
import heroImg02 from '../assets/images/hero-img02.jpg';
import heroVideo from '../assets/images/hero-video.mp4';
import Subtitle from './../shared/Subtitle'
import worldImg from '../assets/images/world.png'
import SearchBar from '../shared/SearchBar';
const Home = () => {
  return (
    <>
    <section>
      <Container>
        <Row>
          <Col lg='6'>
          <div className="hero__content">
            <div className="hero__subtitle d-flex align-items-center">
              <Subtitle subtitle={'Know Before You Go'}/>
              <img src ={worldImg} alt="Img"/>
            </div>
            <h1> Traveling Open door to creating <span className="highlights">Memories</span></h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex quidem iusto, nesciunt labore expedita inventore rem quos, aliquam consequuntur iste sit debitis deserunt! Illum architecto consectetur, nulla iste atque temporibus?</p>
          </div>
          </Col>
         <Col lg='2'>
         <div className="hero__img-box">
          <img src={heroImg01} alt='img'/>
         </div>
         </Col>
         <Col lg='2'>
         <div className="hero__img-box  mt-4">
          <video src={heroVideo} controls/>
         </div>
         </Col>

         <Col lg='2'>
         <div className="hero__img-box mt-5" >
          <img src={heroImg02} alt='img'/>
         </div>
         </Col>
         <SearchBar/>
        </Row>
      </Container>
    </section>
    </>
  )
}
export default Home;