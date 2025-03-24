import Link from 'next/link'
import React from 'react'

const NotFound = () => {
  return (
    <section>
        <h1>404</h1>
        <p>Page not found</p>
        <Link href="/">Volver</Link>
    </section>
  )
}

export default NotFound