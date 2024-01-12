import React from 'react'
import MsgListBar from './leftSideBar/MsgListBar'
import { useSelector } from 'react-redux'
import CallListBar from './leftSideBar/CallListBar';


const LeftSidebarHome = () => {
    const lsbar = useSelector((state)=>state.lsbar.barCount);
    
  return (
    <div className='h-full w-full min-w-[268px] max-w-[400px]'>
        { lsbar == 1 &&
            <MsgListBar/>
        }
        { lsbar == 2 &&
            <CallListBar/>
        }
    </div>
  )
}

export default LeftSidebarHome
