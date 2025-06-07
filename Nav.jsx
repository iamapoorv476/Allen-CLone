import './style.css'
import Allenlogo from './assets/allen.png'
import { FaPhoneAlt } from 'react-icons/fa';
import { useState } from 'react';

 import { FaChevronRight } from 'react-icons/fa';
 import CourseSection from './CourseSection';
import { Outlet, Link, useLocation } from "react-router-dom";

function Nav(){

  const[isOpen,setisOpen] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === "/";
 
    return(
        <>
        
        <div className="container">
        <nav className="nav">
       
           <div>

           <Link to ="/">
           <img src ={Allenlogo} alt = "Allen logo" className="logo"/>
           </Link>
          
           
           </div>
           <div className="hamburger" onClick={()=> setisOpen(!isOpen)}>
            ☰
           </div>
           <div className={`nav-links ${isOpen ? 'open' : ''}`}>
           <div 
           className="dropdown">
           
           
           <a href ="#">Courses</a>
           <div className="dropdown-menu">
            <a href ="#" >
              <div className="dropdown-item">
              
                <span>Neet</span>
                <FaChevronRight className="dropdown-icon" />
                
                   <div className="submenu">
                  <Link to="/neet/online-coaching-class-11">Class 11</Link>
                      <Link to="/neet/online-coaching-class-12">Class 12</Link>
                      <Link to="/neet/online-coaching-class-12-plus">Class 12 Plus</Link>
                
                
                 

                
                
            
               
               </div>
                

                
                </div>

              
               
                

                
              
            </a>
            <a href ="#">
             <div className="dropdown-item">
      <span>JEE</span>
      <FaChevronRight className="dropdown-icon" />
    </div>
            </a>
            <a href="#"> <div className="dropdown-item">
      <span>Class 6-10</span>
      <FaChevronRight className="dropdown-icon" />
       </div>
       </a>
            <a href="#" > <div className="dropdown-item">
      <span>View All Options</span>
      <FaChevronRight className="dropdown-icon" />
    </div>
    </a>
           </div>
           </div>
          
           
           
            <a href="#">Test Series</a>
        <a href="#">Results  <span className="new-tag">NEW</span></a>
        <a href="#">Study Materials</a>
        <a href="#">Scholarships</a>
        <a href="#">Books</a>
        <a href="#">More</a>
        
           </div>
           <div className="nav-right">
        <div className="call-icon">
          <FaPhoneAlt />
        </div>
        <button className="login-btn">Login</button>
        
      </div>
      

             
           
        </nav>
      
        </div>
        {isHome && (
          <>

       
        
        <section className="results-banner-section">
        <div className=" image-container">
          <img src ="https://res.cloudinary.com/dpzpn3dkw/image/upload/w_1600,f_avif,q_auto/v1748867651/donezphcurfqzw8yoz7t.png?_upload_ref=ic_img_tool&__ar__=2.42" alt ="jee aadvanced 2025 results" className="results-banner"></img>
          </div>
        </section>
        <CourseSection/>
        </>
        )}
        
        <Outlet />

        </>
    )
}

export default Nav