import React from 'react'

const Content = ({children}) => {
  return (
    <div className="grid items-center h-[calc(100vh_-_92px)] justify-items-center">
      {children}
    </div>
  )
}

export default Content
