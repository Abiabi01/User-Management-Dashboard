import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from '../features/users/userSlice'

const Dashboard = () => {
    const dispatch = useDispatch()
    const {users,loading,error} = useSelector((state) => state.users)

    useEffect(() => {
        dispatch(fetchUsers(1))
    },[dispatch])

    if(loading) return <p>Loading</p>
    if(error) return <p>{error}</p>
  return (
    <div>
      <div>
        <h3>Users</h3>
      </div>
      <div>
        <ul>
            {users.data.map((user) => (
                    <li key={user.id}>
                        {user.first_name} {user.last_name}
                    </li>
                ))
            }
        </ul>
      </div>
    </div>
  )
}

export default Dashboard
