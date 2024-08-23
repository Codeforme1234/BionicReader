import React from 'react'

const Header = () => {
  return (
    <div className='flex mainfont h-[10vh] justify-between px-4 pt-3 '>
        <h1 className=' font-semibold text-4xl'>Bionic Reader</h1>
        <div className='flex justify-between space-x-3'>
            <h2>LinkedIn</h2>
            <h2>Github</h2>
        </div>
    </div>
  )
}

export default Header