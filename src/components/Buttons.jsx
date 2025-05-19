import React from 'react'
import { useState } from 'react'
export default function (props) {
    const [active, setActive] = useState('Design Team')

    const teams = [
      'Design Team',
      'Core Team',
      'Web Development Team',
      'Marketing Team',
      'Machine Learning Team'
    ]
  
    return (
      <div className="flex flex-row flex-wrap gap-x-[80px] gap-y-[35px] justify-center  p-4 w-[1087px]">
        {teams.map((team, index) => (
        <button 
        key={index}
        onClick={() => {setActive(team);
        props.selectTeam(team);
        }}
        className={`px-6 h-[70px] flex justify-center items-center rounded-full font-normal text-[32px] 
                    text-blue-500 border-2 border-blue-500 
                    transition-all duration-300 ${
                      active === team 
                        ? 'bg-blue-500 text-white' 
                        : 'bg-transparent hover:bg-blue-100'
                    }`}
      >
        {team}
      </button>
      
        ))}
      </div>
    )
}
