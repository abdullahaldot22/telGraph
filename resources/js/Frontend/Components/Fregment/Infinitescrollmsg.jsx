import React, { useEffect, useRef, useState } from 'react'
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import InfiniteScroll from 'react-infinite-scroll-component';
// import Scroll from 'react-scroll';
// import { animateScroll } from 'react-scroll';

const Infinitescrollmsg = () => {

    const [array, setarray] = useState(Array.from({length:20}));
    const [has, sethas] = useState(true);
    const [barrow, setbarrow] = useState(false);
    // const bottomref = useRef(null);


    const fetchData = () => {
        if (array.length >= 80) {
            sethas(false);
        } else {
            setTimeout(() => {
                setarray(array.concat(Array.from({length:20})))
            }, 1500);
        }
    }

    // const scrollToBottom = () => {
    //     if (bottomref.current) {
    //         bottomref.current.scrollIntoView({ behavior:'smooth' });
    //     }
    // }
    // useEffect(() => {
    //     scrollToBottom()
    // }, [barrow]);



  return (
    <div className='w-full h-screen overflow-hidden'>
        <div id='scrollable' className='w-full h-full overflow-y-scroll flex flex-col-reverse'>

        <InfiniteScroll
            dataLength={array.length}
            next={fetchData}
            inverse={false}
            hasMore={has}
            endMessage={<h4 className='w-full text-center py-4'>No Message Found!</h4>}
            // loader={<h4 className='w-full text-center py-4'>Loading ...</h4>}
            style={{ display: 'flex', flexDirection: 'column', paddingBottom: '12rem' }}
            scrollableTarget="scrollable"
        >
            {/* {array.map((item, i) => {
                if (i == 0) {
                    return <div className='py-2 pl-3 border rounded-md my-2'>this is {i+1} no. message. <div className='hidden w-0 h-0' ref={bottomref}></div></div>
                } else {
                    return <div className='py-2 pl-3 border rounded-md my-2'>this is {i+1} no. message.</div>
                }
            })} */}

            <div className='w-max max-w-full py-2 px-2 bg-clv rounded-md my-2'>
                <div className='mention w-max max-w-full bg-cliv opacity-70 rounded-md px-2 py-1.5 text-clii mb-1 text-[12px]'>
                    <div className='pr-1 text-cli opacity-70 text-[10px]'>Alejandrin Crist</div>
                    <div>
                        mentioned message! are you sure  really funny but interesting to observe and just awesome. to know that you died a long time ago
                    </div>
                </div>
                <div className='message w-max max-w-full bg-clvi opacity-80 rounded-md px-2 py-1.5 text-sm text-cli'>found something really funny but interesting to observe and just awesome</div>
                <div className='others text-right text-[10px] pt-1 text-cliii pr-1'>
                    <div className='reaction'></div>
                    <div className='time'>08 : 24 pm</div>
                </div>
            </div>

        </InfiniteScroll>

        {/* <div className='Scroll'>
            <div className='absolute bottom-32 right-5'>
                    <div className='box text-xl bg-clv px-2 py-1.5 rounded-md cursor-pointer' onClick={() => setbarrow(!barrow)}>
                        <MdKeyboardDoubleArrowDown/>
                    </div>
            </div>
        </div> */}
    </div>
    </div>
  )
}

export default Infinitescrollmsg
