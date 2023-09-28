import {React,useContext,useState} from 'react'
import "./CSS/Product.css"
import start from "./images/rating.webp"
import { useDispatch } from 'react-redux'
import { add, } from './store/CartSlice';
import Context from '../context';
import SuccessPopUp from './SuccessPopUp';
import { Link, useNavigate } from 'react-router-dom';

const Product = (props) => {
  const dispatch=useDispatch();
  let functions=useContext(Context);
  let i=0;
  const history=useNavigate();
  const auth=window.localStorage.getItem("AuthToken")
  const [isItemAdded, setIsItemAdded] = useState(false);

  const handleAddItem = () => {
    dispatch(add(props.Product));functions.additems(props.Product)
    setIsItemAdded(true);

    // Reset the "isItemAdded" state after a certain duration (e.g., 3 seconds)
    setTimeout(() => {
      setIsItemAdded(false);
    }, 3000);
  };
  
  return (
    
    <div className='Product'>

      <div>
      {isItemAdded && <SuccessPopUp message="Item added successfully" />}
      </div>
      
        
    {!props.image? <div class="image-container">
      <div class="image-skeleton"></div>
      <img src="your-image-source.jpg" alt="Your Image"/>
    </div>:<div className='Productimg'><img className="productimg"src={props.image} alt=""/></div>}
       
    

      <div className='specfication'><div className='title'>{[props.title]} </div>
    {/* </div> */}
    <div className="price"><b>Only at : {"->"}{props.price}</b></div>
    <div className='stars'><img className='Star' src={start} alt=""/><img className='Star' src={start} alt=""/><img className='Star' src={start} alt=""/></div></div>
    
    <button className='Add' onClick={()=>{auth?handleAddItem():history('/Login')
    }}>Add to Basket
    </button>
    </div>

  )
}
  

export default Product
