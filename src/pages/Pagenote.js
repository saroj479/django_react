import React, {useState,useEffect}  from 'react'
import { useParams} from 'react-router-dom'


  

const Pagenote =() => {
  const {id} =useParams();
  const [restal,setNotesl]=useState({});
  console.log(restal)


  useEffect(()=> {
    getNote();


  },[]);

  let getNote =async ()=> {
    let response= await fetch (`/api/restview/${id}`)
    let data= await response.json()
    // let newpro=data.find((restview)=> restview.id === parseInt(id));
    setNotesl(data)


  }




  return(
    <div>

         <div className="page-list">
           <p>{restal.summary}</p>
               
          </div>

      
      </div>
  )
}

export default Pagenote
