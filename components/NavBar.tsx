import React from 'react'
import Link from "next/link";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className='navbar py-5'>
        <Link href="/">
        <h1 className='text-3xl font-bold'>NextJS Course</h1>
        </Link>
   
    <ul>
        <li>
            <Link href="/">Home</Link>
        </li>
        <li>
            <Link href="/about">About</Link>
        </li>
        <li>
            <Link href="/tienda">Tienda</Link>
        </li>
        <li>
            <Link href='/posts'>Posts</Link>
        </li>
    </ul>
</nav>
  )
}

export default NavBar