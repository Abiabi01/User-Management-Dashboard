import React from 'react'
import { Input } from './ui/input'

const SeacrInput = ({value,onChange}) => {

  return (
    <div className='w-64 bg-white'>
         <Input placeholder = "Search" value={value} onChange={(e) =>onChange(e.target.value)}/>
        
    </div>
  )
}

export default SeacrInput
