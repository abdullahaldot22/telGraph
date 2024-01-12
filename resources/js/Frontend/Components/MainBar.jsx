import React from 'react';
import MainbarMessage from './MainBar/MainbarMessage';
import Mainbarfriendsactivity from './MainBar/Mainbarfriendsactivity';
import { useSelector } from 'react-redux';

const MainBar = () => {
    const mainbar = useSelector((state) => state.mainbar.mainbarCount);
    // console.log(mainbar);
  return (
    <div className='w-full h-full min-w-[506px]'>
    { mainbar == 1 &&
        <Mainbarfriendsactivity/>
    }
    { mainbar == 2 &&
        <MainbarMessage/>
    }
    </div>
  )
}

export default MainBar
