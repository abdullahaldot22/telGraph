import React, { useEffect, useState } from 'react'
import pro from '../../../../../public/frontend/public/profilePicture/commentator.png'
import { MdPhoneEnabled } from "react-icons/md";
import { FaUser } from "react-icons/fa6";
import { Link } from '@inertiajs/react';
import { CgAttachment } from "react-icons/cg";
import { MdOutlineEmojiObjects } from "react-icons/md";
import { GrSend } from "react-icons/gr";

import { RiMailSendFill } from "react-icons/ri";
import { RiSendPlane2Fill } from "react-icons/ri";
import Infinitescrollmsg from '../Fregment/Infinitescrollmsg';

const MainbarMessage = () => {

    const [val, setval] = useState({
        message: '',
        msglen: 0,
    });

    useEffect(() => {}, [val]);

    const handletype = (e) => {
        let length = e.target.value.length;
        setval({
            message: e.target.value,
            msglen: length,
        })
    }

    const handlesubmit = (e) => {
        e.preventDefault();
        console.log('found');
    }

  return (
    <div className='w-full'>
        <div className='h-full bg-cliv text-cli relative'>
            <div className='parti w-full'>
                <div className='bg-clvi px-6 py-4 flex justify-between items-center'>
                    <div className='fpart flex'>
                        <img className='w-10 h-10 rounded-full' src={pro}/>
                        <div className='spart pl-4 pt-0'>
                            <div className='pi text-[15px] pb-0.5'>Alejandrin Crist</div>
                            <div className='currentStatus text-[12px] text-cliii'>Offline</div>
                        </div>
                    </div>
                    <div className='epart pr-4 flex gap-x-1'>
                        <Link className='px-4 py-2 hover:text-cliv ease-out duration-150'><MdPhoneEnabled className='text-xl'/></Link>
                        <Link className='px-4 py-2 hover:text-cliv ease-out duration-150'><FaUser className='text-lg'/></Link>

                    </div>
                </div>

            </div>
            <div className='partii px-5'>
                <div id='scrolldiv' className='scroll overflow-hidden pt-5 flex justify-start items-end'>
                    <Infinitescrollmsg/>
                </div>
            </div>
            <div className='typebox absolute w-full bottom-[95px] px-2 pb-6 pt-1 bg-cliv z-10'>
                <form onSubmit={handlesubmit} encType='multipart/form-data'>
                    <div className='bg-clvi flex items-center rounded-sm py-2 px-2'>
                        <div className='partone mr-2'>
                            <label>
                                <input type='file' hidden/>
                                <div className='box py-2 px-2 cursor-pointer text-md hover:text-cliii ease-out duration-200'><CgAttachment /></div>
                            </label>
                        </div>
                        <div className='parttwo w-full'>
                            <div className='text-box bg-clv rounded-sm'>
                                <div className='inputbox flex items-center bg-clv rounded-sm h-full'>
                                    <div className='w-full'>
                                        <input className='bg-clv border-none py-1 rounded-sm w-full max-w-full h-full' onChange={handletype} placeholder='Write a message ..'/>
                                    </div>
                                    <div className='sidebox'>
                                        <div className='icon cursor-pointer h-full text-xl px-2 py-1.5 ease-out duration-100 hover:text-clii'><MdOutlineEmojiObjects /></div>
                                    </div>
                                </div>
                                <div className='length text-[9px] w-full text-right pr-1.5 pb-0.5 text-cliii'>{val.msglen >= 226 ? 'Limit crossed !' : val.msglen} / 225</div>
                            </div>
                        </div>
                        <div className='partthree mt-1.5'>
                            {val.msglen >= 226 ?
                                <button type='submit' title='Character limit to send message is 225' className='bg-cliv text-clv rounded-sm mr-2 ml-3' disabled={true}><div className='py-2.5 px-3'><GrSend /></div></button>
                             :
                                <button type='submit' className='bg-clii text-clv hover:bg-cli hover:text-clvi ease-out duration-200 rounded-sm mr-2 ml-3'><div className='py-2.5 px-3'><RiMailSendFill /></div></button>
                             }
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default MainbarMessage
