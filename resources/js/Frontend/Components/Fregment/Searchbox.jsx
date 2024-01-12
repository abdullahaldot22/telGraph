import React from 'react'

const Searchbox = ({place}) => {
  return (
    <div className='w-full px-5'>
        <input className='bg-cliv w-full py-1 rounded-sm border-none' placeholder={place} type='text'/>
    </div>
  )
}

export default Searchbox
