import React ,{ useState ,useContext} from "react";
import Context from "./context";
import { useSelector } from "react-redux";

const CreateAndLogin = (props) => {
    async function CreateAccount( data,url = 'https://amazon-clone-deploy-7lv8.vercel.app/Account/') {
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
        body: JSON.stringify(data)  
        });
        const json =await response.json()
        // console.log("NewAccountcreated",json)
        return json.sucess
      }
    async function LoginAccount( data,url = 'https://amazon-clone-deploy-7lv8.vercel.app/Account/login') {
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
        body: JSON.stringify(data)  
        });
        const json =await response.json()
        // console.log("Account logged in",json.sucess)
        return [json.sucess,json.result]
      }
      async function additems( data,url = 'https://amazon-clone-deploy-7lv8.vercel.app/Cart/additem') {
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            "auth":window.localStorage.getItem('AuthToken')
          },
        body: JSON.stringify({"Product":JSON.stringify(data)}) 
        });
        // console.log("item added successfully",response)
      }
      async function getitems( data,url = 'https://amazon-clone-deploy-7lv8.vercel.app/Cart/getitem') {
        const response = await fetch(url, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            "auth":data
          },
        
        })
        // .then((res)=>{console.log(res.json())})
        const arr=await response.json();
        return arr
      }
      async function deleteitems( auth,data,url = 'https://amazon-clone-deploy-7lv8.vercel.app/Cart/deletenote') {
        const response = await fetch(url, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            "auth":auth
          },
          body: (JSON.stringify(data) )
        })
        const arr=await response.json();
        return arr
      }
      async function emptyCart( auth,url = 'https://amazon-clone-deploy-7lv8.vercel.app/Cart/empty') {
        const response = await fetch(url, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            "auth":auth
          },
          
        
        })
        return 
      }
      async function AddtoOrders( auth,data,url = 'https://amazon-clone-deploy-7lv8.vercel.app/Orders/additem') {
        const response = await fetch(url, {
          method: 'POST',

          headers: {
            'Content-Type': 'application/json',
            "auth":auth
          },
          // body: JSON.stringify({"Basket":JSON.stringify(data)}) 
          body:JSON.stringify({"Basket":JSON.stringify(data.Basket),"Paymentid":(data.Paymentid)})
        
        })
        const res=await response
        // console.log(res)
        return res
      }
      async function GetOrders( auth,url = 'https://amazon-clone-deploy-7lv8.vercel.app/Orders/getitem') {
        const response = await fetch(url, {
          method: 'GET',

          headers: {
            'Content-Type': 'application/json',
            "auth":auth
          },
        
        })
        const res=await response.json()
        return res
      }
  return (
    <Context.Provider value={{ CreateAccount,LoginAccount,additems,getitems,deleteitems,emptyCart,AddtoOrders,GetOrders}}>
            {props.children}
        </Context.Provider>
  )
}

export default CreateAndLogin

