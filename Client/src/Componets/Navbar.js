import React ,{useContext, useEffect, useState}from 'react'
import img from "./images/amazonf.png"
import searchlogo from "./images/search3.png"
import cartlogo from "./images/cart.png"
import guest from './images/guest.jpg'
import "./CSS/Navbar.css"
import { Link } from 'react-router-dom'
import { useSelector ,useDispatch} from "react-redux"
import {setusername} from '../Componets/store/CartSlice';
import Context from '../context'
import { addtemptocart, setcart } from './store/CartSlice'
import Products from './Allproducts/Products.json'
import SignIn from './SignIn'
import { useLocation } from 'react-router-dom'
const Navbar = () => {
    // let disnav=false;
    let dispatch=useDispatch();
    const [searchitem,setsearchitem]=useState('')
    const [filter,setfilter]=useState(false)
    let auth=window.localStorage.getItem("AuthToken") 
    let name=useSelector((state)=>{return state.lelo.User})
    let Username=useSelector((state)=>{return state.lelo.Username})
    const [disnav,setdisnav]=useState(false)

    let signout=()=>
    {
        window.localStorage.clear();
        dispatch(setusername(null));
    }

    const store=useSelector((state)=>{return state.lelo.store})
   
    const func=useContext(Context)

    const handleSearch=()=>{
        
        let searchprod=[]
        Products.map((prod)=>{if(prod.title===searchitem){searchprod.push(prod)}})
        dispatch(addtemptocart(searchprod));
        setsearchitem('')
        const searchbar=document.querySelector('.Searchbar');
        let alloption=document.querySelectorAll('.useroptions');

        var w = window.innerWidth;
        if(w>500)
        {
            return ;
        }
        else
        {
            searchbar.style.display="flex"
            // console.log('fine',searchbar.style.display)
            for(let i=0;i<alloption.length;i++){
                alloption[i].style.display='none'
            }
        }
        
    }

    // console.log(!true)
    window.addEventListener('click', function(e){  
        if(!document.querySelector('.Navbar')){
            return ;
        }
        
        
        if ( document.querySelector('.Navbar').contains(e.target)){
        // do nothing
        } 
        else{
            const searchbar=document.querySelector('.Searchbar');
            let alloption=document.querySelectorAll('.useroptions');
            
            if(searchbar.style.display==="none"){
                // return ;
            }
            if(searchbar.style.display==="flex" ){
                searchbar.style.display="none"
                    for(let i=0;i<alloption.length;i++){
                        alloption[i].style.display='flex'
                    }
                }
            }

        if(document.querySelector('.Filter').contains(e.target)){
            // do nothing
        }
        else {
            if(document.querySelector('.Searchbar').contains(e.target)){
                // do nothing
            }
            else{
                setfilter(false)
            }
        }
      });


      const history = useLocation();
    //   console.log("history is",history.pathname)
      if (disnav===false && history.pathname === '/') {
        setdisnav(true)
        // console.log("yes")
    }
    if (disnav===true && history.pathname !== '/') {
        setdisnav(false)
        // console.log("no")
      }

  // Check if the current route is '/special' and render SpecialComponent accordingly
  
    useEffect(()=>{
        var tempstore=[]
        

      auth && func.getitems(auth)
      .then((da)=>{da.map((dprod)=>{tempstore.push((JSON.parse(( dprod.Product))))})})
      .then((dsa)=>{dispatch(setcart(tempstore))})
    },[])


    function openNav() {
        // document.getElementById("mySidebar").style.width = "25vw";
        document.getElementById("mySidebar").classList.add("open");
        document.querySelector(".overlay").style.zIndex = "11";
        document.body.style.overflow="hidden";
      }
      
      function closeNav() {
        // document.getElementById("mySidebar").style.width = "0";
        document.getElementById("mySidebar").classList.remove("open");
        document.getElementById("main").style.marginLeft= "0";
        document.querySelector(".overlay").style.zIndex = "-1";
        document.body.style.overflow="scroll";

      }

    
    


  return (
    <div className='outer'>
        
    <div className='Navbar' >
        <div>
        <Link to="/" ><img className="amazonlogo"src={img} onClick={()=>{dispatch(addtemptocart([]))}}  alt=""/></Link>

        </div>
        <div className="searchbar">
            <input className="Searchbar" value={searchitem} type="text" onClick={()=>{setfilter(true)}} onChange={(event)=>{setsearchitem(event.target.value)}}/>
            <img className='serchlogo' onClick={()=>{handleSearch()}} src={searchlogo} alt=""/>
        </div>
        <div className=" dropdown">
  <div className="dropbtn"><span className="upperpart">Hello {Username ? Username:"Guest"} </span>
            <Link style={{"textDecoration":"none"}} to={!Username?"/Login":"/"} onClick={()=>{signout() }}><span className="lowerpart">{Username ? "Sign Out":"Sign In"}</span><i className="fa-solid fa-caret-down" style={{"color": "#fcfcfd"}}></i></Link></div>
  <div className="dropdown-content">
  <SignIn  display={Username? "none" : "block"}/>
  <div className="Singin-Content">
    <div className="left-content">
    <div className="head">Your List</div>
    
     {!Username?<div><div className="Signin-Options">Create a Wish List</div>
    <div className="Signin-Options">Wish From Any Website</div>
    <div className="Signin-Options">Baby Wishlist</div>
    <div className="Signin-Options">Discover Your Style</div>
    <div className="Signin-Options">Explore Showroom</div></div>:<div><div className="Signin-Options">Create a List</div>
    <div className="Signin-Options">Find a List or Registry</div></div>}
    </div>
    <div className="right-content">
    <div className="head">Your Account</div>
    {!Username?<div>
    <div className="Signin-Options">Your Orders</div>
    <div className="Signin-Options">Your Wish list</div>
    <div className="Signin-Options">Your recommendations</div>
    <div className="Signin-Options">Keep Shopping for</div>
    <div className="Signin-Options">Your Prime Membership</div>
    <div className="Signin-Options">Your Prime Vedio</div>
    <div className="Signin-Options">Your Subscribe & Save Items</div>
    <div className="Signin-Options">Memberships & Subscriptions</div>
    <div className="Signin-Options">Your Seller Account</div>
    <div className="Signin-Options">Manage Your Content & Devices</div>
    <div className="Signin-Options">Your Free Amazon Business Account</div></div>:<div>
    <div className="Signin-Options">Account</div>
    <div className="Signin-Options">Orders </div>
    <div className="Signin-Options">Recommendations</div>
    <div className="Signin-Options">Browse history </div>
    <div className="Signin-Options">Watchlist</div>
    <div className="Signin-Options">Vedio Purchases & Rentals</div>
    <div className="Signin-Options">Kindle Unlimited</div>
    <div className="Signin-Options">Content & Devices</div>
    <div className="Signin-Options">Subscribe & Save Items</div>
    <div className="Signin-Options">Memberbership & Subscriptions</div>
    <div className="Signin-Options">Music Library</div></div>}
    </div>
    </div>
  </div>
</div>
        <div className='useroptions'>
            <span className="upperpart">Returns</span>
            <Link to='/orders' style={{"textDecoration": 'none'}}><span className="lowerpart">& Orders</span></Link>
        </div>
        <div className='useroptions'>
            <span className="upperpart">Your</span>
            <span className="lowerpart">Prime</span>
        </div>
        <div className='cartoption'>
            <Link to="/cart" ><img  className="cartlogo" src={cartlogo} alt=""/></Link>
            <div className='cartitem'>{store.length}</div>
        </div>
        <div className='avatar'><img src={!auth? guest :
`https://robohash.org/${ Username}.png`}/></div>
    </div>

    <div className='Filter'>
       {filter ?  Products.map((prod)=>{
        const items=prod.title.toLowerCase();
        const req=searchitem.toLowerCase();
        if(items.startsWith(req) && searchitem.length!==0 && searchitem!==prod.title){
            return (<div className='searchitem' key={prod.id} onClick={()=>{ (setsearchitem(prod.title))}}>{prod.title} </div> )
        }
        else if (searchitem.length===0){            
            return (<div className='searchitem' key={prod.id} onClick={()=>{ (setsearchitem(prod.title))}}>{prod.title} </div> )

        }
       }).slice(0,10):false}

    </div>
    <div className="lower" style={{"display":disnav?"flex":"none"}}>

        
        <div id="main" className="openbtn" onClick={()=>{openNav()}}>☰ All</div>  
       
        
        <div className='Deals'>Today's Deal</div>
        <div>Buy Again</div>
        <div>Costomer Services</div>
        <div>Registry</div>
        <div>Gift Cards</div>
        <div>Sell</div>
       
    </div>
    
        <div id="mySidebar" className="sidebar">
        <a href="javascript:void(0)" className="closebtn" onClick={()=>{closeNav()}} >×</a>
        <div className="profile"><div className='avatar'><img src={!auth? guest :
`https://robohash.org/${ Username}.png`}/></div> <span className="upperpart">Hello,{Username ? Username:""} </span>
<Link style={{"textDecoration":"none"}} to={!Username?"/Login":"/"} onClick={()=>{signout() }}><span className="lowerpart">{Username ? "":"Sign In"}</span></Link> </div>
            <div className="Options"><div className="Title">Digital Content & Devices</div><div className="keys">Amazon Music <div><i className="fa-solid fa-chevron-right"></i></div></div><div className="keys">Kinder E-Readers  & Books <div><i className="fa-solid fa-chevron-right"></i></div></div><div className="keys">Amazon Appstore <div><i className="fa-solid fa-chevron-right"></i></div></div></div>
            <div className="Options"><div className="Title">Shop By Department</div><div className="keys">Electronics<div><i className="fa-solid fa-chevron-right"></i></div></div><div className="keys">Computers<div><i className="fa-solid fa-chevron-right"></i></div></div><div className="keys">Smart Home <div><i className="fa-solid fa-chevron-right"></i></div></div><div className="keys">Art & Crafts <div><i className="fa-solid fa-chevron-right"></i></div></div></div>
            <div className="Options"><div className="Title">Programs & Features</div><div className="keys">Gift Cards<div><i className="fa-solid fa-chevron-right"></i></div></div><div className="keys">Shop By Interest<div><i className="fa-solid fa-chevron-right"></i></div></div><div className="keys">Amazon Live<div><i className="fa-solid fa-chevron-right"></i></div></div><div className="keys">International Shopping <div><i className="fa-solid fa-chevron-right"></i></div></div></div>
            
        
        </div>
        

       <div className="overlay" onClick={()=>{closeNav()}}></div>
    </div>

  )
}

export default Navbar
