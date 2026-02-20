import React, { useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from '../features/users/userSlice'
import UserTable from '../components/table/UserTable'
import { columnNames } from '../utils/tableColumns'
import { ChevronFirst, ChevronLast, ChevronLastIcon, ChevronLeft, ChevronRight } from 'lucide-react'
import { useDebounce } from '@/hooks/useDebounce'
import SeacrInput from '@/components/SeacrInput'
import GenderFilter from '@/components/GenderFilter'
import TableSkeleton from '@/components/TableSkeleton'

const Dashboard = () => {
  const dispatch = useDispatch()
  const { users, loading, error, page, totalPages } = useSelector((state) => state.users)
  const [search, setSearch] = useState("")
  const [gender, setGender] = useState("all")
  const debounceSearch = useDebounce(search, 400)

  const finalFilteredUsers = useMemo(() => {
    let data = users;

    // Gender filter
    if (gender !== "all") {
      data = data.filter(user => user.gender === gender);
    }
    return data;
  }, [users, gender]);

  useEffect(() => {
    dispatch(fetchUsers({ page, search: debounceSearch }));
  }, [dispatch, page, debounceSearch]);

  
  if (loading) return <div className="p-6"><TableSkeleton /></div>
  if (error) return <p>{error}</p>
  console.log(users)
  return (
    <div className='p-6 space-y-4 bg-blue-100 rounded-md h-screen'>
      <h3 className='text-2xl font-semibold text-center'>User Management Dashboard</h3>
      <div className="flex gap-4">
        <SeacrInput value={search} onChange={setSearch} />
        <GenderFilter value={gender} onChange={setGender} />
      </div>
      <UserTable data={finalFilteredUsers} columns={columnNames} className="w-full" />
      <div>
        <div className="flex gap-2 items-center">
          <button
            onClick={() => dispatch({ type: "users/setPage", payload: 1 })}
            className="px-4 py-2 border rounded disabled:opacity-10">
            <ChevronFirst className='w-4 h-4' />
          </button>
          <button
            disabled={page === 1}
            onClick={() => dispatch({ type: "users/setPage", payload: page - 1 })}
            className="px-4 py-2 border rounded disabled:opacity-50">
            <ChevronLeft className="w-4 h-4" />
          </button>

          <span>
            Page {page} of {totalPages}
          </span>

          <button
            disabled={page === totalPages}
            onClick={() => dispatch({ type: "users/setPage", payload: page + 1 })}
            className="px-4 py-2 border rounded disabled:opacity-50">
            <ChevronRight className="w-4 h-4" />
          </button>
          <button onClick={() => dispatch({ type: "users/setPage", payload: totalPages })}
            className="px-4 py-2 border rounded text-black">
            <ChevronLastIcon className='w-4 h-4' />
          </button>
        </div>
      </div>
    </div>

  )
}

export default Dashboard
