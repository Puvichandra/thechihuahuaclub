import React,{useState} from 'react'
import styled from 'styled-components'
import Button from './Button'
import Logo from './Logo'
import Connectwallet from './Connectwallet'
import Hand from '../assets/headfront1.png'


const Section = styled.section`
width: 100vw;
// background-color: ${props => props.theme.body};
position: fixed;
z-index : 10;
.active{
  background: black;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
}

`
const NavBar = styled.nav`
display: flex;
justify-content: space-between;
align-items: center;
width: 85%;
height: ${props => props.theme.navHeight};
margin: 0 auto;


.menu__btn{
  background: white;
  padding: 0.5rem 1rem;
  border: 3px solid black;
  position: absolute;
  left:0;
  // border-bottom-left-radius: 2rem;
  // border-bottom-right-radius: 2rem;
  bottom:-2.5rem;
  z-index:100;
}
.mobile{
  display: none;
}

@media (max-width: 64em) {
.desktop{
  display: none;
}
.mobile{
   display: inline-block;
  
}

}


`
const Menu = styled.ul`
display: flex;
justify-content: space-between;
align-items: center;
list-style:none;


@media (max-width: 64em) {
/* 1024 px */



position: fixed;
top: ${props => props.theme.navHeight};
left: 0;
right: 0;
bottom: 0;
width: 100vw;
height: ${props => `calc(100vh - ${props.theme.navHeight})`};
z-index:50;
background-color: ${props => `rgba(${props.theme.textRgba},0.85)`};
backdrop-filter: blur(2px);

transform: ${props => props.click ? 'translateY(0)' : `translateY(1000%)`};
transition: all 0.3s ease;
flex-direction: column;
justify-content: center;

touch-action: none;


}

`

const MenuItem = styled.li`
padding: 1rem 0;
margin: 0 1rem;
color: ${props => props.theme.body};
// cursor: pointer;
font-size: ${props => props.theme.fontlg};

&::after{
  content: ' ';
  display: block;
  width: 0%;
  height: 2px;
  background: ${props => props.theme.body};
  transition: width 0.3s ease;
}
&:hover::after{
  width: 100%;
}

@media (max-width: 64em) {
margin: 1rem 0;
font-size: ${props => props.theme.fontmd};

&::after{
  display: none;
}

}
`
const HamburgerMenu = styled.span`
width:  ${props => props.click ? '2rem' : '1.5rem'};
position : absolute;
height: 2px;
background: ${props => props.theme.body};
left: 1.4rem;
// position: absolute;
// top: 2rem;
// left: 50%;
transform: ${props => props.click ? 'translateX(-50%) rotate(90deg)' : 'translateX(-50%) rotate(0)'  };

display: none;
justify-content: center;
align-items: center;

cursor: pointer;
transition: all 0.3s ease;

@media (max-width: 64em) {
/* 1024 px */
display: flex;

}

&::after, &::before{
  content: ' ';
  width:  ${props => props.click ? '1rem' : '1.5rem'};
  height: 2px;
  right: ${props => props.click ? '-2px' : '0'};
background: ${props => props.theme.body};
position: absolute;
transition: all 0.3s ease;

}

&::after{
  top: ${props => props.click ? '0.3rem' : '0.5rem'};
  transform: ${props => props.click ? 'rotate(-40deg)' : 'rotate(0)'  };

}
&::before{
  bottom: ${props => props.click ? '0.3rem' : '0.5rem'};
  transform: ${props => props.click ? 'rotate(40deg)' : 'rotate(0)'  };
}


`


const Navigation = () => {

  const [click, setClick] = useState(false);
  const [nav , setNav] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 80){
      setNav(true);
    }
    else{
      setNav(false);
    }
  }

  window.addEventListener('scroll' , changeBackground);
  
const scrollTo = (id) => {

  let element = document.getElementById(id);

  element.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
    inline: 'nearest'
  })

  setClick(!click);
}



  return (
    
    <Section id="navigation">
      <div className={nav ? 'active' : ''}>
      <NavBar>
        {/* <HamburgerMenu  click={click}  onClick={() => setClick(!click)}>
          &nbsp;
        </HamburgerMenu> */}
        <div className='menu__btn' click={click}  onClick={() => setClick(!click)}>
          Menu
        </div>
        <Logo />
        <Menu click={click}>
          <MenuItem onClick={() => scrollTo('home')}  >Home</MenuItem>
          <MenuItem onClick={() => scrollTo('about')}  >About</MenuItem>
          <MenuItem onClick={() => scrollTo('roadmap')}  >Roadmap</MenuItem>
          <MenuItem onClick={() => scrollTo('showcase')}  >Mint</MenuItem>
          <MenuItem onClick={() => scrollTo('team')}  >Team</MenuItem>
          <MenuItem onClick={() => scrollTo('faq')}  >Faq</MenuItem>
          {/* <MenuItem> */}
          {/* </MenuItem> */}
        </Menu>
            <div className="mobile">
            {/* <Button text="Connect Wallet" link="https://google.com" /> */}
            <Connectwallet />
            </div>
          <div className="desktop">
          {/* <Button text="Connect Wallet" link="https://google.com" /> */}
          <Connectwallet />
          </div>

      </NavBar>
      </div>
    </Section>
  )
}

export default Navigation