import React, { useContext } from 'react'
import "./CSS/CartProduct.css"
import start from"./images/rating.webp"
// import {remove} from '../store/CartSlice';
import {remove} from './store/CartSlice';
import { useDispatch } from 'react-redux'
import Context from '../context';


const CartProducts = (props) => {
  const dispatch=useDispatch();
  const auth=window.localStorage.getItem('AuthToken')
  const func=useContext(Context)
  return (
    <div className='CartProduct'>
    <div className='cover'><div className='Productimg Prod'><img className="productimg"src={props.image} alt=""/></div>
    </div>
      <div className='Itemdetails'>
      <div className='title'>{props.title} </div>
    {/* </div> */}
    <div className="price"><b>Only at : {"-$"}{props.price}</b></div>
    <div className='stars'><img className='Star' src={start} alt=""/><img className='Star' src={start} alt=""/><img className='Star' src={start} alt=""/></div>
    {!props.orders && <div className='Remove'  onClick={()=>{dispatch(remove(props.Product.id));func.deleteitems(auth,{Product:JSON.stringify(props.Product)})}}>Remove Item</div>}
    </div>
    </div>
  )
}

export default CartProducts
