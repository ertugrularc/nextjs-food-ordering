import React from 'react'

const Title = ({children, addClass }) => {
  return (
    // children özelliği ne gönderirsem bastır anlamına gelir 
    <div className={`${addClass} font-dancing font-bold`}>{children}</div>
  )
}

export default Title