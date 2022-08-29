import React from "react";
import styled from "styled-components";
import Typewriter from "typewriter-effect";
import Button from './Button';
import './typewritertext.css';

const Title = styled.h2`
  // font-size: ${(props) => props.theme.fontxxl};
  font-size: 3vw;
  text-transform: capitalize;
  width: 100%;
  color: ${(props) => props.theme.body};
  align-self: flex-start;
  text-align: center;

  span {
    text-transform: uppercase;
    font-family: "Akaya Telivigala", cursive;
  }
  .text-1{
      color: blue;
  }
  .text-2{
      color: orange;
  }
  .text-3{
      color: red;
  }

  @media (max-width: 70em) {
    font-size: ${(props) => props.theme.fontlg};

  }
  @media (max-width: 48em) { 
    align-self: center;
    text-align:center;
    font-size: ${(props) => props.theme.fontsm};
  }
  @media (max-width: 40em){
    width: 90%;
  }

  
`;
const SubTitle = styled.h3`
  font-size: ${(props) => props.theme.fontmd};
  // font-size: 1vw;
  text-transform: capitalize;
  color: ${props => `rgba(${props.theme.bodyRgba}, 0.6)`};
  font-weight:600;
  margin-bottom: 1rem;
  width: 80%;
 text-align:center;
  align-self: center;

  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontxs};

  }

  @media (max-width: 48em) { 
    align-self: center;
    text-align:center;
  }
  
`

const ButtonContainer = styled.div`
//  width: 80%;
  // align-self: flex-start;
  display:flex;

  justify-content:center;

  @media (max-width: 48em) { 
    align-self: center;
    text-align:center;

    button{
      margin: 0 auto;
      width:100%;
    }
  }

`
const TypeWriterText = () => {
  return (
    <>
        <Title>
      Discover a new era of cool NFTs
      {/* <Typewriter
        options={{
          autoStart: true,
          loop: true,
        }}
        onInit={(typewriter) => {
          typewriter
            .typeString(`<span class="text-1">NFTs.</span>`)
            .pauseFor(2000)
            .deleteAll()
            .typeString(`<span class="text-2">Collectible Items.</span>`)
            .pauseFor(2000)
            .deleteAll()
            .typeString(`<span class="text-3">Ape Killers!</span>`)
            .pauseFor(2000)
            .deleteAll()
            .start();
        }}
      /> */}
      
    </Title>
    <SubTitle>Bored Of Apes? Try Something New.</SubTitle>
    <ButtonContainer>
    {/* <Button text="Explore" link="https://google.com" className='eightbit-btn eightbit-btn--reset' /> */}
    <button className="mint__now eightbit-btn eightbit-btn--reset">Mint Now</button>
    </ButtonContainer>
    </>
  );
};

export default TypeWriterText;
