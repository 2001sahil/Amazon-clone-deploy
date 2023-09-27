// import { body } from "express-validator";
import React ,{ useState } from "react";
import Context from "./context";

const Used = (props) => {

    const Delete=(id)=>{
        // console.log(data[id])
        let len=data.length
        let temp=[]
        for (let k=0;k<len;k++){
            if(k!==id){
                temp.push(data[k])
            }
        }
        setdata(temp)
    }
    async function getNotes(url = 'http://localhost:8000/note/getnote') {
        const response = await fetch(url, {
          method: 'GET', 
          headers: {
            'Content-Type': 'application/json',
            "auth":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJxdWVyeSI6eyJpZCI6IjYzZDBjOTAyZTVjZDA0ZmRhYmJhNDk4MSJ9LCJpYXQiOjE2NzQ2Mjc5OTF9.0t7YHjEmupjMOdbhCCd_4OLydBwG6kPSK1edzqV4Dt0"
          },
        });
        let collect=await response.json()
        console.log(collect)
        await setdata(collect);
      }
    async function addNotes( data,url = 'http://localhost:8000/note/addnote') {
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            "auth":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJxdWVyeSI6eyJpZCI6IjYzZDBjOTAyZTVjZDA0ZmRhYmJhNDk4MSJ9LCJpYXQiOjE2NzQ2Mjc5OTF9.0t7YHjEmupjMOdbhCCd_4OLydBwG6kPSK1edzqV4Dt0"
          },
        body: JSON.stringify(data) 
        });
      }
    async function deleteNotes( data,url = 'http://localhost:8000/note/deletenote') {
        const response = await fetch(url, {
          method: 'delete',
          headers: {
            'Content-Type': 'application/json',
            "auth":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJxdWVyeSI6eyJpZCI6IjYzZDBjOTAyZTVjZDA0ZmRhYmJhNDk4MSJ9LCJpYXQiOjE2NzQ2Mjc5OTF9.0t7YHjEmupjMOdbhCCd_4OLydBwG6kPSK1edzqV4Dt0"
          },
        body: JSON.stringify(data) 
      });
      getNotes()
      }
    async function updataNotes( data,id) {
        const url = `http://localhost:8000/note/update${id}`
        const response = await fetch(url, {
          method: 'put',
          headers: {
            'Content-Type': 'application/json',
            "auth":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJxdWVyeSI6eyJpZCI6IjYzZDBjOTAyZTVjZDA0ZmRhYmJhNDk4MSJ9LCJpYXQiOjE2NzQ2Mjc5OTF9.0t7YHjEmupjMOdbhCCd_4OLydBwG6kPSK1edzqV4Dt0"
          },
        body: JSON.stringify(data)
        });
        // console.log("saa")
        getNotes()
      }
    let fdata = [{
        title: "hello my name is sahil",id:"0", }]

    const [data, setdata] = useState(fdata)
    
    return (
        <Context.Provider value={{ data,Delete,setdata,addNotes,getNotes,deleteNotes,updataNotes}}>
            {props.children}
        </Context.Provider>
    )

}
export default Used