import React from 'react'
import Teamicon from "../assets/Teamicon.png"
import LeadsOfSpecilizedCards from '../AggregateComponents/LeadsOfSpecilizedCards'
import TeamMatesCards from './TeamMatesCards'
import AboutTeam from './AboutTeam'
import {data} from './details';
export default function TeamCard(props) {
  const data1=data;
  const filteredData=data1.filter((member)=>member.department.name.toLowerCase()===props.displayTeam.toLowerCase());
  const leadsData=filteredData.filter((member)=>member.departmentRole.toLowerCase()==='lead' ||  member.departmentRole.toLowerCase() === 'co-lead');
  const membersData=filteredData.filter((member)=>member.departmentRole.toLowerCase()==='member');
  return (
    <div className='w-[1170px] flex flex-col bg-[#F6F9FF] rounded-[29px] p-5 border-[#00000033] border-[1px]'>
        <div className='Title flex flex-row justify-center gap-2'>
        <div className='font-sans font-bold text-[48px]'>
         {props.displayTeam}
        </div>
        <img src={Teamicon} alt="title image"/>
        </div>
        <div className='TeamLeadDetails'>

         <LeadsOfSpecilizedCards data={leadsData}/>  
        </div>
       <TeamMatesCards data={membersData}/>
     {/* <div className='flex flex-row justify-center'>
     <button 
  className="mt-[60px] mb-[60px] px-6 py-3 bg-[#458aff] text-white text-[20px] 
             rounded-full border-[1px] border-[#00000033] 
             flex justify-center items-center w-[200px] shadow-sm 
             "
>
  Show more
</button>
     </div> */}

     
      <div className=' flex flex-row justify-center '>
      <AboutTeam/>  
      </div>
    </div>
  )
}
