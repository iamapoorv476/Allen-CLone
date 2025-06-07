import React from 'react';
import Card from './Card';
import './Card.css';
import jeeimg from './assets/jeee.png'
import neeimg from './assets/neet.png'
import nurtures from './assets/nurture.png'
const CourseSection =() =>{
    return(
        <section className="cards-section">
            <h2 className="section-heading">Pick the right course for you</h2>
            <div className="cards-container">
                <Card
           image = {jeeimg}    
          title=<h3 >JEE Courses</h3>
           link="/jee"
          
          
        />
        <Card
        image={neeimg}
          
          title=<h3>Neet Courses</h3>
          link ="/neet"
          
        />
        <Card
         image ={nurtures}
          title=<h3>Class 10</h3>
          link ="/nurture"
        />
            </div>
        </section>
    );
};
export default CourseSection;