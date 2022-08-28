import React , {useState} from 'react'
import './mintingsection.css'

const Mintingsection = (props) => {


    const [count , setCount] = useState(1) 

    const add = () =>{
      if(count > 0 && count < 20){
        setCount(count + 1)
      }
    }
    const subtract = () =>{
      if(count > 1){
      setCount(count - 1)
      }
    }

    const showPrice = count * props.price;

  return (
    <div className="minting__section container">
        <div className="left__minting container">
            <div className="mint__content">
            <h1>MINTING IS LIVE</h1>

            <h3>Total Minted {props.totalMinted}/10000</h3>
            </div>
            <div className="mint__count">
                <button onClick={subtract} className='eightbit-btn'>-</button>
                <h1>{count}</h1>
                <button onClick={add} className='eightbit-btn'>+</button>
            </div>
            <button className='eightbit-btn eightbit-btn--reset'>MINT</button>
        </div>


        <div className="right__minting">
            <h1>{showPrice.toFixed(2)} BNB</h1>
        </div>
    </div>
  )
}

export default Mintingsection