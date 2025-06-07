import React from 'react';
import './Card.css'

const Card =({ image,title,link }) =>{
  return (

    
        <div className="card-content">
         <div className="card-left">
         
            <h3 className="course-title">{title}</h3>
            <a href={link} className="view-btn">View Courses →</a>
            </div>
        <div className="card-right">
        
          <img src ={image} alt = {title}   width ="120px" height ="150px" className="card-image"/ >
        </div>
        
        
           
            
        </div>
   
    
  );
};

export default Card;