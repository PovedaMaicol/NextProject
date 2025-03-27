"use client"
import React from 'react'
import { useParams } from 'next/navigation'

interface UserPageProps {
    params : {
        id: string
    }

}

const UserPage = () => {
const { id } = useParams()
console.log('user', id)
  return (
    <div>
        <h1>{`User ${id}`}</h1>
   
    </div>
  )
}

export default UserPage