import React from 'react'
import ima from '../assets/image.jpg'
import instagram from '../assets/instagramIcon.png'
import Message from '../assets/Message-icon.png'
export default function LeadCard() {
  return (
    <>
        <div className="mainbox flex flex-row w-[558.4px] h-[171px] bg-[#EFEFEF]   items-center rounded-[20px] mt-[50px] ml-[50px]">
              
              {/* Gradient Border Section */}
              <div className="h-[204.02px] w-[204.02px] rounded-full p-[4px] ml-[-46px]" 
                style={{
                  backgroundImage: 'linear-gradient(90deg, #FF00D5, #C300FF, #005DFF)',
                  borderRadius: '50%',
                  padding: '4px'
                }}
              >
                {/* Profile Image */}
                <img 
                  className="h-full w-full rounded-full object-cover"
                  src={ima}
                />
              </div>
      
              {/* Right Section */}
              <div className='right-section ml-5 text-black'>
                <h3 className='font-sans font-bold text-[29px] tracking-[0px]'>Dr. Deepasikha Mishra</h3>
                <p className='font-sans font-normal text-[24px] tracking-[0px]'>GDG VIT-AP Club Coordinator</p>
                <div className="flex flex-row gap-[20px]">
                <p className='font-sans font-normal text-[19px] tracking-[0px]'>Associate Professor Grade - 2</p>
                <div className="flex flex-row gap-[6px]">
                <a>  <img className="w-[46.6px] h-[46.6px]" src={instagram}/> </a>
              <a href={`mailto:${`lead@gmail.com`}`}> <img className="w-[46.6px] h-[46.6px]" src={Message}/></a>
                </div>
                </div>
              </div>
            </div>
    </>
  )
}
