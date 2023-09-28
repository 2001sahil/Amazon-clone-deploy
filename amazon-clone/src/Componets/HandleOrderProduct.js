import React from 'react'
import './CSS/HandleOrderProduct.css'
import CartProducts from './CartProducts'

const HandleOrderProduct = (props) => {
  return (
    <div className='HandleOrderProduct'>

      <div className="payment">Payment Id:-<span>{props.Paymentid}</span></div>
      <div className="Date payment">Booked On:-<span>{props.Date.slice(0,10)}</span></div>
      <div className="Ordered_items">

        {props.Orders[0].map((items)=>{
            return (<CartProducts image={items.image} orders={true} title={items.title} price={items.price} Product={items}/>)
        })}
      </div>
      
    </div>
  )
}

export default HandleOrderProduct
