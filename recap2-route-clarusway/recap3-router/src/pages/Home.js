import React from 'react'
import Slider from '../components/Slider'
import Courses from "../components/Courses"
import courseData from "../data/courseData"

const Home = () => {
    return (
        <div>
          <Slider/> 
          <Courses data={courseData}/>
        </div>
    )
}

export default Home
