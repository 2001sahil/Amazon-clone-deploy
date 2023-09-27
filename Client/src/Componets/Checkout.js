import React, { useEffect, useState,useContext } from 'react'
import '../Componets/CSS/Checkout.css'

import CartProducts from "./CartProducts.js"
import { useSelector ,useDispatch} from 'react-redux'
import { Link,useNavigate } from 'react-router-dom'
import { emptybasket } from './store/CartSlice'
import Context from '../context.js'
import { useElements, useStripe ,CardElement} from '@stripe/react-stripe-js'
const Checkout = () => {
  let Username=useSelector((state)=>{return state.lelo.Usermail})
  const Navigate=useNavigate();
  const  stripe =useStripe();
  const elements=useElements(); 
  const [error,seterror]=useState(null);
  const [disabled,setdisabled]=useState(true);
  const [succeeded,setsucceeded]=useState(false);
  const [processing,setprocessing]=useState("");
  const [clientSecret,setclientSecret]=useState("");
  const auth=window.localStorage.getItem('AuthToken')
  const func=useContext(Context)
  const dispatch=useDispatch();





  console.log("secret is",clientSecret)
  const handleSubmit=async (event)=>{
    event.preventDefault();
    // if(Sum==0 || )
    setprocessing(true);
    const { paymentIntent, error } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement), 
      },
    });

  if (error) {
  } else {
    setsucceeded(true);
    seterror(null)
    setprocessing(false)
    const data={
      Basket:Array(prod),
      Paymentid:clientSecret
    }
    // console.log((data))
    func.AddtoOrders(auth,data)
    func.emptyCart(auth);
    dispatch(emptybasket())
    Navigate('/orders', { replace: true });
  }

  }



  const handleChange=(event)=>{
    setdisabled(event.empty);
    seterror(event.error?event.error.message:"")
    

  }
  // console.log(Username)
  const prod=useSelector((state)=>{return state.lelo.store})
  useEffect(()=>{
    Sum=Sum.toFixed(1);
    console.log("sum is ",Sum)
    const getClientSecret=async ()=>{
      const url = `https://amazon-clone-deploy-7lv8.vercel.app/payments/create?total=${(Sum)*100}`
        const response = await fetch(url, {
          method: 'post',
        });
        
        const data=await response.json()
        // console.log("data retrieved ",data)
        setclientSecret(data.clientSecret)
      }
      Sum!==0 && getClientSecret();
      // console.log("all prod are",Array(prod))

  },[prod])
  let Sum=0;
  prod.map((produ)=>{
    Sum+=produ.price;
  })
  let i=0;
  // console.log("Cleint",clientSecret)

  return (
    <div className='checkout'>
      <div className="Count"><h1>Checkout (<Link to='/cart'>{prod.length} items </Link>) </h1></div>
      <div className="User-Details">
        <div className="head">Delivery Adress</div>
        <div className='Address'>
        <div >{Username}</div>
        <div >132, My Street  </div>
        <div >Kingston, New York 12401</div>

        </div>
      </div>
      <div className="Review_head ">Review Items And Delivery</div>
      <div className='addedproducts'>
      {prod.map((product)=>{ return ((<CartProducts key={i++} title={product.title} image={product.image}  price={product.price} Product={product} remove={true}/>))})}
        
      </div>
      <div className="Payment_Method">
        <div className="Review_head">Payment Method</div>
        <div className="payment_detail">
          <form onSubmit={handleSubmit}> 
            <CardElement onChange={handleChange}/>
            <div className="payment_priceContainer">
            </div>
            <div className='Subtotal price'> <b> Order Total ${Sum.toFixed(2)}</b></div>
              <button disabled={processing || disabled|| succeeded}>
                <span>{processing?<p>Processing</p>:"Buy Now"}</span>
              </button>
          </form>
        </div>
        {error && <div>{error}</div>}
      </div>
    </div>
  )
}

export default Checkout
