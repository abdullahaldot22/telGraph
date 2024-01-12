import React from 'react'
import './../../../../css/Extra/ess.css';
import Searchbox from './../Fregment/Searchbox';
import Scrollbars from 'react-custom-scrollbars';
import user from './../../../../../public/frontend/public/profilePicture/commentator.png';

import { GoDotFill } from 'react-icons/go';
import { MdDone, MdSmsFailed } from "react-icons/md";
import { IoMdDoneAll } from "react-icons/io";
import { BsFillChatLeftDotsFill } from "react-icons/bs";

import { useDispatch, useSelector } from 'react-redux';
import { mainbar } from '@/store/frontend/store';


const status = (stat) => {
    switch (stat) {
        case 0:
            return <BsFillChatLeftDotsFill className='text-base text-clii absolute top-7 right-1'/>;
            break;
        case 1:
            return <GoDotFill className='text-base text-clii absolute top-7 right-1'/>;
            break;
        case 2:
            return <MdDone className='text-base text-clii absolute top-7 right-1'/>;
            break;
        case 3:
            return <IoMdDoneAll className='text-base text-clii absolute top-7 right-1'/>;
            break;

        default:
            return <MdSmsFailed className='text-base text-clii absolute top-7 right-1'/>;
            break;
    }
}

const MsgListBar = () => {
    const dispatch = useDispatch();

    const mbar = useSelector((state) => state.mainbar.mainbarCount);
    const messagebox = () => {dispatch(mainbar.messageBox())};

  return (
    <div className='h-full w-full'>
        <div className='sidebar h-full bg-clv text-cli pb-2'>
            <div className='parti pt-6 w-full text-center pb-4'>
                <Searchbox place='Search Contacts'/>
            </div>
            <div className='partii pt-2 px-0 h-full'>
                <ul className='h-full pb-20'>
                    <Scrollbars autoHide style={{ height: '100%' }}>
                        <li onClick={messagebox} className='pr-3 pb-1'>
                            <div className='box flex flex-row justify-between py-2 pl-3 pr-2 rounded-md hover:bg-cliii ease-out duration-500 cursor-pointer'>
                                <div className='fpart flex'>
                                    <img className='w-12 h-12 rounded-full' src={user}/>
                                    <div className='spart pl-2.5 pt-0.5'>
                                        <div className='pi w-32 text-sm'>Alejandrin Crist</div>
                                        <div className='pi w-32 text-xs pt-1 text-clii whitespace-nowrap'>Earum hic quas nam ..</div>
                                    </div>
                                </div>
                                <div className='tpart pt-1 relative ease-in duration-500'>
                                    <div className='time text-xs whitespace-nowrap text-cliv'>12:27 am</div>
                                   {status(0)}
                                </div>
                            </div>
                        </li>
                        <li className='pr-3 pb-1'>
                            <div className='box flex flex-row justify-between py-2 pl-3 pr-2 rounded-md hover:bg-cliii ease-out duration-500 cursor-pointer'>
                                <div className='fpart flex'>
                                    <img className='w-12 h-12 rounded-full' src={user}/>
                                    <div className='spart pl-2.5 pt-0.5'>
                                        <div className='pi w-32 text-sm'>Alejandrin Crist</div>
                                        <div className='pi w-32 text-xs pt-1 text-clii whitespace-nowrap'>Earum hic quas nam ..</div>
                                    </div>
                                </div>
                                <div className='tpart pt-1 relative'>
                                    <div className='time text-xs whitespace-nowrap text-cliv'>12:27 am</div>
                                    {status(1)}
                                </div>
                            </div>
                        </li>
                        <li className='pr-3 pb-1'>
                            <div className='box flex flex-row justify-between py-2 pl-3 pr-2 rounded-md hover:bg-cliii ease-out duration-500 cursor-pointer'>
                                <div className='fpart flex'>
                                    <img className='w-12 h-12 rounded-full' src={user}/>
                                    <div className='spart pl-2.5 pt-0.5'>
                                        <div className='pi w-32 text-sm'>Alejandrin Crist</div>
                                        <div className='pi w-32 text-xs pt-1 text-clii whitespace-nowrap'>Earum hic quas nam ..</div>
                                    </div>
                                </div>
                                <div className='tpart pt-1 relative'>
                                    <div className='time text-xs whitespace-nowrap text-cliv'>12:27 am</div>
                                    {status(2)}
                                </div>
                            </div>
                        </li>
                        <li className='pr-3 pb-1'>
                            <div className='box flex flex-row justify-between py-2 pl-3 pr-2 rounded-md hover:bg-cliii ease-out duration-500 cursor-pointer'>
                                <div className='fpart flex'>
                                    <img className='w-12 h-12 rounded-full' src={user}/>
                                    <div className='spart pl-2.5 pt-0.5'>
                                        <div className='pi w-32 text-sm'>Alejandrin Crist</div>
                                        <div className='pi w-32 text-xs pt-1 text-clii whitespace-nowrap'>Earum hic quas nam ..</div>
                                    </div>
                                </div>
                                <div className='tpart pt-1 relative'>
                                    <div className='time text-xs whitespace-nowrap text-cliv'>12:27 am</div>
                                    {status(3)}
                                </div>
                            </div>
                        </li>
                        <li className='pr-3 pb-1'>
                            <div className='box flex flex-row justify-between py-2 pl-3 pr-2 rounded-md hover:bg-cliii ease-out duration-500 cursor-pointer'>
                                <div className='fpart flex'>
                                    <img className='w-12 h-12 rounded-full' src={user}/>
                                    <div className='spart pl-2.5 pt-0.5'>
                                        <div className='pi w-32 text-sm'>Alejandrin Crist</div>
                                        <div className='pi w-32 text-xs pt-1 text-clii whitespace-nowrap'>Earum hic quas nam ..</div>
                                    </div>
                                </div>
                                <div className='tpart pt-1 relative'>
                                    <div className='time text-xs whitespace-nowrap text-cliv'>12:27 am</div>
                                    {status(5)}
                                </div>
                            </div>
                        </li>
                        <li className='pr-3 pb-1'>
                            <div className='box flex flex-row justify-between py-2 pl-3 pr-2 rounded-md hover:bg-cliii ease-out duration-500 cursor-pointer'>
                                <div className='fpart flex'>
                                    <img className='w-12 h-12 rounded-full' src={user}/>
                                    <div className='spart pl-2.5 pt-0.5'>
                                        <div className='pi w-32 text-sm'>Alejandrin Crist</div>
                                        <div className='pi w-32 text-xs pt-1 text-clii whitespace-nowrap'>Earum hic quas nam ..</div>
                                    </div>
                                </div>
                                <div className='tpart pt-1 relative'>
                                    <div className='time text-xs whitespace-nowrap text-cliv'>12:27 am</div>
                                    {status(5)}
                                </div>
                            </div>
                        </li>
                        <li className='pr-3 pb-1'>
                            <div className='box flex flex-row justify-between py-2 pl-3 pr-2 rounded-md hover:bg-cliii ease-out duration-500 cursor-pointer'>
                                <div className='fpart flex'>
                                    <img className='w-12 h-12 rounded-full' src={user}/>
                                    <div className='spart pl-2.5 pt-0.5'>
                                        <div className='pi w-32 text-sm'>Alejandrin Crist</div>
                                        <div className='pi w-32 text-xs pt-1 text-clii whitespace-nowrap'>Earum hic quas nam ..</div>
                                    </div>
                                </div>
                                <div className='tpart pt-1 relative'>
                                    <div className='time text-xs whitespace-nowrap text-cliv'>12:27 am</div>
                                    {status(5)}
                                </div>
                            </div>
                        </li>
                        <li className='pr-3 pb-1'>
                            <div className='box flex flex-row justify-between py-2 pl-3 pr-2 rounded-md hover:bg-cliii ease-out duration-500 cursor-pointer'>
                                <div className='fpart flex'>
                                    <img className='w-12 h-12 rounded-full' src={user}/>
                                    <div className='spart pl-2.5 pt-0.5'>
                                        <div className='pi w-32 text-sm'>Alejandrin Crist</div>
                                        <div className='pi w-32 text-xs pt-1 text-clii whitespace-nowrap'>Earum hic quas nam ..</div>
                                    </div>
                                </div>
                                <div className='tpart pt-1 relative'>
                                    <div className='time text-xs whitespace-nowrap text-cliv'>12:27 am</div>
                                    {status(5)}
                                </div>
                            </div>
                        </li>
                        <li className='pr-3 pb-1'>
                            <div className='box flex flex-row justify-between py-2 pl-3 pr-2 rounded-md hover:bg-cliii ease-out duration-500 cursor-pointer'>
                                <div className='fpart flex'>
                                    <img className='w-12 h-12 rounded-full' src={user}/>
                                    <div className='spart pl-2.5 pt-0.5'>
                                        <div className='pi w-32 text-sm'>Alejandrin Crist</div>
                                        <div className='pi w-32 text-xs pt-1 text-clii whitespace-nowrap'>Earum hic quas nam ..</div>
                                    </div>
                                </div>
                                <div className='tpart pt-1 relative'>
                                    <div className='time text-xs whitespace-nowrap text-cliv'>12:27 am</div>
                                    {status(5)}
                                </div>
                            </div>
                        </li>
                        <li className='pr-3 pb-1'>
                            <div className='box flex flex-row justify-between py-2 pl-3 pr-2 rounded-md hover:bg-cliii ease-out duration-500 cursor-pointer'>
                                <div className='fpart flex'>
                                    <img className='w-12 h-12 rounded-full' src={user}/>
                                    <div className='spart pl-2.5 pt-0.5'>
                                        <div className='pi w-32 text-sm'>Alejandrin Crist</div>
                                        <div className='pi w-32 text-xs pt-1 text-clii whitespace-nowrap'>Earum hic quas nam ..</div>
                                    </div>
                                </div>
                                <div className='tpart pt-1 relative'>
                                    <div className='time text-xs whitespace-nowrap text-cliv'>12:27 am</div>
                                    {status(5)}
                                </div>
                            </div>
                        </li>
                        <li className='pr-3 pb-1'>
                            <div className='box flex flex-row justify-between py-2 pl-3 pr-2 rounded-md hover:bg-cliii ease-out duration-500 cursor-pointer'>
                                <div className='fpart flex'>
                                    <img className='w-12 h-12 rounded-full' src={user}/>
                                    <div className='spart pl-2.5 pt-0.5'>
                                        <div className='pi w-32 text-sm'>Alejandrin Crist</div>
                                        <div className='pi w-32 text-xs pt-1 text-clii whitespace-nowrap'>Earum hic quas nam ..</div>
                                    </div>
                                </div>
                                <div className='tpart pt-1 relative'>
                                    <div className='time text-xs whitespace-nowrap text-cliv'>12:27 am</div>
                                    {status(5)}
                                </div>
                            </div>
                        </li>
                        <li className='pr-3 pb-1'>
                            <div className='box flex flex-row justify-between py-2 pl-3 pr-2 rounded-md hover:bg-cliii ease-out duration-500 cursor-pointer'>
                                <div className='fpart flex'>
                                    <img className='w-12 h-12 rounded-full' src={user}/>
                                    <div className='spart pl-2.5 pt-0.5'>
                                        <div className='pi w-32 text-sm'>Alejandrin Crist</div>
                                        <div className='pi w-32 text-xs pt-1 text-clii whitespace-nowrap'>Earum hic quas nam ..</div>
                                    </div>
                                </div>
                                <div className='tpart pt-1 relative'>
                                    <div className='time text-xs whitespace-nowrap text-cliv'>12:27 am</div>
                                    {status(5)}
                                </div>
                            </div>
                        </li>
                        <li className='pr-3 pb-1'>
                            <div className='box flex flex-row justify-between py-2 pl-3 pr-2 rounded-md hover:bg-cliii ease-out duration-500 cursor-pointer'>
                                <div className='fpart flex'>
                                    <img className='w-12 h-12 rounded-full' src={user}/>
                                    <div className='spart pl-2.5 pt-0.5'>
                                        <div className='pi w-32 text-sm'>Alejandrin Crist</div>
                                        <div className='pi w-32 text-xs pt-1 text-clii whitespace-nowrap'>Earum hic quas nam ..</div>
                                    </div>
                                </div>
                                <div className='tpart pt-1 relative'>
                                    <div className='time text-xs whitespace-nowrap text-cliv'>12:27 am</div>
                                    {status(5)}
                                </div>
                            </div>
                        </li>
                        <li className='pr-3 pb-1'>
                            <div className='box flex flex-row justify-between py-2 pl-3 pr-2 rounded-md hover:bg-cliii ease-out duration-500 cursor-pointer'>
                                <div className='fpart flex'>
                                    <img className='w-12 h-12 rounded-full' src={user}/>
                                    <div className='spart pl-2.5 pt-0.5'>
                                        <div className='pi w-32 text-sm'>Alejandrin Crist</div>
                                        <div className='pi w-32 text-xs pt-1 text-clii whitespace-nowrap'>Earum hic quas nam ..</div>
                                    </div>
                                </div>
                                <div className='tpart pt-1 relative'>
                                    <div className='time text-xs whitespace-nowrap text-cliv'>12:27 am</div>
                                    {status(5)}
                                </div>
                            </div>
                        </li>
                        <li className='pr-3 pb-1'>
                            <div className='box flex flex-row justify-between py-2 pl-3 pr-2 rounded-md hover:bg-cliii ease-out duration-500 cursor-pointer'>
                                <div className='fpart flex'>
                                    <img className='w-12 h-12 rounded-full' src={user}/>
                                    <div className='spart pl-2.5 pt-0.5'>
                                        <div className='pi w-32 text-sm'>Alejandrin Crist</div>
                                        <div className='pi w-32 text-xs pt-1 text-clii whitespace-nowrap'>Earum hic quas nam ..</div>
                                    </div>
                                </div>
                                <div className='tpart pt-1 relative'>
                                    <div className='time text-xs whitespace-nowrap text-cliv'>12:27 am</div>
                                    {status(5)}
                                </div>
                            </div>
                        </li>
                        <li className='pr-3 pb-1'>
                            <div className='box flex flex-row justify-between py-2 pl-3 pr-2 rounded-md hover:bg-cliii ease-out duration-500 cursor-pointer'>
                                <div className='fpart flex'>
                                    <img className='w-12 h-12 rounded-full' src={user}/>
                                    <div className='spart pl-2.5 pt-0.5'>
                                        <div className='pi w-32 text-sm'>Alejandrin Crist</div>
                                        <div className='pi w-32 text-xs pt-1 text-clii whitespace-nowrap'>Earum hic quas nam ..</div>
                                    </div>
                                </div>
                                <div className='tpart pt-1 relative'>
                                    <div className='time text-xs whitespace-nowrap text-cliv'>12:27 am</div>
                                    {status(5)}
                                </div>
                            </div>
                        </li>
                        <li className='pr-3 pb-1'>
                            <div className='box flex flex-row justify-between py-2 pl-3 pr-2 rounded-md hover:bg-cliii ease-out duration-500 cursor-pointer'>
                                <div className='fpart flex'>
                                    <img className='w-12 h-12 rounded-full' src={user}/>
                                    <div className='spart pl-2.5 pt-0.5'>
                                        <div className='pi w-32 text-sm'>Alejandrin Crist</div>
                                        <div className='pi w-32 text-xs pt-1 text-clii whitespace-nowrap'>Earum hic quas nam ..</div>
                                    </div>
                                </div>
                                <div className='tpart pt-1 relative'>
                                    <div className='time text-xs whitespace-nowrap text-cliv'>12:27 am</div>
                                    {status(5)}
                                </div>
                            </div>
                        </li>
                        <li className='pr-3 pb-1'>
                            <div className='box flex flex-row justify-between py-2 pl-3 pr-2 rounded-md hover:bg-cliii ease-out duration-500 cursor-pointer'>
                                <div className='fpart flex'>
                                    <img className='w-12 h-12 rounded-full' src={user}/>
                                    <div className='spart pl-2.5 pt-0.5'>
                                        <div className='pi w-32 text-sm'>Alejandrin Crist</div>
                                        <div className='pi w-32 text-xs pt-1 text-clii whitespace-nowrap'>Earum hic quas nam ..</div>
                                    </div>
                                </div>
                                <div className='tpart pt-1 relative'>
                                    <div className='time text-xs whitespace-nowrap text-cliv'>12:27 am</div>
                                    {status(5)}
                                </div>
                            </div>
                        </li>
                        <li className='pr-3 pb-1'>
                            <div className='box flex flex-row justify-between py-2 pl-3 pr-2 rounded-md hover:bg-cliii ease-out duration-500 cursor-pointer'>
                                <div className='fpart flex'>
                                    <img className='w-12 h-12 rounded-full' src={user}/>
                                    <div className='spart pl-2.5 pt-0.5'>
                                        <div className='pi w-32 text-sm'>Alejandrin Crist</div>
                                        <div className='pi w-32 text-xs pt-1 text-clii whitespace-nowrap'>Earum hic quas nam ..</div>
                                    </div>
                                </div>
                                <div className='tpart pt-1 relative'>
                                    <div className='time text-xs whitespace-nowrap text-cliv'>12:27 am</div>
                                    {status(5)}
                                </div>
                            </div>
                        </li>
                        <li className='pr-3 pb-1'>
                            <div className='box flex flex-row justify-between py-2 pl-3 pr-2 rounded-md hover:bg-cliii ease-out duration-500 cursor-pointer'>
                                <div className='fpart flex'>
                                    <img className='w-12 h-12 rounded-full' src={user}/>
                                    <div className='spart pl-2.5 pt-0.5'>
                                        <div className='pi w-32 text-sm'>Alejandrin Crist</div>
                                        <div className='pi w-32 text-xs pt-1 text-clii whitespace-nowrap'>Earum hic quas nam ..</div>
                                    </div>
                                </div>
                                <div className='tpart pt-1 relative'>
                                    <div className='time text-xs whitespace-nowrap text-cliv'>12:27 am</div>
                                    {status(5)}
                                </div>
                            </div>
                        </li>
                        <li className='pr-3 pb-1'>
                            <div className='box flex flex-row justify-between py-2 pl-3 pr-2 rounded-md hover:bg-cliii ease-out duration-500 cursor-pointer'>
                                <div className='fpart flex'>
                                    <img className='w-12 h-12 rounded-full' src={user}/>
                                    <div className='spart pl-2.5 pt-0.5'>
                                        <div className='pi w-32 text-sm'>Alejandrin Crist</div>
                                        <div className='pi w-32 text-xs pt-1 text-clii whitespace-nowrap'>Earum hic quas nam ..</div>
                                    </div>
                                </div>
                                <div className='tpart pt-1 relative'>
                                    <div className='time text-xs whitespace-nowrap text-cliv'>12:27 am</div>
                                    {status(5)}
                                </div>
                            </div>
                        </li>
                        <li className='pr-3 pb-1'>
                            <div className='box flex flex-row justify-between py-2 pl-3 pr-2 rounded-md hover:bg-cliii ease-out duration-500 cursor-pointer'>
                                <div className='fpart flex'>
                                    <img className='w-12 h-12 rounded-full' src={user}/>
                                    <div className='spart pl-2.5 pt-0.5'>
                                        <div className='pi w-32 text-sm'>Alejandrin Crist</div>
                                        <div className='pi w-32 text-xs pt-1 text-clii whitespace-nowrap'>Earum hic quas nam ..</div>
                                    </div>
                                </div>
                                <div className='tpart pt-1 relative'>
                                    <div className='time text-xs whitespace-nowrap text-cliv'>12:27 am</div>
                                    {status(5)}
                                </div>
                            </div>
                        </li>
                        <li className='pr-3 pb-1'>
                            <div className='box flex flex-row justify-between py-2 pl-3 pr-2 rounded-md hover:bg-cliii ease-out duration-500 cursor-pointer'>
                                <div className='fpart flex'>
                                    <img className='w-12 h-12 rounded-full' src={user}/>
                                    <div className='spart pl-2.5 pt-0.5'>
                                        <div className='pi w-32 text-sm'>Alejandrin Crist</div>
                                        <div className='pi w-32 text-xs pt-1 text-clii whitespace-nowrap'>Earum hic quas nam ..</div>
                                    </div>
                                </div>
                                <div className='tpart pt-1 relative'>
                                    <div className='time text-xs whitespace-nowrap text-cliv'>12:27 am</div>
                                    {status(5)}
                                </div>
                            </div>
                        </li>
                    </Scrollbars>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default MsgListBar
