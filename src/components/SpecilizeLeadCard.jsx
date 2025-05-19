import React from 'react'
import img from '../assets/image.jpg'
import instagram from "../assets/instagramIcon.png"
import github from "../assets/GitHub.png"
export default function SpecilizeLeadCard(props) {
  return (
    
    <div className="SpecalizedLeadCard flex flex-col items-center w-[300px] h-[320.18px] gap-6 bg-[#F1F1F1] rounded-[23px] shadow-[0px_15px_50px_0px_rgba(0,0,0,0.20)] border-[1px] border-[#4889F433] ">
    <img 
  className="w-[221px] h-[221px] rounded-full shadow-[2px_15px_50px_0px_rgba(0,0,0,0.25)] mt-[-110.5px] border-[1px] border-[#00000033]" 
  src={img}
/>


        <div className='flex flex-col items-center'>
            <div className='font-sans font-bold text-[24px] '>{props.lead.name}</div>
            <div className='font-sans font-normal text-[20px]'>{props.lead.department.name}</div>
            <div className='font-sans font-normal text-[20px]'>{props.lead.departmentRole}</div>
            
        </div>
        <div className='flex flex-row gap-4'>
              <a><img src={instagram} alt="insta"/></a>
              <a><img src={github} alt="github"/></a>
            </div>

    </div>
  
  )
}
