import React from 'react'
import { Link } from 'react-router-dom'

export const Listitem = ({restview}) => {
  return (
    <Link to ={`/restview/${restview.id}/`}>
      <div className="row">
        
       <div class="leftcolumn">
        
          <div class ="card">
           <div class="title">
              <h1>{restview.title_page}</h1>
          </div>
            
            <img src={restview.coverpicture} alt="Cinque Terre" height="500 px"  width="centre" padding="auto"/>
            <div class="desc" ><h4>{restview.summary[50]}</h4></div>
           </div>
        </div>
        <div class="rightcolumn">
           <div class="card">
             <h2>{restview.title_page}</h2>
             <img src={restview.coverpicture} alt="Cinque Terre" height="500 px" />
           </div>
      </div>


      </div>

       

    </Link>
  )
}

export default Listitem


