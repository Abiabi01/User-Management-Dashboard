import React from 'react'
import { Skeleton } from './ui/skeleton'

const TableSkeleton = () => {
  return (
    <div className='space-y-3'>
        {[...Array(5).map((_,i) => (
          <div key={i} className="h-4 bg-gray-200 rounded w-full animate-pulse">
            <Skeleton className="h-4 w-[50px]"/>
            <Skeleton className="h-4 w-[100px]"/>
            <Skeleton className="h-4 w-[150px]"/>
            <Skeleton className="h-4 w-[80px]"/>
          </div>
        ) )]}
      
    </div>
  )
}

export default TableSkeleton
