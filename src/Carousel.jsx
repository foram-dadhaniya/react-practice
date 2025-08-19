import React, { useState } from 'react'

export const Carousel = () => {
const [currentIndex, setCurrentIndex] = useState(0);
 const carouselData = [
    {label: 'dot', img: 'banner 1'},
    {label: 'dot', img: 'banner 2'},
    {label: 'dot', img: 'banner 3'}
 ]
 const handlePrev = () => {
    if(currentIndex > 0){
        setCurrentIndex(currentIndex - 1);
    } 
 }
  const handleNext = () => {
    if(currentIndex < carouselData.length -  1){
        setCurrentIndex(currentIndex + 1);
    }
 }
  return (
    <div>
       
        <div className='d-flex'>
            <button onClick={handlePrev}>Prev</button>
            {carouselData[currentIndex].img}
            <button onClick={handleNext} >Next</button>
        </div>
    </div>
  )
}
