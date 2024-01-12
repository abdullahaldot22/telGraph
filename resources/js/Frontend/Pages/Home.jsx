import React from 'react'
import './../../../css/Extra/ess.css'
import Navbar from '../Components/Navbar';
import LeftSidebarHome from '../Components/LeftSidebarHome';
import Mainbar from '../Components/MainBar';
import Rightsidebar from '../Components/Rightsidebar';
import Mainbarfriendsactivity from '../Components/MainBar/Mainbarfriendsactivity';
import ScrollLock, { TouchScrollable } from 'react-scrolllock';
import { Provider } from 'react-redux';
import store from '@/store/frontend/store';


const Home = () => {

  return (
    <div className=''>
      <Provider store={store}>
          {/* <ScrollLock> */}
              <div id='root-home' className='h-screen flex font-sans text-cli'>
                  <Navbar/>
                  <LeftSidebarHome/>
                  <Mainbar/>
                  <Rightsidebar/>
              </div>
          {/* </ScrollLock> */}
      </Provider>
    </div>
  )
}

export default Home
