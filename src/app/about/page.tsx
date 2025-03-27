"use client"
import { useRouter } from 'next/navigation'
import React from 'react'


const metadata = {
  title: 'About',
}



const AboutPage = () => {
  const router = useRouter()
  return (
    <>
    <h1>Esto es un about...</h1>
    <button
      onClick={() => {
        alert('The Link tag is not using because it is cant be executing logig, only redirecting')
        router.push('/')
      }}
    >
hi
    </button>
    </>
  )
}

export default AboutPage