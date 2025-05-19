import React from 'react'
import SpecilizeLeadCard  from "../components/SpecilizeLeadCard"
export default function LeadsOfSpecilizedCards(props) {
  const leads=props.data;

  return (
    <div className='flex flex-row gap-[120px] mt-[160px] justify-center '>
     {leads.map((lead) => (
        <SpecilizeLeadCard key={lead.memberID} lead={lead} />
      ))}
    </div>
    
  )
}
