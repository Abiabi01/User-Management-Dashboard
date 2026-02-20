import React from 'react'
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from './ui/select'

const GenderFilter = ({ value, onChange }) => {
    return (
        <div className='bg-white focus:border border-black'>
            <Select value={value} onValueChange={onChange}>
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select by Gender" />
                </SelectTrigger>
           
            <SelectContent>
                <SelectItem value="all">All</SelectItem>
                <SelectItem value="male">Male</SelectItem>
                <SelectItem value="female">Female</SelectItem>
            </SelectContent>
             </Select>
        </div>
    )
}

export default GenderFilter
