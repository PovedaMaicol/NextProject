import { ReactNode } from 'react'
import React from 'react'
import Link from 'next/link';





interface TiendaLayoutProps {
  children: ReactNode;
  }

const TiendaLayout = ({ children }: TiendaLayoutProps) => {
  return (
    <>
     <nav>
      <h3>Seccion tienda</h3>

      <ul>
        <li>
          <Link href="/tienda/categorias">Categorias</Link>
        </li>
        <li>
          <Link href="/tienda/categorias/computadoras">Computadoras</Link>
        </li>
      </ul>
     </nav>
     {children}
    </>
   
  )
}

export default TiendaLayout