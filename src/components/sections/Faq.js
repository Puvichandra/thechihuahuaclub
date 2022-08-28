import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import React, { useLayoutEffect, useRef } from 'react'
import styled from 'styled-components';
import Accordion from '../Accordion';


const Section = styled.section`
min-height: 100vh;
height: auto;
width: 100vw;
background-color: ${props => props.theme.text};
position: relative;
color: ${(props) => props.theme.body};
overflow: hidden;


display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`
const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxl};
  text-transform: uppercase;
  color: ${(props) => props.theme.body};
  
  margin: 1rem auto;
  border-bottom: 2px solid ${(props) => props.theme.carouselColor};
  width: fit-content;

  @media (max-width: 48em){
  font-size: ${(props) => props.theme.fontxl};

  }
`;

const Container = styled.div`
width: 75%;
margin: 2rem auto;

display: flex;
justify-content: space-between;
align-content: center;

@media (max-width: 64em){
  width: 80%;
  }
  @media (max-width: 48em){
  width: 90%;
  flex-direction: column;

  &>*:last-child{
    &>*:first-child{

    margin-top: 0;
}

  }
  }
`
const Box = styled.div`
width: 45%;
@media (max-width: 64em){
  align-self: center;
  }
  @media (max-width: 48em){
  width: 90%;
  }

`

const Faq = () => {

const ref = useRef(null);
gsap.registerPlugin(ScrollTrigger);
useLayoutEffect(() => {
  
  let element = ref.current;

  ScrollTrigger.create({
    trigger: element,
    start:'bottom bottom',
    end:'bottom top',
    pin:true,   
    pinSpacing:false, 
    scrub:1,
    // markers:true,
  })

  return () => {
    ScrollTrigger.kill();
  };
}, [])

  return (
    <Section ref={ref} id="faq">
    <Title>Faq</Title>

    <Container>

<Box>
  <Accordion ScrollTrigger={ScrollTrigger} title="HOW TO WIN HONDA CIVIC?" >
  There will be two winners
  <br></br>
  1.For holding the most number of NFTs.
  <br></br>
  2.For holding the only one mythical chihuahua NFT. 
  </Accordion>
  <Accordion ScrollTrigger={ScrollTrigger} title="WHAT IS THE METAVERSE?" >
  A metaverse is a network of 3D virtual worlds focused on social connection. In futurism and science fiction, it is often described as a hypothetical iteration of the Internet as a single, universal virtual world that is facilitated by the use of virtual and augmented reality headsets.

  </Accordion>
  {/* <Accordion ScrollTrigger={ScrollTrigger} title="WHY DO WE NEED ROYALTIES?" >
  The amount of royalties was fixed at 5% to finance the Weirdos Club's projects. We have the ambition to organize multiple events around the world in order to strengthen the community and build a network of entrepreneurs and investors with the same mindset and common interests.
  </Accordion> */}
</Box>
<Box>
<Accordion ScrollTrigger={ScrollTrigger} title="HOW WILL I RECEIVE MY HONDA CIVIC?" >
The money worth of 30,000$ will be sent to the wallet address of each winner.
  </Accordion>
  <Accordion ScrollTrigger={ScrollTrigger} title="HOW DO I TRACK HOLDERS WITH MOST NFTS?
" >
  Top 10 holders with most NFTs leaderboard will be available in our website.
  </Accordion>
  {/* <Accordion ScrollTrigger={ScrollTrigger} title="WHAT IS THE FUSION PROCESS?
" >
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel enim veritatis iusto officia. Exercitationem, ducimus reiciendis. Rem, maxime, similique neque minus aliquam dolore doloremque laboriosam, facilis quibusdam unde sint officia.
  </Accordion> */}
</Box>
    </Container>
    </Section>
  )
}

export default Faq