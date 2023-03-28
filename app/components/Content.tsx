import React from 'react'

const Content = ({children}) => {
  return (
    <div className="grid w-full items-center h-[calc(100vh_-_92px)] justify-items-center text-black dark:text-white">
      {children}
    </div>
  );
}

export default Content
