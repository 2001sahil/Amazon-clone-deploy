const {createSlice}=require("@reduxjs/toolkit")

const initialState={
    Usermail:null,
    // Email:"",
    Username:null,
    store:[],
    auth:null,
    tempprod:[], 
}
const CartSlice=createSlice({
    name:"laida",
    initialState,
    reducers:{
        setuseremail(state,action){
            state.Usermail=action.payload;
        },
        emptybasket(state,action){
            state.store=[]

        },
        setusername(state,action){
            state.Username=action.payload
        },
        add(state,action){
            state.store.push(action.payload);
        },
        setauth(state,action){
            state.auth=action.payload

        },
        setcart(state,action){
            state.store=action.payload

        },
        addtemptocart(state,action){
            state.tempprod=(action.payload)
            
        },
        remove(state,action){
            let index=-1;
            for(let i=0;i<state.store.length;i++){
                if(state.store[i].id===action.payload){
                    index=i;
                }
            }
            let newState=[...(state.store)]
            if(index>=0 && index<(state.store).length){
                newState.splice(index,1);
                
            }   
            state.store=newState;  
            
        }
    }
})
export const {add,remove,setuseremail,setusername,setauth,setcart,addtemptocart,emptybasket}=CartSlice.actions;
export const Slice= CartSlice.reducer;
