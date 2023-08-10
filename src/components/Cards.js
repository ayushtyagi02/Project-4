import React, { useState } from "react";
import Card from "./Card"
const Cards=(props)=>{
    let courses=props.courses;
    let category=props.category;
   const [likedCourses,setLiked]=useState([]);
    function getCourses(){
      if(category==="All"){
        let allCourses=[];
    console.log(courses);
    Object.values(courses).forEach(array=>{
      array.forEach(courseData=>{
        allCourses.push(courseData);
      }
      )}
      )
      return allCourses;
      }
      else{
        return courses[category];
      }}
      
    return (
       <div className="flex flex-wrap justify-center gap-4 mb-4">
        {
         
        
      getCourses().map((course)=>{
        
       return <Card key={course.id} course={course} likedCourses={likedCourses} setLiked={setLiked}/>
      })
        
      
      }
       </div>
    )
}

export default Cards;