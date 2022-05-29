import React, { useState,useEffect } from 'react'
import Listitem from '../components/Listitem'

const Pagelist = () => {
      
     let [restarea,setNotes]=useState([])
     useEffect(() => {
       getviews()

     },[])

     let getviews= async()=>{
       let response=await fetch ('/api/restview/')
       let data=await response.json()
       setNotes(data)
     }
     return (
        <div className ="restview"> 
             <div className="page-list">
               {restarea.map((restview,index) => (
                 <Listitem key={index} restview={restview} />
               ))}
             </div>
          
         </div>
      )
}

export default Pagelist