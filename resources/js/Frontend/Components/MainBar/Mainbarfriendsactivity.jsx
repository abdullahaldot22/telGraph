import React from 'react'
import Scrollbars from 'react-custom-scrollbars';
import pro from '../../../../../public/frontend/public/profilePicture/commentator.png'

const Mainbarfriendsactivity = () => {
    // console.log('found');
  return (
    <div className='w-full h-full min-w-[506px]'>
        <div className='h-full bg-cliv text-cli'>
        <Scrollbars autoHide style={{ width: 'auto', height: '100%' }}>
            <div className='parti'>
                <div className='bg-cliii px-6 py-4'>
                    Active Friends
                </div>
                <ul className='h-full w-full px-5 py-3'>

                    <li className='py-2 px-2 hover:bg-clv rounded-md cursor-pointer ease-in duration-300'>
                        <div className='fpart flex'>
                            <img className='w-7 h-7 rounded-full' src={pro}/>
                            <div className='spart pl-2.5 pt-1'>
                                <div className='pi w-32 text-sm'>Alejandrin Crist</div>
                            </div>
                        </div>
                    </li>

                    <li className='py-2 px-2 hover:bg-clv rounded-md cursor-pointer ease-in duration-300'>
                        <div className='fpart flex'>
                            <img className='w-7 h-7 rounded-full' src={pro}/>
                            <div className='spart pl-2.5 pt-1'>
                                <div className='pi w-32 text-sm'>Alejandrin Crist</div>
                            </div>
                        </div>
                    </li>

                    <li className='py-2 px-2 hover:bg-clv rounded-md cursor-pointer ease-in duration-300'>
                        <div className='fpart flex'>
                            <img className='w-7 h-7 rounded-full' src={pro}/>
                            <div className='spart pl-2.5 pt-1'>
                                <div className='pi w-32 text-sm'>Alejandrin Crist</div>
                            </div>
                        </div>
                    </li>

                    <li className='py-2 px-2 hover:bg-clv rounded-md cursor-pointer ease-in duration-300'>
                        <div className='fpart flex'>
                            <img className='w-7 h-7 rounded-full' src={pro}/>
                            <div className='spart pl-2.5 pt-1'>
                                <div className='pi w-32 text-sm'>Alejandrin Crist</div>
                            </div>
                        </div>
                    </li>

                </ul>
            </div>

            <div className='partii'>
                <div className='bg-cliii px-6 py-4'>
                    Invisible Friends
                </div>
                <ul className='h-full w-full px-5 py-3'>

                    <li className='py-2 px-2 hover:bg-clv rounded-md cursor-pointer ease-in duration-300'>
                        <div className='fpart flex'>
                            <img className='w-7 h-7 rounded-full' src={pro}/>
                            <div className='spart pl-2.5 pt-1'>
                                <div className='pi w-32 text-sm'>Alejandrin Crist</div>
                            </div>
                        </div>
                    </li>
                    <li className='py-2 px-2 hover:bg-clv rounded-md cursor-pointer ease-in duration-300'>
                        <div className='fpart flex'>
                            <img className='w-7 h-7 rounded-full' src={pro}/>
                            <div className='spart pl-2.5 pt-1'>
                                <div className='pi w-32 text-sm'>Alejandrin Crist</div>
                            </div>
                        </div>
                    </li>
                    <li className='py-2 px-2 hover:bg-clv rounded-md cursor-pointer ease-in duration-300'>
                        <div className='fpart flex'>
                            <img className='w-7 h-7 rounded-full' src={pro}/>
                            <div className='spart pl-2.5 pt-1'>
                                <div className='pi w-32 text-sm'>Alejandrin Crist</div>
                            </div>
                        </div>
                    </li>

                </ul>
            </div>
        </Scrollbars>
        </div>
    </div>
  )
}

export default Mainbarfriendsactivity

