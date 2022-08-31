import React from 'react'
import './partners.css'
import styled from "styled-components";
import Jelly from '../assets/jellywhite.png'

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxl};
  text-transform: capitalize;
  color: ${(props) => props.theme.text};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem auto;
  border-bottom: 2px solid ${(props) => props.theme.text};
  width: fit-content;
  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontxl};
  }
`;

const Partners = () => {
  return (
    <div className='partners' >
        <div className='partners__container glass'>
        <img src={Jelly}></img>
        </div>
        {/* <Title>Roadmap</Title> */}
    </div>
  )
}

export default Partners