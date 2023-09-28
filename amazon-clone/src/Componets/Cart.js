import React, { useContext, useEffect ,useState} from 'react'
import "./CSS/Cart.css"
import adverI from "./images/advertisment.jpeg"
import CartProducts from "./CartProducts.js"
import { useSelector,useDispatch } from "react-redux"
import Context from '../context'
import {  setcart } from './store/CartSlice'
import image from './images/emptycart2.png'
import { useNavigate } from 'react-router-dom'


const Cart = () => {
  
  const prod=useSelector((state)=>{return state.lelo.store})
  let Sum=0;
  prod.map((produ)=>{
    Sum+=produ.price;
  })
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const func=useContext(Context)
  let auth=window.localStorage.getItem('AuthToken')
  useEffect(()=>{
    if(auth){
      var tempstore=[]
      func.getitems(auth)
      .then((da)=>{da.map((dprod)=>{tempstore.push((JSON.parse(( dprod.Product))))})})
      // dispatch(setcart(tempstore))
      .then((dsa)=>{dispatch(setcart(tempstore))})
      
    }

  },[])
  let i=0;
  const handleClick=()=>{
    
      navigate('/checkout')
    
  }


  
  
  return (
    <div className='Cart'>
      <div className="Top">
        <div className="Left"><img  className='Adverti' src={adverI} alt=""></img></div>
        
        <div className='Rightside'>
          
          <div className='Subtotal'>Subtotal({prod.length}) : <b className='price'>${Sum.toFixed(2)}</b></div>
          <div className='check'>
            <input className='checkbox' type={"checkbox"}/>
            <div>Do you have coupon code</div>
          </div>
          <div>Your total : -{">"} <b> $ {Sum.toFixed(2)}</b> </div>
          <button   className='Pay' disabled={prod.length===0?true:false} style={{"backgroundColor":prod.length===0?"#a99359":"#ce9c1f"}}  onClick={()=>{handleClick()}}><b>Pay Now</b> </button>
          
        </div>
      </div>
      <div className="bottom">
        <div className='Heading'><h3>YOUR SHOPPING BASKET</h3></div>
      <hr></hr>
      
      <div className='addedproducts'>
      {prod.map((product)=>{ return ((<CartProducts key={i++} title={product.title} image={product.image}  price={product.price} Product={product} remove={true}/>))})}
        
        <img src={image} className='emptycart' onClick={()=>{navigate('/')}} style={{'display':(prod.length===0) ? "block":"none"}}/>
      </div>
        </div>
    </div>
  )
}

export default Cart
