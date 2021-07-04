import React from 'react';
import  "./_categories.scss";
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getPopularVedios, getVediosByCategory } from '../../redux/actions/vedios.action';

const keywords = [
    'All',
   'React js',
   'Angular js',
   'React Native',
   'use of API',
   'Redux',
   'Music',
   'Algorithm Art ',
   'Guitar',
   'Bengali Songs',
   'Coding',
   'Cricket',
   'Football',
   'Real Madrid',
   'Gatsby',
   'Poor Coder',
   'Shwetabh',
]

const Categories = () => {

    const [activeElement, setActiveElement] = useState("All")

    const dispatch = useDispatch()

    const handleClick=(value) =>{
        setActiveElement(value)
        if(value === "All"){
            dispatch(getPopularVedios())
            
        }      
        else {
            
            dispatch(getVediosByCategory(value))
            
        }
        
    }

    return (
        <div className="categoriesbar">
         {keywords.map((value,i) => 
                 (
                 <span 
                 key={i}
                 onClick = {()=>handleClick(value)}
                 className={activeElement ===value ? "active":""}>
            {value}</span>
            ))}
         </div>
    )
}

export default Categories
