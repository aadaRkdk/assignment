'use client'
import React,{useState} from 'react'
import { GrLike } from "react-icons/gr";
import { FaHeart } from "react-icons/fa";
import { FaRegFaceLaughSquint } from "react-icons/fa6";

const page = () => {
    const [color, setColor]= useState('grey')
    const [reaction, setReaction]= useState('love')
    const [reactionDivOpen, setReactionDivOpen]= useState(false)


    const changeReaction =(newReaction)=>{
      setReaction(newReaction)
    }

  const ReactionDiv= ()=>{
    return (
      <div className='border border-gray-200 shadow-lg w-32'>
        <button  className=' p-2 '>
            <GrLike onClick={()=> changeReaction('like')} color="skyblue"/>
        </button>
        <button  className=' p-2 '>
            <FaHeart  onClick={()=> changeReaction('love')} color="crimson"/>
        </button>
        <button  className=' p-2 '>
            <FaRegFaceLaughSquint onClick={()=> changeReaction('haha')} color="orange"/>
        </button>
      </div>
    )
  }

  const generateReactionButton = ()=>{
    //we will have if else later, if reaction is like, show like button,,..... similar
    if(reaction === 'love'){
      return (
            <button onMouseEnter={()=>setReactionDivOpen(true)} className=' p-2 '>
            <FaHeart color="crimson"/>
        </button>
      )
    }else  if(reaction === 'haha'){
      return (
            <button onMouseEnter={()=>setReactionDivOpen(true)} className=' p-2 '>
            <FaRegFaceLaughSquint color="orange"/>
        </button>
      )
    }
    else{
        return ( 
          <button onMouseEnter={()=>setReactionDivOpen(true)} className='bg-gray-200 p-2 border border-black'>
            <GrLike color={color}/>
        </button>)
 
    }
 
  }

//ternary operator ? : is alternative for if else
//Do not use ternary operator for multiple else if
  return (
    <div>
        {reactionDivOpen ? <ReactionDiv/>: null }
        {generateReactionButton()}
    </div>
  )
}

export default page