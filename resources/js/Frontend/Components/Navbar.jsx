import React, { useState } from 'react'
import Scrollbars from 'react-custom-scrollbars';
import { FaHome, FaSnowboarding } from "react-icons/fa";
import { IoNotifications, IoSettingsSharp, IoLogOutSharp, IoPersonAdd } from "react-icons/io5";
import { BiSolidMessageDetail, BiSolidMessageSquareDetail  } from "react-icons/bi";
import { IoMdCall } from "react-icons/io";
import { RiAddLine } from "react-icons/ri";
import { MdCallEnd } from "react-icons/md";
import User from './../../../../public/frontend/public/profilePicture/commentator.png';
import { Link } from '@inertiajs/react';
import { useDispatch } from 'react-redux';
import { leftbar, mainbar } from '@/store/frontend/store';

const Navbar = () => {
    const dispatch = useDispatch();

    const msglist = () => {dispatch(leftbar.msgList())};
    const calllist = () => {dispatch(leftbar.callList())};
    const activefriendbox = () => {dispatch(mainbar.activeFriendBox())};

  return (
    <div>
        <div className='bar bg-clvi w-wlg h-full text-cli z-40'>
            <Scrollbars autoHide style={{ width: '100%', height: '100%' }}>
            <div className='flex h-full flex-col justify-between pt-4'>
                <div className='parti flex flex-col items-center justify-center'>
                    <Link href='' onClick={activefriendbox} className='py-4 px-7 hover:bg-cliv ease-out duration-200'><FaSnowboarding className='text-cli text-2xl'/></Link>
                    <Link onClick={msglist} href='' className='py-4 px-7 hover:bg-cliv ease-out duration-200'><BiSolidMessageSquareDetail className='text-cli text-2xl'/></Link>
                    <Link href='' className='py-4 px-7 hover:bg-cliv ease-out duration-200'><IoNotifications className='text-cli text-2xl'/></Link>
                    <Link href='' onClick={calllist} className='py-4 px-7 hover:bg-cliv ease-out duration-200'><MdCallEnd className='text-cli text-2xl'/></Link>
                    <Link href='' className='py-4 px-7 hover:bg-cliv ease-out duration-200'><IoPersonAdd className='text-cli text-2xl'/></Link>
                </div>
                <div className='partii flex flex-col items-center justify-center pb-4'>
                    <Link href='' className='py-3 px-6 hover:bg-cliv ease-out duration-200'>
                        <div className='w-8 h-8 rounded-full'>
                            <img className='border-box' src={User}/>
                        </div>
                    </Link>
                    <Link href='' className='py-4 px-7 hover:bg-cliv ease-out duration-200'><IoSettingsSharp className='text-cli text-2xl'/></Link>
                    <Link href='' className='py-4 px-7 hover:bg-cliv ease-out duration-200'><IoLogOutSharp className='text-cli text-2xl'/></Link>
                </div>
            </div>
                </Scrollbars>
        </div>
    </div>
  )
}

export default Navbar
