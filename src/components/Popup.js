import React from 'react'
import './popup.css'
import Vid from "../assets/vid.mp4"
import TypeWriterText from './TypeWriterText'
import Text from '../assets/fin.png'
import Civic from '../assets/bluecar.png'
import Wheel from '../assets/wheel1.png'
import { useState } from 'react'
import {BsTelegram} from 'react-icons/bs'
import {AiFillTwitterCircle} from 'react-icons/ai'
import {TbWorld} from 'react-icons/tb'
import {BsDiscord} from 'react-icons/bs'

const Popup = () => {

    const [isActive , setActive] = useState(true)

        const closeButton = () => {
            setActive(false)
        }

  return (
    <div className={isActive ? 'popup' : 'popup__inactive'}>
        <div className='popup__container'>
            <div className='title__popup'>
                <h2>Our Official Partner</h2>
            </div>
            <div className='popup__close' onClick={closeButton}>
        <button className="mint__now eightbit-btn eightbit-btn--reset">X</button>

            </div>
        <video autoPlay loop muted className='bg__popup'>
        <source src={Vid} type='video/mp4' />
      </video>
    <div className='content__popup'>

    <img src={Text} className='text__design'></img>
    <h1>Discover A New Era Of Cool NFTs</h1>
    <p>Win 60,000$ Through Minting!</p>
    <button className="mint__now eightbit-btn eightbit-btn--reset">Mint Now</button>
    <div className='social__icons'>
      <a href='https://t.me/TheChihuahuaClub'>
    <BsTelegram className='social__icon' />
        </a>
        <a href='https://twitter.com/ChihuahuaOffl'>
    <AiFillTwitterCircle className='social__icon' />
            </a>
            <a href='https://discord.gg/Ygg2gnGu'>
    <BsDiscord className='social__icon' />
                </a>
                <a href='https://www.thechihuahuaclub.com/'>
    <TbWorld className='social__icon' />
                    </a>  

    </div>
    </div>
    <div className='car__container'>
      <img src={Civic} className='civic'></img>
      <img src={Wheel} className='wheel1'></img>
      <img src={Wheel} className='wheel2'></img>
      </div>
        </div>
    </div>
  )
}

export default Popup