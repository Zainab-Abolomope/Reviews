// import React from 'react'
import { useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';
import person from './data';




export default function Reviews() {
    const [index, setIndex] = useState(0);
    // const [people, setPeople] = useState(Person)
    const { name, job, image, text } = person[index];

    function nextPage(){
        if (index <  person.length - 1){
            return(
                setIndex((prevIndex)=> prevIndex + 1)
            )
        }
    }

    
    function prevPage(){
        if (index > 0){
            return(
                setIndex((prevIndex)=> prevIndex - 1)
            )
        }
    }



    function surprise(){
        let randomNumber = Math.floor(Math.random() * person.length )
        if (randomNumber){
            return(
                setIndex(randomNumber)
            )
        }
    }



    
    
  return (
    <article className='review'>
      <div className='img-container'>
        <img src={image} alt={name} className='person-img' />
        <span className='quote-icon'>
          <FaQuoteRight />
        </span>
      </div>
      <h4 className='author'>{name}</h4>
      <p className='job'>{job}</p>
      <p className='info'>{text}</p>
      <div className='button-container'>
        <button onClick={prevPage} className='prev-btn' >
          <FaChevronLeft />
        </button>
        <button  onClick={nextPage}className='next-btn' >
          <FaChevronRight />
        </button>
      </div>
      <button onClick={surprise} className='random-btn' >
        surprise me
      </button>
    </article>
    
    
  )

  }