import React,{useContext,useEffect, useState} from 'react'
import './CSS/Orders.css'

import Context from '../context'
import HandleOrderProduct from './HandleOrderProduct'
import { Link } from 'react-router-dom'

const Orders = () => {
  const func=useContext(Context)
  const [ordered_items,setordered_items]=useState([])
  let auth=window.localStorage.getItem('AuthToken')
  const [loading ,setloading]=useState(true)
  useEffect(()=>{
    loading && (document.querySelector(".Overlay").style.zIndex = "11");
    if(auth){
      func.GetOrders(auth)
      .then((data)=>{setordered_items(data);setloading(false)})
      
    }
    
  },[])
  return (
    <div className='Orders'>
      {loading ? 
    <div className="Overlay" ></div>:(ordered_items.length===0)? <Link to={'/'}><div className='EmptyCart' ><img src="https://img.freepik.com/free-vector/empty-concept-illustration_114360-7416.jpg?w=740&t=st=1694456556~exp=1694457156~hmac=ff7e71f4956dd43b040e415eaa8e3cb9776836c5ee6461ff3672877b7cd30fdf" alt="#" /></div></Link>:
        <div  className="basketitems">
          <h3 className="Title">Your Orders</h3>
          {ordered_items.map((Data)=>{
          let basket=JSON.parse(Data.Orders);
          return (<HandleOrderProduct key={Data._id} Orders={basket} Paymentid={Data.Paymentid} Date={Data.createdAt} />)
          })}

      </div>
      }

      {/* </div> */}
      
    </div>
  )
}

export default Orders
