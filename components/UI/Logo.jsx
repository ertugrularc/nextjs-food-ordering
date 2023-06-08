import Link from 'next/link'
import React from 'react'

function Logo() {
  return (
    <Link href="/menu">
      <span className='text-[2rem] font-dancing font-bold cursor-pointer'>Feane</span>
    
  </Link>
  )
}

export default Logo