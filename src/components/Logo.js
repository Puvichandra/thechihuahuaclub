import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Logo1 from '../assets/logo.png'

const LogoText = styled.h1`
font-family: 'Akaya Telivigala', cursive;
font-size: ${props => props.theme.fontxxxl};
color: ${props => props.theme.text};
transition: all 0.2s ease;

img{
  width: 5rem;
  padding-top: 2rem;
}

&:hover{
    transform: scale(1.1);
}

@media (max-width: 64em){
font-size: ${props => props.theme.fontxxl};

}
`

const Logo = () => {
  return (
    <LogoText>
        <Link to="/">
       <img src={Logo1}></img>
        </Link>
    </LogoText>
  )
}

export default Logo