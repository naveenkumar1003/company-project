import React from "react";
import './project.css'
import Logo  from './company.gif'
import Layout from './layout.jpg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import {faLocationDot} from '@fortawesome/free-solid-svg-icons'
import {faBell} from '@fortawesome/free-solid-svg-icons'
export function Project(){
    return(
        <>
        <div className="layout">

         <nav class="navbar navbar-expand-lg navbar-light ">
  <img  class="navbar-brand" height="50px" src={Logo}/>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link bg-danger" href="#">Find candidates <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Find job</a>
      </li>
     
      <li class="nav-item">
        <a class="nav-link disabled">Find Companies</a>
      </li>
    </ul>
    <form>
    <FontAwesomeIcon icon={faBell} /> <button class="mr-3 des" type="submit " >Search</button>
      <button class=" bg-danger des " type="submit">Search</button>
    </form>
  </div>
</nav> 
    
<h1 className="pt-5">Find the candidates as per your requirement</h1>
<div className="container-fluid">
    <div className="row">
        
   <div className=" col-lg-12 place  text-center pt-2 ">
   
       
            <div className="icon">
    <FontAwesomeIcon icon={faMagnifyingGlass}/>< input type="text" className="reg" placeholder="job title/Keyword"/>
    <FontAwesomeIcon icon={faLocationDot} /> <input type="text" className="reg" placeholder="Add Country/City"/>
     <button className="bg-danger text-light reg"> Search</button>
     </div>
    
   </div>
   
     </div>
</div>
  </div>

 
  
 

  
   
   
 



   
        </>
    )
}
 export default Project