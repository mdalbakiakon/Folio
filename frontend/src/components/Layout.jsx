import React from 'react'

const Layout = ({children}) => {
  return (
    <div className='w-full max-w-7xl mx-auto px-2.5'>
        {children}
    </div>
  )
}

export default Layout