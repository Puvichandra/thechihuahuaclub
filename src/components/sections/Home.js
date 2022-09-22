import React, { lazy, Suspense } from 'react'
import styled, { keyframes } from 'styled-components'
import RoundTextBlack from '../../assets/Rounded-Text-White.png';
import Loading from '../Loading';
import Civic from '../../assets/bluecar.png'
import Wheel from '../../assets/wheel1.png'
import Text from '../../assets/fin.png'
import './home.css'
import VID from '../../assets/vid.mp4'
import { useState, useEffect } from "react"
import Clock from '../../components/Clock'

const CoverVideo = lazy(() => import('../CoverVideo'));
const TypeWriterText = lazy(() => import('../TypeWriterText'));

const Section = styled.section`
min-height: ${props => `calc(100vh - ${props.theme.navHeight})`   };
width: 100vw;
height: 100vh;
// height: max-content;
position: relative;

@media (max-width: 64em) {
  height: 100%;
}
`

const Container = styled.div`
width: 100%;
// min-height: 80vh;
margin: 0 auto;
padding-top: 6rem;
/* background-color: lightblue; */

display: flex;
justify-content: center;
align-items: center;

@media (max-width: 64em) {
  width: 85%;
}
@media (max-width: 48em) {
  flex-direction: column-reverse;
  width: 100%;
  &>*:first-child{
    width: 100%;
    margin-top: 2rem;
  }
}
`
const Box = styled.div`
width: 60%;
height: 100%;
display: flex;
padding-top: 6rem;
flex-direction: column;
justify-content: flex-start;
align-items: center;
gap: 0.8rem;

@media (max-width: 48em) {
  padding-top:2rem;
  gap: 0.5rem;
}

`
const rotate = keyframes`
100%{
  transform: rotate(1turn);
}
`
const Round = styled.div`
position: absolute;
bottom: 2rem;
right: 5%;
width: 7rem;
height: 7rem;
border: 1px solid ${props => props.theme.body};
border-radius: 50%;

img{
  width: 100%;
  height: auto;
  animation: ${rotate} 6s linear infinite reverse ;
}
@media (max-width: 64em) {
  width: 4rem;
  height: 4rem;
  left: none;
  right: 2rem;
  bottom: 100%;
}
@media (max-width: 48em) {
  
  right: 1rem;
}
`



const Circle = styled.span`
width: 3.5rem;
height: 3.5rem;
display: flex;
justify-content: center;
align-items: center;
border-radius: 50%;

position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%,-50%);

background-color: ${props => props.theme.text};
color: ${props => props.theme.body};
font-size:${props => props.theme.fontxl};

@media (max-width: 64em) {
  width: 2rem;
  height: 2rem;
font-size:${props => props.theme.fontlg};

}

`


const Home = () => {


// -----------TIMER---------


const [timerDays, setTimerDays] = useState();
  const [timerHours, setTimerHours] = useState();
  const [timerMinutes, setTimerMinutes] = useState();
  const [timerSeconds, setTimerSeconds] = useState();

  let interval;

  const startTimer = () => {
    const countDownDate = new Date("Sep 19,2022 ").getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();

      const distance = countDownDate - now;

      const days = Math.floor(distance / (24 * 60 * 60 * 1000));
      const hours = Math.floor(
        (distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60));
      const seconds = Math.floor((distance % (60 * 1000)) / 1000);

      if (distance < 0) {
        // Stop Timer

        clearInterval(interval.current);
      } else {
        // Update Timer
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    });
  };

  useEffect(() => {
    startTimer();
  });



// TIMER END----------


  return (
    <Section id="home">
      {/* <img src={Img} className='bg'></img> */}
      

      <video autoPlay loop muted className='bg'>
        <source src={VID} type='video/mp4' />
      </video>
      
      <div className='car__container'>
      <img src={Civic} className='civic'></img>
      <img src={Wheel} className='wheel1'></img>
      <img src={Wheel} className='wheel2'></img>
      </div>
      <Container>
      <Box>
        <img src={Text} className='text__design'></img>
        <Suspense fallback={<Loading />}>
          <TypeWriterText /></Suspense>
          <div className='home__timer'>
          {/* <Clock
        timerDays={timerDays}
        timerHours={timerHours}
        timerMinutes={timerMinutes}
        timerSeconds={timerSeconds}
      /> */}
          </div>
        </Box>
        {/* <Box> */}
        <Suspense fallback={<Loading />}>
          {/* <img src={Frame} className='frame'></img> */}
          {/* <CoverVideo /> */}
          </Suspense>
          
        {/* </Box> */}

        
        <Round>
        <Circle>
          &#x2193; 
        </Circle>
          <img width={500} height={400} src={RoundTextBlack} alt="NFT" />
        </Round>

      </Container>
    </Section>
  )
}

export default Home