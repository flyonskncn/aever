import React, { useState } from 'react'
import TeamMateCard from './TeamMateCard'

export default function TeamMatesCards({ data }) {
  const [showAll, setShowAll] = useState(false)

  const visibleData = showAll ? data : data.slice(0, 8)

  return (
    <>
      <div className='flex flex-wrap flex-row mt-[160px] gap-x-10 gap-y-[100px] justify-center'>
        {visibleData.map((member) => (
          <TeamMateCard key={member.memberID} member={member} />
        ))}
      </div>

      <div className='flex flex-row justify-center'>
        <button
          onClick={() => setShowAll(prev => !prev)}
          className="mt-[60px] mb-[60px] px-6 py-3 bg-[#458aff] text-white text-[20px] 
                     rounded-full border-[1px] border-[#00000033] 
                     flex justify-center items-center w-[200px] shadow-sm"
        >
          {showAll ? 'Show Less' : 'Show More'}
        </button>
      </div>
    </>
  )
}
