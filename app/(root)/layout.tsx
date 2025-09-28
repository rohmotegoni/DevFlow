import Navbar from '@/components/navigation/navbar'
import React from 'react'

const layout = ({children} : {children: React.ReactNode}) => {
  return (
    <main>
        <Navbar />
        {children}
    </main>
  )
}

export default layout