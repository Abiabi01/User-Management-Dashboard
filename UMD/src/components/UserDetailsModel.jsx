import React from 'react'
import { Dialog, DialogContent } from './ui/dialog';

const UserDetailsModel = ({user,open,onClose}) => {
    if(!user) return null;
  return (
    <Dialog open={open} onOpenChange={onClose}>
        <DialogContent>
            <h2 className="text-xl font-bold">{user.name}</h2>
            <p>Email: {user.email}</p>
            <p>Gender: {user.gender}</p>
            <p>Age:{user.age}</p>
            <p>Phone:{user.phone}</p>
            <p>Address:{user.address?.city}</p>
        </DialogContent>
    </Dialog>
  )
}

export default UserDetailsModel
