import React from 'react'
import "./CSS/Home.css"
import homeImage1 from "./images/homeimage1.jpg"

import homeImage2 from "./images/homeimage2.jpg"
import homeImage3 from "./images/homeimage3.jpg"
import homeImage4 from "./images/homeimage4.jpg"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper'
import 'swiper/css';
import 'swiper/css/autoplay'
import { useDispatch } from 'react-redux'
import Context from '../context'
import { useEffect, useState} from "react"
import LazyLoad from 'react-lazyload';

import { useSelector} from "react-redux"
import Product from './Product'
import Footer from './Footer'
import SignIn from './SignIn'
import AllProducts from './Allproducts/Products.json'
const Home = () => {
  
  let Username=useSelector((state)=>{return state.lelo.Username})
  const searchedproduct=useSelector((state)=>{return state.lelo.tempprod})

  const prod=searchedproduct.length!==0 ? searchedproduct:AllProducts;

  const [show ,setshow]=useState(0);
  
  let i=0;  
  return (
    
    <div className='Home'>
    <div className='Homepage'>
      <div className="template">
      <Swiper
      modules={[Autoplay]}
      spaceBetween={50}
      loop={true}
      slidesPerView={1}
      autoplay={{delay:3000}}
    >
      <SwiperSlide ><div className="mySlides fade frontpage">
          <img className='HomeImage' alt="" src={homeImage1} />
        </div></SwiperSlide>
      <SwiperSlide ><div className="mySlides fade frontpage">
          <img className='HomeImage' alt="" src={homeImage2} />
        </div></SwiperSlide>
      <SwiperSlide ><div className="mySlides fade frontpage">
          <img className='HomeImage' alt="" src={homeImage3} />
        </div></SwiperSlide>
      <SwiperSlide ><div className="mySlides fade frontpage">
          <img className='HomeImage' alt="" src={homeImage4} />
        </div></SwiperSlide>
    </Swiper>
    </div>



      <div className="Outerr">
      <div className='AllProd'>
        {prod.map((product)=>{
        return (
          <div className=' lists' key={i++}>
          <Product title={product.title} price={product.price} image={product.image}  id={product.id} Product={product} />
          </div>)
        })}
      </div>
      
      <div>
        
          <SignIn Home={true} display={Username? "none" : "block"}/>
          <Footer/>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Home
